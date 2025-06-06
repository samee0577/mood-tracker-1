import { useState } from 'react'
import { MoodForm } from './components/moodForm'
import { MoodList } from './components/moodList'
import { MoodChart } from './components/moodChart'
import "./App.css"

function App() {
  const [moods, setMoodList] = useState([]);
  return (
    <div>
      <h1 className='Header'>Mood-Tracker</h1>
      <div className='Full-page'>
        <div className='MainContainer'>
          <MoodForm moods={moods} setMoodList={setMoodList} />
          <MoodList moods={moods} setMoodList={setMoodList} />
        </div>
        <div>
          <MoodChart moods={moods}></MoodChart>
        </div>
      </div>
    </div>
  )
}

export default App