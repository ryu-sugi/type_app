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

let checkTexts = [];

const createText = () => {
 const p = document.getElementById('text');
 const rnd = Math.floor(Math.random() * textLists.length);
 p.textContent = '';
 checkTexts = textLists[rnd].split('').map(value => {
  const span = document.createElement('span');
  span.textContent = value;
  p.appendChild(span);
  return span;
 })
}; 

let score = 0;

const keyDown = e => {
 wrap.style.backgroundColor = '#666';

 if(e.key === checkTexts[0].textContent) {
  checkTexts[0].className = 'add-color';
  checkTexts.shift();
  score++;
  if(!checkTexts.length) createText();
 
 } else if(e.key === 'Shift') {
  wrap.style.backgroundColor = '#666';
  
 } else {
  wrap.style.backgroundColor = '#cd5c5c';
 }
};

const rankCheck = rank => {
 let text = '';

 if(score < 100) {
   text = `あなたのランクはCです。\nBランクまであと${100 - score}文字です。`;
  } else if(score < 200) {
   text = `あなたのランクはBです。\nAランクまであと${200 - score}文字です。`;    
  } else if(score < 300) {
   text = `あなたのランクはAです。\nSランクまであと${300 - score}文字です。`;    
  } else if(score >= 300) {
   text = `あなたのランクはSです。\nおめでとうございます！`;    
  }
  return `${score}文字打てました！\n${text}\n【OK】リトライ／【キャンセル】終了`;
};

const gameOver = id => {
 clearInterval(id);
 const result = confirm(rankCheck(score));
 if(result) window.location.reload();
};

const timer = () => {
 let time = 60;
 const count = document.getElementById('count');
 const id = setInterval(() => {
  if(time <= 0) gameOver(id);
  count.textContent = time--;
  }, 1000);
};

start.addEventListener('click', () => {
 timer();
 createText();
 start.style.display = 'none';
 document.addEventListener('keydown', keyDown);
})