let counterValue = 0;
const ref = {
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
  value: document.querySelector('#value'),
}

ref.decrementBtn?.addEventListener('click', handleClickDecrement)
ref.incrementBtn?.addEventListener('click', handleClickIncrement)


function setCounterValue(val) {
  if (counterValue === val) return;
  counterValue = val;
  ref.value.textContent = String(val);
}

function handleClickDecrement() {
  setCounterValue(counterValue - 1);
}

function handleClickIncrement() {
  setCounterValue(counterValue + 1);
}
