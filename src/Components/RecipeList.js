import React, { Component } from 'react';
import Recipe from './Recipe';

// Styles

const container = {
    height: "100vh",
    width: 448,
    paddingTop: 24,
    backgroundColor: "#efefef",
    overflowY: "scroll"
}

const styles = { container };

class RecipeList extends Component {

    state = {
        recipes: [
            {
                id: 0,
                title: "Spaghetti",
                blurb: "Italian and delicious",
                image: "https://www.cookingclassy.com/wp-content/uploads/2018/01/instant-pot-spaghetti-12-500x500.jpg"
            }, {
                id: 1,
                title: "Italian Sub",
                blurb: "Also Italian but in sandwich form",
                image: "https://www.landolakes.com/RecipeManagementSystem/media/Recipe-Media-Files/Recipes/Retail/x17/18742-italian-sub-600x600.jpg?ext=.jpg"
            }, {
                id: 2,
                title: "Italian Sub",
                blurb: "Also Italian but in sandwich form",
                image: "https://www.landolakes.com/RecipeManagementSystem/media/Recipe-Media-Files/Recipes/Retail/x17/18742-italian-sub-600x600.jpg?ext=.jpg"
            }, {
                id: 3,
                title: "Italian Sub",
                blurb: "Also Italian but in sandwich form",
                image: "https://www.landolakes.com/RecipeManagementSystem/media/Recipe-Media-Files/Recipes/Retail/x17/18742-italian-sub-600x600.jpg?ext=.jpg"
            }, {
                id: 4,
                title: "Italian Sub",
                blurb: "Also Italian but in sandwich form",
                image: "https://www.landolakes.com/RecipeManagementSystem/media/Recipe-Media-Files/Recipes/Retail/x17/18742-italian-sub-600x600.jpg?ext=.jpg"
            }, {
                id: 5,
                title: "Italian Sub",
                blurb: "Also Italian but in sandwich form",
                image: "https://www.landolakes.com/RecipeManagementSystem/media/Recipe-Media-Files/Recipes/Retail/x17/18742-italian-sub-600x600.jpg?ext=.jpg"
            }, {
                id: 6,
                title: "Italian Sub",
                blurb: "Also Italian but in sandwich form",
                image: "https://www.landolakes.com/RecipeManagementSystem/media/Recipe-Media-Files/Recipes/Retail/x17/18742-italian-sub-600x600.jpg?ext=.jpg"
            }
        ]
    };

    createRecipes = () => {
        return this.state.recipes.map(recipe => <Recipe id={recipe.id} recipe={recipe}/>)
    };

    render() {
        return (
            <div style={styles.container}>{this.createRecipes()}</div>
            
        );
    }
}

export default RecipeList;