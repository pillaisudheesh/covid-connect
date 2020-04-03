import React,{Component}  from 'react';
import {Line} from 'react-chartjs-2';
import { Card, CardContent, Grid, Typography, Avatar, LinearProgress } from '@material-ui/core';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

export class GraphInfo extends Component {
    render(){
        return(
            <Grid container spacing={4}>
                <Grid item lg={12} sm={12} xl={12} xs={12}>
                <Card className="card-height">
                        <CardContent>
                        <div>
                 <Line data={data} />
            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            
        );

    }
}