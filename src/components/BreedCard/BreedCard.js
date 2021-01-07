import { GridListTile, GridListTileBar } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import './BreedCard.css';
import { Redirect } from 'react-router-dom';

function BreedCard(props) {

    const { breed, toggleImg } = props;
    const [img, setImg] = useState("https://www.purina.ca/sites/g/files/auxxlc601/files/dogBreedPlaceholder.png");
    const [redirectTo, setRedirectTo] = useState("");

    useEffect(() => {
        axios.get("https://dog.ceo/api/breed/" + breed +
            "/images/random").then(res => {
            const newImg = res.data.message;
            setImg(newImg);
        });

    },[breed, toggleImg]);

    if (redirectTo) {
        return <Redirect to={redirectTo}/>
    } else {
        return (
            <GridListTile className ="c-breed-card">
                <img src = { img } alt = { breed }  onClick={() => setRedirectTo("/breeds/" + breed)} /> 
                <GridListTileBar title = { breed }/>  
            </GridListTile>
        );
    }
}

export default BreedCard;