import React, { useEffect, useState } from "react";
import Cards from "./components/Card/Cards";
import Filter from "./components/Filter/Filter";
import SearchBox from "./components/SearchBox/SearchBox";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ShowMore from "./components/ShowMore/ShowMore";

const App = () => {
    
    const url = "https://themealdb.com/api/json/v1/1/search.php?s";
    const [dishes, setDishes] = useState({data:[], loading:true, error:null});    
    const [categories, setCategories] = useState([]); 
    const [areas, setAreas] = useState([]);           

    const startGetData = async() => {
        try {
            setDishes({...dishes, loading:true});
            const body = await fetch(url,{'Content-Type': 'application/json'});
            const resp = await body.json();
            const { meals } = resp;
            setDishes({...dishes, data:meals, loading:false});

            const category = [];
            meals.forEach(
                meal => {
                    category.push(meal.strCategory)
            });
            setCategories([...new Set(category)].map(i => ({
                slug: i,
                isActive: false
            })));
            const area = [];
            meals.forEach(
                meal => {
                    area.push(meal.strArea)
            });
            setAreas([...new Set(area)].map(i => ({
                slug: i,
                isActive: false
            })));
        
        } catch (error) {
            setDishes({...dishes, loading:false, error});
        };
    };
            
    useEffect(() => {
        (async() => {
            await startGetData();
        })();
    }, []);
    
    return (
        <>
            <Paper sx={{height: "90vh"}}>
                <img 
                    alt="background-meal-dish"
                    src="https://thumbs.dreamstime.com/b/assortment-indian-recipes-food-various-traditional-cuisine-top-view-copy-space-panorama-banner-202152020.jpg"
                    width="100%" height="auto"
                />                    
            </Paper>
            <SearchBox />
            <Box sx={{ display: "flex", maxWidth: "1100px", marginX: "auto", justifyContent:"center"}}>
                <Filter 
                    categories={categories}
                    areas={areas}
                />
                <Cards dishes={dishes}/>
            </Box>
            <Box sx={{display: "flex", justifyContent: "center"}}>
                <ShowMore/>
            </Box>
        </>
    );
};

export default App;