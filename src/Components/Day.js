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
        backgroundColor: recipe ? "white" : "brown",
        width: 300,
        position: "relative",
        zIndex: zIndex,
        top: -paddingValue,
        left: -paddingValue,
        display: "flex",
        flexDirection: "column",
        borderRadius: 3
    }

    const titleDiv = {
        backgroundColor: recipe ? '#4286f4': "brown",
        display: 'inline',
        alignItems: "center",
        padding: paddingValue,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3
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

    const plus = {
        width: 70,
        height: IMAGE_DIM,
        fontSize: 40,
        color: "white",
        textAlign: "center",
        display: "inline-block"
    }

    var select = {
        position: "relative",
        marginLeft: 10,
        width: 150,
        fontSize: 22,
        color: "white",
        backgroundColor: recipe ? '#4286f4' : 'brown',
        outline: "none",
        border: "0px solid white",
    }

    const option = {
        backgroundColor: "white",
        color: "black"
    }

    return (
        <GroceryManagerConsumer>
            {({recipes}) => (
                <div onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} style={holder}>
                    <div style={titleDiv}>
                        {recipe && <img src={recipe.image} style={image}/>}
                        {!recipe && <div style={plus}>+</div>}

                        <select style={select} onChange={(e) => handleChangeRecipe(e, recipes)}>
                        <option selected style={{color: '#767676', backgroundColor: "white"}} value="Select a Recipe...">Select a Recipe...</option>
                        {recipes.map((mappingRecipe) => (
                            <option 
                                selected={recipe && mappingRecipe.title === recipe.title}
                                id={mappingRecipe.id}
                                value={mappingRecipe.title}
                                style={option}
                            >
                                {mappingRecipe.title}
                            </option>))}
                        </select>
                        {/* <div style={title}>{recipe.title}</div> */}
                    </div>
                </div>
            )}
        </GroceryManagerConsumer>
    );
}

export default Day;