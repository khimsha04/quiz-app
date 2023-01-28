import React from 'react'
import Card from './Card';
import "./FinalPage.css"
import Images from "./Images/one.png"
const FinalPage = ({
  score,
  setShowFinalPage,
  setShowStartingPage,
  topScore,
  setTopScore,
  setScore,
  username,
  setUsername,
}) => {
  
  const handleClick = () => {
    if (score > topScore) {
      setTopScore(score);
    }

    setShowFinalPage(false);
    setShowStartingPage(true);
    setScore(0);
    setUsername("");
  }; 
  
  return (
  <Card>
    <h1 className="heading">თამაში დამთავრდა, {username}!</h1>

    <h3 className="primary_text">შენი საბოლოო ქულაა:</h3>

    <h3 className="final_score">{score}</h3>

    <button className="play_again_btn" onClick={handleClick}>
      თავიდან ცდა
    </button>
  </Card>
  )
}

export default FinalPage;
