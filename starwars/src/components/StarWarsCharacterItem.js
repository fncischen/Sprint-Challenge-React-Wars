import React from 'react';
// use slice method 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

// attempted to do this, but did not work, for some reason. Would love clarity.
//             {Object.keys(props.character).forEach( (key) =>                 
            
// {
//    return <div className="itemBlock">

//        <b>{key}:</b> {props.character[key]}

//    </div>;
// }
// )
//

const StarWarsCharacterItem = props => { 

    return (
        <div className="characterItem">
        
        <div className = "itemHeader">
            <h2>{props.character.name}</h2>
        </div>

        <div className="itemBlock">
       <b> Gender: </b> {props.character.gender}
        </div>

        <div className="itemBlock">
       <b> Height: </b> {props.character.height}
        </div>

        <div className="itemBlock">
        <b> Mass: </b> {props.character.mass}
        </div>

        <div className="itemBlock">
        <b> Hair-Color: </b> {props.character.hair_color}
        </div>

        <div className="itemBlock">
        <b> Eye-Color: </b> {props.character.eye_color}
        </div>

        <div className="itemBlock">
        <b> Skin Color: </b> {props.character.skin_color}
        </div>

        </div>
    )
}

export default StarWarsCharacterItem;