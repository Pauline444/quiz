'use strict';

let quizContainer = document.querySelector('.quiz-container');
let playBtn = document.querySelector('.play');


// spara användarens input namn
// när användaren klickar på play så ska innerHTML bytas ut 
// hämta frågor och svar från JSON dokument
// använd litteral strings för att skriva ut ny innerHTML

playBtn.addEventListener('click', function () {
    let userName = document.querySelector('#name').value;
    console.log(userName);
    quizContainer.innerHTML = `<header>
            <h1>${userName}'s QUIZ</h1>
            <div class="progress-bar" style="width: %"></div>
        </header>
        <main>
        <div class="quiz-question">
                <h2>Frågan</h2>
                <div class="quiz-options">
                    <input type="radio" id="q" name="question">
                    <label for="q">Här är ett svar</label><br>
                    <input type="radio" id="q" name="question">
                    <label for="q">Här är ett svar</label><br>
                    <input type="radio" id="q" name="question">
                    <label for="q">Här är ett svar</label><br>
                    <input type="radio" id="q" name="question">
                    <label for="q">Här är ett svar</label>
                </div>
                <button class="btn next">Nästa</button>
            </div>
        </main>`;
})