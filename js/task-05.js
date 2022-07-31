const DEFAULT_VALUE = 'Anonymous';
const ref = {
  input: document.querySelector('input#name-input'),
  output: document.querySelector('span#name-output'),
}

ref.input.addEventListener('input', handleInput)

function handleInput(evt) {
  ref.output.textContent = evt.target.value === '' ? DEFAULT_VALUE : evt.target.value;
}
