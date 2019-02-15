import React from 'react';

const StarWarsCharacterItem = props => {
    return (
        <div className="characterItem">
            <h2>{props.character.name}</h2>

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
        
        </div>

        </div>
    )
}

export default StarWarsCharacterItem;