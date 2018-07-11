import React, { Component } from "react";
// import logo from "./logo.svg";
import "./Style/App.css";
import Display from "./components/Display.js";
import Recipe from "./components/Recipe.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to The Recipe Hub</h1>
        </header>

        <p className="App-intro">
          To get started, search for a recipe!

          <form action="/search/" method="GET">
            <input style={{ margin:"10px auto", display: "block", width: "140px" }} type="text" name="title" placeholder="Name of dish or ingredient" />
            <input type="submit" value="Submit" class="btn" />
          </form>
          <Display name="The dish you selected" />
          <Recipe name="Burger" />
        </p>
      </div>
    );
  }
}

export default App;
