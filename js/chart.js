

// raport calorit

let chart = document.querySelector('.calory-chart');

let Data={
    labels:[
        "Carbohydrate",
        "Proteins",
        "Fats"
    ],
    datasets:[
        {
            label: 'Nutrition Raport',
            data:[12.1, 25.1, 48.1],
            backgroundColor:[
                "rgb(207, 36, 36)",
                "#58b820",
                "#ffc036"
            ],
            hoverOffset : 3
        },
    ],

};

let Options={
    responsive: false,
    maintainAspectRatio: false,
    animation:{
        duration:0,
    },
    legend:{
        display:true,
        position:"bottom"
    }
};

let trafficChart2 = new Chart(chart,{
    type:"doughnut",
    data:Data,
    options: Options
});