//GRAFICO LINE
function Line() {
  google.charts.load('current', { packages: ['corechart'] });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('namber', )
    data.addColumn('number', 'X');
    data.addColumn('number', 'OK');
    data.addColumn('number', 'NÃO LOC');
    data.addColumn('number', 'ERRO');

    data.addRows([
      [0, 70, 0, 0],
      [1, 110, 0, 0],
      [2, 90, 5, 0],
      [3, 115, 0, 0],
      [4, 100, 7, 0],
      [5, 90, 0, 1],
      [6, 85, 15, 3],
      [7, 115, 30, 1],
      [8, 110, 25, 3],
      [9, 70, 45, 6],
      [10, 90, 30, 5],
      [11, 85, 25, 3],
    ]);

    var options = {
      hAxis: {
        title: 'Time'
      },
      curveType: 'function',
      intervals: {'style': 'line'},
      vAxis: {
        title: 'Consultas'
      },
      width: 600,
      height: 500
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }
}

//GRAFICO DONUT 1

function Donut() {
  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var dataLine = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['OK', 94],
      ['NÃO LOC', 5.9],
      ['ERRO', 1],

    ]);

    var options = {
      title: '',
      pieHole: 0.4,
      width: 400,
      height: 300,
      slices: {
        0: { color: '#1d75d3' },
        1: { color: 'red' },
        3: { color: 'black' }
      }
    };

    var chartLine = new google.visualization.PieChart(document.getElementById('donutchart'));
    chartLine.draw(dataLine, options);
  }
}

//GRAFICO AREA
function Area() {
  google.charts.load('current', { packages: ['corechart'] });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var dataArea = google.visualization.arrayToDataTable([
      ['Linha do Tempo', 'OK', 'NÃO LOC', 'ERRO'],
      ['09:10', 100, 0, 0],
      ['09:11', 110, 0, 0],
      ['09:12', 90, 5, 0],
      ['09:13', 115, 0, 0],
      ['09:14', 100, 7, 0],
      ['09:15', 90, 0, 1],
      ['09:16', 85, 15, 3],
      ['09:17', 115, 30, 1],
      ['09:18', 110, 25, 3],
      ['09:19', 70, 45, 6],
      ['09:20', 90, 30, 5],
      ['09:21', 85, 25, 3],

    ]);

    var options = {
      vAxis: { minValue: 0, maxValue: 200 },
      width: 700,
      height: 300
    };

    var chartArea = new google.visualization.AreaChart(document.getElementById('chart_div2'));
    chartArea.draw(dataArea, options);
  }
}

//GRAFICO Pie Chart
function PieChart() {

  google.charts.load('current', { packages: ['corechart'] });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {

    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['< 1 segundo', 24861],
      ['< 5 segundo', 16200],
      ['< 10 segundo', 5000],
      ['< 15 segundo', 1],
      ['< 20 segundo', 1],
      ['< 999999 segundo', 7],
    ]);

    var options = {
      width: 500,
      height: 300,
      slices: {
        0: { color: '#1d75d3' },
        1: { color: '#f58634' },
        2: { color: '#8c7970' }
      },
      vAxis: { minValue: 0, maxValue: 100.000 },
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
  }
};

function Column() {
  google.charts.load('current', { packages: ['bar'] });
  google.charts.setOnLoadCallback(drawStuff);

  function drawStuff() {
    var data = new google.visualization.arrayToDataTable([
      ['', 'Percentage'],
      ["Máx", 33946],
      ["Méd", 10000],
      ["Min", 5000],
    ]);

    var options = {
      width: 555,
      height: 300,
      legend: { position: 'none' },
      bar: { groupWidth: "50%" }
    };

    var chart = new google.charts.Bar(document.getElementById('top_x_div'));
    // Convert the Classic options to Material options.
    chart.draw(data, google.charts.Bar.convertOptions(options));
  };
}

function PieChart2() {

  google.charts.load('current', { packages: ['corechart'] });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {

    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Toledo Pizza', 2233],
      ['Meireles & Freitas', 1736],
      ['BNS', 1526],
      ['AMF Promotora', 1375],
      ['Efica Cob', 1159],
      ['Ação', 968],
      ['BL Cobrança', 957],
      ['Reis Advogados', 917],
      ['Goes Nicoladelli', 863],
      ['Outros', 22792],
    ]);

    var options = {
      width: 600,
      height: 500,
      // slices: {
      //   0: { color: '#1d75d3' },
      //   1: { color: '#f58634' },
      //   2: { color: '#8c7970' }
      // }
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart2'));

    chart.draw(data, options);
  }
};

//GRAFICO LINE HOME
function Line() {
  google.charts.load('current', { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = new google.visualization.arrayToDataTable([
      ['Year', 'Consulta', 'WebService'],
      ['10:00', 95, 100],
      ['10:05', 110, 90],
      ['10:10', 90, 105],
      ['10:15', 115, 100],
      ['10:20', 100, 95],
      ['10:25', 80, 115],
      ['10:30', 85, 95],
      ['10:35', 115, 103],
      ['10:40', 110, 85],
      ['10:45', 0, 0],
      ['10:50', 90, 100],
      ['10:55', 85, 95],
    ]);

    var options = {
      series: {
        1: { curveType: 'function' },
        2: { curveType: 'function' },
      },
      legend: { position: 'top' },
      width: 650,
      height: 400
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_home'));
    chart.draw(data, options);
  }
}

function Barra() {
  google.charts.load('current', { packages: ['corechart'] });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['', 'Enriquecimento', { role: 'style' }],
      ['Hoje', 114893, 'opacity: 0.2'],

    ]);

    var options = {
      width: 380,
      height: 180,

      slices: {
        0: { color: 'green' },
      }
    };

    var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
  }
}

function Barra2() {
  google.charts.load('current', { packages: ['bar'] });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['', 'Mailling List', 'Usuários'],
      ['Hoje', 4045, 1065],

    ]);

    var options = {
      width: 380,
      height: 180,
      slices: {
        0: { color: 'green' },
        1: { color: 'blue' },
      }
    };

    var chart = new google.charts.Bar(document.getElementById('columnchart_material2'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
  }
}