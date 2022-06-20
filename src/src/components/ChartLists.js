import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import RenderLineChart from './LineChart'

const jan = '4901872837144'
const asin = 'B08K3GYGQ9'

const ChartLists = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    fetch(`http://localhost:5000/search/${asin}`, {method: 'GET', mode: 'cors'})
    .then(res => res.json())
    .then(data => setData(data))
  }, [])

  return (
    <div className="chartLists">
        <RenderLineChart data={data.data} title={data.title} jan={jan} asin={asin}/>
        <RenderLineChart data={data.data} title={data.title} jan={jan} asin={asin}/>
    </div>
  )
}

export default ChartLists