import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [data, setData] = useState([])

  useEffect(()=>{
    axios.get('/api/data')
    .then((response)=>{ setData(response.data) })
    .catch((error)=>{ console.error('Error fetching data:', error) })
  },[])

  return (
    <>
      <p>DATA : {data.length}</p>

      {data.map((item, index) => (
        <div key={index}>
          <p>{item.message}</p>
        </div>
      ))}
    </>
  )
}

export default App
