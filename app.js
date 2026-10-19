/**
 * 50 Startups MLR Interactive Application Logic
 * Supports GitHub Pages static hosting with zero backend requirements.
 */

// 1. Forward Feature Selection Benchmark Data
const FEATURE_SELECTION_DATA = [
    {
        num: 1,
        features: ["R&D Spend"],
        rmse: 8274.868018,
        r2: 0.946459,
        isBest: false,
        name: "單特徵模型 (R&D)",
        formula: "Profit = 46,975.86 + 0.8579 × (R&D)"
    },
    {
        num: 2,
        features: ["R&D Spend", "Marketing Spend"],
        rmse: 8198.797191,
        r2: 0.947439,
        isBest: true,
        name: "雙特徵最佳模型 (R&D + 行銷)",
        formula: "Profit = 46,346.34 + 0.7886 × (R&D) + 0.0326 × (Marketing)"
    },
    {
        num: 3,
        features: ["R&D Spend", "Marketing Spend", "State_New York"],
        rmse: 8309.059683,
        r2: 0.946015,
        isBest: false,
        name: "三特徵模型 (+ 紐約州)",
        formula: "Profit = 46,310.22 + 0.7891 × (R&D) + 0.0323 × (Marketing) + 215.42 × (State_NY)"
    },
    {
        num: 4,
        features: ["R&D Spend", "Marketing Spend", "State_New York", "State_Florida"],
        rmse: 8409.916714,
        r2: 0.944697,
        isBest: false,
        name: "四特徵模型 (+ 佛州)",
        formula: "Profit = 46,890.15 + 0.7865 × (R&D) + 0.0315 × (Marketing) + 180.20 × (State_NY) - 890.50 × (State_FL)"
    },
    {
        num: 5,
        features: ["R&D Spend", "Marketing Spend", "State_New York", "State_Florida", "Administration"],
        rmse: 9137.990153,
        r2: 0.934707,
        isBest: false,
        name: "五特徵全模型 (+ 行政支出)",
        formula: "Profit = 42,554.17 + 0.7735 × (R&D) + 0.0366 × (Marketing) + 699.37 × (State_NY) - 959.28 × (State_FL) + 0.0329 × (Admin)"
    }
];

