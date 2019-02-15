# Sprint Challenge: React - Star Wars

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored ReactJS, Functional Components and Class Components. In your challenge for this Sprint, you will demonstrate proficiency by creating an application that uses ReactJS to consume live data retrieved from the World Wide Web and style that data nicely on the page.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency ReactJS Fundamentals and your command of the concepts and techniques in the Function Components and Class Components.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager.

## Description

In this challenge, create a web page that presents a styled list of Star Wars characters. Being able to render out data to a web page is a large part of what JavaScript developers do, this challenge assesses your ability to achieve such a task.

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [ ] What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

ReactJS is a Javascript library that allows for the creation of dynamic user interfaces. React JS allows users to create reusable code for rendering UI, and managing how data is rendered throughout the life-cycle of the browser through the use of components - which store data about how a browser will render UI data. 

ReactJS is a declarative programming language - meaning, it abstracts all the complex logic ("We are at 123 Maple Street") so that programmers do not need to write the same logic manage data to render UI ("To get to 123 Maple Street, turn left, go straight, etc.").

- [ ] What does it mean to _think_ in react?

To think in "React" is to see front end development as a modular process - each part of a website is based on
a hierarchy of components, which carry information / data about how user interface is rendered. 

The hierarchy of compoments allow for modular scripting - meaning, you have the ability to separate static versus dynamic data, and you can control how that data flows
throughout the User Interface, from the parent components all the way to its child components. Similarly, data can also flow upward, from children components, all the way to the parent components, allowing for the ability for one (or several) components to change other components in a website.

In laymans terms, this means that if I am using a Salesforce CRM app, when I input data on one part of the website, that data can be rendered on another part of the website, based on how the component hierarchy is set up. Without ReactJS, there would be far more time to program this same data flow.

Thinking in ReactJS is a seamless way of organizing UI - it is like a tree with branching leaves that allow for the communication of data throughout the website.

- [ ] Describe state.

State refers to muttable data on the website that can be changed, based on event handlers / event listeners / callback functions assigned to any component on the website.
The user has the ability to change how this data is rendered on the browser, through these event handlers, listeners, and call back functions.

State can be seen as a snapshot in time - each time a frame is being rendered on the browser, the user has an ability to change the state data.   

- [ ] Describe props.

Props are immutable static data that cannot be changed through the entire lifecycle of the browser. Props represent read-only data specific to the component. 

## Project Set Up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add PM as collaborator on Github.
- [ ] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [ ] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [ ] Change directories into `./starwars` (`cd starwars`) and run `yarn install` to retrieve all needed dependencies.
- [ ] Once you have installed the _node_modules_, run `yarn start or` to get your server up and running.
- [ ] With the server up and running, open Chrome and head over to `localhost:3000` and view your beautiful app. Maybe it's not _that_ pretty... _yet_, your goal is to ensure this project becomes a thing of beauty.
Follow these steps for completing your project.
- [ ] Implement the project on this Branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request
- [ ] PM then will count the HW as done by  merging the branch back into master.

Please note:

- `componentDidMount()` calls an open sourced API inside of `App.js` and saves the results of that API on state.
- Upon opening the `App.js` file you'll see that there is code written out that looks like this:

```js
componentDidMount() {
  this.getCharacters('https://swapi.co/api/people');
}

getCharacters = URL => {
  fetch(URL)
    .then(res => {
      return res.json();
    })
    .then(data => {
      this.setState({ starwarsChars: data.results });
    })
    .catch(err => {
      throw new Error(err);
    });
};
```

- You don't need to understand what that code is doing fully, other than the fact that it is setting your state with Star Wars Character Data.
- View your `App` component's `state` by opening the Chrome `React Dev Tools` to peek at the data set. At this point you will know what to do from here.

Your data set will look like this:

![Star Wars state data](starwars_data.png)

- Based on knowledge gained over the past Sprint

## Minimum Viable Product

Your finished project must include all of the following requirements:

- [ ] A list of Star Wars Characters rendered to the screen.
- [ ] You must have at least one list element for each star wars character in the data set.
- [ ] The list elements must all be styled beyond the basic

In your solution, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts to much and does not.

## Stretch Problems

- [ ] Build a pagination system that will allow you to load the next page of data

- Take note on the data that's coming back from the server call in our `getCharacters`
- console.log() the data coming back from the server.
- Notice that there are `next` `previous` fields that give you a URL.
- You have a function that will get chars called `getCharacters` you'll want to just call this function and supply it with the proper fields. You'll need to set this up on state to do this.

```js
 .then(data => {
    console.log(data); <-- Log data here to find the fields you will need.
    this.setState({ starwarsChars: data.results });
  })
```

- [ ] Build another app from scratch that looks very similar to this one. Inside of your main `App` component fetch some data in this same fashion from this url `https://dog.ceo/dog-api/#all` you'll have to follow the documentation at that website and figure out how to change up the code you've seen here in this Star Wars app in order to properly fetch the data and store it on Component State.

- Be mindful of the `fetch API` that is now built into most modern browsers [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).
- Your data coming back from Dogs should be formatted in JSON format.
