import React from 'react';
import './StarWars.css';

const DisplayChar = props => {

    return (
        <div className="character">
            <p class="char-property">Name: {props.char.name}</p> 
            <p class="char-property">Gender: {props.char.gender}</p>
            <p class="char-property">Hair Color: {props.char.hair_color}</p>

        </div>
    )
}

export default DisplayChar;
