import {useEffect, useState} from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)

const Voltage = () => {

  const [data, setData]= useState(
    {
      labels:["9AM","10AM","11AM","12AM","1PM","2PM","3PM","4PM","5PM","6PM","7PM","8PM"],
      datasets:[
        {
          label:"Temprature",
          data:[10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],
          backgroundColor:"rgba(24, 160, 251, 0.3)",
          borderColor:"rgba(85, 214, 255, 1)",
          tension:0.4,
          fill:true,
          pointStyle:'rect',
          pointBorderColor:'blue',
          pointBackgroundColor:'#fff',
          drawBorder: false,
        }
      ]
    }
    )
  
    useEffect(()=> {
    const arr = [];
    const temp = [];
    fetch('https://smartdashboardapi.azurewebsites.net/Dispatching100Controller')
    .then(responce => responce.json())
    .then(json => { console.log("json" , json)
    json.map((item, index) =>{
      arr.push(item.id)
      temp.push(item.v3)
      arr.reverse();
    })
    setData({
        labels:["9AM","10AM","11AM","12AM","1PM","2PM","3PM","4PM","5PM"],
        datasets:[
          {
            label:temp,
            data:[10,15,20,24,25,35,55,45,50,60,],
          backgroundColor:"rgba(24, 160, 251, 0.3)",
          borderColor:"rgba(85, 214, 255, 1)",
          tension:0.4,
          fill:true,
          pointStyle:'rect',
          pointBorderColor:'blue',
          pointBackgroundColor:'#fff',
          drawBorder: false,
        }
      ]
      })
      }
    )
    console.log("arr", arr)
  
    
  
    },[])

  return (
    <>
    <div className="ch-card">
    <p className='top-bar-name'>Voltage Consumption</p>
    <div className="BarCh" style={{width:'100%', height:'33vh'}}>
      <Line className='chhr' data={data}>Hello</Line>
    </div>
        </div>
    </>
  )
}

export default Voltage