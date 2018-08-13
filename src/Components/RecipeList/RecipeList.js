import React, { Component } from 'react';
import Recipe from './Recipe';

// Styles

const container = {
    height: "100vh",
    paddingTop: 24,
    backgroundColor: "#efefef",
    overflowY: "scroll"
}

const styles = { container };

class RecipeList extends Component {

    constructor() {
        super();

        this.state = {
            recipes: []
        }
    }

    createRecipes = () => {
        return this.props.recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}/>)
    };

    render() {
        const mergedStyles = {...styles.container, ...this.props.style}

        return (
            <div style={mergedStyles}>{this.createRecipes()}</div>
            
        );
    }
}

export default RecipeList;