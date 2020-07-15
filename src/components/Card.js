import React from 'react';

const Card = ({movie}) => {
    const {Title, year, imdbID, Poster} = movie
    return (
        <div>
            <p>{Title}</p>

        </div>
    );
};

export default Card;