import React from "react";
import Card from "./Card"
import "./StartingPage.css"

const StartingPage =({
    setShowStartingPage,
    setShowQuestionsPage,
    topScore,
    username,
    setUsername,
  })=>{
    const startGame = () => {
        if (username.trim().length > 0) {
          setShowStartingPage(false);
          setShowQuestionsPage(true);
        }
      };

    return(
        <Card>
            <h1 className="header" >მოგესალმებით ქვიზ თამაშში!</h1>
            <h3 className="primary_text" >შეიყვანე სახელი.</h3>        
            <input
            type={'text'}
            className="username_input"
            placeholder="სახელი"
            value={username}
            onChange={(e) => setUsername(e.target.value)} />
            <button
            className="start_btn"
            onClick={startGame}>თამაშის დაწყება</button>
            <p className="top_score">
                უმაღლესი ქულა:<span>0</span>
            </p>
        </Card>

    )
}

export default StartingPage;