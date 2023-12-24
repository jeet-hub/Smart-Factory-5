import React from 'react';
import TopNav from '../components/TopNav';
import Table1 from '../InventoryTablesApi/Table1';
import Table2 from '../InventoryTablesApi/Table2';
import Table3 from '../InventoryTablesApi/Table3';
import Table4 from '../InventoryTablesApi/Table4';
import Table5 from '../InventoryTablesApi/Table5';
import Table6 from '../InventoryTablesApi/Table6';
import Table7 from '../InventoryTablesApi/Table7';
import Table8 from '../InventoryTablesApi/Table8';
import Table9 from '../InventoryTablesApi/Table9';

const InventoryStatus = () => {
    return (
        <>
        <div className="ccc">
            {/* <h1>Inventory page</h1> */}
            <TopNav name="Inventory Management" />
            <div className="row">
                <div className="col">
                    <div className="inv-box hhh">
                        <div className="row ">
                            <div className="col-4">
                                {/* img  */}
                                <div className="jar">
                                    <img className='jar_img' src="./img/yellojar.svg" alt="yelllow-jar" />
                                    <img style={{ height: "170px" }} src="./img/line9.svg" alt="line" />
                                </div>
                            </div>
                            <div className="col-8 jar-text">
                                {/* data  */}
                                {/* <div className="jar-data row">
                                    <div className="col">
                                        <p className='p-color'>Inventory Position:</p>
                                        <p className='p-color' >Customer Name:</p>
                                        <p className='p-color' >Product Color</p>
                                        <p className='p-color' >Batch No:</p>
                                        <p className='p-color' >Delivery City:</p>
                                    </div>
                                    <div className="col">
                                        <p>Alpha_001</p>
                                        <p>John Doe</p>
                                        <p>Yello</p>
                                        <p>TSF-YL-001</p>
                                        <p>Noida</p>
                                    </div>
                                </div> */}
                                <div className="col-6">

                                    <div className="table-data">
                                   <Table1/>
                                    </div>
                                </div>
                                <h1 className='gola'>1</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="inv-box hhh">
                        <div className="row">
                            <div className="col-4">
                                {/* img  */}
                                <div className="jar">
                                    <img className='jar_img' src="./img/yellojar.svg" alt="yelllow-jar" />
                                    <img style={{ height: "170px" }} src="./img/line9.svg" alt="line" />
                                </div>
                            </div>
                            <div className="col-8 jar-text">
                                {/* data  */}
                                {/* <div className="jar-data row">
                                    <div className="col">
                                        <p className='p-color'>Inventory Position:</p>
                                        <p className='p-color' >Customer Name:</p>
                                        <p className='p-color' >Product Color</p>
                                        <p className='p-color' >Batch No:</p>
                                        <p className='p-color' >Delivery City:</p>
                                    </div>
                                    <div className="col">
                                        <p>Alpha_001</p>
                                        <p>John Doe</p>
                                        <p>Yello</p>
                                        <p>TSF-YL-001</p>
                                        <p>Noida</p>
                                    </div>
                                </div> */}
                                <div className="col-6">

                                    <div className="table-data">
                                    <Table2/>
                                    </div>
                                </div>
                                <h1 className='gola'>2</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="inv-box hhh">
                        <div className="row">
                            <div className="col-4">
                                {/* img  */}
                                <div className="jar">
                                    <img className='jar_img' src="./img/yellojar.svg" alt="yelllow-jar" />
                                    <img style={{ height: "170px" }} src="./img/line9.svg" alt="line" />
                                </div>
                            </div>
                            <div className="col-8 jar-text">
                                {/* data  */}
                                {/* <div className="jar-data row">
                                    <div className="col">
                                        <p className='p-color'>Inventory Position:</p>
                                        <p className='p-color' >Customer Name:</p>
                                        <p className='p-color' >Product Color</p>
                                        <p className='p-color' >Batch No:</p>
                                        <p className='p-color' >Delivery City:</p>
                                    </div>
                                    <div className="col">
                                        <p>Alpha_001</p>
                                        <p>John Doe</p>
                                        <p>Yello</p>
                                        <p>TSF-YL-001</p>
                                        <p>Noida</p>
                                    </div>
                                </div> */}
                                <div className="col-6">

                                    <div className="table-data">
                                    <Table3/>
                                    </div>
                                </div>
                                <h1 className='gola'>3</h1>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            {/* 2nd line   */}

            <div className="row mt-5">
                <div className="col">
                    <div className="inv-box hhh">
                        <div className="row">
                            <div className="col-4">
                                {/* img  */}
                                <div className="jar">
                                    <img className='jar_img' src="./img/yellojar.svg" alt="yelllow-jar" />
                                    <img style={{ height: "170px" }} src="./img/line9.svg" alt="line" />
                                </div>
                            </div>
                            <div className="col-8 jar-text">
                                {/* data  */}
                                {/* <div className="jar-data row">
                                    <div className="col">
                                        <p className='p-color'>Inventory Position:</p>
                                        <p className='p-color' >Customer Name:</p>
                                        <p className='p-color' >Product Color</p>
                                        <p className='p-color' >Batch No:</p>
                                        <p className='p-color' >Delivery City:</p>
                                    </div>
                                    <div className="col">
                                        <p>Alpha_001</p>
                                        <p>John Doe</p>
                                        <p>Yello</p>
                                        <p>TSF-YL-001</p>
                                        <p>Noida</p>
                                    </div>
                                </div> */}
                                <div className="col-6">

                                    <div className="table-data">
                                    <Table4/>
                                    </div>
                                </div>
                                <h1 className='gola'>4</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="inv-box hhh">
                        <div className="row">
                            <div className="col-4">
                                {/* img  */}
                                <div className="jar">
                                    <img className='jar_img' src="./img/yellojar.svg" alt="yelllow-jar" />
                                    <img style={{ height: "170px" }} src="./img/line9.svg" alt="line" />
                                </div>
                            </div>
                            <div className="col-8 jar-text">
                                {/* data  */}
                                {/* <div className="jar-data row">
                                    <div className="col">
                                        <p className='p-color'>Inventory Position:</p>
                                        <p className='p-color' >Customer Name:</p>
                                        <p className='p-color' >Product Color</p>
                                        <p className='p-color' >Batch No:</p>
                                        <p className='p-color' >Delivery City:</p>
                                    </div>
                                    <div className="col">
                                        <p>Alpha_001</p>
                                        <p>John Doe</p>
                                        <p>Yello</p>
                                        <p>TSF-YL-001</p>
                                        <p>Noida</p>
                                    </div>
                                </div> */}
                                <div className="col-6">

                                    <div className="table-data">
                                    <Table5/>
                                    </div>
                                </div>
                                <h1 className='gola'>5</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="inv-box hhh">
                        <div className="row">
                            <div className="col-4">
                                {/* img  */}
                                <div className="jar">
                                    <img className='jar_img' src="./img/yellojar.svg" alt="yelllow-jar" />
                                    <img style={{ height: "170px" }} src="./img/line9.svg" alt="line" />
                                </div>
                            </div>
                            <div className="col-8 jar-text">
                                {/* data  */}
                                {/* <div className="jar-data row">
                                    <div className="col">
                                        <p className='p-color'>Inventory Position:</p>
                                        <p className='p-color' >Customer Name:</p>
                                        <p className='p-color' >Product Color</p>
                                        <p className='p-color' >Batch No:</p>
                                        <p className='p-color' >Delivery City:</p>
                                    </div>
                                    <div className="col">
                                        <p>Alpha_001</p>
                                        <p>John Doe</p>
                                        <p>Yello</p>
                                        <p>TSF-YL-001</p>
                                        <p>Noida</p>
                                    </div>
                                </div> */}
                                <div className="col-6">

                                    <div className="table-data">
                                  <Table6/>
                                    </div>
                                </div>
                                <h1 className='gola'>6</h1>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            {/* 3rd line  */}

            <div className="row mt-5">
                <div className="col">
                    <div className="inv-box hhh">
                        <div className="row">
                            <div className="col-4">
                                {/* img  */}
                                <div className="jar">
                                    <img className='jar_img' src="./img/yellojar.svg" alt="yelllow-jar" />
                                    <img style={{ height: "170px" }} src="./img/line9.svg" alt="line" />
                                </div>
                            </div>
                            <div className="col-8 jar-text">
                                {/* data  */}
                                {/* <div className="jar-data row">
                                    <div className="col">
                                        <p className='p-color'>Inventory Position:</p>
                                        <p className='p-color' >Customer Name:</p>
                                        <p className='p-color' >Product Color</p>
                                        <p className='p-color' >Batch No:</p>
                                        <p className='p-color' >Delivery City:</p>
                                    </div>
                                    <div className="col">
                                        <p>Alpha_001</p>
                                        <p>John Doe</p>
                                        <p>Yello</p>
                                        <p>TSF-YL-001</p>
                                        <p>Noida</p>
                                    </div>
                                </div> */}
                                <div className="col-6">

                                    <div className="table-data">
                                    <Table7/>
                                    </div>
                                </div>
                                <h1 className='gola'>7</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="inv-box hhh">
                        <div className="row">
                            <div className="col-4">
                                {/* img  */}
                                <div className="jar">
                                    <img className='jar_img' src="./img/yellojar.svg" alt="yelllow-jar" />
                                    <img style={{ height: "170px" }} src="./img/line9.svg" alt="line" />
                                </div>
                            </div>
                            <div className="col-8 jar-text">
                                {/* data  */}
                                {/* <div className="jar-data row">
                                    <div className="col">
                                        <p className='p-color'>Inventory Position:</p>
                                        <p className='p-color' >Customer Name:</p>
                                        <p className='p-color' >Product Color</p>
                                        <p className='p-color' >Batch No:</p>
                                        <p className='p-color' >Delivery City:</p>
                                    </div>
                                    <div className="col">
                                        <p>Alpha_001</p>
                                        <p>John Doe</p>
                                        <p>Yello</p>
                                        <p>TSF-YL-001</p>
                                        <p>Noida</p>
                                    </div>
                                </div> */}
                                <div className="col-6">

                                    <div className="table-data">
                                    <Table8/>
                                    </div>
                                </div>
                                <h1 className='gola'>8</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="inv-box hhh">
                        <div className="row">
                            <div className="col-4">
                                {/* img  */}
                                <div className="jar">
                                    <img className='jar_img' src="./img/redjar.svg" alt="yelllow-jar" />
                                    <img style={{ height: "170px" }} src="./img/line9.svg" alt="line" />
                                </div>
                            </div>
                            <div className="col-8 jar-text">
                                {/* data  */}
                                {/* <div className="jar-data row">
                                    <div className="col">
                                        <p className='p-color'>Inventory Position:</p>
                                        <p className='p-color' >Customer Name:</p>
                                        <p className='p-color' >Product Color</p>
                                        <p className='p-color' >Batch No:</p>
                                        <p className='p-color' >Delivery City:</p>
                                    </div>
                                    <div className="col">
                                        <p>Alpha_001</p>
                                        <p>John Doe</p>
                                        <p>Yello</p>
                                        <p>TSF-YL-001</p>
                                        <p>Noida</p>
                                    </div>
                                </div> */}
                                <div className="col-6">

                                    <div className="table-data">
                                        <Table9/>
                                    </div>
                                </div>
                                <h1 className='gola'>9</h1>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            </div>
        </>
    );
};

export default InventoryStatus;