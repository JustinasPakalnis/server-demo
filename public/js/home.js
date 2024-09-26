const counterDOM = document.querySelector('.counter');
const valueDOM = counterDOM.querySelector('.value');
const minusDOM = counterDOM.querySelector('.btn:first-child');
const plusDOM = counterDOM.querySelector('.btn:last-child');

let count = 0;

function minus() {
    valueDOM.textContent = --count;
}

function plus() {
    valueDOM.textContent = ++count;
}

minusDOM.addEventListener('click', minus);
plusDOM.addEventListener('click', plus);