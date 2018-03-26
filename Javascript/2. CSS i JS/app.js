// Deklarera konstanter för knapparna och resultat texten

const colorBut = document.getElementById('color');
const sizeBut = document.getElementById('size');
const fontBut = document.getElementById('font');

// Lägg till click-event listeners för knapparna som anropar varsin funktion/metod

colorBut.addEventListener('click', colorClick)
sizeBut.addEventListener('click', sizeClick)
fontBut.addEventListener('click', fontClick)

// Deklarera funktionerna/metoderna här

function colorClick() {
    colorBut.style.backgroundColor = "#ff69b4";
}

function sizeClick() {
    sizeBut.style.width = "200px";
}

function fontClick() {
    fontBut.style.fontSize = "69px";
}