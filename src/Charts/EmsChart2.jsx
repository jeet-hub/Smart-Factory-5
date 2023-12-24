import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: '',
      current: 'current',
      uv: 30,
      pv: 2400,
      amt: 2400,
    },
    {
      name: '',
      current: 'current',
      uv: 100,
      pv: 198,
      amt: 2210,
    },
    {
      name: 'time',
      current: 'current',
      uv: 70,
      pv: 1198,
      amt: 2210,
    },
    {
      name: '',
      current: 'current',
      uv: 70,
      pv: 1198,
      amt: 2210,
    },
    {
      name: '',
      current: 'current',
      uv: 150,
      pv: 1198,
      amt: 2210,
    },
    
  ];

const EmsChart1 = () => {
  return (
    <>
    <div className="ch-card">
    <p className='top-bar-name'>Power Consumption</p>
    <AreaChart
          width={400}
          height={150}
          data={data}
          margin={{
            top: 5,
            right: 50,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#4D1354" />
        </AreaChart>
        </div>
    </>
  )
}

export default EmsChart1