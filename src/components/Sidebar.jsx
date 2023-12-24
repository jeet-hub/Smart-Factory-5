import React, { useState } from 'react';
import { BsChevronLeft} from "react-icons/bs";

import './Sidebar.css'
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon: <img src="./img/home.png" alt="home" style={{width:"24px"}} />
        },
        {
            path:"/ems",
            name:"Energy Monitoring System",
            // icon:<FaUserAlt/>
            icon: <img src="./img/energy.png" alt="home" style={{width:"24px"}} />
        },
        {
            path:"/cbm",
            name:"Condition Based Monitoring",
            icon: <img src="./img/chart.png" alt="home" style={{width:"24px"}} />
        },
        {
            path:"/qualitycontrol",
            name:"Quality Control",
            icon: <img src="./img/scann.png" alt="home" style={{width:"24px"}} />
        },
        {
            path:"/predictivemantenance",
            name:"Predictive Maintenance",
            icon: <img src="./img/nulll.png" alt="home" style={{width:"24px"}} />
        },
        {
            path:"/Invstatus",
            name:"Inventory Status",
            icon: <img src="./img/vox.png" alt="home" style={{width:"24px"}} />
        }
        ,
        {
            path:"/traceability",
            name:"Traceability",
            icon: <img src="./img/gloab.png" alt="home" style={{width:"24px"}} />
        }
        ,
        {
            path:"/defectinduction",
            name:"Defect Induction",
            icon: <img src="./img/infi.png" alt="home" style={{width:"18px"}} />
        }
        
    ]
    return (
        <div className="sidebar-box">
           <div style={{width: isOpen ? "400px" : "60px"}} className="sidebar">
               <div className="top_section">
                   {/* <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1> */}
                   <div onClick={toggle} style={{marginLeft: isOpen ? "350px" : "0px"}} className="bars">
                   {isOpen ?< BsChevronLeft className='barr'/> :  <FaBars className='barr'/>}
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           {/* <div className="icon">{item.icon}</div> */}
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                           <div className="icon">{item.icon}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;