// Deklarera konstanter för knapparna och resultat texten

const alertBut = document.querySelector('#alert');
const confirmBut = document.querySelector('#confirm');
const promptBut = document.querySelector('#prompt');
const result = document.getElementById('result');

// Lägg till click-event listeners för knapparna som anropar varsin funktion/metod
// kollar om man clickar på knappen
alertBut.addEventListener('click', doAlert)

confirmBut.addEventListener('click', doConfirm)

promptBut.addEventListener('click', doPrompt)

// Deklarera funktionerna/metoderna här

function doAlert() {
    //gör alert, skriver text i h2
    alert('Hello!');
    result.textContent = 'Alert Used!';
}

function doConfirm() {
    //true/false-variabel, true om man clickar OK. skriver ut olika saker beroende på om man clickade ok eller cancel
    var ok = confirm('Are you sure?');
    if (ok == true) {
        result.textContent = 'Great!';
    }
    else {
        result.textContent = 'Too bad!';
    }
}

function doPrompt() {
    //textvariabel som = input i prompten, skriver sedan ut variabeln i result
    var userName = prompt('Name?');
    result.textContent = userName;
}