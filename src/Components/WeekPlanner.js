import React, { Component } from 'react';
import Day from './Day';

const container = {
    width: "100%",
    margin: "auto",
    backgroundColor: "#6b3a31",
    display: "flex",
    justifyContent: "center",
    padding: 10,
    paddingTop: 30,
}

const styles = { container };

class WeekPlanner extends Component {

    constructor(props) {
        super(props);

        this.state = {
            days: {
                "Sunday": null,
                "Monday": null,
                "Tuesday": null,
                "Wednesday": null,
                "Thursday": null,
                "Friday": null,
                "Saturday": null
            }
        }
    }

    changeRecipe = (day, recipe) => {
        const days = {...this.state.days};
        days[day] = recipe;

        this.setState({ days });
    }

    setupDefaultRecipes = () => {
        this.setState({
            days: {
                "Sunday": null,
                "Monday": this.props.recipes[0],
                "Tuesday": this.props.recipes[1],
                "Wednesday": this.props.recipes[2],
                "Thursday": this.props.recipes[3],
                "Friday": this.props.recipes[4],
                "Saturday": null,
            }
        })
    }

    renderDays = () => Object.keys(this.state.days).map((day) => <Day day={day} recipe={this.state.days[day]} handleChangeRecipe={this.changeRecipe}/>)

    render() {
        return (
            <div style={styles.container}>
                {this.renderDays()}
                <input type="button" value="asdf" onClick={this.setupDefaultRecipes} />
            </div>
        )
    }

}

export default WeekPlanner;