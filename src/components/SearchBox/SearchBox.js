import TextField from '@mui/material/TextField';
import React from 'react';

const SearchBox = () => {
        
    
    return (
        <TextField 
            id="outlined-basic" 
            label="Search by meal name, ingredient or first letter..." 
            variant="outlined"
            sx={{ 
                width: '40%', 
                top: -300, left: 450, 
                backgroundColor: "whitesmoke",
                borderRadius: '5px',
                boxShadow: 100,
                fontFamily: 'Open Sans', // TODO
            }} 
        />
    );
};

export default SearchBox;