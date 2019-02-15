import React from 'react';

const StarWarsCharacterItem = props => {
    return (
        <div className="characterItem">
            <h2>{props.character.name}</h2>

        </div>
    )
}

export default StarWarsCharacterItem;