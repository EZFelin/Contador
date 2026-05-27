const num = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');
const x2Btn = document.getElementById('X2');
const message = document.getElementById('message');
function updateColor(count) {
    if (count > 0) {
        num.style.color = 'green';
    }
    if (count < 0) {
        num.style.color = 'red';
    }
    if (count === 0) {
        num.style.color = 'black';
    }
}
function updateMessage(count) {
    if (count > 0) {
        message.textContent = "Contagem positiva!";
    }
    if (count < 0) {
        message.textContent = "Contagem negativa!";
    }
    if (messageCount >= 100) {
        message.textContent = "Você clicou mais de 100 vezes!";
    }
}
let messageCount = 0;

let count = 0;
incrementBtn.addEventListener('click', () => {
    count++;
    num.textContent = count;
    messageCount++;
    updateColor(count);
    updateMessage(count);
});

decrementBtn.addEventListener('click', () => {
    count--;
    num.textContent = count;
    messageCount++;
    updateColor(count);
    updateMessage(count);
});

resetBtn.addEventListener('click', () => {
    count = 0;
    num.textContent = count;
    message.textContent = messageCount;
    messageCount = 0;
    updateColor(count);
    updateMessage(count);
})
x2Btn.addEventListener('click', () => {
    count = count * 2;
    num.textContent = count;
    messageCount++;
    updateColor(count);
    updateMessage(count);
});