import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: "January", value: 40000 },
    { name: "February", value: 10000 },
    { name: "March", value: 30000 },
    { name: "April", value: 20000 },
    { name: "May", value: 60000 }
]

const Linechart = () => {
  return (
    <div style={{width: '77vh', height: '47vh', margin: '2rem', backgroundColor: '#fff', borderRadius: '10px', padding: '10px' }}>
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 30,
            right: 30,
            left: 2,
            bottom: 5,
          }}
          >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} /> */}
          <Line type="monotone" dataKey="value" stroke="#FF7D34" activeDot={{ r: 8 }}/>
        </LineChart>
    </ResponsiveContainer>
    </div>
  )
}

export default Linechart;
