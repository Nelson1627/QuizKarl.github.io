const quizData = [
    {
        question: "¿Quién fue Karl Marx?",
        a: "Un filósofo",
        b: "Un científico",
        c: "Un artista",
        d: "Un político",
        correct: "a",
    },
    {
        question: "¿Cuál es una de las obras más famosas de Marx?",
        a: "El Capital",
        b: "La Divina Comedia",
        c: "Cien años de soledad",
        d: "El Quijote",
        correct: "a",
    },
    {
        question: "¿Qué teoría desarrolló Karl Marx?",
        a: "El materialismo histórico",
        b: "La teoría de la relatividad",
        c: "La teoría de cuerdas",
        d: "La mecánica cuántica",
        correct: "a",
    },
    {
        question: "¿Qué sistema económico criticó Marx?",
        a: "Capitalismo",
        b: "Socialismo",
        c: "Feudalismo",
        d: "Comunismo",
        correct: "a",
    },
    {
        question: "¿Qué obra escribió Marx junto a Engels?",
        a: "El Capital",
        b: "Manifiesto Comunista",
        c: "Crítica de la razón pura",
        d: "El Príncipe",
        correct: "b",
    },
    {
        question: "¿Qué concepto introdujo Marx sobre la lucha de clases?",
        a: "Clase media",
        b: "Proletariado y burguesía",
        c: "Oligarquía",
        d: "Socialdemocracia",
        correct: "b",
    },
    {
        question: "¿Cuál es el objetivo final del comunismo según Marx?",
        a: "Una sociedad sin clases",
        b: "Una dictadura del proletariado",
        c: "La propiedad privada",
        d: "El capitalismo global",
        correct: "a",
    },
    {
        question: "¿En qué año nació Karl Marx?",
        a: "1818",
        b: "1820",
        c: "1830",
        d: "1848",
        correct: "a",
    },
    {
        question: "¿Qué país influyó en las ideas de Marx?",
        a: "Francia",
        b: "Alemania",
        c: "Inglaterra",
        d: "Estados Unidos",
        correct: "b",
    },
    {
        question: "¿Qué significa el término 'alienación' en la teoría de Marx?",
        a: "Desconexión del trabajo",
        b: "Aumento de la riqueza",
        c: "Mejora de las condiciones laborales",
        d: "Interacción social",
        correct: "a",
    },
];

const quiz = document.getElementById("quiz");
const submitButton = document.getElementById("submit");
const resultDisplay = document.getElementById("result");

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    quiz.innerHTML = `
        <div class="question">${currentQuestion.question}</div>
        <label><input type="radio" name="answer" value="a"> ${currentQuestion.a}</label>
        <label><input type="radio" name="answer" value="b"> ${currentQuestion.b}</label>
        <label><input type="radio" name="answer" value="c"> ${currentQuestion.c}</label>
        <label><input type="radio" name="answer" value="d"> ${currentQuestion.d}</label>
    `;
}

function calculateScore() {
    const answers = document.querySelectorAll("input[name='answer']");
    let selectedAnswer;
    answers.forEach((answer) => {
        if (answer.checked) {
            selectedAnswer = answer.value;
        }
    });

    if (selectedAnswer === quizData[currentQuestionIndex].correct) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quiz.style.display = "none";
    resultDisplay.innerHTML = `
        <h2>Tu puntaje es: ${score} de ${quizData.length}</h2>
        <p>${score / quizData.length >= 0.6 ? "¡Bien hecho!" : "Inténtalo de nuevo!"}</p>
    `;
}

submitButton.addEventListener("click", calculateScore);
loadQuestion();
