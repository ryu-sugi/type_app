const wrap = document.getElementById('wrap');
const start = document.getElementById('start');

const textLists = [
 'Hello World','This is my App','How are you?',
  'Today is sunny','I love JavaScript!','Good morning',
  'I am Japanese','Let it be',
  'Typing Game','Information Technology',
  'I want to be a programmer','What day is today?',
  'I want to build a web app','Nice to meet you',
  'Chrome Firefox Edge Safari','machine learning',
  'Brendan Eich','John Resig','React Vue Angular',
  'Netscape Communications','undefined null NaN',
  'Thank you very much','Google Apple Facebook Amazon',
  'ECMAScript','console.log','for while if switch',
  'var let const','Windows Mac Linux iOS Android',
  'programming'
];

const createText = () => {
 const p = document.getElementById('text');
 const rnd = Math.floor(Math.random() * textLists.length);
 p.textContent = '';
 textLists[rnd].split('').map(value => {
  const span = document.createElement('span');
  span.textContent = value;
  p.appendChild(span);
 })
}; 


const keyDown = e => {};

const rankCheck = rank => {};

const gameOver = id => {};

const timer = () => {};

start.addEventListener('click', () => {
 createText();
});