// ---===<<I> Erik Hacker <I>>===---
// Deklarera konstanter för komponenterna
const textinput = document.getElementById('textbox');
const textresult = document.getElementById('text-resultat');

const checkinput = document.getElementById('checkbox');
const checkresult = document.getElementById('check-resultat');

const selectinput = document.getElementById('select');
const selectresult = document.getElementById('select-resultat');

const button = document.getElementById('resultat');

// Event-listeners

button.addEventListener('click', result)

// Deklarera allt annat här

function result() {
    textresult.textContent = textinput.value;

    if (checkinput.checked) {
        checkresult.textContent = "På";
    }
    else {
        checkresult.textContent = "Av";
    }

    selectresult.textContent = selectinput.value;
}