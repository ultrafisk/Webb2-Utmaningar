// Deklarera konstanter för knapparna och resultat texten

const alertBut = document.querySelector('#alert');
const confirmBut = document.querySelector('#confirm');
const promptBut = document.querySelector('#prompt');
const result = document.getElementById('result');

// Lägg till click-event listeners för knapparna som anropar varsin funktion/metod

alertBut.addEventListener('click', doAlert)

confirmBut.addEventListener('click', doConfirm)

promptBut.addEventListener('click', doPrompt)

// Deklarera funktionerna/metoderna här

function doAlert() {
    alert('Hello!');
    result.textContent = 'Alert Used!';
}

function doConfirm() {
    var ok = confirm('Are you sure?');
    if (ok == true) {
        result.textContent = 'Great!'
    }
    else {
        result.textContent = 'Too bad!'
    }
}

function doPrompt() {
    var userName = prompt('Name?');
    result.textContent = userName;
}