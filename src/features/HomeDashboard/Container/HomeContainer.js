import React, { Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {TrackerInfoContainer} from '../StyledComponents/TrackerInfo';
import * as dashboardActions from '../../../store/actions/dashboardAction';


export class HomeContainer extends Component{
  
  componentDidMount(){
    this.props.dispatch(dashboardActions.countryWideCovidInfo('India'));
  }
    render(){
        return(
            <div className={this.props.className}>
              {this.props.covidInfo ?
                <TrackerInfoContainer statistics={this.props.covidInfo} />
                :""
              }
        </div>
        );
    }
}

HomeContainer.propTypes = {
    className: PropTypes.string,
    covidInfo: PropTypes.object,
    dispatch: PropTypes.func,
};

function mapStateToProps(state){
  return {
    covidInfo:state.dashboard.convidInfo
  };
}

export default connect(mapStateToProps)(HomeContainer);