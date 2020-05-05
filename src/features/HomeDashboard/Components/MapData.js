import React, { Component } from 'react';
import { Card, CardContent, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'


const stamenTonerTiles = 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png';
const stamenTonerAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const mapCenter = [21, 78];
const zoomLevel = 4;

export class MapData extends Component {
    render() {
        return (
            <div className={this.props.className}>
             <Map style={{ width: '839px', height: '419px' }}
                    center={mapCenter}
                    zoom={zoomLevel}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                </Map>
            </div>
        );
    }
}

MapData.propTypes = {
    className: PropTypes.string,
    covidDataList: PropTypes.array,
};

export default MapData;