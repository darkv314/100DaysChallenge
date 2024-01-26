let yValues = [37.5, 11, 33.6, 6];
let barColors = ["#6792FF", "#4473EA", "#1A52E1", "#96B3FF"];
const chart = document.getElementById("doughnut-chart");
const chartShadow = document.getElementById("doughnut-chart-shadow");
new Chart(chart, {
    type: "doughnut",
    rotation: 0.5 * Math.PI,
    data: {
        datasets: [
            {
                data: yValues,
                backgroundColor: barColors,
            },
        ],
    },
    options: {
        cutout: "80%",
        spacing: 10,
        borderWidth: 0,
        borderRadius: 5,
        rotation: -5,
    },
});

new Chart(chartShadow, {
    type: "doughnut",
    rotation: 0.5 * Math.PI,
    data: {
        datasets: [
            {
                data: yValues,
                backgroundColor: ["#6868683d"],
            },
        ],
    },
    options: {
        cutout: "80%",
        spacing: 10,
        borderWidth: 0,
        borderRadius: 5,
        rotation: -5,
    },
});

let data = [
    {
        title: "Channel pages",
        value: 37.5,
    },
    {
        title: "Direct or unknown",
        value: 33.6,
    },
    {
        title: "Search",
        value: 11,
    },
    {
        title: "External",
        value: 6,
    },
];

const bar = document.getElementById("bar");
const numbers = document.getElementById("numbers");

data.forEach((item) => {
    let content = document.createElement("p");
    content.innerHTML = item.title;

    let percent = document.createElement("div");
    percent.style.width = item.value * 2 + "%";
    percent.className = "percent";
    percent.style.backgroundColor = barColors[data.indexOf(item)];
    let barItem = document.createElement("div");
    barItem.className = "bar-item";
    barItem.appendChild(content);
    barItem.appendChild(percent);

    bar.appendChild(barItem);

    let number = document.createElement("p");
    number.innerHTML = item.value + "%";
    numbers.appendChild(number);
});
