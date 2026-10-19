# 機器學習多元線性迴歸研究室 (MLR Studio)
## HW 1: 50 Startups 利潤預測 & HW 2: Spotify Tracks 音樂流行度預測

> 🌐 **Web 線上展示系統 (GitHub Pages)**: [https://wupinlai.github.io/50_Startups-Dataset/](https://wupinlai.github.io/50_Startups-Dataset/)  
> 🔄 **作業雙模式切換**：系統上方提供專屬下拉選單（Dropdown Selector），可在 **HW 1: 50 Startups 利潤預測** 與 **HW 2: Spotify Tracks 音樂流行度預測** 之間即時無縫切換，包含特徵選取雙圖表、即時推論計算器、完整資料庫探索器與五大統計假設檢定。

---

## 專案架構概覽 (Overview)

本專案全面落實數據科學界標準方法論 **CRISP-DM (Cross-Industry Standard Process for Data Mining)**，同時涵蓋兩個不同領域的多元線性迴歸（Multiple Linear Regression, MLR）實務問題：

| 項目 | HW 1: 50 Startups Dataset | HW 2: Spotify Tracks Dataset |
|---|---|---|
| **核心問題** | 新創企業營運與各項支出對淨利潤之影響 | 聲學音訊特徵對歌曲流行度評分之影響 |
| **目標變數 ($y$)** | `Profit` (淨利潤，美元) | `popularity` (流行度評分，0~100) |
| **主要特徵 ($X$)** | R&D Spend, Administration, Marketing Spend, State | Danceability, Energy, Loudness, Valence, Tempo, Speechiness, Acousticness, Instrumentalness, Liveness, Explicit |
| **資料集規模** | 50 家新創企業（3 個州別） | 114,000 首曲目（114 種曲風） |
| **最佳模型選取** | 雙特徵模型 (R&D + Marketing, $k=2$) | 九特徵模型 (最低 RMSE, $k=9$) |
| **模型決定係數 ($R^2$)** | $R^2 \approx 0.9474$ (解釋力極高) | $R^2 \approx 0.0250$ (純聲學特徵具顯著性但受限於大眾流行隨機性) |
| **核心商業洞察** | 研發支出為獲利關鍵驅動力 ($\beta_1 \approx 0.81, p < 0.001$) | 舞曲度最具正向帶動力 ($\beta \approx +8.63$)；單靠旋律無法保證爆紅，行銷與歌手人氣至關重要 |

---

# HW 1: 50 Startups 利潤預測

### 1. 商業理解 (Business Understanding)
創投基金（VC）期望釐清：
- 各項預算支出（研發、行銷、營運管理）對企業淨利潤的邊際貢獻。
- 企業所在州別（加州、紐約州、佛州）是否造成系統性獲利差異。

### 2. 資料準備與逐步前向特徵選取 (Forward Feature Selection)
採用 80/20 訓練與測試分割（40 筆訓練，10 筆測試），以加州為基準進行 One-Hot 編碼：
1. $k=1$ (R&D): $\text{RMSE} = \$8,274.87, R^2 = 0.9465$
2. **$k=2$ (R&D + Marketing)**: **$\text{RMSE} = \$8,198.80, R^2 = 0.9474$（⭐ 最佳模型）**
3. $k=3$ (+ State_NY): $\text{RMSE} = \$8,309.06, R^2 = 0.9460$
4. $k=4$ (+ State_FL): $\text{RMSE} = \$8,409.92, R^2 = 0.9447$
5. $k=5$ (+ Administration): $\text{RMSE} = \$9,137.99, R^2 = 0.9347$

### 3. 最佳模型方程式
$$\text{Profit} = 46,346.34 + 0.7886 \times (\text{R\&D}) + 0.0326 \times (\text{Marketing})$$

---

# HW 2: Spotify Tracks 音樂流行度預測

### 1. 商業理解 (Business Understanding)
音樂唱片公司與串流平台需要評估：
- 歌曲在尚未投入大規模宣發預算前，其內在聲學音訊特徵是否具備爆紅潛力。
- 舞曲度、節奏速度、正向情緒等指標對聽眾串流播放量的邊際效應。

### 2. 資料準備與逐步前向特徵選取 (Forward Feature Selection)
採用 114,000 首曲目，80/20 嚴格分割（91,200 首訓練，22,800 首測試）：
1. $k=1$ (`instrumentalness`): $\text{RMSE} = 22.1203, R^2 = 0.0085$
2. $k=2$ (`+ valence`): $\text{RMSE} = 22.0683, R^2 = 0.0131$
3. $k=3$ (`+ danceability`): $\text{RMSE} = 22.0337, R^2 = 0.0162$
4. $k=4$ (`+ speechiness`): $\text{RMSE} = 21.9931, R^2 = 0.0198$
5. $k=5$ (`+ explicit`): $\text{RMSE} = 21.9739, R^2 = 0.0215$
6. $k=6$ (`+ tempo`): $\text{RMSE} = 21.9693, R^2 = 0.0219$
7. $k=7$ (`+ liveness`): $\text{RMSE} = 21.9672, R^2 = 0.0221$
8. $k=8$ (`+ loudness`): $\text{RMSE} = 21.9665, R^2 = 0.0222$
9. **$k=9$ (`+ energy`)**: **$\text{RMSE} = 21.9649, R^2 = 0.0223$（⭐ 最佳模型頂峰）**
10. $k=10$ (`+ acousticness`): $\text{RMSE} = 21.9671, R^2 = 0.0221$（誤差微幅上升）

### 3. 最佳模型方程式
$$\begin{aligned}
\text{Popularity} = 35.80 &+ 8.6340 \times (\text{Danceability}) - 2.9288 \times (\text{Energy}) + 0.1062 \times (\text{Loudness}) \\
&- 15.1019 \times (\text{Speechiness}) - 8.0758 \times (\text{Instrumentalness}) + 1.4785 \times (\text{Liveness}) \\
&- 9.4359 \times (\text{Valence}) + 0.0151 \times (\text{Tempo}) + 3.5980 \times (\text{Explicit})
\end{aligned}$$

---

# 統計假設驗證 (5 Regression Assumptions)

兩套模型均嚴格驗證 Gauss-Markov 條件：
1. **線性度 (Linearity)**：殘差 vs. 擬合值無非線性二維拋物線模式。
2. **常態性 (Normality)**：Normal Q-Q Plot 貼合對角線；HW2 具備大樣本中央極限定理（$N=91,200$）支撐。
3. **同質變異數 (Homoscedasticity)**：散佈方差均勻，無漏斗狀發散。
4. **誤差獨立性 (Independence)**：HW 1 之 $\text{DW} = 1.751$；**HW 2 之 $\text{DW} = 2.000$（精確達理論最佳值，零自相關）**。
5. **無嚴重多重共線性 (Multicollinearity)**：HW 1 各項特徵 $\text{VIF} < 2.7$；HW 2 各項特徵 $\text{VIF} < 4.3$，均遠低於臨界值 5~10。

---

# 程式碼與重現指南

### 執行 HW 1 分析管線
```bash
python run_pipeline.py
python generate_feature_selection_chart.py
```

### 執行 HW 2 分析管線
```bash
python HW2/run_pipeline_spotify.py
python HW2/generate_feature_selection_spotify.py
```

---

# GitHub Pages 線上發布步驟

1. **推送至 GitHub 倉庫**：
   ```bash
   git add .
   git commit -m "feat: complete HW2 Spotify regression & dropdown switcher"
   git push origin main
   ```
2. **啟用 GitHub Pages**：
   - 前往 GitHub 倉庫設定：[Settings -> Pages](https://github.com/wupinlai/50_Startups-Dataset/settings/pages)
   - **Source** 選擇：`Deploy from a branch`
   - **Branch** 選擇：`main`，資料夾選擇 `/(root)`，點擊 **Save**。
3. **線上瀏覽**：
   👉 [https://wupinlai.github.io/50_Startups-Dataset/](https://wupinlai.github.io/50_Startups-Dataset/)
