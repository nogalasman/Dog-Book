import { Card, CardActionArea, CardContent, CardMedia, GridListTile, GridListTileBar, Typography } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import './BreedCard.css';

function BreedCard(props) {

    const { breed } = props;
    const [img, setImg] = useState("https://www.purina.ca/sites/g/files/auxxlc601/files/dogBreedPlaceholder.png");


    useEffect(() => {
        axios.get("https://dog.ceo/api/breed/" + breed +
            "/images/random").then(res => {
            const newImg = res.data.message;
            setImg(newImg);
        });

    }, [breed]);

    return (
        // <Card className="c-breed-card">
        //     <CardActionArea>
        //         <CardMedia
        //         className="card-media"
        //         image={img}
        //         title={breed}
        //         />
        //         <CardContent>
        //             <Typography gutterBottom variant="h5" component="h2">
        //                 {breed}
        //             </Typography>
        //         </CardContent>
        //     </CardActionArea>
        // </Card>
        <GridListTile className ="c-breed-card">
            <img src = { img } alt = { breed }/> 
            <GridListTileBar title = { breed }/> 
        </GridListTile>
    );
}

export default BreedCard;