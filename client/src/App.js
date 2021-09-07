import { useState } from 'react';
import './App.css';
import Home from './Components/Home';
import PaintingContext from './Context/PaintingContext';

function App() {
  const [paintingsArray, setPaintingsArray] = useState([
    {
      title: "Mona Lisa",
      artist: "Leonardo da Vinci",
      year: 1503,
      price: "100 Million",
      img: "imageurl"
    },
    {
      title: "Water Lilies",
      artist: "Claude Monet",
      year: 1920,
      price: "20 Million",
      img: "imageurl"
    },
    {
      title: "The Scream",
      artist: "Edvard Munch",
      year: 1893,
      price: "119 Million",
      img: "imageurl"
    }
  ]);

  console.log(paintingsArray);

  return (
    <PaintingContext.Provider value={{ paintingsArray, setPaintingsArray }}>
      <div className="App">
        <Home/>
      </div>
    </PaintingContext.Provider>
  );
}

export default App;
