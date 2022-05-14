import React from 'react'
import {LineChart, Line, CartesianGrid, XAxis, YAxis} from 'recharts';

const RenderLineChart = (props) => {
  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '70vh'}}>
      <LineChart width={1000} height={400} data={props.data} >
        <Line type="monotone" dataKey="price" stroke="#8884d8" dot={false}/>
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="date" />
        <YAxis />
      </LineChart>
    </div>
  )
}

export default RenderLineChart