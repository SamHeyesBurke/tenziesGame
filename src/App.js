import React from "react";
import Questions from "./Questions.js"



export default function App () {

    const [isPlayed, setIsPlayed] = React.useState(true)

    const [questions, setQuestions] = React.useState([])

    const [newGame, setNewGame] = React.useState(false)


    function startQuiz() {
        setIsPlayed(true)
    }

    function handleNewGame() {
        setNewGame(oldGame => !oldGame)
    }

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=10")
        .then(res => res.json())
        .then(data => setQuestions(data.results))
    }, [newGame])











    return(
        <main>
            {
            isPlayed ? 
            <div className="container quiz">


                <Questions 
                questions={questions} 
                newGame ={handleNewGame}
                />
                
       
                <h1>The quiz</h1>

                

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