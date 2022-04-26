import React, { useEffect } from 'react'
import './Time.css'

const Time = ({ sec, onUpdateSec, onGameOver }) => {
  useEffect(() => {
    if (sec >= 0) {
      setTimeout(() => {
        onUpdateSec(sec)
      }, 1000)
    }
  })

  // Make sure the seconds are displayed properly
  const printSec = (sec) => {
    if (sec <= 0) {
      onGameOver(true)
      return '00'
    } else if (sec < 10) {
      return '0' + sec
    } else {
      return sec
    }
  }

  return <div className="time">00:00:{printSec(sec)}</div>
}

export default Time
