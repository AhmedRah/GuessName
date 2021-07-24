const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const wonElement = document.getElementById('won')
const lostElement = document.getElementById('lost')

const score = document.querySelector('#scoreBoard')
var scoreBoard = 10

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', ()=> {
  let newResponse = JSON.parse(httpGet("randomName"))
  const newQuestion = {
    question : `What gender is `+ newResponse.name +` ?`,
    answers : [
      {text: newResponse.gender, correct: true},
      {text: invertGender(newResponse.gender), correct: false}
    ].sort((a, b) => 0.5 - Math.random())
  } 
  if (scoreBoard >= 20) {
    questionContainerElement.classList.add('hide')
    nextButton.classList.add('hide')
    wonElement.classList.remove('hide')
  }
  if (scoreBoard <= 0) {
    questionContainerElement.classList.add('hide')
    nextButton.classList.add('hide')
    lostElement.classList.remove('hide')
  }else {
    setNextQuestion(newQuestion)
  }
})

function startGame() {
  startButton.classList.add('hide')
  questionContainerElement.classList.remove('hide')
  
  let response = JSON.parse(httpGet("randomName"))
  const questions = {
    question : `What gender is `+ response.name +` ?`,
    answers : [
      {text: response.gender, correct: true},
      {text: invertGender(response.gender), correct: false}
    ].sort((a, b) => 0.5 - Math.random())
  } 
  setNextQuestion(questions)
}

function setNextQuestion(question) {
  resetState()
  score.innerText = scoreBoard
  showQuestion(question)
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct 
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  nextButton.classList.remove('hide')
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
    scoreBoard += 1
  } else {
    element.classList.add('wrong')
    scoreBoard -= 1
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

function invertGender(theGender) {
  if (theGender == "male") {
    return "female";
  }
  else {
    return "male";
  }
}

function httpGet(theUrl)
{
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
  xmlHttp.send( null );
  return xmlHttp.responseText;
}