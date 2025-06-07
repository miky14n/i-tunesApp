import { useEffect, useState } from 'react'
import './App.css'
import { fetchItunesData } from "./lib/getData"
import Seeker from './components/Seeker'

function App() {
  const [data, setData] = useState([])
  //const filterOptions = ["All", "Music", "TvShow"]
   

  return (
    <>
      <div>
        {data.map((item, index) => (
          <div key={index}>{item.trackName}</div>
        ))}
      </div>
     <div>
      <Seeker  />
     </div>
    </>
  )
}

export default App
