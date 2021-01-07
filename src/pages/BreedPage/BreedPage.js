import { GridList, GridListTile, ListSubheader } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImgCard from "../../components/ImgCard/ImgCard";
import './BreedPage.css';

function BreedsPage(props) {
    const { breed } = useParams();
    const [imgList, setImgList] = useState(null);

    useEffect(() => {
        axios.get("https://dog.ceo/api/breed/" + breed + "/images").then(res => {
            const imgs = res.data.message;
            setImgList(imgs);
        });

    },[breed]);

    const buildBreed = () => {
        
        const breedCont = imgList.map( img => <ImgCard breedImg={img} key={img}> breedName={ breed } </ImgCard>);
        return breedCont;
    };

    return (
        imgList ? <div className="p-breed">
            <GridList className="grid-list"  cellHeight={180}>
            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                <ListSubheader component="div" className="breed-header">{ breed }</ListSubheader>
            </GridListTile>
                { buildBreed() }
            </GridList>
        </div> : <div></div>
    );
}

export default BreedsPage;