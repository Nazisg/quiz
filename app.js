let quizData = [
    {
        question:"JavaScript-də object necə yaradılır?",
        a:"var obj = {}",
        b:"function Foo(){}var obj = new Foo()",
        c:"var obj = new Object()",
        d:"Hamısı doğrudur",
        correct:"d"
    },
    {
        question:"Hansı metod 2 string'i  birləşdirib text formatında yeni string əmələ gətirir?",
        a:"append()",
        b:"concat()",
        c:"attach()",
        d:"Heç biri",
        correct:"b"
    },
    {
        question:"console.log(10+20+\"30\") Nəticəsi nədir?",
        a:"102030",
        b:"60",
        c:"3030",
        d:"30\"30\"",
        correct:"c"
    },
    {
        question:"JavaScript kodları hansı teqlərin arasında yazılır?",
        a:"<js></js>",
        b:"<main></main>",
        c:"<script></script>",
        d:"<link>",
        correct:"c"
    }
]
let quiz = document.getElementById("box")
let answerEls = document.querySelectorAll(".answer")
let questionEl= document.getElementById("text")
let atext = document.getElementById("atext")
let btext = document.getElementById("btext")
let ctext = document.getElementById("ctext")
let dtext = document.getElementById("dtext")
let submit = document.getElementById("submit")

let currentQuiz = 0
let score = 0

loadQuiz()
function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    atext.innerText = currentQuizData.a
    btext.innerText = currentQuizData.b
    ctext.innerText = currentQuizData.c
    dtext.innerText = currentQuizData.d
} 
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl=> {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submit.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Sorğu tamamlandı</h2>
           <h2>Nəticə: ${score}/${quizData.length}</h2>
           <button onclick="location.reload()">Təkrar oyna</button>
           `
       }
    }
})
