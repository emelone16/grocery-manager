import React, { Component } from 'react';
import Day from './Day';
import { GroceryManagerConsumer } from '../GroceryManager.context';

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
    
    changeRecipe = (day, recipe) => {
        const days = {...this.state.days};
        days[day] = recipe;

        this.setState({ days });
    }

    renderDays = (days, handleChangeRecipe) => Object.keys(days).map((day) => <Day day={day} recipe={days[day]} handleChangeRecipe={handleChangeRecipe}/>)

    render() {
        return (
            <GroceryManagerConsumer>
                {({days, changeRecipeForDay}) => (
                    <div style={styles.container}>
                        {this.renderDays(days, changeRecipeForDay)}
                    </div>
                )}
            </GroceryManagerConsumer>
        )
    }

}

export default WeekPlanner;