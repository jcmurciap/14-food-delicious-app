import React, { useEffect, useState } from "react";
import Cards from "./components/Card/Cards";
import Filter from "./components/Filter/Filter";
import SearchBox from "./components/SearchBox/SearchBox";
import Box from '@mui/material/Box';
import Image from "material-ui-image";
import ShowMore from "./components/ShowMore/ShowMore";

const App = () => {
    
    const URL = "https://themealdb.com/api/json/v1/1/search.php?s";
    const [dishes, setDishes] = useState({ data:[], loading:true, error:null });
    const [categories, setCategories] = useState([]);
    const [areas, setAreas] = useState([]);

    const startGetData = async(url) => {
        try {
            setDishes({...dishes, loading:true});
            const body = await fetch(url,{'Content-Type': 'application/json'});
            const resp = await body.json();
            const { meals } = resp;
            setDishes({...dishes, data:meals, loading:false});
        } catch (error) {
            setDishes({...dishes, loading:false, error:error});
        }

        let category = [];
        dishes.data.forEach(
            dish => {
                category.push(dish.strCategory)
        });
        setCategories([...new Set(category)].map(i => ({
            slug: i,
            isActive: false
        })));    
        
        let area = [];
        dishes.data.forEach(
            dish => {
                area.push(dish.strArea)
        });
        setAreas([...new Set(area)].map(i => ({
            slug: i,
            isActive: false
        })));
    };
    
    useEffect(() => {
        (async() => {
            await startGetData(URL);
        })();
    }, []);
    
    return (
        <>
            <Box sx={{height: "90vh"}}>
                <Image 
                    src="https://thumbs.dreamstime.com/b/assortment-indian-recipes-food-various-traditional-cuisine-top-view-copy-space-panorama-banner-202152020.jpg"
                    imageStyle={{ width: '98vw', height: '90vh' }}
                />                    
            </Box>
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