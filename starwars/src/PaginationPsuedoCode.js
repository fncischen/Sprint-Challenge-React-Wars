
// step 0 : on the this.State object, create an attribute which tracks the currentPageNumber the
// CharacterList is at. Name the variable: currentPageNumber, and set equal to 1. 

// step 1 // create turnPageLeft & turnPageRight methods which
// changes the Page Number (using this.setState("currentPageNumber = +/- 1")) of the CharacterList 

    //  step 1.1. on the same method, use string interpolation to change the page number of the link to retrieve the next /
    // previous page of , and call this.getCharacters().
    
    //  step 1.2 i.e. this.getCharacters('https://swapi.co/api/people ${this.state.currentPageNumber}');

// step 2 // create Left & Right Arrow Button components, and render them on the App render() method. 

    // step 2.1 // attach event handlers on the Left & Right Arrow Button components which reference the App component and "turnPageLeft"
    // and "turnPageRight" methods.

    // step 2.2 // every time you click on the left arrow, or right arrow, the pages will change. 