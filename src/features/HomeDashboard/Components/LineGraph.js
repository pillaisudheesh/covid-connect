import React from 'react';
import { Line } from 'react-chartjs-2';

export default function LineGraph (props) {
      return (
        <Line data={props.data} options={{
            scales: {
              xAxes: [{
                ticks: {
                  min: 0,
                  maxTicksLimit: 10
                }
              }],
              yAxes: [{
                ticks: {
                  min: 0,
                  maxTicksLimit: 5
                }
              }],
            }
          }}/>
      );

}
