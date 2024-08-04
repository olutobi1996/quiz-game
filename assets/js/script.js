const questions = [
    {
        question: "what football team won the world cup in 1966?", 
        answers: [
            { text: "England", correct: true},
            { text: "Germany", correct: false},
            { text: "Brazil", correct: false},
            { text: "France", correct: false},
        ] 
    },
    {
        question: "How many coloured rings in the Olympic Flag?", 
        answers: [
            { text: "2", correct: false},
            { text: "6", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: true},
        ]
    },
    {
        question: "Who directed the film pulp fiction?", 
        answers: [
            { text: "Daniel Day Lewis", correct: false},
            { text: "Quentin Taratino", correct: true},
            { text: "Steven Speilberg", correct: false},
            { text: "Martin Scorses", correct: false}, 
        ]
    },
    {
        question: "In the film Lion King Mufasa dies from being trampled on by a pack of?", 
        answers: [
            { text: "sheep", correct: false},
            { text: "hyenas", correct: false},
            { text: "wildebeests", correct: true},
            { text: "bears", correct: false},
        ]
    },
    {
        question: "Who wrote the novel of mice and men?", 
        answers: [
            { text: "Virginia Woolf", correct: false},
            { text: "Elaine Anderson", correct: false},
            { text: "William Faulkner", correct: false},
            { text: "John Steinbeck", correct: true},
        ]
    },
    {
        question: "What is the name of the fourth book in the Harry Potter Series?", 
        answers: [
            { text: "Harry Potter and the Goblet of Fire", correct: true},
            { text: "Harry Potter and the Deathly Hallows", correct: false},
            { text: "Harry Potter and Philosophers Stone", correct: false},
            { text: "Harry Potter and Half Blood Prince", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementsByClassName("answer-buttons");
const nextButton = document.getElementById("next");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
currentQuestionIndex = 0;
score = 0;
nextButton.innerHTML = "next";
showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions [currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    }); }

    function resetState(){
        nextButton.style.display = "none";
        while(answerButtons.firstChild) {
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }

    function selectAnswer(e){
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";
        if(isCorrect) {
            selectedBtn.classList.add("correct");
        } else {
            selectedBtn.classList.add("incorrect");
        }
        Array.from(answerButtons.children).forEach(button => {
            if(button.dataset.correct === "true"){
                button.classList.add("correct");
            }
            button.disabled = "true";
        });
        nextButton.style.display = "block";
    }



startQuiz();