import {  useState } from 'react'
import './App.css'
import Seeker from './components/Seeker'
import Card from './components/Card'

function App() {
  const [data, setData] = useState([])
   

  return (
    <>
     <div >
      <Seeker setData={setData} />
     </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.length > 0 ? (
          data.map((item) => (
            <Card
              key={item.collectionId ?? item.trackId}
              imageUrl={
                item.artworkUrl100 ??
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/ITunes_logo.svg/1200px-ITunes_logo.svg.png"
              }
              title={item.collectionName ?? item.kind}
              additionalFields={[
                `Artist Name ${item.artistName}`,
                (item.collectionPrice ?? item.trackPrice) != null
                  ? `Price ${item.collectionPrice ?? item.trackPrice}`
                  : null,
              ].filter(Boolean)}
            />
          ))
        ) : (
          <div className="text-center text-gray-600 py-4">
            No Data.
          </div>
        )}

      </div>


    </>
  )
}

export default App
