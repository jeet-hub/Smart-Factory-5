import React from 'react';
import TopNav from '../components/TopNav';

const DefectInduction = () => {
  return (
    <>
    <div className="ccc">
     <TopNav name="DefectInduction"/>
     </div>
    </>
   
  )
}

export default DefectInduction


// import React, { useState, useEffect } from 'react';
// import BarCh from '../Charts/BarCh';
// import MotorVibration from '../Charts/Loading/MotorVibration';

// function DefectInduction() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://smartdashboardapi.azurewebsites.net/Dispatching');
//         if (response.ok) {
//           const jsonData = await response.json();
//           setData(jsonData);
//         } else {
//           console.error('Error:', response.status);
//         }
//       } catch (error) {
//         console.error('Error:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (!data) {
//     return <p>No data available.</p>;
//   }

//   return (
//     <div className="ccc">
//     <div className='ml-5'>
//       <h1>Data:</h1>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.iN3V}</li>
//         ))}
//       </ul>
      
//       <BarCh/>
//       <MotorVibration/>
//     </div>
//     </div>
//   );
// }

// export default DefectInduction;
