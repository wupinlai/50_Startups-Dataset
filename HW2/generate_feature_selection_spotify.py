"""
Stepwise / Forward Feature Selection Analysis & Chart Generator for Spotify Tracks Dataset
Evaluates RMSE and R-squared progression across feature subsets on Spotify Popularity.
"""

import os
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import matplotlib.gridspec as gridspec
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

def run_forward_selection():
    # 1. Load Data
    csv_path = os.path.join(os.path.dirname(__file__), "spotify_dataset.csv")
    if not os.path.exists(csv_path):
        csv_path = "spotify_dataset.csv"
    if not os.path.exists(csv_path):
        raise FileNotFoundError(f"Could not find {csv_path}")

    df = pd.read_csv(csv_path)

    features = [
        'danceability', 'energy', 'loudness', 'speechiness',
        'acousticness', 'instrumentalness', 'liveness', 'valence',
        'tempo', 'explicit'
    ]

    df_clean = df.dropna(subset=features + ['popularity']).copy()
    df_clean['explicit'] = df_clean['explicit'].astype(float)

    X = df_clean[features]
    y = df_clean['popularity']

    # 2. Train/Test Split (80/20, random_state=42)
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42
    )

    # 3. Forward Selection Loop
    candidates = list(features)
    selected_features = []
    results = []

    for k in range(1, len(candidates) + 1):
        best_rmse = float("inf")
        best_feat = None
        best_r2 = None

        for feat in candidates:
            if feat in selected_features:
                continue
            trial_features = selected_features + [feat]
            model = LinearRegression().fit(X_train[trial_features], y_train)
            pred = model.predict(X_test[trial_features])
            rmse = np.sqrt(mean_squared_error(y_test, pred))
            r2 = r2_score(y_test, pred)

            if rmse < best_rmse:
                best_rmse = rmse
                best_r2 = r2
                best_feat = feat

        selected_features.append(best_feat)
        results.append({
            "Number of Features": k,
            "Added Feature": best_feat,
            "Selected Features": f"[{', '.join(selected_features)}]",
            "RMSE": round(best_rmse, 4),
            "R-squared": round(best_r2, 6)
        })

    results_df = pd.DataFrame(results)
    print("\n" + "=" * 80)
    print(" SPOTIFY FORWARD FEATURE SELECTION RESULTS TABLE")
    print("=" * 80)
    print(results_df.to_string(index=False))

    # 4. Plotting Dual Plot
    features_count = results_df["Number of Features"].tolist()
    rmse_values = results_df["RMSE"].tolist()
    r2_values = results_df["R-squared"].tolist()

    fig = plt.figure(figsize=(12, 8.5), dpi=300)
    gs = gridspec.GridSpec(2, 2, height_ratios=[1.4, 1.0], hspace=0.38, wspace=0.25)

    # (a) Left plot: RMSE by Number of Features
    ax1 = fig.add_subplot(gs[0, 0])
    ax1.plot(features_count, rmse_values, marker="o", markersize=6, linewidth=2, color="#6366f1")
    best_k = 9
    ax1.plot(best_k, rmse_values[best_k - 1], marker="*", markersize=14, color="#ef4444", label=f"Best Model (k={best_k})")
    ax1.set_title("Spotify: RMSE by Number of Features", fontsize=12, fontweight="bold", pad=10)
    ax1.set_xlabel("Number of Audio Features (k)", fontsize=10)
    ax1.set_ylabel("Root Mean Squared Error (RMSE)", fontsize=10)
    ax1.set_xticks(np.arange(1, len(features) + 1, 1))
    ax1.grid(True, linestyle=":", alpha=0.6)
    ax1.legend(loc="upper right", fontsize=9)

    # (b) Right plot: R-squared
    ax2 = fig.add_subplot(gs[0, 1])
    ax2.plot(features_count, r2_values, marker="s", markersize=6, linewidth=2, color="#10b981")
    ax2.plot(best_k, r2_values[best_k - 1], marker="*", markersize=14, color="#ef4444", label=f"Peak R² (k={best_k})")
    ax2.set_title("Spotify: R-squared by Number of Features", fontsize=12, fontweight="bold", pad=10)
    ax2.set_xlabel("Number of Audio Features (k)", fontsize=10)
    ax2.set_ylabel("R-squared (R²)", fontsize=10)
    ax2.set_xticks(np.arange(1, len(features) + 1, 1))
    ax2.grid(True, linestyle=":", alpha=0.6)
    ax2.legend(loc="lower right", fontsize=9)

    # (c) Table at Bottom
    ax3 = fig.add_subplot(gs[1, :])
    ax3.axis("off")

    table_data = []
    for r in results:
        table_data.append([
            r["Number of Features"],
            r["Added Feature"],
            f"{r['RMSE']:.4f}",
            f"{r['R-squared']:.6f}"
        ])

    table = ax3.table(
        cellText=table_data,
        colLabels=["Number of Features", "Newly Added Feature", "RMSE", "R-squared"],
        loc="center",
        cellLoc="center"
    )
    table.auto_set_font_size(False)
    table.set_fontsize(9)
    table.scale(1.0, 1.4)

    # Highlight best row (row index 9 is k=9, header is 0)
    for col in range(4):
        table[(9, col)].set_facecolor("#e0e7ff")

    chart_hw2 = os.path.join(os.path.dirname(__file__), "spotify_feature_selection_chart.png")
    chart_root = "spotify_feature_selection_chart.png"
    plt.savefig(chart_hw2, dpi=300, bbox_inches="tight")
    plt.savefig(chart_root, dpi=300, bbox_inches="tight")
    plt.close()
    print(f"\nCharts saved to {chart_hw2} and {chart_root}")

if __name__ == "__main__":
    run_forward_selection()
