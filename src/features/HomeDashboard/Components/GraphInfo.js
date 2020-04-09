import React,{Component}  from 'react';
import {Line} from 'react-chartjs-2';
import { Card, CardContent, Grid, Typography, Avatar, LinearProgress } from '@material-ui/core';
import PropTypes from 'prop-types';


export class GraphInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      covidInfoList: [],
      data: [],
    };
   }

  componentDidMount() {
    const dataList = this.props.covidDataList;
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May","June","July", "Aug", "Sept", "Oct", "Nov","Dec"];
    
    const dates = dataList.map((data, index) => {
      const dateSince = new Date(data.date);
      const dd = String(dateSince.getDate()).padStart(2, '0');
      const mm = monthNames[dateSince.getMonth()];
      const modifedDate = mm + '-' + dd ;
      return modifedDate;
    });
    const activeCases = dataList.map((data, index) => {
      return data.confirmed;
    })
    const data = {
      labels: dates.slice(dates.length-10, dates.length),
      datasets: [
        {
          label: 'Covid Data -Active Cases',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: '#fb8c00',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#fb8c00',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#fb8c00',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: activeCases.slice(activeCases.length-10, activeCases.length)
        }
      ]
    };
    this.setState(() => ({
      covidInfoList : dataList,
      data: data
    }));
  }
  render(){
      return(
        <div className={this.props.className}>
          <Grid container spacing={4}>
              <Grid item lg={9} sm={12} xl={12} xs={12}>
              <Card className="card-height">
                      <CardContent>
                      <div>
                <Line data={this.state.data} />
          </div>
                      </CardContent>
                  </Card>
              </Grid>
          </Grid>
        </div>
      );

  }
}

GraphInfo.propTypes = {
  className: PropTypes.string,
  covidDataList: PropTypes.array,
};

export default GraphInfo;