import { useState, useEffect } from 'react';
import './App.css';
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
