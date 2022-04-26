import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Card from './components/Card'

function App() {
  const [highScore, setHighScore] = useState(0)

  // Update highscore
  const handleUpdateHighScore = (score) => {
    setHighScore(score)
  }

  return (
    <div className="App">
      <Header highScore={highScore} />
      <Card highScore={highScore} onUpdateHighScore={handleUpdateHighScore} />
    </div>
  )
}

export default App
