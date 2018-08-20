import React, { Component } from 'react';

const GroceryManagerContext = React.createContext();

export class GroceryManagerProvider extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            recipes: [],
            days: {}
        }
    }

    componentDidMount() {
        fetch('http://localhost:4000/api/recipes')
            .then(response => response.json())
            .then(recipes => this.setState({recipes}));

        fetch('http://localhost:4000/api/days')
            .then(response => response.json())
            .then(days => this.setState({days}));
    }

    changeRecipeForDay = (day, recipe) => {
        const days = {...this.state.days};
        days[day] = recipe;

        this.setState({ days });

        fetch('http://localhost:4000/api/days', {
            method: 'post',
            body: JSON.stringify(days),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(response => response).then(data => console.log("Success?"));
    }

    render() {
        const { children } = this.props;

        return (
            <GroceryManagerContext.Provider
                value = {{
                    recipes: this.state.recipes,
                    days: this.state.days,
                    changeRecipeForDay: this.changeRecipeForDay
                }}
            >
                {children}
            </GroceryManagerContext.Provider>
        )
    }

}

export const GroceryManagerConsumer = GroceryManagerContext.Consumer;