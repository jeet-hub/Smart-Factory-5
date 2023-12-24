import React from 'react';
import TopNav from '../components/TopNav';
import MyForm from './MyForm';
import EmsChart1 from '../Charts/EmsChart1';
import Temp from '../Charts/Temp';
import Pies from '../Charts/pies';

const PredictiveMantenance = () => {
    return (
        <>
            <div className="ccc">
            
            
            <TopNav name="Predictive Mantenance"/>
            </div>
        </>
    );
};

export default PredictiveMantenance;

// import React, { useState } from 'react';

// const PredictiveMantenance = () => {
//   const [clickedHotspot, setClickedHotspot] = useState(null);

//   const handleHotspotClick = (event, hotspot) => {
//     event.preventDefault();
//     setClickedHotspot(hotspot);
//     console.log('Clicked hotspot:', hotspot);
//   };

//   return (
//     <div>
//       <h2>Image Map Hotspot Example</h2>
//       <img src="./img/loading-big.svg" alt="Example Image" useMap="#hotspot-map" />
//       <map name="hotspot-map">
//         <area
//           shape="rect"
//           coords="50,50,150,150"
//           alt="Hotspot 1"
//           onClick={(e) => handleHotspotClick(e, 'Hotspot 1')}
//         />
//         <area
//           shape="circle"
//           coords="200,100,50"
//           alt="Hotspot 2"
//           onClick={(e) => handleHotspotClick(e, 'Hotspot 2')}
//         />
//         <area
//           shape="poly"
//           coords="300,200,400,200,350,300"
//           alt="Hotspot 3"
//           onClick={(e) => handleHotspotClick(e, 'Hotspot 3')}
//         />
//       </map>
//       {clickedHotspot && <p>Clicked hotspot: {clickedHotspot}</p>}
//     </div>
//   );
// };

// export default PredictiveMantenance;
