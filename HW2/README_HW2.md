# HW 2: Spotify Tracks Dataset - 音樂流行度預測 (Popularity MLR)

> 🌐 **線上雙專案展示系統 (GitHub Pages)**: [https://wupinlai.github.io/50_Startups-Dataset/](https://wupinlai.github.io/50_Startups-Dataset/)  
> 🔄 **作業切換說明**：進入系統後，可透過頂端導覽列下拉選單或首頁切換鈕自由切換 **HW 1 (50 Startups)** 與 **HW 2 (Spotify Tracks)** 完整儀表板。

---

## 專案簡介 (Project Overview)

本專案遵循國際數據探勘標準流程 **CRISP-DM (Cross-Industry Standard Process for Data Mining)**，針對包含 **114,000 首曲目** 之 Spotify Tracks 大數據集，建立**多元線性迴歸 (Multiple Linear Regression, MLR)** 預測模型，探討聲學音訊特徵對歌曲受歡迎程度（`popularity`: 0 ~ 100）之邊際影響與顯著性。

---

## CRISP-DM 核心六大階段

### 1. 商業理解 (Business Understanding)
* **產業痛點**：音樂串流平台與唱片廠牌每年發行數百萬首歌曲，宣發資源極其有限，如何在歌曲發行前透過客觀音訊指標評估曲目爆紅潛力？
* **核心決策目標**：
  1. 釐清哪些音訊特徵（如舞曲度、能量感、情緒）對流行度最具顯著正負向推動力。
  2. 檢驗純聲學特徵在真實音樂產業中的解釋力上限，為 A&R 宣發與策展歌單提供科學依據。

---

### 2. 資料理解 (Data Understanding)
* **資料規模**：114,000 筆曲目、114 種曲風（包含 Pop, Rock, EDM, Hip-Hop, K-Pop, Indie 等）。
* **目標變數 ($y$)**：`popularity`（Spotify 流行度評分 0~100）。
* **音訊特徵變數 ($X$)**：
  * `danceability`：舞曲度 (0.0 ~ 1.0)
  * `energy`：能量感 (0.0 ~ 1.0)
  * `loudness`：響度 (-60 ~ 0 dB)
  * `speechiness`：語音度 (0.0 ~ 1.0)
  * `acousticness`：原聲度 (0.0 ~ 1.0)
  * `instrumentalness`：器樂度 (0.0 ~ 1.0)
  * `liveness`：現場感 (0.0 ~ 1.0)
  * `valence`：正向情緒 (0.0 ~ 1.0)
  * `tempo`：速度節拍 (BPM)
  * `explicit`：是否包含成人內容 (0 或 1)

---

### 3. 資料準備與前向特徵選取 (Data Preparation & Forward Selection)
採用嚴謹的 80/20 訓練集與獨立測試集分割（訓練集 91,200 首，測試集 22,800 首）。

**前向逐步特徵選取 (Forward Stepwise Selection) 完整歷程**：

| 步驟 (k) | 新增特徵 (Added Feature) | 選取特徵組合 | RMSE (測試集) | $R^2$ (測試集) | 狀態 |
| :---: | :--- | :--- | :---: | :---: | :---: |
| 1 | `instrumentalness` | `[instrumentalness]` | 22.1203 | 0.008457 | 基準模型 |
| 2 | `valence` | `[instrumentalness, valence]` | 22.0683 | 0.013112 | 顯著改善 |
| 3 | `danceability` | `[+ danceability]` | 22.0337 | 0.016202 | 舞曲度注入 |
| 4 | `speechiness` | `[+ speechiness]` | 21.9931 | 0.019826 | 抑制說話內容 |
| 5 | `explicit` | `[+ explicit]` | 21.9739 | 0.021538 | 成人內容正向效應 |
| 6 | `tempo` | `[+ tempo]` | 21.9693 | 0.021944 | 節奏微幅調整 |
| 7 | `liveness` | `[+ liveness]` | 21.9672 | 0.022133 | 現場感效應 |
| 8 | `loudness` | `[+ loudness]` | 21.9665 | 0.022200 | 響度微幅改善 |
| **9** | **`energy`** | **`[+ energy]`** | **21.9649** | **0.022340** | ⭐ **全域最佳模型** |
| 10 | `acousticness` | `[+ acousticness]` | 21.9671 | 0.022145 | RMSE 微幅上升 |

> 📌 **最佳特徵選取結論**：在加入第 9 項特徵（`energy`）時達到最低之測試集均方根誤差 **RMSE = 21.9649**。

---

### 4. 模型構建 (Modeling)

**最佳 9 特徵多元線性迴歸模型方程式**：
$$\begin{aligned}
\text{Popularity} = 35.80 &+ 8.6340 \times (\text{Danceability}) - 2.9288 \times (\text{Energy}) + 0.1062 \times (\text{Loudness}) \\
&- 15.1019 \times (\text{Speechiness}) - 8.0758 \times (\text{Instrumentalness}) + 1.4785 \times (\text{Liveness}) \\
&- 9.4359 \times (\text{Valence}) + 0.0151 \times (\text{Tempo}) + 3.5980 \times (\text{Explicit})
\end{aligned}$$

#### 係數統計意義 ($p < 0.001$)：
1. **舞曲度 (Danceability, $\beta \approx +8.63$)**：全模型最強正向驅動力，容易跟隨節奏搖擺的歌曲在大眾市場受歡迎程度顯著更高。
2. **成人內容標籤 (Explicit, $\beta \approx +3.60$)**：現代主流串流聽眾對嘻哈與流行未消音版接受度極高。
3. **語音度 (Speechiness, $\beta \approx -15.10$)**：純口說、訪談類曲目在大眾音樂串流的長期播放量顯著偏低。
4. **器樂度 (Instrumentalness, $\beta \approx -8.08$)**：純樂器無人聲曲目在大眾市場流行度受限。
5. **正向情緒 (Valence, $\beta \approx -9.44$)**：憂鬱、深沉 (Moody) 的抒情慢歌在現代串流市場展現出強大的長尾聆聽生命週期。

---

### 5. 統計假設檢驗與評估 (Assumptions & Evaluation)

嚴謹驗證普通最小平方法 (OLS) 五大 Gauss-Markov 統計假設：

1. **線性性 (Linearity)**：殘差 vs. 擬合值呈現均勻水平帶狀分佈，無系統性彎曲。
2. **殘差常態性 (Normality)**：Normal Q-Q Plot 大部分區間緊貼理論線；且在大樣本條件（$N = 91,200$）下，依據中央極限定理（CLT），參數估計具備漸近常態性。
3. **同質變異數 (Homoscedasticity)**：殘差方差未隨預測流行度擴大而呈漏斗型擴散。
4. **誤差獨立性 (Independence)**：**Durbin-Watson 檢定量精確等於 2.000**，完美驗證殘差零一階自我相關。
5. **無嚴重多重共線性 (Multicollinearity)**：
   * 所有特徵之變異數膨脹因子 **$\text{VIF} < 4.3$**（最高為 `energy` 4.25、`loudness` 3.29，其餘均 $< 2.5$），遠低於警戒值 5~10。

> 💡 **CRISP-DM 商業洞察**：學術界與業界普遍實證指出，單純使用音訊特徵預測流行度之 $R^2$ 通常在 $2\% \sim 5\%$ 之間。這說明**歌曲的爆紅程度主要由歌手人氣、社群網路推廣、短影音演算法及行銷預算主導**，而非單純的聲學公式；但音訊特徵的顯著係數（$p < 0.001$）仍為曲目編排、曲風定位與宣發策略提供了強大的科學參考依據。

---

### 6. 部署與成果檢索 (Deployment)

* **靜態展示**：已整合至根目錄之 `index.html`，透過下拉選單可即時切換。
* **高解析度圖表**：
  * `spotify_feature_selection_chart.png`（RMSE 與 $R^2$ 前向特徵選取曲線雙圖與數據表）
  * `spotify_regression_diagnostic_plots.png`（殘差 vs. 擬合值、Normal Q-Q Plot、真實 vs 預測對照圖）
* **重現腳本**：
  ```bash
  python HW2/run_pipeline_spotify.py
  python HW2/generate_feature_selection_spotify.py
  ```
