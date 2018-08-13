import React, { Component } from 'react';
import MainArea from './Components/MainArea';
import RecipeList from './Components/RecipeList/RecipeList';
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

const container = {
  display: "flex",
  flexWrap: 'nowrap',
}

const mainArea = {
  flexBasis: "75%"
}

const recipeList = {
  flexBasis: "25%"
}

const styles = { container, mainArea, recipeList };

class App extends Component {

  state = { recipes: []}

  componentDidMount() {
    fetch('http://localhost:4000/api/recipes')
      .then(response => response.json())
      .then(recipes => this.setState({recipes}));
  }

  render() {
    return (
      <div style={container}>
        <MainArea style={styles.mainArea} recipes={this.state.recipes} />
        <RecipeList style={styles.recipeList} recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
