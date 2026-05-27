const num = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');
const message = document.getElementById('message');
let messageCount = 0;

let count = 0;
incrementBtn.addEventListener('click', () => {
    count++;
    num.textContent = count;
    messageCount++;
    if (count > 0) {
        num.style.color = 'green';
    }
    if (count === 0) {
        num.style.color = 'black';
    }
});

decrementBtn.addEventListener('click', () => {
    count--;
    num.textContent = count;
    messageCount++;
    if (count < 0) {
        num.style.color = 'red';
    } 
    if (count === 0) {
        num.style.color = 'black';
    }
});

resetBtn.addEventListener('click', () => {
    count = 0;
    num.textContent = count;
    num.style.color = 'black';
    message.textContent = messageCount;
    messageCount = 0;
})