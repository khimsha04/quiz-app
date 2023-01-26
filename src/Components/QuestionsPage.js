import React, { useState } from "react";
import {questions} from "../questions";
import Questions from './Questions'
import "./Questions.css"

const QuestionsPage = ({
    setShowPages,
    score,
    setScore,
    setShowQuestionsPage,
    setShowFinalPage,
  }) =>{
    const [questionIndex, setQuestionIndex] = useState(0);
    return(
        <div> 
            

            <Questions  
                
                questionIndex={questionIndex}
                questions={questions}
                setQuestionIndex={setQuestionIndex}
                setShowQuestionsPage={setShowQuestionsPage}
                setShowFinalPage={setShowFinalPage}
                score={score}
                setScore={setScore}
            />
        </div>
    )
}

export default QuestionsPage;