import React from 'react';

const SearchBox = () => {
        
    const onHandleChange = (event) => {
        console.log(event.target.value);
    };
    
    return (

        <form
            className="Form"
            name="search box"
        >
            <input 
                className="Form__input"
                type="text"     
                placeholder="Search by meal name, ingredient or first letter..."
                onChange={onHandleChange}
            />
            <button
                className="Button Button--contained Button--contained--sm"
                type="submit"
            >
                Search
            </button>
        </form>
    );
};

export default SearchBox;