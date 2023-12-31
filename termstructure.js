
// SelectedValue is like "Ride Warpig" and will be highlighted
export function updateTS() {
    var plotData;
    fetch("termstructure.json")
    .then(res => res.json())
    .then(data => {plotData = data;})
    .then(() => {
        
        // get the y axis bounds
        let maxvix = 0;
        let minvix = 100;
        for(let i = 0; i<plotData.length;i++){
            let trace = plotData[i].y;
            let maxval = Math.max(...trace) // ... is the spread operator
            let minval = Math.min(...trace)
            maxvix = Math.max(maxval,maxvix)
            minvix = Math.min(minval,minvix)
        }
        let min_y = Math.floor(minvix-2);
        let max_y = Math.ceil(maxvix+2);

        const layout = {
            autosize: false,
            width: 700,
            height: 400,
            margin: {
                l: 40,
                r: 40,
                b: 60,
                t: 30,
                // pad: 0
            },
            title: {
                xref: 'paper',
                x:.6,
                text:'VIX Futures',
                xanchor:'right'
            },
            font: {
                size: 12,
                color: '#FFFFFF'
            },
            xaxis: {
                title: 'Trading Days To Maturity',
                color: '#FFFFFF',
                gridcolor: '6E6E6E',
                linecolor: '6E6E6E',
               
                // tick0: 0,
                dtick: 10,
                // range: [0,150],
                tickcolor: '6E6E6E'
            },
            yaxis: {
                title: '',
                color: '#FFFFFF',
                range: [min_y,max_y],
                gridcolor: '#6E6E6E',
                // linecolor: '#FFFFFF',
                dtick: 1,
                // ticks: 'outside',
               
            },
            legend: {
                x: 1,
                xanchor: 'right',
                y: 1
              },
            plot_bgcolor:'#000000',
            paper_bgcolor:'#000000'
        }
        // plotData.marker.color = plotData.y.map(name=>name==selectedValue? 'orange' :'#5BB2EA')
        Plotly.newPlot('vixFuturesPlot',plotData,layout)
    })
}
updateTS();
