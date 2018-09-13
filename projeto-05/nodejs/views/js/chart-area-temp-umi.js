// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctxTemp = document.getElementById("myAreaChartTemp");
var ctxUmi = document.getElementById("myAreaChartUmi");

var labelsTempDB = [];
var dataTempDB = [];

var labelsUmiDB = [];
var dataUmiDB = [];

function updateTempChart() {
  var myTempLineChart = new Chart(ctxTemp, {
    type: 'line',
    data: {
      labels: labelsTempDB,
      datasets: [{
        label: "Temp: ",
        lineTension: 0.3,
        backgroundColor: "rgba(2,117,216,0.2)",
        borderColor: "rgba(2,117,216,1)",
        pointRadius: 5,
        pointBackgroundColor: "rgba(2,117,216,1)",
        pointBorderColor: "rgba(255,255,255,0.8)",
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(2,117,216,1)",
        pointHitRadius: 50,
        pointBorderWidth: 2,
        data: dataTempDB,
      }],
    },
    options: {
      scales: {
        xAxes: [{
          time: {
            unit: 'date'
          },
          gridLines: {
            display: false
          },
          ticks: {
            maxTicksLimit: 1000
          }
        }],
        yAxes: [{
          ticks: {
            min: 0,
            max: 100,
            maxTicksLimit: 5
          },
          gridLines: {
            color: "rgba(0, 0, 0, .125)",
          }
        }],
      },
      legend: {
        display: false
      }
    }
  });
}

function updateUmiChart() {
  var myUmiLineChart = new Chart(ctxUmi, {
    type: 'line',
    data: {
      labels: labelsUmiDB,
      datasets: [{
        label: "Temp: ",
        lineTension: 0.3,
        backgroundColor: "rgba(2,117,216,0.2)",
        borderColor: "rgba(2,117,216,1)",
        pointRadius: 5,
        pointBackgroundColor: "rgba(2,117,216,1)",
        pointBorderColor: "rgba(255,255,255,0.8)",
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(2,117,216,1)",
        pointHitRadius: 50,
        pointBorderWidth: 2,
        data: dataUmiDB,
      }],
    },
    options: {
      scales: {
        xAxes: [{
          time: {
            unit: 'date'
          },
          gridLines: {
            display: false
          },
          ticks: {
            maxTicksLimit: 1000
          }
        }],
        yAxes: [{
          ticks: {
            min: 0,
            max: 100,
            maxTicksLimit: 5
          },
          gridLines: {
            color: "rgba(0, 0, 0, .125)",
          }
        }],
      },
      legend: {
        display: false
      }
    }
  });
}


var socket = io('http://localhost:8080');

// aguarda alguma resposta do servidor
socket.on('respostaTemp', function (data) {

  var obj = JSON.parse(data);
  
  labelsTempDB.push(getDateTime());
  dataTempDB.push(obj.Temperatura);

  labelsUmiDB.push(getDateTime());
  dataUmiDB.push(obj.Umidade);

  updateTempChart();
  updateUmiChart();
});

function getDateTime(){
  var dateNow = Date.now();
  var formatedDate = new Date(dateNow);
  formatedDate = (formatedDate.getDate())+'/'+(formatedDate.getMonth()+1)+'/'+formatedDate.getFullYear()+' '+(formatedDate.getHours() > 12 ? formatedDate.getHours() - 12 : formatedDate.getHours())+':'+formatedDate.getMinutes()+' '+(formatedDate.getHours() >= 12 ? "PM" : "AM");
  return formatedDate;
}