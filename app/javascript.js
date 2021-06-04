const wrap = document.getElementById('wrap');
const start = document.getElementById('start');

const textLists = [
 'Hello World',
 'This is my App',
 'How are you?'
];

const createText = () => {
 const p = document.getElementById('text');
 p.textContent = textLists[0];
}; 

createText();

const keyDown = e => {};

const rankCheck = rank => {};

const gameOver = id => {};

const timer = () => {};

start.addEventListener('click', () => {});