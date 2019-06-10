//GRAFICO LINE
google.charts.load('current', { packages: 
  ['corechart', 'line'] });
google.charts.setOnLoadCallback(drawCurveTypes);

function drawCurveTypes() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'X');
  data.addColumn('number', 'OK');
  data.addColumn('number', 'NÃO LOC');
  data.addColumn('number', 'ERRO');

  data.addRows([
    ['01:42', 70, 0, 0],
    ['03:22', 110, 0, 0],
    ['05:02', 90, 5, 0],
    ['10:15', 115, 0, 0],
    ['06:42', 100, 7, 0],
    ['08:22', 90, 0, 1],
    ['10:02', 85, 15, 3],
    ['11:42', 115, 30, 1],
    ['13:22', 110, 25, 3],
    ['15:02', 70, 45, 6],
  ]);

  var options = {
    hAxis: {
      title: 'Período'
    },
    vAxis: {
      title: 'Quantidade'
    },
    series: {
      1: { curveType: 'function' }
    },
    width: 700,
    height: 400
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}