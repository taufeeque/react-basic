import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <h3>&copy; 2016 {this.props.company}</h3>
            </div>
        );
    }
}

export default Footer;