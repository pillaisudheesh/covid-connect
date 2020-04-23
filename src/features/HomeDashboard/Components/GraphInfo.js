import React, { Component } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Card, CardContent, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';


export class GraphInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      covidInfoList: [],
      activeCases: [],
      deathsPerDay: []
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
    })
    const deathPerDay = dataList.map((data, index) => {
      return data.deaths;
    })
    const activeCaseData = {
      labels: dates.slice(dates.length - 10, dates.length),
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
          data: activeCases.slice(activeCases.length - 10, activeCases.length)
        }
      ]
    };
    const deaths = {
      labels: dates.slice(dates.length - 10, dates.length),
      datasets: [
        {
          label: 'Covid Data -Deaths per day',
          backgroundColor: '#e53935',
          borderColor: '#e53935',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: '#e53935',
          data: deathPerDay.slice(deathPerDay.length - 10, deathPerDay.length)
        }
      ]
    };
    this.setState(() => ({
      covidInfoList: dataList,
      activeCases: activeCaseData,
      deathsPerDay: deaths
    }));
  }
  render() {
    return (
      <div className={this.props.className}>
        <Grid container spacing={4}>
          <Grid item lg={6} sm={12} xl={12} xs={12}>
            <Card className="card-height">
              <CardContent>
                <div>
                  <Line data={this.state.activeCases} />
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={6} sm={12} xl={12} xs={12}>
            <Card className="card-height">
              <CardContent>
                <div>
                <Bar
                  data={this.state.deathsPerDay}
                />
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