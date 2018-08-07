import React, { Component } from 'react';

class WeekPlanner extends Component {

    state = {
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        meals: {
            "Sunday": "Spaghetti",
            "Monday": "Chili",
            "Tuesday": "Tacos",
            "Wednesday": "Italian Sub",
            "Thursday": "Quesadillas",
            "Friday": "Burritos",
            "Saturday": "Steak",
        }
    }

    renderDays = () => this.state.days.map((day) => <Day day={day} meal={this.state.meals[day]}/>)

    render() {
        return (
            <div>
                Weekly Planner
                {this.renderDays()}
            </div>
        )
    }

}

const Day = ({day, meal}) => {
    return (
        <div>
            <span>{day}: </span>
            <span>{meal}</span>
        </div>
    )
} 

export default WeekPlanner;