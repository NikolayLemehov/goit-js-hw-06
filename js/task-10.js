const ref = {
  boxes: document.querySelector('div#boxes'),
  input: document.querySelector('input[type="number"]'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
}

const getItemMarkup = (index) => `<div class="item"
 style="width: ${30 + 10 * index}px; height: ${30 + 10 * index}px; background-color: ${getRandomHexColor()}"></div>`

const getItemListMarkup = (amount) => Array(amount).fill('').map((_, i) => getItemMarkup(i)).join('')

ref.createBtn.addEventListener('click', handleClickCreate);
ref.destroyBtn.addEventListener('click', handleClickDestroy);


function handleClickCreate() {
  clearBoxes();
  createBoxes(Number(ref.input.value))
}

function handleClickDestroy() {
  clearBoxes();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  ref.boxes.insertAdjacentHTML('afterbegin', getItemListMarkup(amount));
}

function clearBoxes() {
  while (ref.boxes.childNodes.length > 0) {
    ref.boxes.firstChild.remove();
  }
}
