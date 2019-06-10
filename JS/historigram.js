google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['', 'Percentage'],
      ["Máx", 33.946],
      ["Méd", 445],
      ["Min", 33],
  ])

    var options = {
      title: 'Country Populations',
      legend: { position: 'none' },
      colors: ['#e7711c'],
      histogram: { lastBucketPercentile: 3 },
      hAxis: { scaleType: 'mirrorLog' },
      vAxis: { 
        title: 'Milissegundos', 
        titleTextStyle: { 
          color: '# FF0000' 
        } 
      }
    };

  var chart = new google.visualization.Histogram(document.getElementById('chart_historigram'));
  chart.draw(data, options);
}