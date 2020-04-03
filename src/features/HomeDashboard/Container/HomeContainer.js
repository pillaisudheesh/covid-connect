import React, { Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {TrackerInfoContainer} from '../StyledComponents/TrackerInfo';
import * as dashboardActions from '../../../store/actions/dashboardAction';


export class HomeContainer extends Component{
  
  componentDidMount(){
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); 
    const yyyy = today.getFullYear();

    const currentDate = mm + '/' + dd + '/' + yyyy;
    const since = 10;
    this.props.dispatch(dashboardActions.countryWideCovidInfo('India',currentDate, since));
  }
    render(){
        return(
            <div className={this.props.className}>
              {this.props.covidInfo ?
                <TrackerInfoContainer statistics={this.props.covidInfo} since={10}/>
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