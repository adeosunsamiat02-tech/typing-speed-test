const TEXTS = {
  easy: [
    "The sun was setting over the quiet town as children played in the park.",
    "Learning to type fast takes daily practice and patience.",
    "My cat loves to sleep on my keyboard while I work from home.",
    "We went for a walk and bought fresh bread from the bakery.",
    "Music helps me focus when I am studying late at night.",
    "The coffee was hot and the morning was calm and quiet.",
    "She smiled and opened the window to let in the fresh air.",
    "Typing gets easier when you keep your fingers on the home row.",
    "I left my phone on the table and went outside.",
    "The rain stopped and the sky turned blue again.",
    "He writes a short note every day before breakfast.",
    "We watched the stars and talked about the future.",
    "The dog ran fast across the green field.",
    "Please remember to save your work often.",
    "A good day starts with a simple plan and a clear mind.",
    "The book was on the shelf next to the lamp.",
    "They laughed and shared stories until midnight.",
    "Every small step brings you closer to your goal.",
    "The bus was late but we still arrived on time.",
    "She plays the guitar and sings with her friends."
  ],

  medium: [
    "The city council approved a new plan to improve public transportation and reduce traffic congestion.",
    "Technology has changed how we communicate and work together across the world.",
    "A simple daily habit can lead to extraordinary results over a long period of time.",
    "The museum displayed ancient artifacts from Egypt and Greece that were thousands of years old.",
    "Learning a new language requires consistency more than talent or intelligence.",
    "The team worked late to fix the bug before the product launch tomorrow.",
    "Climate change affects weather patterns and sea levels around the planet.",
    "She decided to start a small business selling handmade candles online.",
    "Reading for thirty minutes each morning can improve focus and memory.",
    "The airplane landed smoothly despite the strong winds and heavy rain.",
    "Photography is about capturing light and telling a story with one frame.",
    "The restaurant was crowded but the service was still excellent.",
    "Building trust takes time but losing it happens in a moment.",
    "The festival brought together artists from more than twenty countries.",
    "Exercise is important not only for the body but also for mental health.",
    "He explained the project with clear examples and simple diagrams.",
    "The forest was quiet except for birds and the wind in the trees.",
    "Success often comes from doing ordinary things with extraordinary care.",
    "They traveled by train and saw mountains and rivers along the way.",
    "Writing helps you organize thoughts you did not know you had."
  ],

  hard: [
    "The archaeological expedition unearthed artifacts that complicated prevailing theories about Bronze Age trade networks. Obsidian from Anatolia, lapis lazuli from Afghanistan, and amber from the Baltic—all discovered in a single Mycenaean tomb—suggested commercial connections far more extensive than previously hypothesized. \"We've underestimated ancient peoples' navigational capabilities and their appetite for luxury goods,\" the lead researcher observed. \"Globalization isn't as modern as we assume.\"",
    "Quantum entanglement, often described as 'spooky action at a distance,' challenges our intuitive understanding of locality and causality in modern physics. When two particles become entangled, measuring one instantaneously determines the state of the other, regardless of distance. Einstein called it unsettling, but experiments have repeatedly confirmed the phenomenon.",
    "The Industrial Revolution was not merely a technological shift but a profound social transformation. Rural communities migrated to cities, family structures changed, and new economic classes emerged. While productivity increased dramatically, so did inequality, pollution, and the exploitation of child labor in factories.",
    "Cognitive biases influence our decisions more than we realize. Confirmation bias leads us to seek information that supports what we already believe, while availability bias makes us overestimate the likelihood of events we can easily recall. Understanding these biases is essential for better judgment.",
    "In 1969, Margaret Hamilton's code prevented an abort during the Apollo 11 lunar landing. When the onboard computer was overloaded with data, her software prioritized critical tasks and allowed Armstrong and Aldrin to land safely. Her work laid the foundation for modern software engineering.",
    "The Great Barrier Reef, stretching over 2,300 kilometers, is the largest living structure on Earth. It hosts thousands of species, yet rising ocean temperatures and acidification threaten its survival. Coral bleaching events have become more frequent, signaling an urgent ecological crisis.",
    "Cryptography relies on mathematical problems that are easy to create but difficult to reverse. Modern encryption, like RSA, uses prime factorization: multiplying two large primes is simple, but factoring the product back is computationally infeasible without the private key.",
    "Behavioral economics combines psychology and economics to explain why humans often act irrationally. People tend to fear losses more than they value equivalent gains, a concept known as loss aversion. This explains why investors hold losing stocks too long and sell winners too early.",
    "The human brain contains approximately 86 billion neurons, each connected to thousands of others. Despite weighing only about 1.4 kilograms, it consumes twenty percent of the body's energy. Its plasticity allows it to reorganize itself throughout life based on experience.",
    "Philosophers have long debated whether free will exists. Determinists argue that every action is caused by prior events, while libertarians claim we have genuine agency. Compatibilists attempt to reconcile both views by suggesting free will can coexist with a deterministic universe.",
    "The Silk Road was not a single road but a network of trade routes connecting East and West for over 1,400 years. Beyond silk and spices, it carried ideas, religions, and technologies like papermaking and gunpowder, shaping civilizations across continents.",
    "Machine learning models improve through exposure to data, but they are only as good as the data they receive. Biased datasets produce biased predictions. If a hiring algorithm is trained on historically biased hiring data, it will replicate and amplify that bias.",
    "Shakespeare's plays endure because they explore timeless human conflicts: ambition, jealousy, love, and betrayal. Hamlet's indecision, Othello's jealousy, and Macbeth's ambition resonate centuries later because they reflect fundamental aspects of human psychology.",
    "The theory of relativity fundamentally changed our understanding of time and space. Einstein showed that time dilates near massive objects and at high speeds. GPS satellites, orbiting Earth at high velocity, must correct for this effect daily or their calculations would be off by kilometers.",
    "Urbanization presents both opportunities and challenges. Cities offer economic growth and cultural exchange, but rapid urbanization without planning leads to housing shortages, traffic congestion, and environmental degradation. Sustainable planning is crucial for livable futures.",
    "The placebo effect demonstrates the powerful connection between mind and body. Patients who believe they are receiving treatment often improve even when given inert substances. This highlights the importance of expectation and belief in medical outcomes.",
    "Ocean currents act as a global conveyor belt, distributing heat around the planet. The Atlantic Meridional Overturning Circulation moves warm water north and cold water south. Scientists warn that melting ice caps could slow this system, drastically altering European climates.",
    "Writing clear code is harder than writing code that merely works. Good code is readable, maintainable, and self-documenting. As the saying goes: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.'",
    "The Renaissance was fueled by the rediscovery of classical Greek and Roman texts, but also by economic changes in Italian city-states. Wealthy patrons like the Medici family funded artists, allowing figures like Michelangelo and Leonardo to pursue ambitious projects.",
    "Dark matter makes up about 27% of the universe, yet we cannot see it directly. We infer its existence from gravitational effects on visible matter. Despite decades of research, its composition remains one of the greatest mysteries in astrophysics."
  ]
};

