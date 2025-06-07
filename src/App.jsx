import {  useState } from 'react'
import './App.css'
import Seeker from './components/Seeker'
import Card from './components/Card'

function App() {
  const [data, setData] = useState([])
  //const filterOptions = ["All", "Music", "TvShow"]
   

  return (
    <>
     <div>
      <Seeker setData={setData} />
     </div>
      <div>
        {data.map((item) => (
          <Card imageUrl={item.artworkUrl100} title={item.collectionName?? item.kind} 
          additionalFields={[
            `Artist Name ${item.artistName}`,
            (item.collectionPrice ?? item.trackPrice) != null
              ? `Price ${item.collectionPrice ?? item.trackPrice}`
              : null
          ].filter(Boolean)}
          />
        ))}
      </div>
    </>
  )
}

export default App
