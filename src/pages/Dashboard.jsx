import React, { PureComponent } from 'react';
import Pies from '../Charts/pies';
import { Link, NavLink } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {
    BarChart,
    Bar,
    LabelList,
} from 'recharts';
import TopNav from '../components/TopNav';
import OrderStatus from '../DashStatus/OrderStatus';

const Array = [
    {
        name: "Available Slot",
        total :9,
        filled :5
    },
    // {
    //     name: "Filled Slots",
    //     total:9,
    //     filled:7
    // },
   
]

const data = [
    {
        name: '01:00 AM',
        wattage: 4000,
        voltage: 2400,
        current: 1120,
        amt: 200,
    },
    {
        name: '02:12 AM',
        wattage: 3000,
        voltage: 1398,
        current: 200,
        amt: 210,
    },
    {
        name: '03:15 AM',
        wattage: 2000,
        voltage: 9800,
        current: 400,
        amt: 290,
    },
    {
        name: '06:34 AM',
        wattage: 2780,
        voltage: 3908,
        current: 240,
        amt: 200,
    },
    {
        name: '12:10 PM',
        wattage: 1890,
        voltage: 4800,
        current: 1200,
        amt: 181,
    },
    {
        name: '15:00 PM',
        wattage: 2390,
        voltage: 3800,
        current: 700,
        amt: 500,
    },
    {
        name: '16:24 PM',
        wattage: 3490,
        voltage: 4300,
        current: 400,
        amt: 100,
    },
];

const data1 = [
    
    {
        name: 'Page E',
        // uv:200,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        // uv:200,
        pv: 3800,
        amt: 2500,
    },
];


const renderCustomizedLabel = (props) => {
    const { x, y, width, height, value } = props;
    const radius = 10;

    return (
        <g>
            <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
            <text x={x + width / 2} y={y - radius} fill="#fff" textAnchor="middle" dominantBaseline="middle">
                {value.split(' ')[1]}
            </text>
        </g>
    );
};


const Dashboard = () => {

    const name = {
        name: "Dashboard",
        image: "./img/product.png",
      };

    return (
        <>
        <div className="ccc">
            {/* <h4 className=''>Dashboard Home</h4> */}
            <TopNav name="Dashboard Home"/>
            <div className="row">
                <div className="col-8">
                    <div className="card-box">
                        <div className="graph-center">
                            <div className="topbarname">
                            <h4 className='bar-header'>Total system energy consumption</h4>
                            <NavLink className='table-text' to="/ems">
                                <img style={{width:"90px"}} src="./img/More.svg" alt="expend-button" />
                            </NavLink>
                            </div>
                            <div className="graph-inner-part">
                            {/* <p className='graph-side-status'>Current Voltage Wattage</p> */}
                         
                            <LineChart className='cart-gp'
                                width={780}
                                height={250}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5
                                }}
                            >
                                <CartesianGrid  strokeDasharray="3 3" />
                                <XAxis  dataKey="name" />
                                <YAxis />
                                <Tooltip  />
                                <Legend />
                                <Line 
                                    type="monotone"
                                    dataKey="current"
                                    stroke="#8884d8"
                                    activeDot={{ r: 8 }}
                                />
                                <Line type="monotone" dataKey="wattage" stroke="#82ca9d" />
                                <Line type="voltage" dataKey="voltage" stroke="red" />
                            </LineChart>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card-sm-box  mb-4 mt-3" style={{border:"2px solid #85D382"}}>
                        <div className="box1">
                            <img className='table-img' src="./img/Table1.svg" alt="machine1" />
                            <h6 className='table-text'>Loading<br />Unit</h6>
                            <img style={{ height: "55px" }} src="./img/line.png" alt="line" />
                            <p className='table-text status1'>Warrning</p>
                            <NavLink className='table-text' to="/cbm">
                                <img src="./img/status1.svg" alt="expend-button" />
                            </NavLink>
                        </div>
                    </div>
                    <div className="card-sm-box  mt-3" style={{border:"2px solid #ffcc5c"}}>
                        <div className="box1">
                            <img className='table-img' src="./img/Table2.svg" alt="machine1" />
                            <h6 className='table-text'>Filling<br />Unit</h6>
                            <img style={{ height: "55px" }} src="./img/line.png" alt="line" />
                            <p className='table-text status2'>Healthy</p>
                            <NavLink className='table-text' to="/cbm">
                                <img src="./img/status1.svg" alt="expend-button" />
                            </NavLink>
                        </div>
                    </div>
                    <div className="card-sm-box  mt-4" style={{border:"2px solid #E57373"}}>
                        <div className="box1">
                            <img className='table-img' src="./img/Table3.svg" alt="machine1" />
                            <h6 className='table-text'>Dispatch<br />Unit</h6>
                            <img style={{ height: "55px" }} src="./img/line.png" alt="line" />
                            <p className='table-text status3' >At Risk</p>
                            <NavLink className='table-text' to="/cbm">
                                <img src="./img/status1.svg" alt="expend-button" />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            {/* --------- next line ------- */}

            <div className="row mt-5">
                <div className="col-4">
                    <div className="top-name">
                        <h4 className='bar-header'>Current Order Status</h4>
                        <NavLink className='table-text' to="/traceability">
                        <img src="./img/Vector.svg" alt="expend-button" />
                        </NavLink>
                        {/* <img style={{ height: "55px", marginLeft:"200px" }} src="./img/line.png" alt="line" /> */}
                    </div>
                    {/* table  */}
                    <div className="box1  p-2">
                        <OrderStatus/>
                    </div>
                </div>
               
                <div className="col-4">
                    <div className="top-name">
                        <h4 className='bar-header'>Inventory Status</h4>
                        <NavLink className='table-text' to="/invstatus">
                        <img src="./img/Vector.svg" alt="expend-button" />
                        </NavLink>
                    </div>
                    <BarChart data={Array} width={400} height={215}>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Tooltip/>
                        <Bar dataKey="total" fill='#85D382'/>
                        <Bar dataKey="filled" fill='#FFCC5C'/>
                        </BarChart>
                    
                        {/* <BarChart
                            width={450}
                            height={215}
                            data={data1}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name1" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pv" fill="#8884d8" minPointSize={5}>
                                <LabelList dataKey="name" content={renderCustomizedLabel} />
                            </Bar>
                           
                        </BarChart>  */}
                    
                       
                    
                </div>
                
                <div className="col-4">
                    <div className="top-name">
                        <h4 className='bar-header'>Quality Control</h4>
                        <NavLink className='table-text' to="/qualitycontrol">
                        <img src="./img/Vector.svg" alt="expend-button" />
                        </NavLink>
                    </div>
                    {/* pie chart  */}
                    <Pies/>
                </div>
            </div>
</div>
        </>
    );
};

export default Dashboard;
