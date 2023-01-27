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
  }; if(score<500){
      return(
        <div>
          <div><img style={{width:400,height:300,margin:'auto'}} src={require('./Images/two.jpg')} alt='image'/></div>
          <span style={{
          fontSize:40,color:'black',borderRadius:10,position:'absolute',top:400,left:580
         }}>ჩაიხედე წიგნებში</span>
          <button className="play_again_btn" onClick={handleClick}>
            თავიდან ცდა
          </button>
        </div>
      )
    }
    if(score > 500){
      return(
        <div>
          <div><img style={{width:400,height:300,margin:'auto'}} src={require('./Images/one.png')} alt='image'/></div>
         <span style={{
          fontSize:30,backgroundColor:'black',color:'white',borderRadius:10,position:'absolute',top:480,left:685
         }}> გილოცავ</span>
         <button className="play_again_btn" onClick={handleClick}>
      თავიდან ცდა
    </button>
        </div>
      )
    }
   
  
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
