/*
A component is a small, reusable chunk of code that is responsible for one job. That job is often to render some HTML.
Every component must come from a component class.
A component class is like a factory that creates components. If you have a component class, then you can use that class to produce as many components as you want.
*/

//Example of a Component
import React from "react";
import ReactDOM from "react-dom";
class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}
ReactDOM.render(<MyComponentClass />, document.getElementById("app"));

//import React Library (JSX won't work without it)
import React from "react";

//import React DOM
//the DOM is used in React applications, but it isn’t part of React. After all, the DOM is also used in countless non-React applications.
import ReactDOM from "react-dom";

//Component Class
import React from "react";
import ReactDOM from "react-dom";
class MyComponentClass extends React.Component {}

/*
A render method is a property whose name is render, and whose value is a function. 
The term “render method” can refer to the entire property, or to just the function part.
*/
//Render method
import React from "react";
import ReactDOM from "react-dom";
class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

//Component Instance (like creating an object of a class)
import React from "react";
import ReactDOM from "react-dom";
class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}
// we create this instance from the class
<MyComponentClass />;

//Render the Component via ReactDOM.render
import React from "react";
import ReactDOM from "react-dom";

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}
ReactDOM.render(<MyComponentClass />, document.getElementById("app"));

//Logic in Render Function
import React from "react";
import ReactDOM from "react-dom";
const friends = [
  {
    title: "Yummmmmmm",
    src:
      "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys!  Wait Up!",
    src:
      "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src:
      "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg"
  }
];
class Friend extends React.Component {
  render() {
    let friend = friends[0];
    return (
      <div>
        <h1>{friend.title}</h1>
        <img src={friend.src} />
      </div>
    );
  }
}
ReactDOM.render(<Friend />, document.getElementById("app"));

//Conditional Render function
import React from "react";
import ReactDOM from "react-dom";
class TodaysPlan extends React.Component {
  render() {
    let task;
    if (!apocalypse) {
      task = "learn React.js";
    } else {
      task = "run around";
    }

    return <h1>Today I am going to {task}!</h1>;
  }
}
ReactDOM.render(<TodaysPlan />, document.getElementById("app"));

//this
import React from "react";
import ReactDOM from "react-dom";
class MyName extends React.Component {
  // name property goes here:
  get name() {
    return "Rybu";
  }
  render() {
    //use "this" to pull up get name
    return <h1>My name is {this.name}.</h1>;
  }
}
ReactDOM.render(<MyName />, document.getElementById("app"));

//event listener onclick
import React from "react";
import ReactDOM from "react-dom";
class Button extends React.Component {
  scream() {
    alert("AAAAAAAAHHH!!!!!");
  }
  render() {
    return <button onClick={this.scream}>AAAAAH!</button>;
  }
}
ReactDOM.render(<Button />, document.getElementById("app"));

//Exported Component
import React from "react";
//Export is here
export class NavBar extends React.Component {
  render() {
    const pages = [
      "home",
      "blog",
      "pics",
      "bio",
      "art",
      "shop",
      "about",
      "contact"
    ];
    const navLinks = pages.map(page => {
      return <a href={"/" + page}>{page}</a>;
    });
    return <nav>{navLinks}</nav>;
  }
}
//Import the NavBar component above
import React from "react";
import ReactDOM from "react-dom";
//here is our compontent, don't bother including a ".js" if it is a JavaScript file
import { NavBar } from "./NavBar";
class ProfilePage extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
}
//Render our ProfilePage component which has the NavBar component inside it
ReactDOM.render(<ProfilePage />, document.getElementById("app"));
