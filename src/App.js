import React, { Component } from "react";
// import logo from "./logo.svg";
import "./Style/App.css";
import Display from "./components/Display.js";
import Recipe from "./components/Recipe.js";
import Header from "./components/Header.js";
import Search from "./components/Search";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome The Recipe Hub</h1>
          <div> A project designed by </div>
          <h2>Daniel </h2>
          <h2>Maseeh </h2>
          <h2> && Michelle </h2>
        </header>
        <p className="App-intro">
          To get started, click on the recipe that you want to browse.
          
          <Header name="Header" />
          <Display name="The dish you selected" />
          <Recipe name="Burger" />
          <Search name="Search" />
        </p>
      </div>
    );
  }
}

export default App;
