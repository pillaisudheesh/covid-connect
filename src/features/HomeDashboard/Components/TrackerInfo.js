import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Grid, Typography, Avatar, LinearProgress } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AlarmIcon from '@material-ui/icons/Alarm';



const TrackerInfo = props => {
    const { className, statistics, since, ...rest } = props;
    const totalCases = statistics.confirmed + statistics.recovered + statistics.deceased;
    const deceasedPercentage = Math.round(statistics.deceased * 100 / totalCases);
    const recoveredPercentage = Math.round(statistics.recovered * 100 / totalCases);
    const oldTotalData = statistics.oldConfirmed + statistics.oldRecovered + statistics.oldDeceased;
    const activePercentage = Math.round((statistics.confirmed - statistics.oldConfirmed) * 100/totalCases);
    const activeTotalPercentage = Math.round((totalCases - oldTotalData) * 100/totalCases);
    return (
        <div className={className}>
            <Grid container spacing={4}>
                <Grid item lg={12} sm={12} xl={12} xs={12}>
                <Card  {...rest} className="card-height">
                        <CardContent>
                            <div>Covid Statistics from India</div>
                            <div className="difference">
                                <Typography
                                    className="differenceValue"
                                    variant="body2">
                                    Source
                                 </Typography>
                                <Typography variant="caption">
                                 www.mohfw.gov.in
                                 </Typography>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                    <Card  {...rest} className="card-height">
                        <CardContent>
                            <Grid container justify="space-between">
                                <Grid item>
                                    <Typography
                                        className="title"
                                        color="textSecondary"
                                        gutterBottom
                                        variant="body2">
                                        ACTIVE CASES
                                    </Typography>
                                    <Typography variant="h3">{statistics.confirmed}</Typography>
                                </Grid>
                                <Grid item>
                                    <Avatar className="avatar">
                                        <LocalHospitalIcon className="icon" />
                                    </Avatar>
                                </Grid>
                            </Grid>
                            <div className="difference">
                                <ArrowUpwardIcon className="differenceIcon-upward" />
                                <Typography
                                    className="differenceValue"
                                    variant="body2">
                                    {activePercentage}%
                                 </Typography>
                                <Typography variant="caption">
                                    Since {since} days
                                 </Typography>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                <Card  {...rest} className="card-height">
                        <CardContent>
                            <Grid container justify="space-between">
                                <Grid item>
                                    <Typography
                                        className="title"
                                        color="textSecondary"
                                        gutterBottom
                                        variant="body2">
                                        DECEASED
                                    </Typography>
                                    <Typography variant="h3">{statistics.deceased}</Typography>
                                </Grid>
                                <Grid item>
                                    <Avatar className="avatar-deceased">
                                        <FavoriteIcon className="icon" />
                                    </Avatar>
                                </Grid>
                            </Grid>
                            <div className="difference">
                            {/* <ArrowDownwardIcon className="differenceIcon" /> */}
                                <Typography
                                    className="differenceValue"
                                    variant="body2">
                                    {deceasedPercentage}%
                                 </Typography>
                                <Typography variant="caption">
                                    of the total affected
                                 </Typography>
                                
                            </div>
                            <div>
                            <LinearProgress
                                className='progress'
                                value={deceasedPercentage}
                                variant="determinate"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                <Card  {...rest} className="card-height">
                        <CardContent>
                            <Grid container justify="space-between">
                                <Grid item>
                                    <Typography
                                        className="title"
                                        color="textSecondary"
                                        gutterBottom
                                        variant="body2">
                                        RECOVERED
                                    </Typography>
                                    <Typography variant="h3">{statistics.recovered}</Typography>
                                </Grid>
                                <Grid item>
                                    <Avatar className="avatar-recovered">
                                        <FavoriteIcon className="icon" />
                                    </Avatar>
                                </Grid>
                            </Grid>
                            <div className="difference">
                                <Typography
                                    className="differenceValue"
                                    variant="body2">
                                    {recoveredPercentage}%
                                 </Typography>
                                <Typography variant="caption">
                                    of the total affected
                                 </Typography>
                            </div>
                            <div>
                            <LinearProgress
                                className='progress'
                                value={recoveredPercentage}
                                variant="determinate"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                <Card  {...rest} className="card-height">
                        <CardContent>
                            <Grid container justify="space-between">
                                <Grid item>
                                    <Typography
                                        className="title"
                                        color="textSecondary"
                                        gutterBottom
                                        variant="body2">
                                        TOTAL
                                    </Typography>
                                    <Typography variant="h3">{totalCases}</Typography>
                                </Grid>
                                <Grid item>
                                    <Avatar className="avatar-total">
                                        <AlarmIcon className="icon" />
                                    </Avatar>
                                </Grid>
                            </Grid>
                            <div className="difference">
                                <ArrowUpwardIcon className="differenceIcon-upward" />   
                                <Typography
                                    className="differenceValue"
                                    variant="body2">
                                    {activeTotalPercentage}%
                                 </Typography>
                                <Typography variant="caption">
                                    Since {since} days
                                 </Typography>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

TrackerInfo.propTypes = {
    className: PropTypes.string,
};

export default TrackerInfo;