let diff = 'hard';
let mode = 'timed';
let currentText = '';
let timer = null;
let timeLeft = 60;
let elapsed = 0;
let total = 0;
let startTime = null;

const display = document.getElementById('text-display');
const input = document.getElementById('input');
const wpmEl = document.getElementById('wpm');
const accEl = document.getElementById('acc');
const timeEl = document.getElementById('time');
const bestEl = document.getElementById('best');
const overlay = document.getElementById('overlay');
const typingArea = document.getElementById('typingArea');
const topBar = document.getElementById('topBar');
const restartBtn = document.getElementById('restart');
const results = document.getElementById('results');

function getBest() {
  return parseInt(localStorage.getItem('typingBest') || '0');
}

function setBest(value) {
  localStorage.setItem('typingBest', value);
  bestEl.textContent = value + ' WPM';
}

setBest(getBest());

function load() {

  clearInterval(timer);

  const pool = TEXTS[diff];
  currentText = pool[Math.floor(Math.random() * pool.length)];

  display.innerHTML = '';

  [...currentText].forEach((char) => {
    const span = document.createElement('span');
    span.textContent = char;
    display.appendChild(span);
  });

  display.classList.remove('active');
  display.firstChild.classList.add('current');

  input.value = '';
  total = 0;
  timeLeft = 60;
  elapsed = 0;
  startTime = null;

  timeEl.textContent = mode === 'timed'? '0:60' : '0:00';
  wpmEl.textContent = '0';
  accEl.textContent = '100%';
  accEl.className = 'ok';

  overlay.classList.remove('hidden');
  typingArea.style.display = 'block';
  topBar.style.display = '';
  restartBtn.style.display = 'none';
  results.classList.remove('show');

  input.blur();
}

function start() {

  overlay.classList.add('hidden');
  display.classList.add('active');
  restartBtn.style.display = 'flex';
  input.focus();

  if (startTime) return;

  startTime = new Date();

  timer = setInterval(() => {

    if (mode === 'timed') {
      timeLeft--;
      timeEl.textContent = `0:${String(timeLeft).padStart(2, '0')}`;

      if (timeLeft <= 0) {
        finish();
      }
    }
    else {
      elapsed++;
      timeEl.textContent = `0:${String(elapsed).padStart(2, '0')}`;
    }

    update();

  }, 1000);
}

function update() {

  const e = mode === 'timed'? (60 - timeLeft) : elapsed;
  if (!e) return;

  const correct = [...input.value].filter((c, i) => c === currentText[i]).length;
  const wpm = Math.round((correct / 5) / (e / 60));
  const acc = total? Math.round((correct / total) * 100) : 100;

  wpmEl.textContent = wpm > 0? wpm : 0;
  accEl.textContent = acc + '%';

  accEl.className = acc >= 95? 'ok' : acc >= 80? 'yellow' : 'red';
}

