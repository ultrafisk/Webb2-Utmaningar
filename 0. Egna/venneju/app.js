const count = document.getElementById('count');
const button = document.getElementById('button');

button.addEventListener('click', click)
count.textContent = 0;

function click() {
    count.textContent ++;
}