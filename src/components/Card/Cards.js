import React from 'react'
import { CardActionArea, Card, CardMedia, CardContent, Typography, Chip, cardClasses, CardActions, Button } from '@mui/material';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

const Cards = () => {
    
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="150"
                    image="set meal image source here"
                    alt="veggie dish"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Set meal name here!
                    </Typography>
                    <Chip icon={<DinnerDiningIcon />} label="put here:Category" variant="outlined" />
                    <Chip icon={<TravelExploreIcon />} label="put here:Area" variant="outlined" />
                    <Typography gutterBottom variant="h5" component="div">
                        Set meal tags here
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        Show more
                    </Button>
                </CardActions>
            </CardActionArea>
        </Card>       
    );
};

export default Cards;