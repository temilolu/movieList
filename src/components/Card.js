import React from 'react';

const Card = ({movie}) => {
    const {Title, year, imdbID, Poster} = movie
    return (
        <div>
            <p>{Title}</p>
            <p>{imdbID}</p>
            <img src={Poster} alt={Title}/>
            <p>{year}</p>
        </div>
    );
};

export default Card;