// 2. Full 50 Startups Dataset Records
const STARTUPS_DATA = [
    { id: 1, rd: 165349.20, admin: 136897.80, mktg: 471784.10, state: "New York", profit: 192261.83 },
    { id: 2, rd: 162597.70, admin: 151377.59, mktg: 443898.53, state: "California", profit: 191792.06 },
    { id: 3, rd: 153441.51, admin: 101145.55, mktg: 407934.54, state: "Florida", profit: 191050.39 },
    { id: 4, rd: 144372.41, admin: 118671.85, mktg: 383199.62, state: "New York", profit: 182901.99 },
    { id: 5, rd: 142107.34, admin: 91391.77, mktg: 366168.42, state: "Florida", profit: 166187.94 },
    { id: 6, rd: 131876.90, admin: 99814.71, mktg: 362861.36, state: "New York", profit: 156991.12 },
    { id: 7, rd: 134615.46, admin: 147198.87, mktg: 127716.82, state: "California", profit: 156122.51 },
    { id: 8, rd: 130298.13, admin: 145530.06, mktg: 323876.68, state: "Florida", profit: 155752.60 },
    { id: 9, rd: 120542.52, admin: 148718.95, mktg: 311613.29, state: "New York", profit: 152211.77 },
    { id: 10, rd: 123334.88, admin: 108679.17, mktg: 304981.62, state: "California", profit: 149759.96 },
    { id: 11, rd: 101913.08, admin: 110594.11, mktg: 229160.95, state: "Florida", profit: 146121.95 },
    { id: 12, rd: 100671.96, admin: 91790.61, mktg: 249744.55, state: "California", profit: 144259.40 },
    { id: 13, rd: 93863.75, admin: 127320.38, mktg: 249839.44, state: "Florida", profit: 141585.52 },
    { id: 14, rd: 91992.39, admin: 135495.07, mktg: 252664.93, state: "California", profit: 134307.35 },
    { id: 15, rd: 119943.24, admin: 156547.42, mktg: 256512.92, state: "Florida", profit: 132602.65 },
    { id: 16, rd: 114523.61, admin: 122616.84, mktg: 261776.23, state: "New York", profit: 129917.04 },
    { id: 17, rd: 78013.11, admin: 121597.55, mktg: 264346.06, state: "California", profit: 126992.93 },
    { id: 18, rd: 94657.16, admin: 145077.58, mktg: 282574.31, state: "New York", profit: 125370.37 },
    { id: 19, rd: 91749.16, admin: 114175.79, mktg: 294919.57, state: "Florida", profit: 124266.90 },
    { id: 20, rd: 86419.70, admin: 153514.11, mktg: 0.00, state: "New York", profit: 122776.86 },
    { id: 21, rd: 76253.86, admin: 113867.30, mktg: 298664.47, state: "California", profit: 118474.03 },
    { id: 22, rd: 78389.47, admin: 153773.43, mktg: 299737.29, state: "New York", profit: 111313.02 },
    { id: 23, rd: 73994.56, admin: 122782.75, mktg: 303319.26, state: "Florida", profit: 110352.25 },
    { id: 24, rd: 67532.53, admin: 105751.03, mktg: 304768.73, state: "Florida", profit: 108733.99 },
    { id: 25, rd: 77044.01, admin: 99281.34, mktg: 140574.81, state: "New York", profit: 108552.04 },
    { id: 26, rd: 64664.71, admin: 139553.16, mktg: 137962.62, state: "California", profit: 107404.34 },
    { id: 27, rd: 75328.87, admin: 144135.98, mktg: 134050.07, state: "Florida", profit: 105733.54 },
    { id: 28, rd: 72107.60, admin: 127864.55, mktg: 353183.81, state: "New York", profit: 105008.31 },
    { id: 29, rd: 66051.52, admin: 182645.56, mktg: 118148.20, state: "Florida", profit: 103282.38 },
    { id: 30, rd: 65605.48, admin: 153032.06, mktg: 107138.38, state: "New York", profit: 101004.64 },
    { id: 31, rd: 61994.48, admin: 115641.28, mktg: 91131.24, state: "Florida", profit: 99937.59 },
    { id: 32, rd: 61136.38, admin: 152701.92, mktg: 88218.23, state: "New York", profit: 97483.56 },
    { id: 33, rd: 63408.86, admin: 129219.61, mktg: 46085.25, state: "California", profit: 97427.84 },
    { id: 34, rd: 55493.95, admin: 103057.49, mktg: 214634.81, state: "Florida", profit: 96778.92 },
    { id: 35, rd: 46426.07, admin: 157693.92, mktg: 210797.67, state: "California", profit: 96712.80 },
    { id: 36, rd: 46014.02, admin: 85047.44, mktg: 205517.64, state: "New York", profit: 96479.51 },
    { id: 37, rd: 28663.76, admin: 127056.21, mktg: 201126.82, state: "Florida", profit: 90708.19 },
    { id: 38, rd: 44069.95, admin: 51283.14, mktg: 197029.42, state: "California", profit: 89949.14 },
    { id: 39, rd: 20229.59, admin: 65947.93, mktg: 185265.10, state: "New York", profit: 81229.06 },
    { id: 40, rd: 38558.51, admin: 82982.09, mktg: 174999.30, state: "California", profit: 81005.76 },
    { id: 41, rd: 28754.33, admin: 118546.05, mktg: 172795.67, state: "California", profit: 78239.91 },
    { id: 42, rd: 27892.92, admin: 84710.77, mktg: 164470.71, state: "Florida", profit: 77798.83 },
    { id: 43, rd: 23640.93, admin: 96189.63, mktg: 148001.11, state: "California", profit: 71498.49 },
    { id: 44, rd: 15505.73, admin: 127382.30, mktg: 35534.17, state: "New York", profit: 69758.98 },
    { id: 45, rd: 22177.74, admin: 154806.14, mktg: 28334.72, state: "California", profit: 65200.33 },
    { id: 46, rd: 1000.23, admin: 124153.04, mktg: 1903.93, state: "New York", profit: 64926.08 },
    { id: 47, rd: 1315.46, admin: 115816.21, mktg: 297114.46, state: "Florida", profit: 49490.75 },
    { id: 48, rd: 0.00, admin: 135426.92, mktg: 0.00, state: "California", profit: 42559.73 },
    { id: 49, rd: 542.05, admin: 51743.15, mktg: 0.00, state: "New York", profit: 35673.41 },
    { id: 50, rd: 0.00, admin: 116983.80, mktg: 45173.06, state: "California", profit: 14681.40 }
];

let rmseChartInstance = null;
let r2ChartInstance = null;
let currentSelectedStep = 2; // Default to best 2-feature model

