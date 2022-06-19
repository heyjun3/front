import React, {useEffect, useState} from 'react'
import RenderLineChart from './LineChart'

const jan = '4901872837144'
const asin = 'B00YM1MEJI'

const ChartLists = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/search/${asin}`, {method: 'GET', mode: 'cors'})
    .then(res => res.json())
    .then(data => setData(data))
  }, [])

  return (
    <div>
        <RenderLineChart data={data.chart_data} title={data.title} jan={jan} asin={asin}/>
    </div>
  )
}

export default ChartLists