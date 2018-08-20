import React, { Component } from 'react';
import { GroceryManagerConsumer } from '../GroceryManager.context';

// Constants
const IMAGE_DIM = 70;

// Styles

const container = {
    flexBasis: "10%",
};

const imageHolder = {
    width: IMAGE_DIM,
    height: IMAGE_DIM,
    margin: "auto",
    backgroundColor: "brown",
    borderRadius: "100%",
}

const text = {
    width: "100%",
    color: "white",
    fontSize: 20,
    textAlign: "center",
}

const styles = { container, imageHolder, text };

class Day extends Component {

    constructor(props) {
        super(props);

        this.state = { imageHolderOverflow: "hidden", zIndex: 0 };
    }

    handleOnMouseEnter = (event) => {
        this.setState({ imageHolderOverflow: "visible", zIndex: 1 })
    }

    handleOnMouseLeave = (event) => {
        this.setState({ imageHolderOverflow: "hidden", zIndex: 0 });
    }

    handleChangeRecipe = (event, recipes) => {
        var recipe = recipes.filter(recipe => recipe.title === event.target.value)[0];

        // Filter returns `undefined` rather than `null`. Need `null` for saving to JSON.
        if(!recipe) {
            recipe = null;
        }

        this.props.handleChangeRecipe(this.props.day, recipe);
        this.setState({ imageHolderOverflow: "hidden" });
    }

    render() {
        const newImageHolder = {...styles.imageHolder, overflow: this.state.imageHolderOverflow};

        return (
            <div style={styles.container}>
                <div style={newImageHolder}>
                    <InnerRecipeCard
                        handleOnMouseEnter={this.handleOnMouseEnter}
                        handleOnMouseLeave={this.handleOnMouseLeave}
                        handleChangeRecipe={this.handleChangeRecipe}
                        recipe={this.props.recipe}
                        zIndex={this.state.zIndex} 
                    />
                </div>
                <div style={styles.text}>{this.props.day}</div>
            </div>
        );
    }
}

const InnerRecipeCard = ({ recipe, zIndex, day, handleOnMouseEnter, handleOnMouseLeave, handleChangeRecipe}) => {
    const paddingValue = 15;

    const holder = {
        backgroundColor: recipe ? "green" : "brown",
        width: 250,
        height: 200,
        position: "relative",
        zIndex: zIndex,
        padding: paddingValue,
        top: -paddingValue,
        left: -paddingValue,
        display: "flex",
        flexDirection: "column"
    }

    const titleDiv = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    }

    const title = {
        color: "white",
        fontSize: 22,
        margin: "auto",
    }

    const image = {
        width: IMAGE_DIM,
        height: IMAGE_DIM,
        borderRadius: "100%",
    }

    var select = {
        color: "#767676",
        position: "relative",
        marginTop: 5
    }

    if (!recipe) {
        select = {...select, top: IMAGE_DIM}
    }

    return (
        <GroceryManagerConsumer>
            {({recipes}) => (
                <div onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} style={holder}>
                    {recipe && <div style={titleDiv}>
                        <img src={recipe.image} style={image}/>
                        <div style={title}>{recipe.title}</div>
                    </div>}
                    
                    <select style={select} onChange={(e) => handleChangeRecipe(e, recipes)}>
                        <option selected style={select} value="Select a Recipe...">Select a Recipe...</option>
                        {recipes.map((mappingRecipe) => (
                            <option 
                                selected={recipe && mappingRecipe.title === recipe.title}
                                id={mappingRecipe.id}
                                value={mappingRecipe.title}>
                                    {mappingRecipe.title}
                            </option>))}
                    </select>
                </div>
            )}
        </GroceryManagerConsumer>
    );
}

export default Day;