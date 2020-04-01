import React, { Component} from 'react';
import PropTypes from 'prop-types';

export class HeaderContainer extends Component{
    render(){
        return(<div className={this.props.className}>
            <div>Covid-Connecgt</div>
        </div>);
    }
}

HeaderContainer.propTypes = {
    className: PropTypes.string,
};

export default HeaderContainer;