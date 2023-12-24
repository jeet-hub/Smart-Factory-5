import React, { useState, useEffect } from "react";
import axios from "axios";
import TopNav from '../components/TopNav';

import EmsChart1 from '../Charts/EmsChart1';
import Temp from '../Charts/Temp';
import Pies from '../Charts/pies';
import Current3 from '../Charts/Dispach/Current3';
import Voltage3 from '../Charts/Dispach/Voltage3';
import Power3 from '../Charts/Dispach/Power3';
import MotorVibration from "../Charts/Loading/MotorVibration";


const Dispatch = () => {

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
           <div className="card-box">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <a className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <h6 className='bar-header-2'>Dishpatch Unit Motor</h6>
                            <img style={{width:"80%",marginLeft:"15px", height:"1px", marginBottom:"10px"}} src="./img/hr-line.png" alt="hr-line" />
                            {/* <img src="./img/bada.png" alt="btnn" style={{width:"30px"}}/> */}
                            
                </a>
                {data.map((item) => (
                <div className="cota-box row">
                                <div className="col-2">
                                    <div className="img-items">
                                    <img className='loading-img' src="./img/dispatch-unit.svg" alt="machine1" />
                                    <img style={{ height: "120px", marginLeft:"30px" }} src="./img/line.png" alt="line" />
                                    </div>
                                </div>
                                <div className="col-10">
                                <div className="">
                                    <div className="row">
                                        <div className="col all-center">
                                            <div className="cota-box-inner">
                                            <div className="inner-data">
                                                <img src="./img/hot.svg" alt="hot"  style={{width:"50px"}}/>
                                                <h4 className='cbm-h4'>{item.t3}</h4>
                                            </div>
                                            </div>
                                            <p className="cbm-color" >Temprature</p>
                                        </div>
                                        <div className="col all-center">
                                            <div className="cota-box-inner">
                                            <div className="inner-data">
                                            <img src="./img/wave.svg" alt="hot"  style={{width:"50px"}}/>
                                                <h4 className='cbm-h4'>{item.vB3}</h4>
                                            </div>
                                            </div>
                                            <p className="cbm-color" >Vibration</p>
                                        </div>
                                        <div className="col all-center">
                                            <div className="cota-box-inner">
                                            <div className="inner-data">
                                            <img src="./img/current.svg" alt="hot"  style={{width:"34px"}}/>
                                                <h4 className='cbm-h4'>{item.p3}</h4>
                                            </div>
                                            </div>
                                            <p className="cbm-color" >Current</p>
                                        </div>
                                        <div className="col all-center">
                                            <div className="cota-box-inner">
                                            <div className="inner-data">
                                            <img src="./img/Voltage.svg" alt="hot"  style={{width:"50px"}}/>
                                                <h4 className='cbm-h4'>{item.v3}</h4>
                                            </div>
                                            </div>
                                            <p className="cbm-color" >Voltage</p>
                                        </div>
                                        <div className="col all-center">
                                            <div className="cota-box-inner">
                                            <div className="inner-data">
                                            <img src="./img/watt.svg" alt="hot"  style={{width:"43px"}}/>
                                                <h4 className='cbm-h4'>{item.p3}</h4>
                                            </div>
                                            </div>
                                            <p className="cbm-color" >Power</p>
                                        </div>
                                    
                                    </div>
                                    </div>
                                </div>
                            
                            </div>
                ))}
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <div className="row">
                    <div className="col-8">
                        <div className="filling big">
                            <img src="./img/dispatch-unit.svg" alt="filling-img" style={{width:"600px"}}/>
                            <img className="ld" src="./img/cl.gif" alt="gif" />
                        </div>
                    </div>
                    {/* <div className="col-2">
                    
                    </div> */}
                    <div className="col-4">
                    <Current3/> <br />
                    <Voltage3/>
                    </div>
                </div>

                {/* second line row  */}
                <div className="row">
                    <div className="col-4">
                    <Pies/>
                    </div>

                    <div className="col-4">
                    <MotorVibration/>
                    </div>

                    <div className="col-4">
                    <Power3/>
                    </div>
                </div>
                </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default Dispatch;