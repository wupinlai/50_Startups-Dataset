"""
Multiple Linear Regression on 50 Startups Dataset
Implements CRISP-DM methodology, pipeline modeling, assumption validation, evaluation, and deployment.
"""

import os
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score, mean_squared_error, mean_absolute_error
import statsmodels.api as sm
from statsmodels.stats.outliers_influence import variance_inflation_factor
import matplotlib.pyplot as plt
import scipy.stats as stats

def main():
    print("=" * 70)
    print(" 50 STARTUPS - MULTIPLE LINEAR REGRESSION PIPELINE")
    print("=" * 70)

    # 1. Load Data
    csv_path = "50_Startups.csv"
    if not os.path.exists(csv_path):
        raise FileNotFoundError(f"Dataset not found at {csv_path}")

    df = pd.read_csv(csv_path)
    print(f"\n[1] Data Loaded Successfully!")
    print(f"    Dataset Shape: {df.shape[0]} rows, {df.shape[1]} columns")
    print("\nFirst 5 records:")
    print(df.head())

    # 2. Data Preparation & Train/Test Split
    X = df.drop("Profit", axis=1)
    y = df["Profit"]

    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42
    )
    print(f"\n[2] Data Preparation:")
    print(f"    Training set size: {len(X_train)} samples")
    print(f"    Testing set size : {len(X_test)} samples")
    print(f"    Unique States    : {list(df['State'].unique())}")

    # 3. Scikit-Learn Pipeline Setup & Modeling
    # Using OneHotEncoder(drop='first') where California is baseline
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

    pipeline.fit(X_train, y_train)

    feature_names = pipeline.named_steps["preprocessor"].get_feature_names_out()
    coefficients = pipeline.named_steps["regressor"].coef_
    intercept = pipeline.named_steps["regressor"].intercept_

    print("\n[3] Model Training Complete!")
    print(f"    Intercept (beta_0): ${intercept:,.2f}")
    print("    Coefficients:")
    for feat, coef in zip(feature_names, coefficients):
        print(f"      - {feat:16s}: {coef:12.4f}")

    # 4. Statistical OLS Summary & Regression Assumptions (Statsmodels)
    X_train_encoded = pipeline.named_steps["preprocessor"].transform(X_train)
    X_train_encoded_df = pd.DataFrame(X_train_encoded, columns=feature_names, index=X_train.index)
    X_sm = sm.add_constant(X_train_encoded_df)
    ols_model = sm.OLS(y_train, X_sm).fit()

    print("\n[4] Statistical OLS Model Summary:")
    print(ols_model.summary())

    # Multicollinearity Check: Variance Inflation Factor (VIF)
    # VIF on continuous predictors and encoded dummies
    print("\n[5] Assumption Validation - Multicollinearity (VIF):")
    vif_data = pd.DataFrame()
    vif_data["Feature"] = feature_names
    vif_data["VIF"] = [
        variance_inflation_factor(X_train_encoded, i)
        for i in range(X_train_encoded.shape[1])
    ]
    for _, row in vif_data.iterrows():
        print(f"    {row['Feature']:16s} VIF: {row['VIF']:.2f}")

    # 5. Model Evaluation on Unseen Test Data
    y_pred = pipeline.predict(X_test)
    r2 = r2_score(y_test, y_pred)
    rmse = np.sqrt(mean_squared_error(y_test, y_pred))
    mae = mean_absolute_error(y_test, y_pred)

    print("\n[6] Evaluation Metrics (Test Set - 20% holdout):")
    print(f"    R^2 Score : {r2:.4f} ({r2*100:.2f}% variance explained)")
    print(f"    RMSE      : ${rmse:,.2f}")
    print(f"    MAE       : ${mae:,.2f}")

    print("\nActual vs Predicted on Test Set:")
    comparison_df = pd.DataFrame({
        "Actual Profit": y_test.values,
        "Predicted Profit": y_pred,
        "Error ($)": y_test.values - y_pred
    })
    print(comparison_df.round(2).to_string(index=False))

    # 6. Deployment / Sample Inference
    print("\n[7] Deployment Inference:")
    sample_startup = pd.DataFrame([{
        "R&D Spend": 160000.0,
        "Administration": 130000.0,
        "Marketing Spend": 300000.0,
        "State": "New York"
    }])
    sample_pred = pipeline.predict(sample_startup)[0]
    print(f"    Input Startup: R&D=$160k, Admin=$130k, Mktg=$300k, State=New York")
    print(f"    Predicted Profit: ${sample_pred:,.2f}")

    # 7. Generate Diagnostic Plots
    try:
        fig, axes = plt.subplots(1, 3, figsize=(18, 5))

        # (a) Residuals vs Fitted
        train_preds = pipeline.predict(X_train)
        residuals = y_train - train_preds
        axes[0].scatter(train_preds, residuals, alpha=0.7, color="#2563eb", edgecolors="k")
        axes[0].axhline(0, color="red", linestyle="--", linewidth=1.5)
        axes[0].set_title("Residuals vs. Fitted (Homoscedasticity & Linearity)")
        axes[0].set_xlabel("Fitted Values ($)")
        axes[0].set_ylabel("Residuals ($)")
        axes[0].grid(True, linestyle=":", alpha=0.6)

        # (b) Normal Q-Q Plot
        stats.probplot(residuals, dist="norm", plot=axes[1])
        axes[1].get_lines()[0].set_color("#2563eb")
        axes[1].get_lines()[1].set_color("red")
        axes[1].set_title("Normal Q-Q Plot (Normality of Residuals)")
        axes[1].grid(True, linestyle=":", alpha=0.6)

        # (c) Actual vs Predicted (Test Set)
        axes[2].scatter(y_test, y_pred, alpha=0.8, color="#059669", edgecolors="k", s=60)
        min_val = min(y_test.min(), y_pred.min())
        max_val = max(y_test.max(), y_pred.max())
        axes[2].plot([min_val, max_val], [min_val, max_val], color="red", linestyle="--", linewidth=1.5)
        axes[2].set_title("Actual vs. Predicted (Test Set)")
        axes[2].set_xlabel("Actual Profit ($)")
        axes[2].set_ylabel("Predicted Profit ($)")
        axes[2].grid(True, linestyle=":", alpha=0.6)

        plt.tight_layout()
        plot_path = "regression_diagnostic_plots.png"
        plt.savefig(plot_path, dpi=300)
        plt.close()
        print(f"\n[8] Diagnostic Plots saved to {plot_path}")
    except Exception as e:
        print(f"Warning: Plot generation failed: {e}")

    print("\n" + "=" * 70)
    print(" EXECUTION COMPLETED SUCCESSFULLY")
    print("=" * 70)

if __name__ == "__main__":
    main()
