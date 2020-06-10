import React, { Component } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Card, CardContent, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import LineGraph from './LineGraph';


export class GraphInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      covidInfoList: [],
      activeCases: [],
      deathsPerDay: [],
      recoveryPerDay: [],
      newCases:[],
      dates:[],
      recovery:[]
    };
  }

  componentDidMount() {
    const dataList = this.props.covidDataList;
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

    const dates = dataList.map((data, index) => {
      const dateSince = new Date(data.date);
      const dd = String(dateSince.getDate()).padStart(2, '0');
      const mm = monthNames[dateSince.getMonth()];
      const modifedDate = mm + '-' + dd;
      return modifedDate;
    });
    const activeCases = dataList.map((data, index) => {
      return data.confirmed;
    });
    const deathPerDay = dataList.map((data, index) => {
      return data.deaths;
    });
    const recovery = dataList.map((data, index) => {
      return data.recovery;
    });
    const newCases = dataList.map((data, index) => {
      return data.newCases;
    })
    const activeCaseData = {
      labels: dates, //dates.slice(dates.length - 10, dates.length),
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
          data: activeCases //activeCases.slice(activeCases.length - 10, activeCases.length)
        }
      ]
    };
    const recoveryPerDay = {
      labels: dates,
      datasets: [
        {
          label: 'Covid Data - Recovery per day',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: '#43a047',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#43a047',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#43a047',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: recovery //activeCases.slice(activeCases.length - 10, activeCases.length)
        }
      ]
    };
    const newCasesPerDay = {
      labels: dates,
      datasets: [
        {
          label: 'Covid Data - New Cases per day',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: '#1e88e5',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#1e88e5',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#1e88e5',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: newCases //activeCases.slice(activeCases.length - 10, activeCases.length)
        }
      ]
    };
    const deaths = {
      labels: dates, //dates.slice(dates.length - 10, dates.length),
      datasets: [
        {
          label: 'Covid Data -Deaths per day',
          backgroundColor: '#e53935',
          borderColor: '#e53935',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: '#e53935',
          data: deathPerDay //deathPerDay.slice(deathPerDay.length - 10, deathPerDay.length)
        }
      ]
    };
    this.setState(() => ({
      covidInfoList: dataList,
      activeCases: activeCaseData,
      deathsPerDay: deaths,
      recoveryPerDay: recoveryPerDay,
      newCases :newCasesPerDay
    }));
  }
  render() {
    return (
      <div className={this.props.className}>
        <Grid container spacing={4}>
          <Grid item lg={6} sm={12} xl={6} xs={12}>
            <Card className="card-height">
              <CardContent>
                <div>
                <LineGraph data={this.state.activeCases}/> 
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={6} sm={12} xl={6} xs={12}>
            <Card className="card-height">
              <CardContent>
                <div>
                <Bar
                  data={this.state.deathsPerDay} options={{
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
                  }}
                />
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={6} sm={12} xl={6} xs={12}>
            <Card className="card-height">
              <CardContent>
                <div>
            <LineGraph data={this.state.recoveryPerDay}/> 
             </div>
              </CardContent>
            </Card>
           
          </Grid> 
          <Grid item lg={6} sm={12} xl={6} xs={12}>
            <Card className="card-height">
              <CardContent>
                <div>
                <LineGraph data={this.state.newCases}/> 
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