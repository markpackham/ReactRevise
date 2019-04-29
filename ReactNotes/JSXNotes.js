//className
import React from "react";
import ReactDOM from "react-dom";
const myDiv = <div className="big">I AM A BIG DIV</div>;
ReactDOM.render(myDiv, document.getElementById("app"));


//ALWAYS close tags like <br />
const profile = (
    <div>
      <h1>I AM JENKINS</h1>
      <img src="images/jenkins.png" >
      <article>
        I LIKE TO SIT
        <br/>
        JENKINS IS MY NAME
        <br/>
        THANKS HA LOT
      </article>
    </div>
  );
</div>


//JSX & JavaScript
import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(
    //You need {} for the JavaScript to work so it prints "5" instead of "2 + 3"
  <h1>{2 + 3}</h1>,
  document.getElementById('app')
);

//Use variables
import React from 'react';
import ReactDOM from 'react-dom';
const theBestString = 'tralalalala i am da best';
ReactDOM.render(<h1>{theBestString}</h1>, document.getElementById('app'));


//On Click
import React from 'react';
import ReactDOM from 'react-dom';
function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}
const kitty = (
	<img 
    onClick={makeDoggy}
		src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg" 
		alt="kitty" />
);
ReactDOM.render(kitty, document.getElementById('app'));


//IF statement
import React from 'react';
import ReactDOM from 'react-dom';
let message;
if (user.age >= drinkingAge) {
  message = (
    <h1>
      Hey, check out this alcoholic beverage!
    </h1>
  );
} else {
  message = (
    <h1>
      Hey, check out these earrings I got at Claire's!
    </h1>
  );
}
ReactDOM.render(
  message, 
  document.getElementById('app')
);


//Ternary Operator
import React from 'react';
import ReactDOM from 'react-dom';
function coinToss () {
  // Randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}
const pics = {
  kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
  doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};
const img = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />;
ReactDOM.render(
	img, 
	document.getElementById('app')
);


//&& and ! (! means NOT)
import React from 'react';
import ReactDOM from 'react-dom';
// judgmental will be true half the time.
const judgmental = Math.random() < 0.5;
const favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Sushi Burrito</li>
      <li>Rhubarb Pie</li>
      <li>Nacho Cheez Straight Out The Jar</li>
      <li>Broiled Grapefruit</li>
      { !judgmental && <li>Nacho Cheez Straight Out The Jar</li>}
    </ul>
  </div>
);
ReactDOM.render(
	favoriteFoods, 
	document.getElementById('app')
);


// .map()  create a list of JSX elements
import React from 'react';
import ReactDOM from 'react-dom';
const people = ['Rowe', 'Prevost', 'Gare'];
const peopleLis = people.map(person =>
  // expression goes here:
  <li>{person}</li>
);
// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'));


//keys
/*
key is a JSX attribute. The attribute’s name is key. The attribute’s value should be something unique, similar to an id attribute.

keys don’t do anything that you can see! React uses them internally to keep track of lists. 
If you don’t use keys when you’re supposed to, React might accidentally scramble your list-items into the wrong order.

Not all lists need to have keys. A list needs keys if either of the following are true:

The list-items have memory from one render to the next. For instance, when a to-do list renders, each item must “remember” whether it was checked off. 
The items shouldn’t get amnesia when they render.

A list’s order might be shuffled. For instance, a list of search results might be shuffled from one render to the next.
*/
import React from 'react';
import ReactDOM from 'react-dom';
const people = ['Rowe', 'Prevost', 'Gare'];
const peopleLis = people.map((person, i) =>
  // Remember key value must be unique
  <li key={'person_' + i}>{person}</li>
);
// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'));


//Not using JSX
//the following ugly code below is the same as JSX, const greatestDivEver = <div>i am div</div>;
const greatestDivEver  = React.createElement(
    "div",
    null,
    "i am div"
  );