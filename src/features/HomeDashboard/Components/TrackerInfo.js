import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AlarmIcon from '@material-ui/icons/Alarm';



const TrackerInfo = props => {
    const { className, statistics, ...rest } = props;

    return (
        <div className={className}>
            <Grid container spacing={4}>
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
                                <ArrowDownwardIcon className="differenceIcon" />
                                <Typography
                                    className="differenceValue"
                                    variant="body2">
                                    12%
                                 </Typography>
                                <Typography variant="caption">
                                    Since last month
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
                                <ArrowDownwardIcon className="differenceIcon" />
                                <Typography
                                    className="differenceValue"
                                    variant="body2">
                                    12%
                                 </Typography>
                                <Typography variant="caption">
                                    Since last month
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
                                <ArrowDownwardIcon className="differenceIcon" />
                                <Typography
                                    className="differenceValue"
                                    variant="body2">
                                    12%
                                 </Typography>
                                <Typography variant="caption">
                                    Since last month
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
                                        TOTAL
                                    </Typography>
                                    <Typography variant="h3">{statistics.confirmed + statistics.recovered}</Typography>
                                </Grid>
                                <Grid item>
                                    <Avatar className="avatar-total">
                                        <AlarmIcon className="icon" />
                                    </Avatar>
                                </Grid>
                            </Grid>
                            <div className="difference">
                                <ArrowDownwardIcon className="differenceIcon" />
                                <Typography
                                    className="differenceValue"
                                    variant="body2">
                                    12%
                                 </Typography>
                                <Typography variant="caption">
                                    Since last month
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