import { useEffect, useState } from 'react'
import './App.css'
import { fetchItunesData } from "./lib/getData"
import Seeker from './components/Seeker'

function App() {
  const [data, setData] = useState([])
  //const filterOptions = ["All", "Music", "TvShow"]
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchItunesData("one+direction")
      setData(response.results) 
    };
    fetchData()
  }, []) 

  return (
    <>
      <div>
        {data.map((item, index) => (
          <div key={index}>{item.trackName}</div>
        ))}
      </div>
     <div>
      <Seeker filterOptions={["All", "Music", "TvShow"]} />
     </div>
    </>
  )
}

export default App
