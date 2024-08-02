const textareaEl = document.getElementById('textarea');
const totalCounterEl = document.getElementsByClassName('total-counter')[0];
const remainingCounterEl = document.getElementsByClassName('remaining-counter')[0];

textareaEl.addEventListener('keyup', () => {
    updateCounter();
});

updateCounter();

function updateCounter() {
    totalCounterEl.innerText = textareaEl.value.length;
    const maxLength = parseInt(textareaEl.getAttribute('maxlength'));
    remainingCounterEl.innerText = maxLength - textareaEl.value.length;
}
