import React, { useEffect, useState } from "react";


export default function Questions (props) {

    //sets state for whether the user has submitted there answer
    const [isSubmitted, setIsSubmitted] = useState(false)


    //when the check answers button is pressed
    function checkAnswers() {
      setIsSubmitted(true)
    }

    //when the play again button is pressed the new game function is ran in App;js
    //and isSubmitted is set to false
    function playAgain() {
      props.newGame()
      setIsSubmitted(false)

    }



    //only reshuffles when there is a new game
    function shuffleAnswers(question, isNewGame) {
      //if it is not a new game return the same order
      if (!isNewGame) return [...question.incorrect_answers, question.correct_answer];
      //if it is a new game then sort the answers
      let answers = [...question.incorrect_answers, question.correct_answer];
      answers.sort(() => Math.random() - 0.5);
      return answers;
    }

      //gets the style for the answer
        function getStyle(answer, correct) {
          if(isSubmitted && answer !== correct) {
            return {color: "red"}
          } else if (isSubmitted && answer === correct) {
            return {color: "green", fontSize: 20}
          }
          }


        //maps over the props.qustions using the helper function "shuffleAnswers"
      let answers = props.questions.map(question => {
        let shuffledAnswers = shuffleAnswers(question, props.isNewGame);
  
        let answerElements = shuffledAnswers.map((answer, index) => (
            <button 
            key={index} 
            style={getStyle(answer, question.correct_answer)}
              >
              {answer}
            </button>
        ));
  
        return (
          <div>
            {/* the question element */}
            <h3>{question.question}</h3>
            {answerElements}
          </div>
        );
      });





    return(
      <div>

      {/* display the question elements */}
     {answers}

        {
          isSubmitted ?
        
           <div>
           {/* set the new handleNewGame function in App.js
           and also change the state of isSubmitted */}
            <button onClick={playAgain}>Play again</button>
          </div>

           :

           <div>
          {/* change the state of isSubmitted  */}
          <button onClick={checkAnswers}>Check answers</button>
           </div>
          
        }
     </div>
    )
      }