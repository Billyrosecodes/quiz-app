const question = [
    {
        question: "Which is the Larget animal in the world?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Blue whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},


        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
            { text: "Vatican City", correct: true},
            { text: "Lagos", correct: false},
            { text: "Iragbiji", correct: false},
            { text: "Ondo", correct: false},


        ]
    },
    {
        question: "Which is the Larget desert in the world?",
        answers: [
            { text: "Shuperu", correct: false},
            { text: "Kalahari", correct: false},
            { text: "Kenya", correct: false},
            { text: "Sahara", correct: true},


        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false},
            { text: "Antartica", correct: true},
            { text: "Kenya", correct: false},
            { text: "Sahara", correct: false},


        ]
    }
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
       const buttton = document.createElement('button');
       buttton.innerHTML = answer.text;
       buttton.classList.add("btn");
       answerButtons.appendChild(button); 
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){

    }
}
startQuiz();