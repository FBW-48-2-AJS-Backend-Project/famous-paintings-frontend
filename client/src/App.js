import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Admin from './Components/Admin';
import Home from './Components/Home';
import PaintingContext from './Context/PaintingContext';

function App() {
  const [paintingsArray, setPaintingsArray] = useState([]);

  // const dummyPaintings = [
  //   {
  //     title: "Mona Lisa",
  //     artist: "Leonardo da Vinci",
  //     year: 1503,
  //     price: "100 Million",
  //     img: "imageurl"
  //   },
  //   {
  //     title: "Water Lilies",
  //     artist: "Claude Monet",
  //     year: 1920,
  //     price: "20 Million",
  //     img: "imageurl"
  //   },
  //   {
  //     title: "The Scream",
  //     artist: "Edvard Munch",
  //     year: 1893,
  //     price: "119 Million",
  //     img: "imageurl"
  //   }
  // ];

  useEffect(() => {
    async function fetchData() {
      const paintingData = await ( await fetch("http://localhost:5000/paintings")).json();
      setPaintingsArray( paintingData );
    };
    fetchData();
  });

  // CRUD Methods
  const addPainting = ( paintingAdded ) => {
    const paintingsArrCopy = [...paintingsArray, paintingAdded];
    setPaintingsArray( paintingsArrCopy );
  };

  const deletePainting = ( paintingDeleted ) => {
    const paintingsArrCopy = paintingsArray.filter(item => {
      return item._id !== paintingDeleted._id 
    });
    setPaintingsArray( paintingsArrCopy );
  };

  const updatePainting = ( paintingUpdated ) => {
    
  };

  console.log(paintingsArray);

  return (
    <PaintingContext.Provider value={{ paintingsArray, setPaintingsArray, addPainting, deletePainting }}>
      
        <Router>
          <Switch>
            <Route path="/" exact component= { Home }/>
            <Route path="/admin" component={ Admin }/>
          </Switch>
        </Router>
      
    </PaintingContext.Provider>
  );
}

export default App;
