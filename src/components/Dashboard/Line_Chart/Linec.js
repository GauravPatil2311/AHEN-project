import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import './Linec.css'

class Linec extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        name: "Rides",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }],
      options: {
        chart: {
          height: 550,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'Progress by Month',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'],
            opacity: 0.8
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
      },
    };
  }

  render() {
    return (
      <div className='linc_chart-body'>
        <div id="line_chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default Linec;



