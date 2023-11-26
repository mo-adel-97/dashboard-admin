import React from "react";
import ReactApexChart from "react-apexcharts";
import "./ApexChart.css"
class ApexChartOverview extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
            name: 'Within One Day',
            data: [83, 44],
          }, {
            name: 'Within Tow Day',
            data: [7, 39]
          }, {
            name: 'Within Four Day',
            data: [5, 11]
          }, {
            name: 'More Than Four Days',
            data: [4, 6]
          }],
        options: {
          chart: {
            type: 'bar',
            stacked: true,
            stackType: '100%'
          },
          plotOptions: {
            bar: {
              horizontal: true,
            },
          },
          xaxis: {
            categories: ["Response Time", "Response Time"],
            labels: {
              style: {
                colors: ['#CD5C5C'], // Specify your desired colors here
              },
            },
          },yaxis: {
            labels: {
              style: {
                colors: ['#CD5C5C'], // Specify your desired colors here
              },
            },
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return val + "K"
              }
            }
          },
          fill: {
            opacity: 1
          
          },
          legend: {
            position: 'top',
            horizontalAlign: 'left',
            offsetX: 40
          }
        },
      
      
      };
    }

    render() {
      return (
        <div>
            <h5 style={{fontSize:"15px",paddingLeft:"15px",paddingTop:"5px"}}>Response & Response Time</h5>
            <ReactApexChart  options={this.state.options} series={this.state.series} type="bar" height={155} />
        </div>
      );
    }
  }
  export default ApexChartOverview