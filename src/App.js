import React, { Component } from 'react';
import { Route, withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import Login from './Login';
// import AuthRedirect from '../components/authRedirect';
// import AppointmentList from './AppointmentList';
import { logoutUser } from './store/actions/authAction';
import Home from './Home';


export class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <AuthRedirect exact path="/appointments" auth={this.props.auth} component={AppointmentList} /> */}
        <Route exact path='/' component={Home} />
        {/* <Route path='/login' component={Login} /> */}
       
      </div>
    );
  }
}
App.propTypes = {
  auth: PropTypes.bool,
  logoutUser: PropTypes.func,
};

export const mapStateToProps = (state) => ({
  auth: state.auth.authenticated,
})

export default withRouter(connect(mapStateToProps, { logoutUser })(App));
