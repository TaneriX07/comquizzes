import './StartCard.css'

const StartCard = ({ changeMode }) => {
  const handleClick = () => {
    changeMode(true)
  }

  return (
    <div className="cardContainer">
      <div className="head">
        <h2>Quiz Challenge</h2>
      </div>
      <div className="body">
        <p>
          Your objective is to answer the following questions within the time
          limit.
        </p>
        <p>
          Please note that incorrect answer will result in 10 seconds penalty.
        </p>
      </div>
      <button className="btn" onClick={handleClick}>
        START
      </button>
    </div>
  )
}

export default StartCard
