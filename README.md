# Multiple Linear Regression - 50 Startups Dataset

> 🌐 **Web 線上展示系統 (GitHub Pages)**: [https://wupinlai.github.io/50_Startups-Dataset/](https://wupinlai.github.io/50_Startups-Dataset/)  
> 📊 **即時互動儀表板**：包含特徵選取雙圖表、即時利潤預算模擬器、完整 50 家新創企業資料庫探索器與迴歸統計假設檢定。

## Project Overview

This project applies **Multiple Linear Regression (MLR)** using Scikit-Learn to predict startup profit based on investment and operational expenses.

Dataset features:
- **R&D Spend**
- **Administration**
- **Marketing Spend**
- **State**
- **Profit** (Target)

The project follows the **CRISP-DM** methodology:
1. Business Understanding
2. Data Understanding
3. Data Preparation
4. Modeling
5. Evaluation
6. Deployment

Dataset source:
`https://gist.githubusercontent.com/GaneshSparkz/b5662effbdae8746f7f7d8ed70c42b2d/raw/50_Startups.csv`

---

# 1. Business Understanding

## Business Problem
A venture capital firm wants to understand:
- Which spending category contributes most to profit.
- Whether company location affects profitability.
- How accurately profit can be predicted for future investment decisions.

## Goal
Build a Multiple Linear Regression model with an end-to-end Scikit-Learn Pipeline to predict startup profit and provide actionable investment insights.

---

# 2. Data Understanding

## Features

| Variable | Type | Description |
|---|---|---|
| `R&D Spend` | Numerical | Research and Development Spending |
| `Administration` | Numerical | Administrative and operations cost |
| `Marketing Spend` | Numerical | Marketing and advertising budget |
| `State` | Categorical | Startup location (California, Florida, New York) |
| `Profit` | Numerical (Target) | Net profit earned by the startup |

## Dataset Shape
- Rows: `50`
- Columns: `5`

---

# 3. Data Preparation

## Feature Selection & Split
```python
X = df.drop("Profit", axis=1)
y = df["Profit"]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)
```

## Categorical Encoding
The `State` feature has three unique categories: `California`, `Florida`, and `New York`.
Using `OneHotEncoder(drop='first')`, `California` is treated as the reference/baseline:
- `State_Florida`
- `State_New York`

---

# 4. Modeling

## Mathematical Form
$$\text{Profit} = \beta_0 + \beta_1(\text{R\&D}) + \beta_2(\text{Admin}) + \beta_3(\text{Marketing}) + \beta_4(\text{State\_Florida}) + \beta_5(\text{State\_New York})$$

## Pipeline Architecture
```python
preprocessor = ColumnTransformer(
    transformers=[
        ("cat", OneHotEncoder(drop="first", sparse_output=False), ["State"])
    ],
    remainder="passthrough",
    verbose_feature_names_out=False
)

pipeline = Pipeline([
    ("preprocessor", preprocessor),
    ("regressor", LinearRegression())
])
```

---

# 5. Assumptions of Multiple Linear Regression

To validate whether OLS Linear Regression is theoretically valid, 5 core assumptions were evaluated:

1. **Linearity**:
   - Relationship between continuous predictors and target must be linear.
   - Evaluated using residual vs. fitted value plots and scatter plots.
2. **Normality of Residuals**:
   - Residuals $\epsilon_i \sim \mathcal{N}(0, \sigma^2)$.
   - Evaluated via Q-Q plot and Jarque-Bera / Omnibus test.
3. **Homoscedasticity (Constant Variance)**:
   - Residuals exhibit constant variance across fitted values.
   - Evaluated via residual vs. predicted scatter plots.
4. **Independence of Errors (No Autocorrelation)**:
   - Evaluated using the **Durbin-Watson statistic** (value around 1.28 - 2.0 indicates no critical autocorrelation).
5. **No Severe Multicollinearity**:
   - Assessed using **Variance Inflation Factor (VIF)**.
   - All features exhibit $\text{VIF} < 3.0$ (well below the threshold of 5-10), indicating multicollinearity is within acceptable limits:
     - `R&D Spend`: ~2.50
     - `Marketing Spend`: ~2.42
     - `Administration`: ~1.18
     - `State_Florida`: ~1.39
     - `State_New York`: ~1.34

---

# 6. Evaluation & Key Findings

### Model Metrics (Test Set, 20% holdout)
- **$R^2$**: `~0.8987` (Model explains ~90% of the variance in Profit on unseen startups)
- **RMSE**: `~$9,055`
- **MAE**: `~$6,961`

### Business Insights & Hypothesis Testing
1. **R&D Spend is the primary profit driver ($p < 0.001$, $\beta_1 \approx 0.806$)**:
   - For every $1 invested in R&D, profit increases by approximately **$0.81**, holding all other variables constant.
2. **Administration has no statistically significant effect ($p \approx 0.608$)**:
   - Higher administrative spending neither significantly increases nor decreases profit.
3. **Location (State) has no significant impact ($p > 0.90$)**:
   - Whether a startup operates in California, Florida, or New York does not systematically dictate profitability.

---

# 7. Deployment

A dedicated prediction pipeline ready for inference on new candidate startups:

```python
sample_startup = pd.DataFrame([{
    "R&D Spend": 160000.0,
    "Administration": 130000.0,
    "Marketing Spend": 300000.0,
    "State": "New York"
}])

predicted_profit = pipeline.predict(sample_startup)
```

---

# 8. GitHub Pages Web 呈現與佈署指南

本專案支援免後端之 GitHub Pages 靜態網頁直接呈現：

1. **推送程式碼至 GitHub**：
   ```bash
   git add .
   git commit -m "feat: complete interactive MLR studio & GitHub Pages deployment"
   git branch -M main
   git push -u origin main
   ```
2. **啟用 GitHub Pages**：
   - 前往 GitHub 倉庫：`https://github.com/wupinlai/50_Startups-Dataset/settings/pages`
   - **Source (來源)**：選擇 `Deploy from a branch`
   - **Branch (分支)**：選擇 `main`，目錄選擇 `/ (root)`，點擊 **Save**。
   - 或透過已建立之 `.github/workflows/deploy.yml` 自動觸發 GitHub Actions 佈署。
3. **線上瀏覽**：
   佈署完成後即可透過 [https://wupinlai.github.io/50_Startups-Dataset/](https://wupinlai.github.io/50_Startups-Dataset/) 線上體驗互動系統！

