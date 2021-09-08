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
  }, []);

  // CRUD Methods
  const addPainting = ( paintingAdded ) => {
    const postRequest = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify( paintingAdded )
    };
    const fetchCall = async () => {
      const newPainting = await ( await fetch("http://localhost:5000/paintings", postRequest)).json();
      console.log( newPainting );
    };

    fetchCall();
    
    const paintingsArrCopy = [...paintingsArray, paintingAdded];
    setPaintingsArray( paintingsArrCopy );
  };


  const deletePainting = ( paintingDeleted ) => {
    const postRequest = {
      method: "DELETE",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify( paintingDeleted )
    };
    const fetchCall = async () => {
      const deletedPainting = await ( await fetch(`http://localhost:5000/paintings/${paintingDeleted._id}`, postRequest)).json();
      console.log( deletedPainting );
    };

    fetchCall();

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
