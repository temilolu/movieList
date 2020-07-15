import React from 'react';

const Search = ({handleChange}) => {
    return (
        <React.Fragment>
            <input type='text' placeholder='Search..' onChange={handleChange} />
        </React.Fragment>
    );
};

export default Search;