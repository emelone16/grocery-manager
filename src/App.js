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
  render() {
    return (
      <div style={container}>
        <MainArea style={styles.mainArea} />
        <RecipeList style={styles.recipeList} />
      </div>
    );
  }
}

export default App;
