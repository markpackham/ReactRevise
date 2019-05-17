// A component’s props is an object. It holds information about that component.
import React from "react";
import ReactDOM from "react-dom";
class PropsDisplayer extends React.Component {
  render() {
    const stringProps = JSON.stringify(this.props);

    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{stringProps}</h2>
      </div>
    );
  }
}
// ReactDOM.render goes here:
ReactDOM.render(
  <PropsDisplayer myProp="Hello" />,
  document.getElementById("app")
);

/*
Here’s how to make a component display passed-in information:

1 - Find the component class that is going to receive that information.
2 - Include this.props.name-of-information in that component class’s render method’s return statement.
*/
import React from "react";
import ReactDOM from "react-dom";
class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}!</h1>;
  }
}
ReactDOM.render(<Greeting firstName="Moo" />, document.getElementById("app"));

/*
props is the name of the object that stores passed-in information. this.props refers to that storage object. 
At the same time, each piece of passed-in information is called a prop. This means that props could refer to 
two pieces of passed-in information, or it could refer to the object that stores those pieces of information
*/
//Greetings.js
import React from "react";
export class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.name}!</h1>;
  }
}
//App.js
import React from "react";
import ReactDOM from "react-dom";
import { Greeting } from "./Greeting"; //Want to pass a prop to a <Greeting /> component instance, from an <App /> component instance
class App extends React.Component {
  render() {
    //Create instance of Greeting
    return (
      <div>
        <h1>Hullo and, "Welcome to The Newzz," "On Line!"</h1>
        <Greeting name="Ruby" />
        <article>Latest newzz: where is my phone?</article>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));

//Event Handler in component class
import React from "react";
class Example extends React.Component {
  handleEvent() {
    alert(`I am an event handler.
      If you see this message,
      then I have been called.`);
  }

  render() {
    return <h1 onClick={this.handleEvent}>Hello world</h1>;
  }
}

//Pass an Event Handler as a prop
//You can pass a method in the exact same way that you pass any other information
import React from "react";
import ReactDOM from "react-dom";
import { Button } from "./Button";
class Talker extends React.Component {
  talk() {
    let speech = "";
    for (let i = 0; i < 10000; i++) {
      speech += "blah ";
    }
    alert(speech);
  }

  render() {
    return <Button talk={this.talk} />;
  }
}
ReactDOM.render(<Talker />, document.getElementById("app"));
