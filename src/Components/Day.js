import React, { Component } from 'react';
import { GroceryManagerConsumer } from '../GroceryManager.context';

const container = {
    flexBasis: "10%",
};

const imageHolder = {
    width: 70,
    height: 70,
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

    handleChangeRecipe = (day, recipe) => {
        this.props.handleChangeRecipe(day, recipe);
        this.setState({ imageHolderOverflow: "hidden" });
    }

    render() {
        const newImageHolder = {...styles.imageHolder, overflow: this.state.imageHolderOverflow};

        return (
            <div style={styles.container}>
                <div style={newImageHolder}>
                    {this.props.recipe && <InnerRecipeCard
                        handleOnMouseEnter={this.handleOnMouseEnter}
                        handleOnMouseLeave={this.handleOnMouseLeave}
                        handleChangeRecipe={this.handleChangeRecipe}
                        day={this.props.day}
                        recipe={this.props.recipe}
                        zIndex={this.state.zIndex} 
                    />}
                </div>
                <div style={styles.text}>{this.props.day}</div>
            </div>
        );
    }
}

const InnerRecipeCard = ({ recipe, zIndex, day, handleOnMouseEnter, handleOnMouseLeave, handleChangeRecipe}) => {
    const paddingValue = 15;

    const holder = {
        backgroundColor: "green",
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
    }

    const title = {
        color: "white",
        fontSize: 22,
        margin: "auto",
    }

    const image = {
        width: 70,
        height: 70,
        borderRadius: "100%",
    }

    return (
        <div onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} style={holder}>
            <div style={titleDiv}>
                <img src={recipe.image} style={image}/>
                <div style={title}>{recipe.title}</div>
            </div>
            <input 
                onClick={() => handleChangeRecipe(day, null)}
                type="button"
                value="Change Recipe"/>
        </div>
    );
}

export default Day;