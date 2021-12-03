import React, { useEffect, useState } from "react";
import Cards from "./components/Card/Cards";
import Filter from "./components/Filter/Filter";
import SearchBox from "./components/SearchBox/SearchBox";
import Box from '@mui/material/Box';
import Image from "material-ui-image";
import TextField from "@mui/material/TextField";
import { ShowMore } from "./components/ShowMore/ShowMore";

const App = () => {
    
    const [chows, setChows] = useState({ data:[], loading:true, error:null });
    const url = "https://themealdb.com/api/json/v1/1/search.php?s";
    
    
    const startGetData = async() => {
        
        try {
            setChows({...chows, loading:true});
            const body = await fetch(url,{'Content-Type': 'application/json'});
            const resp = await body.json();
            const { meals } = resp;
            setChows({...chows, data:meals, loading:false});

        } catch (error) {
            setChows({...chows, loading:false, error:error});
        }

    };
    
    useEffect(() => {
        (async() => {
            await startGetData();
        })();
    }, []);
    
    return (
        <>
            <Box sx={{height: "90vh"}}>
                <Image 
                    src="https://thumbs.dreamstime.com/b/assortment-indian-recipes-food-various-traditional-cuisine-top-view-copy-space-panorama-banner-202152020.jpg"
                    imageStyle={{ width: '100vw', height: '90vh' }}
                />                    
            </Box>
            <SearchBox />
            <Box>
                <Filter />
                <Cards/>
            </Box>
            <ShowMore/>
        </>
    );
};

export default App;