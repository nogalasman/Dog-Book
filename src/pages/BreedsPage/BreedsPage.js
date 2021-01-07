import { Container, GridList, GridListTile } from '@material-ui/core';
import { useState } from 'react';
import BreedCard from '../../components/BreedCard/BreedCard';
import BreedForm from '../../components/BreedForm/BreedForm';
import './BreedsPage.css';
import Alert from '@material-ui/lab/Alert';

function BreedsPage(props) {
    const { breeds } = props;
    const [searchBreed, setSearchBreed] = useState("");

    function searchBy(name) {
        console.log("searchBy: "+name);
        setSearchBreed(name);
    }

    const buildBreeds = () => {
        
        let data = breeds;
        if (searchBreed !== "") {
            data = data.filter(function (breed) {
                return breed.name.toLowerCase().includes(searchBreed.toLowerCase());
              });
        }
        const breedsCont = (data.length === 0) ? <GridListTile><Alert severity="error">No breeds were found</Alert></GridListTile> : data.map( breed => <BreedCard breed={breed.name} key={breed.id}> </BreedCard>);
        return breedsCont;
    };

    return (
        <div className="p-breeds">
            {/* <Container> */}
                {
                <BreedForm filterBy={ name => searchBy(name) } onSearch={(name) => searchBy(name)}></BreedForm> }
                <GridList className="grid-list"  cellHeight={180}>
                { buildBreeds() }
                </GridList>
                
            {/* </Container> */}
        </div>
    );
}

export default BreedsPage;