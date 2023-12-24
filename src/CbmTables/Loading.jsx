import React, { useState, useEffect } from "react";
import axios from "axios";
import TopNav from '../components/TopNav';

import EmsChart1 from '../Charts/EmsChart1';
import Temp from '../Charts/Temp';
import Pies from '../Charts/pies';
import Current from '../Charts/Loading/Current';
import Voltage from '../Charts/Loading/Voltage';
import Power from '../Charts/Loading/Power';
import MotorVibration from "../Charts/Loading/MotorVibration";



const Loading = () => {

        const [data, setData] = useState(null);
        const [loading, setLoading] = useState(true);
      
        useEffect(() => {
          const fetchData = async () => {
            try {
              const response = await fetch('https://smartdashboardapi.azurewebsites.net/Loading');
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
            <div className="accordion-item ">
                <h2 className="accordion-header" id="headingOne">
                <a className="bttnn accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <h6 className='bar-header-2'>Loading Unit Motor</h6>
                            <img style={{width:"80%",marginLeft:"15px", height:"1px", marginBottom:"10px"}} src="./img/hr-line.png" alt="hr-line" />
                            {/* <img src="./img/bada.png" alt="btnn" style={{width:"30px"}}/> */}
                            
                </a>
                {data.map((item) => (
                <div className="cota-box row">
                                <div className="col-2">
                                    <div className="img-items">
                                    <img className='loading-img' src="./img/loading-unit.svg" alt="machine1" />
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
                                                <h4 className='cbm-h4'>{item.t1}</h4>
                                            </div>
                                            </div>
                                            <p className="cbm-color" >Temprature</p>
                                        </div>
                                        <div className="col all-center">
                                            <div className="cota-box-inner">
                                            <div className="inner-data">
                                            <img src="./img/wave.svg" alt="hot"  style={{width:"50px"}}/>
                                            
                                                <h4 className='cbm-h4'>
                                               {item.vB1}
                                               </h4>
                                            
                                              
                                            </div>
                                            </div>
                                            <p className="cbm-color" >Vibration</p>
                                        </div>
                                        <div className="col all-center">
                                            <div className="cota-box-inner">
                                            <div className="inner-data">
                                            <img src="./img/current.svg" alt="hot"  style={{width:"34px"}}/>
                                                <h4 className='cbm-h4'>{item.c1}</h4>
                                            </div>
                                            </div>
                                            <p className="cbm-color" >Current</p>
                                        </div>
                                        <div className="col all-center">
                                            <div className="cota-box-inner">
                                            <div className="inner-data">
                                            <img src="./img/Voltage.svg" alt="hot"  style={{width:"50px"}}/>
                                                <h4 className='cbm-h4'>{item.v1}</h4>
                                            </div>
                                            </div>
                                            <p className="cbm-color" >Voltage</p>
                                        </div>
                                        <div className="col all-center">
                                            <div className="cota-box-inner">
                                            <div className="inner-data">
                                            <img src="./img/watt.svg" alt="hot"  style={{width:"43px"}}/>
                                                <h4 className='cbm-h4'>{item.p1}</h4>
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
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <div className="row">
                    <div className="col-8">
                        <div className="filling big">
                            <img src="./img/loading-unit.svg" alt="filling-img" style={{width:"600px"}}/>
                            <img className="ld" src="./img/cl.gif" alt="gif" />
                        </div>
                     
                    </div>
                    {/* <div className="col-2">
                    
                    </div> */}
                    <div className="col-4">
                    <Current/> <br />
                    <Voltage/>
                    </div>
                </div>

                {/* second line row  */}
                <div className="row mt-4">
                    <div className="col-4">
                    <Pies/>
                    </div>

                    <div className="col-4">
                    <MotorVibration/>
                    </div>

                    <div className="col-4">
                    <Power/>
                    </div>
                </div>
                </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default Loading;