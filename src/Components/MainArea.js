import React, { Component } from 'react';
import WeekPlanner from './WeekPlanner';

class MainArea extends Component {

    render() {
        const mergedStyles = {...this.props.style}

        return (
            <div style={mergedStyles}>
                <WeekPlanner />
            </div>
        );
    }
}

export default MainArea;