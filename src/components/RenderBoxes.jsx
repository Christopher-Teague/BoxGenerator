import React from 'react';

///// props = boxes passed from app.js \\\\\ 
const RenderBoxes = (props) => {
    console.log(props)

///// Deconstrict props *must match key* \\\\\
    const { boxes } = props;

    return (

        <div className="d-inline-flex flex-wrap">

            {
    ///// for each box in boxes -> return styled div \\\\\
                ///// include key at index of object \\\\\
                console.log("*** test ***"),
                boxes.map((box, idx) => {
                    return <div key={idx} style={{
                        backgroundColor: box.color,
                        height: box.height,
                        width: box.width,
                        margin: 10,
                    }} />
                })
            }

        </div>
    )
}

export default RenderBoxes;






// <div className="container-sm p-3">

//     <div className="d-flex flex-row justify-content-around flex-wrap">
//     {JSON.stringify(propBoxes[0])}
//         {test}

//     </div>
// </div>
// propBoxes.map((box, idx) => <p>{idx} {box.color}</p>)

{/* // const Boxes = (props) => {
// console.log(props)
// console.log(props.boxes)

//     return (
//         <p>{JSON.stringify(props.boxes)} </p>
//     )
// } */}


