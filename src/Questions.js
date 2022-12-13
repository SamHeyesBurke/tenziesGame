import React from "react";

export default function Questions (props) {

    function getRandom() {
        return Math.floor(Math.random() *4)
    }

    const [submitted, setSubmitted] = React.useState(false)


    const styles = {
        backgroundColor: submitted ? 'pink' : 'white'
    }

    function handleSubmit() {
        setSubmitted(true)
    }



    const questionElements = props.questions.map(question => {

        if(getRandom() === 1) {
        return (
         <div>
             <h3>{question.question}</h3>
 
             <div>
                  <button className="answer-correct" style={styles}>{question.correct_answer}</button>
                  <button>{question.incorrect_answers[0]}</button>
                 {question.incorrect_answers[1] && <button>{question.incorrect_answers[1]}</button>}
                 {question.incorrect_answers[2] && <button>{question.incorrect_answers[1]}</button>}
             </div>
         </div>

         )
        } else if (getRandom() === 2) {
            return (
                <div>
                    <h3>{question.question}</h3>
        
                    <div>
                         <button>{question.incorrect_answers[0]}</button>
                         <button className="correct-answer" style={styles}>{question.correct_answer}</button>
                        {question.incorrect_answers[1] && <button>{question.incorrect_answers[1]}</button>}
                        {question.incorrect_answers[2] && <button>{question.incorrect_answers[1]}</button>}
                    </div>
                </div>
       
                )
        } else if (getRandom() === 3) {
            return (
                <div>
                    <h3>{question.question}</h3>
        
                    <div>
                         <button>{question.incorrect_answers[0]}</button>
                        {question.incorrect_answers[1] && <button>{question.incorrect_answers[1]}</button>}
                        <button className="correct-answer" style={styles}>{question.correct_answer}</button>
                        {question.incorrect_answers[2] && <button>{question.incorrect_answers[1]}</button>}
                    </div>
                </div>
       
                )
        } else {
            return (
                <div>
                    <h3>{question.question}</h3>
        
                    <div>
                         <button>{question.incorrect_answers[0]}</button>
                        {question.incorrect_answers[1] && <button>{question.incorrect_answers[1]}</button>}
                        {question.incorrect_answers[2] && <button>{question.incorrect_answers[1]}</button>}
                        <button className="correct-answer" style={styles}>{question.correct_answer}</button>
                    </div>
                </div>
       
                )
        }


     })




      return(
        <div>
            {questionElements}
            <button onClick={handleSubmit}>Submit</button>
        </div>
      )


}

