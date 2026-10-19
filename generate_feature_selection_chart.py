"""
Stepwise / Forward Feature Selection Analysis & Chart Generator
Replicates RMSE and R-squared evaluation by feature subsets on 50 Startups dataset.
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
    csv_path = "50_Startups.csv"
    if not os.path.exists(csv_path):
        raise FileNotFoundError(f"Could not find {csv_path}")

    df = pd.read_csv(csv_path)

    # 2. One-hot encode State (California as reference baseline)
    df_encoded = pd.get_dummies(df, columns=["State"], drop_first=True, dtype=float)

    X = df_encoded.drop("Profit", axis=1)
    y = df_encoded["Profit"]

    # 3. Train/Test Split (test_size=0.2, random_state=0)
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=0
    )

    # 4. Forward Selection Loop
    candidates = list(X.columns)
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
            "Selected Features": f"[{', '.join(selected_features)}]",
            "RMSE": best_rmse,
            "R-squared": best_r2
        })

    results_df = pd.DataFrame(results)
    print("\n" + "=" * 80)
    print(" FEATURE SELECTION RESULTS TABLE")
    print("=" * 80)
    print(results_df.to_string(index=False))

    # 5. Plotting (reproducing the exact dual-plot and clean table)
    features_count = results_df["Number of Features"].tolist()
    rmse_values = results_df["RMSE"].tolist()
    r2_values = results_df["R-squared"].tolist()

    fig = plt.figure(figsize=(11.5, 8.5), dpi=300)
    gs = gridspec.GridSpec(2, 2, height_ratios=[1.5, 0.9], hspace=0.35, wspace=0.22)

    # (a) Left plot: RMSE by Number of Features
    ax1 = fig.add_subplot(gs[0, 0])
    ax1.plot(features_count, rmse_values, marker="o", markersize=5, linewidth=1.5, color="#1f77b4")
    ax1.set_title("RMSE by Number of Features", fontsize=11, pad=8)
    ax1.set_xlabel("Number of Features", fontsize=9.5)
    ax1.set_ylabel("RMSE", fontsize=9.5)
    ax1.set_xticks(np.arange(1.0, 5.5, 0.5))
    ax1.set_ylim(8150, 9200)
    ax1.set_yticks([8200, 8400, 8600, 8800, 9000])
    ax1.tick_params(labelsize=8.5)

    # (b) Right plot: R-squared
    ax2 = fig.add_subplot(gs[0, 1])
    ax2.plot(features_count, r2_values, marker="o", markersize=5, linewidth=1.5, color="#1f77b4")
    ax2.set_xlabel("Number of Features", fontsize=9.5)
    ax2.set_ylabel("R-squared", fontsize=9.5)
    ax2.set_xticks(np.arange(1.0, 5.5, 0.5))
    ax2.set_ylim(0.934, 0.949)
    ax2.set_yticks([0.936, 0.938, 0.940, 0.942, 0.944, 0.946, 0.948])
    ax2.tick_params(labelsize=8.5)

    # (c) Clean Data Table underneath
    ax_table = fig.add_subplot(gs[1, :])
    ax_table.axis("off")

    table_data = [
        [
            str(row["Number of Features"]),
            row["Selected Features"],
            f"{row['RMSE']:.6f}",
            f"{row['R-squared']:.6f}"
        ]
        for _, row in results_df.iterrows()
    ]

    col_labels = ["Number of Features", "Selected Features", "RMSE", "R-squared"]
    col_widths = [0.16, 0.58, 0.13, 0.13]

    table = ax_table.table(
        cellText=table_data,
        colLabels=col_labels,
        colWidths=col_widths,
        loc="center",
        cellLoc="left"
    )
    table.auto_set_font_size(False)
    table.set_fontsize(8.5)
    table.scale(1, 1.6)

    # Apply modern table border styling
    for (row, col), cell in table.get_celld().items():
        cell.set_edgecolor("#e5e7eb")
        cell.set_linewidth(0.8)
        if row == 0:
            cell.set_text_props(weight="bold", color="#111827")
            cell.set_facecolor("#ffffff")
            cell.set_linewidth(1.0)
            if col in [2, 3]:
                cell.set_text_props(weight="bold", ha="right")
        else:
            if col in [2, 3]:
                cell.set_text_props(ha="right")
            if col == 0:
                cell.set_text_props(ha="left")
            cell.set_facecolor("#ffffff")

    output_img = "feature_selection_chart.png"
    plt.savefig(output_img, bbox_inches="tight", dpi=300)
    plt.close()
    print(f"\n[+] Chart successfully exported to: {output_img}")

if __name__ == "__main__":
    run_forward_selection()
