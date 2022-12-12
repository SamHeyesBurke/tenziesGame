import fetch from 'node-fetch'

let questions =[]


fetch("https://opentdb.com/api.php?amount=10")
.then(res => res.json())
.then(data => console.log(data.results[0].question ))



