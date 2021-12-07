import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

const Cards = ({ dishes }) => {
    return (
        <Box 
            sx={{ 
                display: "flex", 
                flexWrap: "wrap", 
                columnGap: "1.5rem", 
                rowGap:"3rem", 
                justifyContent: "flex-start"
            }}>
            {dishes.data.map(dish => 
                <Card 
                    key={dish.idMeal}
                    sx={{width:250, boxShadow: 3}}
                >
                    <CardMedia
                        component="img"
                        image={dish.strMealThumb}
                        alt={dish.strMeal}
                        sx={{height:300, width: 250}}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{mb: "15px"}}>{dish.strMeal}</Typography>
                        <Box
                            sx={{display: "flex", justifyContent: "flex-start"}}
                        >
                            <Chip icon={<DinnerDiningIcon />} label={dish.strCategory} variant="outlined" sx={{mr: 1}}/>
                            <Chip icon={<TravelExploreIcon />} label={dish.strArea} variant="outlined"/>
                        </Box>
                        <Typography 
                            gutterBottom 
                            variant="h7" 
                            component="div" 
                            sx={{mt: 1}}
                        >
                            {dish.strTags ? dish.strTags : dish.strMeal}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{marginX: "16px"}}>
                        <Button size="small" color="primary" sx={{width: "100%"}} variant="outlined">SHOW MORE</Button>
                    </CardActions>
                </Card>       
            )}
        </Box>
    );
};

export default Cards;