import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import { loaderComponent } from './utils/helper';


export class AsyncLoad extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      Component: null,
    };
  }

  UNSAFE_componentWillMount() {
    if (!this.state.Component) {
      this.props.moduleProvider().then((Component) => {
        this.setState({ Component });
      }
      );
    }
  }

  render() {
    const { Component } = this.state;

    return (
      <div>
        {Component ? <Component/> : null}
      </div>
    );
  }
}

AsyncLoad.propTypes = {
  moduleProvider: PropTypes.func,
};

export default AsyncLoad;