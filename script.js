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
            <div class="progress-bar" style="width: ${jsonElement}%"></div>
        </header>`;
})