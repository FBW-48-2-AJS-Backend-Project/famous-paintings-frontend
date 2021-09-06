import './App.css';
import Home from './Components/Home';
import PaintingContext from './Context/PaintingContext';

function App() {

  return (
    <PaintingContext.Provider>
      <div className="App">
        <Home/>
      </div>
    </PaintingContext.Provider>
  );
}

export default App;