document.addEventListener("DOMContentLoaded", () => {
    initCharts();
    renderFeatureTable();
    initFeatureTabs();
    initCalculator();
    renderStartupsTable(STARTUPS_DATA);
    initDatasetFilters();
});

// 3. Initialize Interactive Line Charts (Replicating user's dual plots)
function initCharts() {
    const xLabels = [1.0, 2.0, 3.0, 4.0, 5.0];
    const rmsePoints = FEATURE_SELECTION_DATA.map(d => d.rmse);
    const r2Points = FEATURE_SELECTION_DATA.map(d => d.r2);

    const commonOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: "rgba(14, 20, 36, 0.95)",
                titleFont: { family: "Inter", size: 13, weight: "bold" },
                bodyFont: { family: "JetBrains Mono", size: 12 },
                borderColor: "rgba(59, 130, 246, 0.4)",
                borderWidth: 1,
                padding: 10,
                displayColors: false
            }
        },
        scales: {
            x: {
                grid: { color: "rgba(255, 255, 255, 0.05)" },
                ticks: {
                    color: "#94a3b8",
                    font: { family: "JetBrains Mono", size: 11 },
                    stepSize: 0.5
                },
                title: {
                    display: true,
                    text: "Number of Features",
                    color: "#94a3b8",
                    font: { family: "Inter", size: 12, weight: "500" }
                }
            }
        }
    };

    // RMSE Chart (Left)
    const ctxRmse = document.getElementById("rmseChart").getContext("2d");
    rmseChartInstance = new Chart(ctxRmse, {
        type: "line",
        data: {
            labels: xLabels,
            datasets: [{
                data: rmsePoints,
                borderColor: "#1f77b4",
                backgroundColor: "#1f77b4",
                borderWidth: 2,
                pointRadius: (ctx) => (ctx.dataIndex === 1 ? 8 : 5),
                pointHoverRadius: 9,
                pointBackgroundColor: (ctx) => (ctx.dataIndex === 1 ? "#10b981" : "#1f77b4"),
                pointBorderColor: "#ffffff",
                pointBorderWidth: 1.5,
                tension: 0.1
            }]
        },
        options: {
            ...commonOptions,
            scales: {
                ...commonOptions.scales,
                y: {
                    min: 8100,
                    max: 9200,
                    grid: { color: "rgba(255, 255, 255, 0.05)" },
                    ticks: {
                        color: "#94a3b8",
                        font: { family: "JetBrains Mono", size: 11 },
                        stepSize: 200,
                        callback: (v) => "$" + v.toLocaleString()
                    },
                    title: {
                        display: true,
                        text: "RMSE",
                        color: "#94a3b8",
                        font: { family: "Inter", size: 12, weight: "500" }
                    }
                }
            },
            plugins: {
                ...commonOptions.plugins,
                tooltip: {
                    ...commonOptions.plugins.tooltip,
                    callbacks: {
                        title: (ctx) => `特徵數: ${ctx[0].label} 個`,
                        label: (ctx) => `RMSE: $${ctx.parsed.y.toFixed(2)}${ctx.dataIndex === 1 ? " ⭐ 最低誤差點" : ""}`
                    }
                }
            }
        }
    });

    // R2 Chart (Right)
    const ctxR2 = document.getElementById("r2Chart").getContext("2d");
    r2ChartInstance = new Chart(ctxR2, {
        type: "line",
        data: {
            labels: xLabels,
            datasets: [{
                data: r2Points,
                borderColor: "#1f77b4",
                backgroundColor: "#1f77b4",
                borderWidth: 2,
                pointRadius: (ctx) => (ctx.dataIndex === 1 ? 8 : 5),
                pointHoverRadius: 9,
                pointBackgroundColor: (ctx) => (ctx.dataIndex === 1 ? "#10b981" : "#1f77b4"),
                pointBorderColor: "#ffffff",
                pointBorderWidth: 1.5,
                tension: 0.1
            }]
        },
        options: {
            ...commonOptions,
            scales: {
                ...commonOptions.scales,
                y: {
                    min: 0.934,
                    max: 0.949,
                    grid: { color: "rgba(255, 255, 255, 0.05)" },
                    ticks: {
                        color: "#94a3b8",
                        font: { family: "JetBrains Mono", size: 11 },
                        stepSize: 0.002,
                        callback: (v) => v.toFixed(3)
                    },
                    title: {
                        display: true,
                        text: "R-squared",
                        color: "#94a3b8",
                        font: { family: "Inter", size: 12, weight: "500" }
                    }
                }
            },
            plugins: {
                ...commonOptions.plugins,
                tooltip: {
                    ...commonOptions.plugins.tooltip,
                    callbacks: {
                        title: (ctx) => `特徵數: ${ctx[0].label} 個`,
                        label: (ctx) => `R²: ${ctx.parsed.y.toFixed(6)}${ctx.dataIndex === 1 ? " ⭐ 最高解釋力" : ""}`
                    }
                }
            }
        }
    });
}

