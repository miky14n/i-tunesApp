import {  useState } from 'react'
import './App.css'
import Seeker from './components/Seeker'

function App() {
  const [data, setData] = useState([])
  //const filterOptions = ["All", "Music", "TvShow"]
   

  return (
    <>
     <div>
      <Seeker setData={setData} />
     </div>
      <div>
        {data.map((item, index) => (
          <div key={index}>{item.kind}</div>
        ))}
      </div>
    </>
  )
}

export default App
