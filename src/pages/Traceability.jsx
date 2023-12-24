import React, { useState } from 'react';
import TopNav from '../components/TopNav';

const Traceability = () => {

    const [clickedHotspot, setClickedHotspot] = useState(null);

    const handleHotspotClick = (event, hotspot) => {
        event.preventDefault();
        setClickedHotspot(hotspot);
        console.log('Clicked hotspot:', hotspot);
    };

    return (
        // <div>Traceability</div>
        <>
            <div className="ccc">
                <TopNav name="Order Tracing and Tracking" />
                <div className="container">
                    <div className="row">
                        <h4 className='order-name'>Order Status</h4>
                        <div className="col-6">

                            <div className="box1  p-2">
                                <table class="table ">
                                    <tbody>
                                        <tr>
                                            <th className='th'>Customer Name</th>
                                            <td>Doe</td>

                                        </tr>
                                        <tr>
                                            <th className='th'>Order ID</th>
                                            <td>TSF_NFG_0001</td>

                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="box1  p-2">
                                <table class="table ">
                                    <tbody>
                                        <tr>
                                            <th className='th'>Product Quantity:</th>
                                            <td>200 Grams</td>

                                        </tr>
                                        <tr>
                                            <th className='th'>Product Color:</th>
                                            <td>Red</td>

                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="hostpot">
                        <div className="machine-img">
                            <img src="./img/smttt.svg" alt="smart-machine" style={{ width: "80%" }} />
                        </div>

                        <div className="h-item top " style={{ top: "30%", left: "80%" }}>
                            <div className="" onClick={(e) => handleHotspotClick(e, 'Hotspot 1')}>
                                <div className="h-tooltip">
                                    {/* <h3>123</h3> 
               <p style={{color:"red"}}>dummmy fregfbfderhhrugi text</p>  */}
                                    {clickedHotspot && <p>{clickedHotspot}</p>}
                                </div>
                            </div>
                        </div>
                        {/* ==== start*/}
                        <div className="h-item top " style={{ top: "70%", left: "20%" }}>
                            <div className="H-icon" onClick={(e) => handleHotspotClick(e, 'Hotspot 1')}>
                                {/* <div className="h-tooltip">
                <h3>123</h3> 
                 <p style={{color:"red"}}>dummmy fregfbfderhhrugi text</p> 
                {clickedHotspot && <p>{clickedHotspot}</p>}
            </div> */}
                            </div>
                        </div>

                        <div className="h-item buttom" style={{ top: "70%", left: "43%" }}>
                            <div className="H-icon" onClick={(e) => handleHotspotClick(e, 'Hotspot 2')}>
                                {/* <div className="h-tooltip">
                <h3>123</h3>
                <p>dummmy text</p>
                
            </div> */}
                            </div>
                        </div>

                        <div className="h-item right" style={{ top: "70%", left: "63%" }}>
                            <div className="H-icon" onClick={(e) => handleHotspotClick(e, 'Hotspot 3')}>
                                {/* <div className="h-tooltip">
                <h3>123</h3>
                <p>dummmy text</p>
            </div> */}
                            </div>
                        </div>

                        <div className="h-item left" style={{ top: "70%", left: "83%" }}>
                            <div className="H-icon" onClick={(e) => handleHotspotClick(e, 'Hotspot 4')}>
                                {/* <div className="h-tooltip">
                <h3>123</h3>
                <p>dummmy text</p>
            </div> */}
                            </div>

                            {/* {clickedHotspot && <p>Clicked hotspot: {clickedHotspot}</p>} */}
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Traceability