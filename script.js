function scrollToDashboard() {
    document.getElementById("dashboard").scrollIntoView({
        behavior: "smooth"
    });
}

const menuButton = document.querySelector(".menu-btn");
const siteNav = document.getElementById("site-nav");

menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    menuButton.textContent = isOpen ? "☰" : "×";
    siteNav.classList.toggle("is-open", !isOpen);
});

siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        siteNav.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation");
        menuButton.textContent = "☰";
    });
});


function getAQIStatus(aqi) {

    if (aqi <= 50) {
        return {
            status: "GOOD",
            message: "Air quality is considered good."
        };

    } else if (aqi <= 100) {
        return {
            status: "SATISFACTORY",
            message: "Air quality is acceptable, but some pollution is present."
        };

    } else if (aqi <= 200) {
        return {
            status: "MODERATELY POLLUTED",
            message: "Air quality may cause discomfort to sensitive people, especially with prolonged exposure."
        };

    } else if (aqi <= 300) {
        return {
            status: "POOR",
            message: "Prolonged exposure may cause breathing discomfort."
        };

    } else if (aqi <= 400) {
        return {
            status: "VERY POOR",
            message: "Prolonged exposure may cause respiratory illness."
        };

    } else {
        return {
            status: "SEVERE",
            message: "Air quality is severely polluted. Follow official health guidance."
        };
    }
}


function simulateChange() {

    const aqi = Math.floor(Math.random() * 451) + 50;

    const result = getAQIStatus(aqi);
    updateAIInsight(aqi);


    document.getElementById("heroAQI").textContent = aqi;

    document.getElementById("dashboardAQI").textContent = aqi;


    document.getElementById("heroStatus").textContent =
        result.status;

    document.getElementById("dashboardStatus").textContent =
        result.status;


    document.getElementById("dashboardMessage").textContent =
        result.message;
    document.getElementById("analysisAQI").textContent = aqi;

    document.getElementById("analysisStatus").textContent =
        result.status;

    document.getElementById("alertTitle").textContent =
        "Air quality status updated.";

    document.getElementById("alertText").textContent =
        "The demonstration shows how digital systems can communicate changing air-quality conditions.";


    document.getElementById("meterFill").style.width =
        (aqi / 500 * 100) + "%";
}
function updateTime() {

    const now = new Date();

    const time = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });

    document.getElementById("updateTime").textContent = time;
}

updateTime();

const chartLabels = [
    "12 AM",
    "3 AM",
    "6 AM",
    "9 AM",
    "12 PM",
    "3 PM",
    "6 PM",
    "9 PM"
];

const chartData = [
    132,
    145,
    161,
    178,
    194,
    182,
    169,
    151
];


const ctx = document.getElementById("aqiChart");

new Chart(ctx, {

    type: "line",

    data: {

        labels: chartLabels,

        datasets: [{
            label: "AQI",
            data: chartData,
            borderWidth: 3,
            tension: 0.35,
            fill: false
        }]

    },

    options: {

        responsive: true,

        plugins: {
            legend: {
                display: false
            }
        },

        scales: {

            y: {
                beginAtZero: true,
                suggestedMax: 300
            }

        }

    }

});
const cityData = {

    demo: {
        pm25: 92,
        pm10: 141,
        no2: 28,
        so2: 18,
        o3: 42,
        co: 0.8,
        nh3: 12,
        pb: 0.3,
        aqi: 178
    },

    delhi: {
        pm25: 118,
        pm10: 196,
        no2: 54,
        so2: 22,
        o3: 48,
        co: 1.1,
        nh3: 18,
        pb: 0.4,
        aqi: 214
    },

    chandigarh: {
        pm25: 72,
        pm10: 112,
        no2: 24,
        so2: 15,
        o3: 39,
        co: 0.7,
        nh3: 10,
        pb: 0.2,
        aqi: 145
    },

    ludhiana: {
        pm25: 101,
        pm10: 164,
        no2: 37,
        so2: 20,
        o3: 44,
        co: 0.9,
        nh3: 14,
        pb: 0.3,
        aqi: 188
    },

    mumbai: {
        pm25: 68,
        pm10: 108,
        no2: 31,
        so2: 17,
        o3: 52,
        co: 0.8,
        nh3: 11,
        pb: 0.2,
        aqi: 132
    }

};


function changeCity() {

    const city =
        document.getElementById("citySelect").value;

    const data = cityData[city];
    updateAIInsight(data.aqi);

    document.getElementById("pm25").textContent = data.pm25;
    document.getElementById("pm10").textContent = data.pm10;
    document.getElementById("no2").textContent = data.no2;
    document.getElementById("so2").textContent = data.so2;
    document.getElementById("o3").textContent = data.o3;
    document.getElementById("co").textContent = data.co;
    document.getElementById("nh3").textContent = data.nh3;
    document.getElementById("pb").textContent = data.pb;

    const result = getAQIStatus(data.aqi);

    document.getElementById("heroAQI").textContent = data.aqi;
    document.getElementById("dashboardAQI").textContent = data.aqi;

    document.getElementById("heroStatus").textContent =
        result.status;

    document.getElementById("dashboardStatus").textContent =
        result.status;

    document.getElementById("dashboardMessage").textContent =
        result.message;

    document.getElementById("analysisAQI").textContent =
        data.aqi;

    document.getElementById("analysisStatus").textContent =
        result.status;

    document.getElementById("meterFill").style.width =
        (data.aqi / 500 * 100) + "%";

}
function updateAIInsight(aqi) {

    const title =
        document.getElementById("aiTitle");

    const text =
        document.getElementById("aiText");

    if (aqi <= 50) {

        title.textContent =
            "Air quality is currently favourable.";

        text.textContent =
            "The demonstration AQI falls within the Good category. Digital monitoring can help track changes and identify when conditions begin to deteriorate.";

    } else if (aqi <= 100) {

        title.textContent =
            "Air quality is generally acceptable.";

        text.textContent =
            "The demonstration AQI falls within the Satisfactory category. Continued monitoring helps identify emerging pollution trends.";

    } else if (aqi <= 200) {

        title.textContent =
            "Particulate pollution deserves attention.";

        text.textContent =
            "The demonstration AQI falls within the Moderately Polluted category. Particulate matter is a key pollutant to monitor, while digital trends can help communicate changing conditions.";

    } else if (aqi <= 300) {

        title.textContent =
            "Pollution levels are elevated.";

        text.textContent =
            "The demonstration AQI falls within the Poor category. Digital monitoring can help communicate elevated pollution and support timely public awareness.";

    } else {

        title.textContent =
            "The pollution level is very high.";

        text.textContent =
            "The demonstration AQI indicates a serious pollution condition. Digital monitoring becomes especially important for communicating changes quickly.";

    }

}
