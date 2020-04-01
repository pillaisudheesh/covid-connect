import React, { Component} from 'react';
import PropTypes from 'prop-types';
import {WorldWide} from '../Components/WorldWide';

export class HomeContainer extends Component{
    render(){
        return(
            <div className={this.props.className}>
        <WorldWide />
        </div>
        );
    }
}

HomeContainer.propTypes = {
    className: PropTypes.string,
};


export default HomeContainer;