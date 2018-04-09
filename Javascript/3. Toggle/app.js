// Deklarera konstanter för knapparna och resultat texten

const button = document.getElementById('toggle');
const text = document.getElementById('message');

// Lägg till click-event listeners för knapparna som anropar varsin funktion/metod

button.addEventListener('click', toggle)

// Deklarera allt annat här

//variabel som säger om hidden är aktiv
var active = 0;

//om inte aktiv ändrar till aktiv och sätter visibility till hidden, tvärtom om redan aktiv
function toggle() {
    if(active == 0) {
        active = 1;
        text.style.visibility = "hidden";
    }
    else {
        active = 0;
        text.style.visibility = "visible";
    }
}