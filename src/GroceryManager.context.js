import React, { Component } from 'react';

const GroceryManagerContext = React.createContext();

export class GroceryManagerProvider extends Component {

    constructor(props) {
        super(props);

        this.state = { recipes: [] }
    }

    componentDidMount() {
        fetch('http://localhost:4000/api/recipes')
            .then(response => response.json())
            .then(recipes => this.setState({
                recipes
            }));
    }

    render() {
        const { children } = this.props;

        return (
            <GroceryManagerContext.Provider
                value = {{recipes: this.state.recipes}}
            >
                {children}
            </GroceryManagerContext.Provider>
        )
    }

}

export const GroceryManagerConsumer = GroceryManagerContext.Consumer;