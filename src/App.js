import React, { Component } from 'react';
import RecipeList from './Components/RecipeList';
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <RecipeList />
    );
  }
}

export default App;
