import React from 'react';
import TopNav from '../components/TopNav';
import Current from '../Charts/Loading/Current';
import Voltage from '../Charts/Loading/Voltage';
import Power from '../Charts/Loading/Power';
import Current2 from '../Charts/Filling/Current2';
import Voltage2 from '../Charts/Filling/Voltage2';
import Power2 from '../Charts/Filling/Power2';
import Current3 from '../Charts/Dispach/Current3';
import Voltage3 from '../Charts/Dispach/Voltage3';
import Power3 from '../Charts/Dispach/Power3';


const Ems = () => {
    return (
        <>
        <div className="ccc">
            {/* <h4>Energy Monitoring System</h4> */}
            <TopNav name="Energy Monitoring System"/>
            <div className="ems-card-box">
                <div className="card-header-name">
                <h6 className='bar-header-2'>Loading Unit</h6>
                <img style={{width:"88%", height:"1px", marginBottom:"10px"}} src="./img/hr-line.png" alt="hr-line" />
                </div>
                {/* 3 charts  */}
                <div className="row">
                    <div className="col-4">
                        <div className="">
                
                            <Current/>
                        </div>
                    </div>
                    <div className="col-4">
                    <div className="">
                            <Voltage/>
                        </div>
                    </div>
                    <div className="col-4">
                    <div className="">
                            <Power/>
                        </div>
                    </div>
                </div>
            </div>

            {/* line 2  */}
            <div className="ems-card-box mt-4 ">
                <div className="card-header-name">
                <h6 className='bar-header-2'>Filling Unit</h6>
                <img style={{width:"88%", height:"1px", marginBottom:"10px"}} src="./img/hr-line.png" alt="hr-line" />
                </div>
                {/* 3 charts  */}
                <div className="row ">
                    <div className="col-4">
                        <div className="">
            
                         <Current2/>
                        </div>
                    </div>
                    <div className="col-4">
                    <div className="">
                           <Voltage2/>
                        </div>
                    </div>
                    <div className="col-4">
                    <div className="">
                           <Power2/>
                        </div>
                    </div>
                </div>
            </div>

            {/* line 3  */}

            <div className="ems-card-box mt-4">
                <div className="card-header-name">
                <h6 className='bar-header-2'>Loading Unit</h6>
                <img style={{width:"88%", height:"1px", marginBottom:"10px"}} src="./img/hr-line.png" alt="hr-line" />
                </div>
                
                <div className="row">
                    <div className="col-4">
                        <div className="">
                
                            <Current3/>
                        </div>
                    </div>
                    <div className="col-4">
                    <div className="">
                            <Voltage3/>
                        </div>
                    </div>
                    <div className="col-4">
                    <div className="">
                           <Power3/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default Ems;