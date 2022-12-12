import React from "react";




export default function App () {

    const [isPlayed, setIsPlayed] = React.useState(true)

    const [questions, setQuestions] = React.useState([])


    function startQuiz() {
        setIsPlayed(true)
    }


    //fetched the questions API when the page is first loaded
    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=10")
        .then(res => res.json())
        .then(data => setQuestions(data.results))
    }, [])


   


    // gets an array of the answer and question elements
    let correctAnswerElements = questions.map(question => question.correct_answer)
    let incorrectAnswerElements = questions.map(question => question.incorrect_answers)
    let questionElements = questions.map(question => question.question)
    
    const elements = questions.map((question) => (
        <div>
            <h3>{questionElements[question]}</h3>
            <button>{incorrectAnswerElements[question]}}</button>
            <button>{correctAnswerElements[question]}</button>
        </div>
    ))
  


    return(
        <main>
            {
            isPlayed ? 
            <div className="container quiz">

                {elements}

            </div>

            : 
            <div className="container start">

  
   

                <div className="startText">
                    <h1>Quizzical</h1>
                    <h3>Lets start the quiz 😎</h3>
                    <button onClick={startQuiz} className="startButton">Start quiz</button>
                </div>

            </div>

            }
         </main> 
    )
}

