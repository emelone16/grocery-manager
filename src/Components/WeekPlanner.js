import React, { Component } from 'react';

const weekContainer = {
    width: "100%",
    margin: "auto",
    backgroundColor: "#6b3a31",
    display: "flex",
    justifyContent: "center",
    padding: 10,
}

const weekStyles = { container: weekContainer };

const dayContainer = {
    flexBasis: "10%",
};

const dayImage = {
    width: 70,
    height: 70,
    margin: "auto",
    backgroundColor: "brown",
    borderRadius: "100%",
}

const dayText = {
    width: "100%",
    color: "white",
    fontSize: 20,
    textAlign: "center",
}

const dayStyles = { container: dayContainer, image: dayImage, text: dayText};

class WeekPlanner extends Component {

    constructor(props) {
        super(props);

        this.state = {
            days: {
                "Sunday": {},
                "Monday": {},
                "Tuesday": {},
                "Wednesday": {},
                "Thursday": {},
                "Friday": {},
                "Saturday": {}
            }
        }
    }

    setupDefaultRecipes = () => {
        this.setState({
            days: {
                "Sunday": {},
                "Monday": this.props.recipes[0],
                "Tuesday": this.props.recipes[1],
                "Wednesday": this.props.recipes[2],
                "Thursday": this.props.recipes[3],
                "Friday": this.props.recipes[4],
                "Saturday": {},
            }
        })
    }

    renderDays = () => Object.keys(this.state.days).map((day) => <Day day={day} image={this.state.days[day].image}/>)

    render() {
        return (
            <div onClick={this.setupDefaultRecipes} style={weekStyles.container}>
                {this.renderDays()}
            </div>
        )
    }

}

const Day = ({day, image}) => {
    return (
        <div style={dayStyles.container}>
            <div style={dayStyles.image}>
                {image && <img src={image} style={dayStyles.image}/>}
            </div>
            <div style={dayStyles.text}>{day}</div>
        </div>
    )
} 

export default WeekPlanner;