input.addEventListener('input', () => {

  if (!startTime) {
    start();
  }

  const typed = input.value;
  total = typed.length;

  const spans = display.querySelectorAll('span');

  spans.forEach((span, i) => {
    span.className = '';

    if (i < typed.length) {
      span.classList.add(typed[i] === span.textContent? 'correct' : 'incorrect');
    }

    if (i === typed.length) {
      span.classList.add('current');
    }
  });

  update();

  if (typed.length === currentText.length) {
    finish();
  }
});

function finish() {

  clearInterval(timer);

  const e = mode === 'timed'? (60 - timeLeft) : elapsed || 1;
  const correct = [...input.value].filter((c, i) => c === currentText[i]).length;
  const wpm = Math.round((correct / 5) / (e / 60));
  const acc = total? Math.round((correct / total) * 100) : 0;
  const wrong = total - correct;

  document.getElementById('r-wpm').textContent = wpm;
  document.getElementById('r-acc').textContent = acc + '%';
  document.getElementById('r-good').textContent = correct;
  document.getElementById('r-bad').textContent = wrong;

  const best = getBest();
  const title = document.getElementById('resTitle');
  const sub = document.getElementById('resSub');
  const icon = document.getElementById('resIcon');
  const againBtn = document.getElementById('again');

  results.classList.remove('baseline', 'new-best');

  const hasPlayedBefore = localStorage.getItem('hasPlayed');

  if (!hasPlayedBefore) {
    title.textContent = 'Baseline Established!';
    sub.textContent = "You've set the bar. Now the real challenge begins—time to beat it.";
    icon.src = './img/icon-completed.svg';
    results.classList.add('baseline');

    againBtn.innerHTML = 'Beat This Score <img src="./img/icon-restart.svg" alt="">';

    localStorage.setItem('hasPlayed', '1');
    setBest(wpm);

  }
  else if (wpm > best) {
    title.textContent = 'High Score Smashed!';
    sub.textContent = "You're getting faster. That was incredible typing.";
    icon.src = './img/icon-new-pb.svg';
    results.classList.add('new-best');

    againBtn.innerHTML = 'Beat This Score <img src="./img/icon-restart.svg" alt="">';

    confetti({
      particleCount: 220,
      spread: 90,
      origin: { y: 0.7 }
    });

    setBest(wpm);

  }
  else {
    title.textContent = 'Test Complete!';
    sub.textContent = 'Solid run. Keep pushing to beat your high score.';
    icon.src = './img/icon-completed.svg';
    results.classList.add('baseline');

    againBtn.innerHTML = 'Go Again <img src="./img/icon-restart.svg" alt="">';
  }

  typingArea.style.display = 'none';
  restartBtn.style.display = 'none';
  topBar.style.display = 'none';
  results.classList.add('show');
}

document.getElementById('startBtn').onclick = start;
display.onclick = start;
document.getElementById('restart').onclick = load;
document.getElementById('again').onclick = load;

const diffBtn = document.getElementById('diffBtn');
const modeBtn = document.getElementById('modeBtn');
const diffMenu = document.getElementById('diffMenu');
const modeMenu = document.getElementById('modeMenu');

diffBtn.onclick = (e) => {
  e.stopPropagation();
  diffMenu.classList.toggle('show');
  modeMenu.classList.remove('show');
};

modeBtn.onclick = (e) => {
  e.stopPropagation();
  modeMenu.classList.toggle('show');
  diffMenu.classList.remove('show');
};

document.body.onclick = () => {
  diffMenu.classList.remove('show');
  modeMenu.classList.remove('show');
};

document.querySelectorAll('input[name="mDiff"]').forEach((radio) => {
  radio.onchange = () => {
    diff = radio.value;
    diffBtn.innerHTML = radio.value.charAt(0).toUpperCase() + radio.value.slice(1) + ' <img src="./img/icon-down-arrow.svg">';
    load();
  };
});

document.querySelectorAll('input[name="mMode"]').forEach((radio) => {
  radio.onchange = () => {
    mode = radio.value;
    const label = radio.value === 'timed'? 'Timed (60s)' : 'Passage';
    modeBtn.innerHTML = label + ' <img src="./img/icon-down-arrow.svg">';
    load();
  };
});

document.querySelectorAll('[data-diff]').forEach((btn) => {
  btn.onclick = () => {
    document.querySelectorAll('[data-diff]').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    diff = btn.dataset.diff;
    load();
  };
});

document.querySelectorAll('[data-mode]').forEach((btn) => {
  btn.onclick = () => {
    document.querySelectorAll('[data-mode]').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    mode = btn.dataset.mode;
    load();
  };
});

load();