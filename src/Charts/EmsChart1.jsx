import {useEffect, useState} from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)


// const data = [
//   {
//     name: '',
//     current: 'current',
//     uv: 30,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: '',
//     current: 'current',
//     uv: 100,
//     pv: 198,
//     amt: 2210,
//   },
//   {
//     name: 'time',
//     current: 'current',
//     uv: 70,
//     pv: 1198,
//     amt: 2210,
//   },
//   {
//     name: '',
//     current: 'current',
//     uv: 70,
//     pv: 1198,
//     amt: 2210,
//   },
//   {
//     name: '',
//     current: 'current',
//     uv: 150,
//     pv: 1198,
//     amt: 2210,
//   },
  
// ];

const EmsChart1 = () => {

  const [data, setData]= useState(
    {
      labels:["9AM","10AM","11AM","12AM","1PM","2PM","3PM","4PM","5PM","6PM","7PM","8PM"],
      datasets:[
        {
          label:"Temprature",
          data:[10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],
          backgroundColor:"rgba(188, 71, 114, 0.3)",
          borderColor:"rgba(188, 71, 114, 1)",
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
      temp.push(item.t3)
      arr.reverse();
    })
    setData({
      labels:["9AM","10AM","11AM","12AM","1PM","2PM","3PM","4PM","5PM","6PM","7PM","8PM"],
      datasets:[
        {
        
          label:temp,
          data:arr,
          backgroundColor:"rgba(188, 71, 114, 0.3)",
          borderColor:"rgba(188, 71, 114, 1)",
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
    <p className='top-bar-name'>Current Consumption</p>
    {/* <AreaChart
          width={400}
          height={150}
          data={data}
          margin={{
            top: 10,
            right: 60,
            left: 0,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#BC4772" />
        </AreaChart> */}
        <div className="BarCh" style={{width:'600px', height:'200px'}}>
      <Line className='chhr' data={data}>Hello</Line>
    </div>
        </div>
    </>
  )
}

export default EmsChart1