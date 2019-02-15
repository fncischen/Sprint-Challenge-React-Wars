import React from 'react';
import StarWarsCharacterItem from './StarWarsCharacterItem';

class StarWarsCharacterList extends React.Component {
    constructor(props) {
        super(props);
    } 

    render() {

        // test to see what the props are
        console.log(this.props.list);

        return (
            <ul>

            { this.props.list.map(a_character =>
                <StarWarsCharacterItem character={a_character} />
            )

            }
            </ul>
        );
    }
}

export default StarWarsCharacterList;