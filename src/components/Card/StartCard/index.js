import './StartCard.css'

const StartCard = ({ onChangeMode }) => {
  const handleClick = () => {
    onChangeMode(true)
  }

  return (
    <div className="cardContainer">
      <div className="head">
        <h2>Welcome!</h2>
      </div>
      <div className="body">
        <p>
          Your objective is to answer the following questions within the time
          limit.
        </p>
        <p>
          Please note that incorrect answer will result in 10 seconds penalty.
        </p>
        <p>The questions are related to computers, It'll be fun.</p>
      </div>
      <button className="btn" onClick={handleClick}>
        START
      </button>
    </div>
  )
}

export default StartCard
