import React from "react";

export default function App () {

    const [isPlayed, setIsPlayed] = React.useState(false)


    function startQuiz() {
        setIsPlayed(true)
    }

    return(
        <main>
            {
        isPlayed ? 
        <h1>render this</h1>
        : 
        <div className="startText">
            <h1>Quizzical</h1>
            <h3>Lets start the quiz 😎</h3>
            <button onClick={startQuiz}>Start quiz</button>
        </div>
             }
         </main>
    )
}