// 4. Render Feature Selection Table
function renderFeatureTable() {
    const tbody = document.getElementById("feature-table-body");
    tbody.innerHTML = "";

    FEATURE_SELECTION_DATA.forEach(row => {
        const tr = document.createElement("tr");
        if (row.num === currentSelectedStep) {
            tr.classList.add("active-row");
        }
        tr.dataset.features = row.num;

        tr.innerHTML = `
            <td class="mono-cell">${row.num}</td>
            <td>
                <span class="feature-tag-list">[${row.features.join(", ")}]</span>
                ${row.isBest ? '<span class="best-badge">⭐ 最佳平衡點</span>' : ""}
            </td>
            <td class="mono-cell" style="text-align: right;">${row.rmse.toFixed(6)}</td>
            <td class="mono-cell" style="text-align: right;">${row.r2.toFixed(6)}</td>
        `;

        tr.addEventListener("click", () => {
            selectFeatureStep(row.num);
        });

        tbody.appendChild(tr);
    });
}

function initFeatureTabs() {
    const buttons = document.querySelectorAll("#feature-tabs .tab-btn");
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const k = parseInt(btn.dataset.features, 10);
            selectFeatureStep(k);
        });
    });
}

function selectFeatureStep(k) {
    currentSelectedStep = k;

    // Update tab buttons
    document.querySelectorAll("#feature-tabs .tab-btn").forEach(btn => {
        btn.classList.toggle("active", parseInt(btn.dataset.features, 10) === k);
    });

    // Update active row in table
    document.querySelectorAll("#feature-table-body tr").forEach(tr => {
        tr.classList.toggle("active-row", parseInt(tr.dataset.features, 10) === k);
    });

    // Synchronize calculator model selection if user picks 2 or 5
    const modelSelect = document.getElementById("model-select");
    if (k === 2) {
        modelSelect.value = "optimal2";
    } else {
        modelSelect.value = "full5";
    }
    updateModelVisibility();
    calculateProfit();
}

// 5. Interactive Profit Calculator Engine
function initCalculator() {
    const rdSlider = document.getElementById("rd-slider");
    const rdInput = document.getElementById("rd-input");
    const mktgSlider = document.getElementById("mktg-slider");
    const mktgInput = document.getElementById("mktg-input");
    const adminSlider = document.getElementById("admin-slider");
    const adminInput = document.getElementById("admin-input");
    const stateSelect = document.getElementById("state-select");
    const modelSelect = document.getElementById("model-select");
    const sampleBtn = document.getElementById("load-sample-btn");

    function sync(slider, input, displayId) {
        slider.addEventListener("input", () => {
            input.value = slider.value;
            document.getElementById(displayId).textContent = "$" + Number(slider.value).toLocaleString();
            calculateProfit();
        });
        input.addEventListener("input", () => {
            slider.value = input.value;
            document.getElementById(displayId).textContent = "$" + Number(input.value).toLocaleString();
            calculateProfit();
        });
    }

    sync(rdSlider, rdInput, "rd-val");
    sync(mktgSlider, mktgInput, "mktg-val");
    sync(adminSlider, adminInput, "admin-val");

    stateSelect.addEventListener("change", calculateProfit);
    modelSelect.addEventListener("change", () => {
        updateModelVisibility();
        calculateProfit();
    });

    sampleBtn.addEventListener("click", () => {
        // Load CRISP-DM Test Sample
        rdSlider.value = 160000;
        rdInput.value = 160000;
        document.getElementById("rd-val").textContent = "$160,000";

        mktgSlider.value = 300000;
        mktgInput.value = 300000;
        document.getElementById("mktg-val").textContent = "$300,000";

        adminSlider.value = 130000;
        adminInput.value = 130000;
        document.getElementById("admin-val").textContent = "$130,000";

        stateSelect.value = "New York";
        calculateProfit();
    });

    updateModelVisibility();
    calculateProfit();
}

