import { GridListTile } from "@material-ui/core";

import './ImgCard.css';

function ImgCard(props) {

    const { breedImg, breedName } = props;

    return (
        <GridListTile className ="c-img-card">
            <img src = { breedImg } alt={ breedName }/> 
        </GridListTile>
    );
}

export default ImgCard;