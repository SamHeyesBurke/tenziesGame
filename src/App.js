import React from "react";
import Questions from "./Questions.js"
import { shuffle } from "lodash";



export default function App () {

    //set whether the game is in a played state which effects the conditional rendering
    const [isPlayed, setIsPlayed] = React.useState(true)

    //set the current list of quesitons which is set from the fetch request further below
    const [questions, setQuestions] = React.useState([])


    //if new game is played this utilises the use.effect to get new data from the API
    const [newGame, setNewGame] = React.useState(false)

    //sets the isPlayed state to true to change the conditional rendering
    function startQuiz() {
        setIsPlayed(true)
    }

    //changes the state of newgame so that there is new data fetched from the API
    function handleNewGame() {
        setNewGame(oldGame => !oldGame)
    }

    //fetches the API only when the state of 'NewGame' changes
    //and then saves the data to the questions state

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=10&encode=base64")
          .then(res => res.json())

          //decode the questions as there were unusual characters
          //using the "atob" function
          .then(data => {
            const decodedResults = data.results.map(result => ({
              ...result,
              question: atob(result.question),
              correct_answer: atob(result.correct_answer),
              incorrect_answers: result.incorrect_answers.map(answer => atob(answer))
            }));

            //the decoded data is then stored in the "questions" state
            setQuestions(decodedResults);
          })
          //if an error errors it will catch and log to the conso0l
          .catch(error => console.error(error));
      }, [newGame]);
    
  

    return(
        <main>
            {
                //conditonally render based on whether isPlayed is true
                isPlayed ? 
                <div className="container quiz">

                    <h1>The quiz</h1>

                        {/* pass in the questions from the API 
                        and the newGame function as props */}
                        <Questions 
                        questions={questions} 
                        newGame ={handleNewGame}
                        isNewGame = {newGame}
                        />
                        
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