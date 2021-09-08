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
    // define request options
    const postRequest = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify( paintingAdded )
    };
    // make fetch call using above defined options
    const fetchCall = async () => {
      const newPainting = await ( await fetch("http://localhost:5000/paintings", postRequest)).json();
      console.log( newPainting );
    };

    fetchCall();
    
    // assign newly created painting to the state/context
    const paintingsArrCopy = [...paintingsArray, paintingAdded];
    setPaintingsArray( paintingsArrCopy );
  };


  const deletePainting = ( paintingDeleted ) => {
    // define request options
    const deleteRequest = {
      method: "DELETE",
      headers: {"Content-Type": "application/json"}
    };
    // make fetch call using above defined options
    const fetchCall = async () => {
      const deletedPainting = await ( await fetch(`http://localhost:5000/paintings/${paintingDeleted._id}`, deleteRequest)).json();
      console.log( deletedPainting );
    };

    fetchCall();

    // filter deleted painting from the state/context
    const paintingsArrCopy = paintingsArray.filter(item => {
      return item._id !== paintingDeleted._id 
    });
    setPaintingsArray( paintingsArrCopy );
  };

  const updatePainting = ( paintingUpdated ) => {
    console.log("this is updated -->", paintingUpdated);
    
    // define request options
    const putRequest = {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify( paintingUpdated )
    };
    // make fetch call using above defined options
    const fetchCall = async () => {
      const updatedPainting = await ( await fetch(`http://localhost:5000/paintings/${paintingUpdated._id}`, putRequest)).json();
      console.log( updatedPainting );
    };

    fetchCall();
    
    // update the painting in the state/context
    const paintingsArrCopy = paintingsArray.map(item => item._id === paintingUpdated._id ? paintingUpdated : item);
    
    setPaintingsArray( paintingsArrCopy );
  };


  return (
    <PaintingContext.Provider value={{ paintingsArray, setPaintingsArray, addPainting, deletePainting, painting, setPainting, togglePainting, setTogglePainting, paintingsSearch, setPaintingsSearch, reset, setReset, updatePainting }}>
      
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
