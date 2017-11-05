$(function () {
  $('#chart_001').highcharts({
      title: {
        text: null
      },
      yAxis: {
        title: {
          text: "values"
        },
        type: "linear"
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      plotOptions: {
        series: {
          turboThreshold: 0,
          showInLegend: true,
          marker: {
            enabled: false
          }
        },
        treemap: {
          layoutAlgorithm: "squarified"
        },
        bubble: {
          minSize: 5,
          maxSize: 25
        },
        scatter: {
          marker: {
            symbol: "circle"
          }
        }
      },
      annotationsOptions: {
        enabledButtons: false
      },
      tooltip: {
        delayForDisplay: 10
      },
      series: [
        {
          name: "Netherlands",
          data: [
            {
              unit: "Percentage",
              vehicle: "Trains",
              geo: "Netherlands",
              time: 2000,
              values: 9.4,
              x: 2000,
              y: 9.4
            },
            {
              unit: "Percentage",
              vehicle: "Trains",
              geo: "Netherlands",
              time: 2001,
              values: 9.4,
              x: 2001,
              y: 9.4
            },
            {
              unit: "Percentage",
              vehicle: "Trains",
              geo: "Netherlands",
              time: 2002,
              values: 9.3,
              x: 2002,
              y: 9.3
            },
            {
              unit: "Percentage",
              vehicle: "Trains",
              geo: "Netherlands",
              time: 2003,
              values: 8.7,
              x: 2003,
              y: 8.7
            },
            {
              unit: "Percentage",
              vehicle: "Trains",
              geo: "Netherlands",
              time: 2004,
              values: 8.4,
              x: 2004,
              y: 8.4
            },
            {
              unit: "Percentage",
              vehicle: "Trains",
              geo: "Netherlands",
              time: 2005,
              values: 8.9,
              x: 2005,
              y: 8.9
            },
            {
              unit: "Percentage",
              vehicle: "Trains",
              geo: "Netherlands",
              time: 2006,
              values: 9.4,
              x: 2006,
              y: 9.4
            },
            {
              unit: "Percentage",
              vehicle: "Trains",
              geo: "Netherlands",
              time: 2007,
              values: 9.6,
              x: 2007,
              y: 9.6
            },
            {
              unit: "Percentage",
              vehicle: "Trains",
              geo: "Netherlands",
              time: 2008,
              values: 9.2,
              x: 2008,
              y: 9.2
            },
            {
              unit: "Percentage",
              vehicle: "Trains",
              geo: "Netherlands",
              time: 2009,
              values: 9.2,
              x: 2009,
              y: 9.2
            },
            {
              unit: "Percentage",
              vehicle: "Trains",
              geo: "Netherlands",
              time: 2010,
              values: 9.3,
              x: 2010,
              y: 9.3
            },
            {
              unit: "Percentage",
              vehicle: "Trains",
              geo: "Netherlands",
              time: 2011,
              values: 10.1,
              x: 2011,
              y: 10.1
            },
            {
              unit: "Percentage",
              vehicle: "Trains",
              geo: "Netherlands",
              time: 2012,
              values: 10.9,
              x: 2012,
              y: 10.9
            },
            {
              unit: "Percentage",
              vehicle: "Trains",
              geo: "Netherlands",
              time: 2013,
              values: 10.5,
              x: 2013,
              y: 10.5
            },
            {
              unit: "Percentage",
              vehicle: "Trains",
              geo: "Netherlands",
              time: 2014,
              values: 9.7,
              x: 2014,
              y: 9.7
            }
          ],
          type: "line"
        },
        {
          name: "Norway",
          data: [
            {
              unit: "Percentage",
              vehicle: "Trains",
              geo: "Norway",
              time: 1995,
              values: 4.5,
              x: 1995,
              y: 4.5
            },
            {
              unit: "Percentage",
              vehicle: "Trains",
              geo: "Norway",
              time: 1996,
              values: 4.5,
              x: 1996,
              y: 4.5
            },
            {
              unit: "Percentage",
              vehicle: "Trains",
              geo: "Norway",
              time: 1997,
              values: 4.6,
              x: 1997,
              y: 4.6
            },
            {
              unit: "Percentage",
              vehicle: "Trains",
              geo: "Norway",
              time: 1998,
              values: 4.6,
              x: 1998,
              y: 4.6
            },
            {
              unit: "Percentage",
              vehicle: "Trains",
              geo: "Norway",
              time: 1999,
              values: 5.1,
              x: 1999,
              y: 5.1
            },
            {
              unit: "Percentage",
              vehicle: "Trains",
              geo: "Norway",
              time: 2000,
              values: 4.5,
              x: 2000,
              y: 4.5
            },
            {
              unit: "Percentage",
              vehicle: "Trains",
              geo: "Norway",
              time: 2001,
              values: 4.5,
              x: 2001,
              y: 4.5
            },
            {
              unit: "Percentage",
              vehicle: "Trains",
              geo: "Norway",
              time: 2002,
              values: 4.1,
              x: 2002,
              y: 4.1
            },
            {
              unit: "Percentage",
              vehicle: "Trains",
              geo: "Norway",
              time: 2003,
              values: 4.1,
              x: 2003,
              y: 4.1
            },
            {
              unit: "Percentage",
              vehicle: "Trains",
              geo: "Norway",
              time: 2004,
              values: 4.3,
              x: 2004,
              y: 4.3
            },
            {
              unit: "Percentage",
              vehicle: "Trains",
              geo: "Norway",
              time: 2005,
              values: 4.5,
              x: 2005,
              y: 4.5
            },
            {
              unit: "Percentage",
              vehicle: "Trains",
              geo: "Norway",
              time: 2006,
              values: 4.6,
              x: 2006,
              y: 4.6
            },
            {
              unit: "Percentage",
              vehicle: "Trains",
              geo: "Norway",
              time: 2007,
              values: 4.6,
              x: 2007,
              y: 4.6
            },
            {
              unit: "Percentage",
              vehicle: "Trains",
              geo: "Norway",
              time: 2008,
              values: 4.8,
              x: 2008,
              y: 4.8
            },
            {
              unit: "Percentage",
              vehicle: "Trains",
              geo: "Norway",
              time: 2009,
              values: 4.7,
              x: 2009,
              y: 4.7
            },
            {
              unit: "Percentage",
              vehicle: "Trains",
              geo: "Norway",
              time: 2010,
              values: 4.8,
              x: 2010,
              y: 4.8
            },
            {
              unit: "Percentage",
              vehicle: "Trains",
              geo: "Norway",
              time: 2011,
              values: 4.5,
              x: 2011,
              y: 4.5
            },
            {
              unit: "Percentage",
              vehicle: "Trains",
              geo: "Norway",
              time: 2012,
              values: 4.6,
              x: 2012,
              y: 4.6
            },
            {
              unit: "Percentage",
              vehicle: "Trains",
              geo: "Norway",
              time: 2013,
              values: 4.8,
              x: 2013,
              y: 4.8
            },
            {
              unit: "Percentage",
              vehicle: "Trains",
              geo: "Norway",
              time: 2014,
              values: 4.9,
              x: 2014,
              y: 4.9
            }
          ],
          type: "line"
        }
      ],
      xAxis: {
        type: "linear",
        title: {
          text: "time"
        },
        categories: null
      }
    }
  );
});

$(function () {
  $('#chart_002').highcharts({
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
