// import React, { useState } from 'react';

// const BoxForm = (props) => {

//     ///// Paramaters for box \\\\\
//     const [color, setColor] = useState("");
//     // const [height, setHeight] = useState("");
//     const [width, setWidth] = useState("");

//     const newBox = { color, width, height };

//     const createBox = (e) => {
//         e.preventDefault();
//         const newBox = { color, height=100, width=100 }
//         props.createBox(newBox)
//         setColor("")
//         // setHeight("")
//         // setWidth("")
//     };

//     return (
//         <div>
//             <form onSubmit={addBox}>
//                 <label> Color: </label>
//                 <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
//                 {/* <label> Height: </label>
//                 <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
//                 <label> Width: </label>
//                 <input type="text" value={width} onChange={(e) => setWidth(e.target.value)} /> */}
//                 <input type="submit" value="Add a Box" />
//             </form>
//         </div>
//     )
// }

// export default BoxForm;