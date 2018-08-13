import React, { Component } from 'react';
import WeekPlanner from './WeekPlanner';

const container = {
    backgroundColor: "#32496d"
}

const styles = { container };

class MainArea extends Component {

    render() {
        const mergedStyles = {...this.props.style, ...styles.container}

        return (
            <div style={mergedStyles}>
                <WeekPlanner recipes={this.props.recipes}/>
            </div>
        );
    }
}

export default MainArea;