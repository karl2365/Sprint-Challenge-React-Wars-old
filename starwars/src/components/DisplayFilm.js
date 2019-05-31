import React from 'react';
import './StarWars.css';

const DisplayFilm = props => {

    return (
        <div className="character">
            {props.film}  
        </div>
    )
}

export default DisplayFilm;