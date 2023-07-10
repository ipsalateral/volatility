
// SelectedValue is like "Ride Warpig" and will be highlighted
export function updateTS() {
    var plotData;
    fetch("spxlow.json")
    .then(res => res.json())
    .then(data => {plotData = data;})
    .then(() => {
        
        // get the y axis bounds
        // let maxvix = 0;
        // let minvix = 100;
        // for(let i = 0; i<plotData.length;i++){
        //     let trace = plotData[i].y;
        //     let maxval = Math.max(...trace) // ... is the spread operator
        //     let minval = Math.min(...trace)
        //     maxvix = Math.max(maxval,maxvix)
        //     minvix = Math.min(minval,minvix)
        // }
        // let min_y = Math.floor(minvix-2);
        // let max_y = Math.ceil(maxvix+2);

        const layout = {
            autosize: true,
            width: 700,
            height: 400,
            margin: {
                l: 50,
                r: 40,
                b: 50,
                t: 30,
                pad: 4
            },
            title: {
                xref: 'paper',
                x:.9,
                text:'Wors SPX 1-Month Returns, June 2006-Present',
                xanchor:'right',
                
            },
            font: {
                size: 12,
                color: '#FFFFFF'
            },
            xaxis: {
                title: '1-Month Decline in Standard Deviations',
                color: 'FFFFFF',
                gridcolor: '6E6E6E',
                linecolor: '#FFFFFF',
                ticks: 'outside',
                // tick0: 1,
                dtick: 1,
                tickcolor: '#000'
            },
            yaxis: {
                title: 'Frequency',
                color: '#FFFFFF',
                gridcolor: '#6E6E6E',
                linecolor: '#FFFFFF',
                // tick0: 0,
                range: [0.0,.06],
                // dtick: .01,
                tickformat: '0.0%',
               
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
        Plotly.newPlot('spxLowPlot',plotData,layout)
    })
}
updateTS();
