import React, {useEffect, useState} from 'react'
import {useLocation, Navigate} from 'react-router-dom'
import RenderLineChart from './LineChart'

const filenameNumber = 2

const ChartLists = () => {
  const [products, setProducts] = useState([])
  const [redirect, setRedirect] = useState(false)

  let location = useLocation()
  const filename = location.pathname.split('/')[filenameNumber]

  useEffect(() => {
    fetch(`http://localhost:5000/chart_list/${filename}`, {method: 'GET', mode: 'cors'})
    .then(res => res.json()) 
    .then(data => {
      if (data.status === "error"){
        console.log('error')
        setRedirect(true)
      }
      setProducts(data)
    })
  }, [filename])
  
  if (redirect){
    return <Navigate to="/list"/>
  }

  return (
    <div className="chartLists">
      {products.map((product) => { 
        return <RenderLineChart key={product.asin} data={product.data} title={product.title} jan={product.jan} asin={product.asin}/>
      })}
    </div>
  )
}

export default ChartLists