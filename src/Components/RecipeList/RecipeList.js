import React, { Component } from 'react';
import Recipe from './Recipe';
import { GroceryManagerConsumer } from '../../GroceryManager.context';

// Styles

const container = {
    height: "100vh",
    paddingTop: 24,
    backgroundColor: "#efefef",
    overflowY: "scroll"
}

const styles = { container };

class RecipeList extends Component {

    createRecipes = (recipes) => {
        return recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}/>)
    };

    render() {
        const mergedStyles = {...styles.container, ...this.props.style}

        return (
            <GroceryManagerConsumer>
                {({recipes}) => (
                    <div style={mergedStyles}>{this.createRecipes(recipes)}</div>
                )}
            </GroceryManagerConsumer>
        );
    }
}

export default RecipeList;