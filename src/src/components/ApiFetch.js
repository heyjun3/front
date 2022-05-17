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

  const deleteFile = (value) => {
    setFilenames(
      filenames.filter((file) => (file !== value))
    )
    fetch(`http://localhost:5000/deleteFile/${value}`, {method: 'DELETE', mode: 'cors'})
    .then(res => res.json())
    .then(data => console.log(data))
  }

  return (
    <div>
        <BoxList filenames={filenames} deleteFunc={deleteFile}/>
    </div>
  )
}

export default ApiFetch