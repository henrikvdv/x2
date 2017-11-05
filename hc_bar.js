$(function () {
  $('#container').highcharts({
      title: {
        text: "A highcharter chart"
      },
      yAxis: {
        title: {
          text: null
        }
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      plotOptions: {
        series: {
          turboThreshold: 0
        },
        treemap: {
          layoutAlgorithm: "squarified"
        },
        bubble: {
          minSize: 5,
          maxSize: 25
        }
      },
      annotationsOptions: {
        enabledButtons: false
      },
      tooltip: {
        delayForDisplay: 10
      },
      chart: {
        type: "column"
      },
      xAxis: {
        categories: [2012, 2013, 2014, 2015, 2016]
      },
      series: [
        {
          data: [3900, 4200, 5700, 8500, 11900],
          name: "Downloads"
        }
      ]
    }
  );
});
