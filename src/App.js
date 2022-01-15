import { useState } from 'react';
import './App.css';
// import BoxForm from './components/BoxForm';
import RenderBoxes from './components/RenderBoxes';

function App() {

  ///// Array of box objects \\\\\
  const [boxes, setBoxes] = useState([
    { color: "red", height: 100, width: 100 },
    { color: "gold", height: 100, width: 100 },
    { color: "green", height: 100, width: 100 },
    { color: "blue", height: 100, width: 100 },

  ]);
  console.log(boxes)

  return (
    <div className="App">
      <fieldset>
        <legend>Box Generator</legend>
        {/* <BoxForm createBox={createBox}/> */}
        {/* { 
          boxes.map( (box, idx) => {
            return <RenderBoxes key={idx} boxes={boxes} /> 
          })
          } */}
        <RenderBoxes  boxes={boxes} />
      </fieldset>
    </div>
  );
}

export default App;
