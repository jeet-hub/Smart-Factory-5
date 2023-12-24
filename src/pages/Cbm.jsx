import React, { useState, useEffect } from "react";
import axios from "axios";
import TopNav from '../components/TopNav';
import EmsChart1 from '../Charts/EmsChart1';
import Temp from '../Charts/Temp';
import Pies from '../Charts/pies';
import Loading from "../CbmTables/Loading";
import Filling from "../CbmTables/Filling";
import Dispatch from "../CbmTables/Dispatch";


const Cbm = () => {

        const [data, setData] = useState(null);
        const [loading, setLoading] = useState(true);
      
        useEffect(() => {
          const fetchData = async () => {
            try {
              const response = await fetch('https://smartdashboardapi.azurewebsites.net/Dispatching');
              if (response.ok) {
                const jsonData = await response.json();
                setData(jsonData);
              } else {
                console.error('Error:', response.status);
              }
            } catch (error) {
              console.error('Error:', error);
            } finally {
              setLoading(false);
            }
          };
      
          fetchData();
        }, []);
      
        if (loading) {
          return <p>Loading...</p>;
        }
      
        if (!data) {
          return <p>No data available.</p>;
        }
      
    return (
        <>
            <div className="ccc">
            {/* <h1>Predictive Mantenance page</h1> */}
            <TopNav name="Condition Based Monitoring"/>
            <div className="accordion" id="accordionExample">
             <Loading/>
            <br />
             <Filling/>
            <br />
            <Dispatch/>
            </div>
            </div>
        </>
    );
};

export default Cbm;