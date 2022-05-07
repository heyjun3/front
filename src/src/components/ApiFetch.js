import React, {useState, useEffect} from 'react'
import BoxList from './BoxList'


const ApiFetch = () => {

  const [filenames, setFilenames] = useState([])
  useEffect(() => {
      fetch('http://localhost:5000/list', {method: 'GET', mode: "cors"})
      .then(res => res.json())
      .then(data => {
          setFilenames(data['list'])
      })
  }, [])

  return (
    <div>
        <BoxList value={filenames} />
    </div>
  )
}

export default ApiFetch