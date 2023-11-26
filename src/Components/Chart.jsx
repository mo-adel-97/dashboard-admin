import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexChart extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'series',
          data: [0, 220, 180, 400, 360, 480, 300]
        },],
        options: {
          chart: {
            height: 350,
            type: 'area'
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          xaxis: {
            labels:{
               style:{
                colors:['#CD5C5C','#CD5C5C','#CD5C5C','#CD5C5C','#CD5C5C','#CD5C5C','#CD5C5C']
               }
            },
            type: 'string',
            categories: ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          },yaxis: {
            labels:{
                style:{
                 colors:['#CD5C5C']
                }
             }
            ,grid: {
              show: true,
            },
          },
        },
      
      
      };
    }

  

    render() {
      return (
        

  <div id="chart" style={{padding:"8px"}}>
    <h6 style={{fontSize:"15px"}}>Tickets OverView</h6>
  <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={200} />
     </div>

      );
    }
  }
  export default ApexChart;