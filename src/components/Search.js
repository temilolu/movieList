import React from 'react';

const Search = ({handleChange, handleSubmit}) => {
    return (
        <React.Fragment>
            <input type='text' placeholder='Search..' onChange={handleChange} />
            <button onClick={handleSubmit}>Fire!!!</button>
        </React.Fragment>
    );
};

export default Search;