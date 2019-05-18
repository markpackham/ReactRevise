/*
React components will often need dynamic information in order to render. 
For example, imagine a component that displays the score of a basketball game. The score of the game might change over time, 
meaning that the score is dynamic. Our component will have to know the score, a piece of dynamic information, in order to render in a useful way.

There are two ways for a component to get dynamic information: props and state. 
Besides props and state, every value used in a component should always stay exactly the same.
*/

//Unlike props, a component’s state is not passed in from the outside. A component decides its own state.
import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
  // To make a component have state, give the component a state property. This property should be declared inside of a constructor
  constructor(props) {
    super(props);
    this.state = { title: "Best App" };
  }

  render() {
    return <h1>Wow this entire app is just an h1.</h1>;
  }
}

//read a component’s state, use the expression this.state.name-of-property
import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
  // constructor method begins here:
  constructor(props) {
    super(props);
    this.state = { title: "Best App" };
  }

  render() {
    return <h1>{this.state.title}</h1>;
  }
}
ReactDOM.render(<App />, document.getElementById("app"));

//The most common way to call this.setState() is to call a custom function that wraps a this.setState() call
//Any time that you call this.setState(), this.setState() AUTOMATICALLY calls .render() as soon as the state has changed.
import React from "react";
import ReactDOM from "react-dom";
class Mood extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: "good" };
    this.toggleMood = this.toggleMood.bind(this);
  }

  toggleMood() {
    const newMood = this.state.mood == "good" ? "bad" : "good";
    this.setState({ mood: newMood });
  }

  render() {
    return (
      <div>
        <h1>I'm feeling {this.state.mood}!</h1>
        <button onClick={this.toggleMood}>Click Me</button>
      </div>
    );
  }
}
ReactDOM.render(<Mood />, document.getElementById("app"));

import React from "react";
import ReactDOM from "react-dom";
const green = "#39D1B4";
const yellow = "#FFD712";
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: green };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    const newColor = this.state.color == green ? yellow : green;
    this.setState({ color: newColor });
  }

  render() {
    return (
      <div style={{ background: this.state.color }}>
        <h1>Change my color</h1>
        <button onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}
ReactDOM.render(<Toggle />, document.getElementById("app"));
