const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

/* This variable mixes the questions order around and able to be redefined*/

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}
/* Sets the next question with a random order*/
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])


}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerHTML = answer.text
        button.classList.add('btn')
        /* Validates if the answer is correct*/
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
    
}
/* function to reset each question with new answers*/
function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}


/* Connecting the selected button to if it is right or wrong */
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }

    nextButton.classList.remove('hide')
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}


function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

/* List of questions*/
const questions = [ 
    { 
        question: 'Inside which element do we put the Javascript source code in?',
            answers: [
            { text: 'javascript', correct: false},
            { text: 'js', correct: false},
            { text: 'script', correct: true},
            { text: 'head', correct: false},
        ]
    },
    { 
        question: 'If a paragraph tag is inside of a body tag, which one is the parent element?',
            answers: [
            { text: 'paragraph tag', correct: false},
            { text: 'html tag', correct: false},
            { text: 'body tag', correct: true},
            { text: 'tag tag', correct: false},
            ]
},
{       question: 'What does DOM stand for?',
            answers: [
            { text: 'Document Object Markup', correct: false},
            { text: 'Document Object Model', correct: true},
            { text: 'Document Object Method', correct: false},
            { text: 'Dorito Orange Mint', correct: false},
            ]
},
    {
        question: 'What does CSS stand for?',
        answers: [
            { text: 'Computer Style System', correct: false},
            { text: 'Cascading Style Sheet', correct: true},
            { text: 'Computer Style Sheet', correct: false},
            { text: 'Cascading Step System', correct: false},
            ]
}, 
     {       
        question: 'How do you call a function?',
        answers: [
            { text: 'functionName()', correct: true},
            { text: '#functionName', correct: false},
            { text: '.functionName', correct: false},
            { text: 'functionName=', correct: false},
            ]
},         
{       
        question: 'What is a boolean?',
        answers: [
            { text: 'A method used with functions', correct: false},
            { text: 'A way to call multiple classes', correct: false},
            { text: 'A css color property', correct: false},
            { text: 'A true and false statement', correct: true},
             ]
},

]