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
});

decrementBtn.addEventListener('click', () => {
    count--;
    num.textContent = count;
    messageCount++;
});

resetBtn.addEventListener('click', () => {
    count = 0;
    num.textContent = count;
    message.textContent = messageCount;
    messageCount = 0;
})