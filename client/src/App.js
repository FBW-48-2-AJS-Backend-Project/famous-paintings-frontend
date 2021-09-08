import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Admin from './Components/Admin';
import Home from './Components/Home';
import PaintingContext from './Context/PaintingContext';

function App() {
  const [paintingsArray, setPaintingsArray] = useState([]);
  const [painting, setPainting] = useState({});
  const [togglePainting, setTogglePainting] = useState(false);
  const [paintingsSearch, setPaintingsSearch] = useState([]);
  const [reset, setReset] = useState(true);

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
    <PaintingContext.Provider value={{ paintingsArray, setPaintingsArray, addPainting, deletePainting, painting, setPainting, togglePainting, setTogglePainting, paintingsSearch, setPaintingsSearch, reset, setReset}}>
      
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
