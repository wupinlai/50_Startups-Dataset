"""
Multiple Linear Regression on Spotify Tracks Dataset (Popularity Prediction)
Implements CRISP-DM methodology, pipeline modeling, assumption validation, evaluation, and deployment.
"""

import os
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score, mean_squared_error, mean_absolute_error
import statsmodels.api as sm
from statsmodels.stats.outliers_influence import variance_inflation_factor
import matplotlib.pyplot as plt
import scipy.stats as stats

def main():
    print("=" * 75)
    print(" SPOTIFY TRACKS - MULTIPLE LINEAR REGRESSION PIPELINE (POPULARITY)")
    print("=" * 75)

    # 1. Load Data
    csv_path = os.path.join(os.path.dirname(__file__), "spotify_dataset.csv")
    if not os.path.exists(csv_path):
        csv_path = "spotify_dataset.csv"
    if not os.path.exists(csv_path):
        raise FileNotFoundError(f"Dataset not found at {csv_path}")

    df = pd.read_csv(csv_path)
    print(f"\n[1] Data Loaded Successfully!")
    print(f"    Dataset Shape: {df.shape[0]:,} rows, {df.shape[1]} columns")

    # Audio features
    features = [
        'danceability', 'energy', 'loudness', 'speechiness',
        'acousticness', 'instrumentalness', 'liveness', 'valence',
        'tempo', 'explicit'
    ]

    df_clean = df.dropna(subset=features + ['popularity']).copy()
    df_clean['explicit'] = df_clean['explicit'].astype(float)

    X = df_clean[features]
    y = df_clean['popularity']

    # 2. Train/Test Split (80/20)
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42
    )
    print(f"\n[2] Data Preparation & Split:")
    print(f"    Training set size : {len(X_train):,} tracks (80%)")
    print(f"    Testing set size  : {len(X_test):,} tracks (20%)")
    print(f"    Feature columns   : {features}")

    # 3. Model Training
    pipeline = Pipeline([
        ("regressor", LinearRegression())
    ])
    pipeline.fit(X_train, y_train)

    reg = pipeline.named_steps["regressor"]
    intercept = reg.intercept_
    coefficients = reg.coef_

    print(f"\n[3] Model Training Complete!")
    print(f"    Intercept (beta_0): {intercept:.4f}")
    print("    Coefficients (betas):")
    for feat, coef in zip(features, coefficients):
        print(f"      - {feat:18s}: {coef:10.4f}")

    # 4. Statistical OLS Summary & Regression Assumptions (Statsmodels)
    X_train_sm = sm.add_constant(X_train)
    ols_model = sm.OLS(y_train, X_train_sm).fit()

    print("\n[4] Statistical OLS Model Summary:")
    print(ols_model.summary())

    # Multicollinearity Check: Variance Inflation Factor (VIF)
    print("\n[5] Assumption Validation - Multicollinearity (VIF):")
    vif_data = pd.DataFrame()
    vif_data["Feature"] = features
    vif_data["VIF"] = [
        variance_inflation_factor(X_train.values, i)
        for i in range(X_train.shape[1])
    ]
    for _, row in vif_data.iterrows():
        print(f"    {row['Feature']:18s} VIF: {row['VIF']:.2f}")

    # 5. Model Evaluation on Unseen Test Data
    y_pred = pipeline.predict(X_test)
    r2 = r2_score(y_test, y_pred)
    rmse = np.sqrt(mean_squared_error(y_test, y_pred))
    mae = mean_absolute_error(y_test, y_pred)

    print("\n[6] Evaluation Metrics (Test Set - 20% holdout):")
    print(f"    R^2 Score : {r2:.6f} ({r2*100:.2f}% variance explained)")
    print(f"    RMSE      : {rmse:.4f} score points")
    print(f"    MAE       : {mae:.4f} score points")

    # 6. Sample Deployment Inference
    print("\n[7] Deployment Inference on Sample Tracks:")
    sample_track = pd.DataFrame([{
        "danceability": 0.75,
        "energy": 0.80,
        "loudness": -5.5,
        "speechiness": 0.08,
        "acousticness": 0.12,
        "instrumentalness": 0.00,
        "liveness": 0.15,
        "valence": 0.65,
        "tempo": 125.0,
        "explicit": 1.0
    }])
    sample_pred = pipeline.predict(sample_track)[0]
    print(f"    Input Track: Dance=0.75, Energy=0.80, Loudness=-5.5dB, Tempo=125BPM, Explicit=Yes")
    print(f"    Predicted Spotify Popularity: {sample_pred:.2f} / 100")

    # 7. Generate Diagnostic Plots
    try:
        fig, axes = plt.subplots(1, 3, figsize=(18, 5), dpi=300)

        # Subsample for clear visualization
        subsample_idx = np.random.RandomState(42).choice(len(X_train), size=3000, replace=False)
        sub_X_train = X_train.iloc[subsample_idx]
        sub_y_train = y_train.iloc[subsample_idx]

        train_preds = pipeline.predict(sub_X_train)
        residuals = sub_y_train - train_preds

        # (a) Residuals vs Fitted
        axes[0].scatter(train_preds, residuals, alpha=0.3, color="#6366f1", edgecolors="none", s=20)
        axes[0].axhline(0, color="red", linestyle="--", linewidth=1.5)
        axes[0].set_title("Residuals vs. Fitted (Homoscedasticity & Linearity)", fontsize=11, fontweight="bold")
        axes[0].set_xlabel("Fitted Popularity Score (0-100)", fontsize=10)
        axes[0].set_ylabel("Residuals (Actual - Fitted)", fontsize=10)
        axes[0].grid(True, linestyle=":", alpha=0.6)

        # (b) Normal Q-Q Plot
        stats.probplot(residuals, dist="norm", plot=axes[1])
        axes[1].get_lines()[0].set_color("#6366f1")
        axes[1].get_lines()[0].set_markersize(4)
        axes[1].get_lines()[1].set_color("red")
        axes[1].set_title("Normal Q-Q Plot (Residual Normality)", fontsize=11, fontweight="bold")
        axes[1].set_xlabel("Theoretical Quantiles", fontsize=10)
        axes[1].set_ylabel("Standardized Residuals", fontsize=10)
        axes[1].grid(True, linestyle=":", alpha=0.6)

        # (c) Actual vs Predicted (Test Subsample)
        test_sub_idx = np.random.RandomState(42).choice(len(X_test), size=1500, replace=False)
        sub_y_test = y_test.iloc[test_sub_idx]
        sub_y_pred = y_pred[test_sub_idx]

        axes[2].scatter(sub_y_test, sub_y_pred, alpha=0.35, color="#10b981", edgecolors="none", s=25)
        min_v = 0
        max_v = 100
        axes[2].plot([min_v, max_v], [min_v, max_v], color="red", linestyle="--", linewidth=1.5)
        axes[2].set_title("Actual vs. Predicted Popularity (Test Set)", fontsize=11, fontweight="bold")
        axes[2].set_xlabel("Actual Spotify Popularity", fontsize=10)
        axes[2].set_ylabel("Predicted Popularity", fontsize=10)
        axes[2].set_xlim(0, 100)
        axes[2].set_ylim(0, 70)
        axes[2].grid(True, linestyle=":", alpha=0.6)

        plt.tight_layout()
        plot_path_hw2 = os.path.join(os.path.dirname(__file__), "spotify_regression_diagnostic_plots.png")
        plot_path_root = "spotify_regression_diagnostic_plots.png"
        plt.savefig(plot_path_hw2, dpi=300)
        plt.savefig(plot_path_root, dpi=300)
        plt.close()
        print(f"\n[8] Diagnostic Plots saved to {plot_path_hw2} and {plot_path_root}")
    except Exception as e:
        print(f"Warning: Plot generation failed: {e}")

    print("\n" + "=" * 75)
    print(" EXECUTION COMPLETED SUCCESSFULLY")
    print("=" * 75)

if __name__ == "__main__":
    main()
