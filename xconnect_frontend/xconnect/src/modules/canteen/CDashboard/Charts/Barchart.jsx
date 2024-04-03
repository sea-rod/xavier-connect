import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,Rectangle } from 'recharts';


const data = [
    {
      name: 'Mon',
      value: 2400,
      amt: 2400,
    },
    {
      name: 'Tue',
      value: 1398,
    },
    {
      name: 'Wed',
      value: 9800,
    },
    {
      name: 'Thu',
      value: 3908,
    },
    {
      name: 'Fri',
      value: 4800,
    },
    {
      name: 'Sat',
      value: 3800,
    },
    {
      name: 'Sun',
      value: 4300,
    },
  ];

const Barchart = () => {
  return (
    <div className="chart-container" style={{width: '77vh', height: '47vh', margin: '2rem', backgroundColor: '#fff', borderRadius: '10px',padding: '10px' }}>
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
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
          <Bar dataKey="value" fill="#FF7D34" activeBar={<Rectangle fill="pink" stroke="blue" />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Barchart;

