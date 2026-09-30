/* --- A. CANVAS ანიმაციური ფონი --- */
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const particles = [];
for (let i = 0; i < 40; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 3 + 1,
    dx: (Math.random() - 0.5) * 0.8,
    dy: (Math.random() - 0.5) * 0.8
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(56, 239, 125, 0.4)';
  ctx.strokeStyle = 'rgba(56, 239, 125, 0.08)';

  particles.forEach((p, index) => {
    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();

    for (let j = index + 1; j < particles.length; j++) {
      const p2 = particles[j];
      const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
      if (dist < 120) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    }
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

/* --- B. BMI კალკულატორი --- */
function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value) / 100;
  const resultDiv = document.getElementById('bmiResult');

  if (!weight || !height || height <= 0) {
    resultDiv.textContent = 'გთხოვთ შეიყვანოთ სწორი მონაცემები!';
    resultDiv.style.color = '#f87171';
    return;
  }

  const bmi = (weight / (height * height)).toFixed(1);
  let status = '';

  if (bmi < 18.5) status = 'წონის დეფიციტი ⚠️';
  else if (bmi < 25) status = 'ნორმალური წონა ✅';
  else if (bmi < 30) status = 'ჭარბი წონა ⚠️';
  else status = 'სიმსუქნე ❌';

  resultDiv.textContent = `თქვენი BMI: ${bmi} (${status})`;
  resultDiv.style.color = '#38ef7d';
}

/* --- C. ვიქტორინა --- */
function checkQuiz(element, isCorrect) {
  const options = document.querySelectorAll('.quiz-option');
  options.forEach(opt => opt.style.pointerEvents = 'none');

  const resultDiv = document.getElementById('quizResult');
  resultDiv.style.display = 'block';

  if (isCorrect) {
    element.style.background = 'rgba(56, 239, 125, 0.4)';
    element.style.borderColor = '#38ef7d';
    resultDiv.textContent = 'სწორი პასუხია! 👏';
    resultDiv.style.color = '#38ef7d';
  } else {
    element.style.background = 'rgba(239, 68, 68, 0.4)';
    element.style.borderColor = '#ef4444';
    resultDiv.textContent = 'არასწორია! სწორი პასუხია B) 11 მოთამაშე.';
    resultDiv.style.color = '#ef4444';
  }
}

/* --- D. ძებნის ფუნქცია --- */
function filterCards() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const cards = document.querySelectorAll('.rule-card, .sport-section');

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    if (text.includes(query)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}
