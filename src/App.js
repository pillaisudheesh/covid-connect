import React, { Component } from 'react';
import { Route, withRouter,Switch } from 'react-router';
import { ThemeProvider } from '@material-ui/styles';
import Authorization from './Authorization';
import Header from './features/Header';
import theme from './theme';


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
      <ThemeProvider theme={theme}>
        <Header />
       {this.appJsx()}
      </ThemeProvider>
    );
  }
}

export default withRouter(App);
