import React, { Component } from 'react';
import { Route, withRouter,Switch } from 'react-router';
import Authorization from './Authorization';
import Header from './features/Header';


const Home = async() => {
  const component = await import('./features/HomeDashboard');
  console.log(component.default)
  return component.default;
};

export class App extends Component {

  appJsx = () => {
    return(
      <Switch>
        <Route exact path='/' component={Authorization(Home)} />
      </Switch>
    );
  }
  render() {
    return (
      <div>
        <Header />
       {this.appJsx()}
      </div>
    );
  }
}

export default withRouter(App);
