import React, { Component } from 'react';
import {ProgressBar as BarComponent } from 'react-bootstrap';

class ProgressBar extends Component {
    render() {
        const style = {
            height: 5,
            width: "100%",
            position: "absolute",
            left: 0,
            top: 0
        };

        return (
            <div>
                <BarComponent now={this.props.progress} bsStyle="info" style={style}/>                
            </div>
        );
    }
}

export default ProgressBar