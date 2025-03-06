document.addEventListener("DOMContentLoaded", function () {
    // MENU MOBILE
    let ul = document.querySelector('nav .ul');
    
    function openMenu() {
        ul.classList.add('open');
    }

    function closeMenu() {
        ul.classList.remove('open');
    }

    document.querySelector(".menu-icon").addEventListener("click", openMenu);
    document.querySelector(".close-icon").addEventListener("click", closeMenu);

    // FORMULÁRIO DE CONTATO
    const form = document.querySelector("form");

    // QUIZ
    const quizData = [
        {
            question: "O que é um vírus de computador?",
            options: [
                "Um tipo de software malicioso que pode danificar seu computador",
                "Um programa que melhora o desempenho do computador",
                "Uma ferramenta para proteger o computador de hackers",
                "Uma atualização importante para o sistema"
            ],
            correct: 0
        },
        {
            question: "Qual dessas é uma boa prática de cibersegurança?",
            options: [
                "Usar a mesma senha para todos os sites",
                "Evitar atualizações de software",
                "Clicar em links de e-mails desconhecidos",
                "Ativar a autenticação em dois fatores"
            ],
            correct: 3
        },
        {
            question: "Qual destas senhas é mais segura?",
            options: [
                "12345",
                "senha123",
                "qwerty",
                "d#5rT@!b9m"
            ],
            correct: 3
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const nextButton = document.getElementById("next-btn");
    const resultContainer = document.getElementById("result");
    const scoreElement = document.getElementById("score");
    const startButton = document.getElementById("start-btn");
    const quizContainer = document.getElementById("quiz-container");
    const restartButton = document.getElementById("restart-btn"); // Botão de reiniciar

    function startQuiz() {
        if (!startButton) return; // Garante que o código só roda na página do quiz
        startButton.style.display = "none";
        quizContainer.style.display = "block";
        loadQuestion();
    }

    function loadQuestion() {
        const currentQuestion = quizData[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        optionsElement.innerHTML = "";

        currentQuestion.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.classList.add("option");
            button.onclick = () => selectAnswer(index);
            optionsElement.appendChild(button);
        });
    }

    function selectAnswer(selectedIndex) {
        const correctIndex = quizData[currentQuestionIndex].correct;
        if (selectedIndex === correctIndex) {
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
        if (!resultContainer) return;
        quizContainer.style.display = "none";
        resultContainer.style.display = "block";
        scoreElement.textContent = `Sua pontuação: ${score} de ${quizData.length}`;
    }

    function resetQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        resultContainer.style.display = "none";
        quizContainer.style.display = "block";
        loadQuestion(); // Carrega a primeira pergunta
    }

    if (startButton) {
        startButton.addEventListener("click", startQuiz);
    }

    // Adicionando o evento para o botão de reiniciar
    if (restartButton) {
        restartButton.addEventListener("click", resetQuiz);
    }
});
