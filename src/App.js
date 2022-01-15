import { useState } from 'react';
import './App.css';
import BoxForm from './components/BoxForm';
import RenderBoxes from './components/RenderBoxes';

function App() {

  ///// Array of box objects \\\\\
  const [boxes, setBoxes] = useState([
    { color: "red", height: 100, width: 100 },
    { color: "gold", height: 100, width: 100 },
    { color: "green", height: 100, width: 100 },
  ]);
  console.log(boxes)

  const addBox = (newBox) => {
    setBoxes([
      ...boxes, newBox
    ])
  }

  return (
    <div className="App">

        <h3>Box Generator</h3>
        <BoxForm addBox={addBox} />
        <RenderBoxes boxes={boxes} />

    </div>
  );
}

export default App;

{/* { 
  boxes.map( (box, idx) => {
    return <RenderBoxes key={idx} boxes={boxes} /> 
  })
  } */}