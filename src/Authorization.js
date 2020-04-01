import React from 'react';
import AsyncLoad from './AsyncLoad';

const Authorization = (componentFunc, allowedRoles, loggedInUserRole, backToHome) => (props) => {
    let isAuthorized = true;
    if (isAuthorized) {
      return (<AsyncLoad {...props} moduleProvider={componentFunc}></AsyncLoad>);
    }
};
  

export default Authorization;