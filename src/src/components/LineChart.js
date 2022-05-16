import React from 'react'
import {LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer} from 'recharts';


const RenderLineChart = (props) => {
  return (
    <div>
      <ResponsiveContainer className="LineChart" width='70%' height={400}>
      <LineChart data={props.data} >
        <Line type="monotone" dataKey="price" stroke="#8884d8" dot={false}/>
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="date" />
        <YAxis />
      </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RenderLineChart