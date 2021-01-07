import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import './BreedForm.css';


function BreedForm(props) {

    const { onSearch } = props;
    const [searchFilter, setSearchFilter] = useState("");

    function onSearchBreed() {
        onSearch(searchFilter);
    }

    return(
        <div className="c-breeds-form">
            <form noValidate autoComplete="off">
                <TextField id="standard-basic" label="filter by name" onChange={(e) => setSearchFilter(e.target.value)}/>
                <Button variant="contained" onClick={onSearchBreed}>Search</Button>
            </form>
        </div>
    );
}

export default BreedForm;