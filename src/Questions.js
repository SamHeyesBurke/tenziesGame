import React from "react";

export default function Questions (props) {

    const questionElements = props.questions.map(question => {
        return (

         <div>
             <h3>{question.question}</h3>
 
             <div>
                  <button>{question.correct_answer}</button>
                  <button>{question.incorrect_answers[0]}</button>
                 {question.incorrect_answers[1] && <button>{question.incorrect_answers[1]}</button>}
                 {question.incorrect_answers[2] && <button>{question.incorrect_answers[1]}</button>}
             </div>
         </div>
         
         )
     })

      return(
        <div>
            {questionElements}
        </div>
      )


}

