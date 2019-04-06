# Answers

1.  What is React JS and what problems does it try and solve?

ReactJS is a Javascript library that allows for the creation of dynamic user interfaces. 

1.  What does it mean to _think_ in react?

To think in "React" is to see front end development as a modular process - each part of a website is based on
a series of components, which carry information / data about the user interface.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A class/stateful component carries information / data that can be subject to change based on the user interaction of the website,
whereasthe functional/presentational component carries information about how a website looks, and is usually static. 

1.  Describe state.

State refers to muttable data on the website that can be changed, based on event handlers / event listeners / callback functions assigned to any component on the website.
The user has the ability to change how this data is rendered on the browser, through these event handlers, listeners, and call back functions.

State can be seen as a snapshot in time - each time a frame is being rendered on the browser, the user has an ability to change the state data.   

1.  Describe props.

Props are immutable static data that cannot be changed through the entire lifecycle of the browser. Props represent read-only data specific to the component. 