import React from 'react';
import './StarWars.css';
import DisplayFilm from './DisplayFilm';

const DisplayChar = props => {

    return (
        <div className="character">
           <p>Name: {props.char.name}</p> 
            <p>Gender: {props.char.gender}</p>
            <p>Hair Color: {props.char.hair_color}</p>
            {/* <div class="films">
                {props.char.films.map(film => (
                    <DisplayFilm film={film} />
                ))}
            </div> */}
        </div>
    )
}

export default DisplayChar;
