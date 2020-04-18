import React, { Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {TrackerInfoContainer} from '../StyledComponents/TrackerInfo';
import * as dashboardActions from '../../../store/actions/dashboardAction';
import {GraphInfoContainer} from '../StyledComponents/GraphInfo';
import { bindActionCreators } from 'redux';


export class HomeContainer extends Component{

  constructor(props) {
    super(props);
    this.state = { 
      since:10,
    };
  }
  
  componentDidMount(){
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); 
    const yyyy = today.getFullYear();

    const currentDate = mm + '/' + dd + '/' + yyyy;
    this.props.actions.countryWideCovidInfo('India',currentDate, this.state.since);
    this.props.actions.countryWideCovidDataList('India', this.state.since);
  }
  render(){
      return(
          <div className={this.props.className}>
            {this.props.covidInfo ?
              <TrackerInfoContainer statistics={this.props.covidInfo} since={this.state.since}/>
              :""
            }
            {this.props.covidDataList && this.props.covidDataList.length > 0?
              <GraphInfoContainer covidDataList={this.props.covidDataList} since={this.state.since}/>
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
    covidDataList: PropTypes.array,
    actions: PropTypes.object,
};

function mapStateToProps(state){
  return {
    covidInfo:state.dashboard.convidInfo,
    covidDataList:state.dashboard.covidDataList,
  };
}

function mapDispatchToProps(dispatch) {
  return{
    actions: bindActionCreators(dashboardActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);