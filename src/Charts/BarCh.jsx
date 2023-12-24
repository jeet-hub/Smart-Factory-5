import {useEffect, useState} from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)

function BarCh() {
  const [data, setData]= useState(
	{
    labels:["Jan","Feb", "March", "April", "May", "June", "July", "August", "September", "Oct", "Nov", "Dec"],
    datasets:[
      {
        label:"First Dataset",
        data:[10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],
        backgroundColor:'yellow',
        borderColor:'green',
        tension:0.4,
        fill:true,
        pointStyle:'rect',
        pointBorderColor:'blue',
        pointBackgroundColor:'#fff',
        showLine:true
      }
    ]
  }
  )

  useEffect(()=> {
	const arr = [];
	fetch('https://jsonplaceholder.typicode.com/todos1')
	.then(responce => responce.json())
	.then(json => { console.log("json" , json)
	json.map((item, index) =>{
		arr.push(item.id)
		arr.reverse();
	})
		setData({
		labels:["Jan","Feb", "March", "April", "May", "June", "July", "August", "September", "Oct", "Nov", "Dec"],
		datasets:[
		  {
			label:"First Dataset",
			data:arr,
			backgroundColor:'yellow',
			borderColor:'green',
			tension:0.4,
			fill:true,
			pointStyle:'rect',
			pointBorderColor:'blue',
			pointBackgroundColor:'#fff',
			showLine:true
		  }
		]
	  })
    }
	)
	console.log("arr", arr)

	

  },[])

  return (
    <div className="BarCh" style={{width:'800px', height:'800px'}}>
      <Line data={data}>Hello</Line>
    </div>
  );
}

export default BarCh;