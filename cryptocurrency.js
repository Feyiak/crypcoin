
window.onload = function() {

    var chart = new CanvasJS.Chart("chartContainer", {
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        exportEnabled: true,
        animationEnabled: true,
        
        data: [{
            type: "pie",
            startAngle: 25,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: [
                { y: 21.08, label: "ETH" },
                { y: 27.34, label: "BTC" },
                { y: 10.62, label: "Ripple" },
                { y: 15.02, label: "Bitcoin" },
                { y: 14.07, label: "ICO" },
                { y: 11.66, label: "XRP" },
            ]
        }]
    });
    chart.render();
    
    }