function updateModelVisibility() {
    const model = document.getElementById("model-select").value;
    const adminGroup = document.getElementById("admin-group");
    const stateGroup = document.getElementById("state-group");

    if (model === "optimal2") {
        adminGroup.style.opacity = "0.45";
        stateGroup.style.opacity = "0.45";
        document.getElementById("active-model-name").textContent = "雙特徵最佳";
        document.getElementById("formula-display").textContent =
            "Profit = 46,346.34 + 0.7886 × (R&D) + 0.0326 × (Marketing)";
    } else {
        adminGroup.style.opacity = "1";
        stateGroup.style.opacity = "1";
        document.getElementById("active-model-name").textContent = "五特徵全模型";
        document.getElementById("formula-display").textContent =
            "Profit = 42,554.17 + 0.7735 × (R&D) + 0.0366 × (Marketing) + 699.37 × (NY) - 959.28 × (FL) + 0.0329 × (Admin)";
    }
}

function calculateProfit() {
    const rd = parseFloat(document.getElementById("rd-input").value) || 0;
    const mktg = parseFloat(document.getElementById("mktg-input").value) || 0;
    const admin = parseFloat(document.getElementById("admin-input").value) || 0;
    const state = document.getElementById("state-select").value;
    const model = document.getElementById("model-select").value;

    let profit = 0;
    let rmse = 8198.80;

    if (model === "optimal2") {
        // Optimal 2-feature equation
        profit = 46346.34 + (0.788618 * rd) + (0.032577 * mktg);
        rmse = 8198.80;
    } else {
        // 5-feature equation
        let stateNY = state === "New York" ? 1 : 0;
        let stateFL = state === "Florida" ? 1 : 0;
        profit = 42554.17 + (0.773467 * rd) + (0.036610 * mktg) + (699.37 * stateNY) - (959.28 * stateFL) + (0.032885 * admin);
        rmse = 9137.99;
    }

    // 95% Confidence Interval (approx +/- 1.96 * RMSE / sqrt(n) or individual prediction bound)
    const lowerCI = Math.max(0, profit - rmse * 1.96);
    const upperCI = profit + rmse * 1.96;

    const totalCost = rd + mktg + (model === "full5" ? admin : 0);
    const margin = totalCost > 0 ? ((profit / totalCost) * 100).toFixed(1) : "0.0";
    const rdContribution = profit > 0 ? (((0.7886 * rd) / profit) * 100).toFixed(1) : "0.0";

    // Update UI
    document.getElementById("profit-output").textContent = "$" + Math.round(profit).toLocaleString() + "." + (profit % 1).toFixed(2).split(".")[1];
    document.getElementById("profit-ci").textContent = `95% 預測區間: $${Math.round(lowerCI).toLocaleString()} ~ $${Math.round(upperCI).toLocaleString()}`;
    document.getElementById("total-cost").textContent = "$" + Math.round(totalCost).toLocaleString();
    document.getElementById("profit-margin").textContent = margin + "%";
    document.getElementById("rd-contribution").textContent = Math.min(100, Math.max(0, rdContribution)) + "%";
}

// 6. Dataset Explorer Table & Search/Filter
function renderStartupsTable(data) {
    const tbody = document.getElementById("startups-table-body");
    tbody.innerHTML = "";

    if (data.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 2rem;">查無符合條件之新創企業記錄</td></tr>`;
        document.getElementById("table-status").textContent = "共顯示 0 筆記錄";
        return;
    }

    data.forEach(item => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td class="mono-cell">#${item.id}</td>
            <td class="mono-cell">$${item.rd.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
            <td class="mono-cell">$${item.admin.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
            <td class="mono-cell">$${item.mktg.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
            <td><span class="badge-secondary">${item.state}</span></td>
            <td class="mono-cell" style="text-align: right; font-weight: 700; color: #34d399;">$${item.profit.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
        `;
        tbody.appendChild(tr);
    });

    document.getElementById("table-status").textContent = `共顯示 ${data.length} 筆記錄 (資料總計 50 家)`;
}

function initDatasetFilters() {
    const searchInput = document.getElementById("dataset-search");
    const stateFilter = document.getElementById("state-filter");

    function applyFilters() {
        const query = searchInput.value.toLowerCase().trim();
        const selectedState = stateFilter.value;

        const filtered = STARTUPS_DATA.filter(item => {
            const matchesState = (selectedState === "all") || (item.state === selectedState);
            const matchesQuery = !query ||
                item.state.toLowerCase().includes(query) ||
                item.rd.toString().includes(query) ||
                item.profit.toString().includes(query);

            return matchesState && matchesQuery;
        });

        renderStartupsTable(filtered);
    }

    searchInput.addEventListener("input", applyFilters);
    stateFilter.addEventListener("change", applyFilters);
}
