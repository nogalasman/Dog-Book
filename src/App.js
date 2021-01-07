
import './App.css';
import { AppBar, Button, Toolbar } from '@material-ui/core';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BreedModel from './model/BreedModel';
import BreedsPage from './pages/BreedsPage/BreedsPage';

function App() {
  const [breedsData, setBreedsData] = useState(null);

  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/list/all").then(res => {
          var i = 0;
          setBreedsData(Object.keys(res.data.message).map(name => new BreedModel(i++,name)));
        });
    },[]);

  return (
    <div className="App">
      {
        <AppBar position="static">
        <Toolbar>
          <Button variant="contained" color="primary" href="#/">Dog Book</Button>
          <Button variant="contained" color="primary" href="#/breeds">Breeds</Button>
        </Toolbar>
      </AppBar>
      }
      {/* <p>blabla</p> */}
      <HashRouter>
        <Switch>
          <Route exact path="/"><HomePage/></Route>
          <Route exact path="/breeds"><BreedsPage breeds={breedsData}/></Route>
          {/* <Route exact path="/breeders/:breed"><MoviesPage breeders={breedersData}/></Route> */}
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
