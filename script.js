/* ==========================================
   1. ტაქტიკის მონაცემები და მოედანზე ნახაზები
   ========================================== */
const TACTICS_DATA = {
  football: {
    tikitaka: {
      badge: "Tiki-Taka: მოკლე პასები და სამკუთხედების შექმნა მოედანზე",
      draw: (svg) => `
        <!-- მოთამაშეები -->
        <circle cx="200" cy="250" r="14" fill="#fbbf24"/><text x="200" y="254" text-anchor="middle" fill="#000" font-weight="bold" font-size="12">6</text>
        <circle cx="320" cy="180" r="14" fill="#fbbf24"/><text x="320" y="184" text-anchor="middle" fill="#000" font-weight="bold" font-size="12">8</text>
        <circle cx="320" cy="320" r="14" fill="#fbbf24"/><text x="320" y="324" text-anchor="middle" fill="#000" font-weight="bold" font-size="12">10</text>
        <circle cx="450" cy="250" r="14" fill="#fbbf24"/><text x="450" y="254" text-anchor="middle" fill="#000" font-weight="bold" font-size="12">9</text>
        <!-- პასის ხაზები -->
        <line x1="200" y1="250" x2="320" y2="180" stroke="#fbbf24" stroke-width="3" stroke-dasharray="6,4"/>
        <line x1="320" y1="180" x2="320" y2="320" stroke="#fbbf24" stroke-width="3" stroke-dasharray="6,4"/>
        <line x1="320" y1="320" x2="200" y2="250" stroke="#fbbf24" stroke-width="3" stroke-dasharray="6,4"/>
        <line x1="320" y1="180" x2="450" y2="250" stroke="#fbbf24" stroke-width="3" stroke-dasharray="6,4"/>
        <line x1="320" y1="320" x2="450" y2="250" stroke="#fbbf24" stroke-width="3" stroke-dasharray="6,4"/>
      `
    },
    parkthebus: {
      badge: "Park the Bus: 10 მოთამაშე დაცვაში საკუთარ საჯარიმოსთან",
      draw: (svg) => `
        <rect x="30" y="80" width="180" height="340" fill="rgba(239, 68, 68, 0.25)" stroke="#ef4444" stroke-width="2"/>
        <!-- მცველები -->
        <circle cx="80" cy="120" r="12" fill="#ef4444"/>
        <circle cx="80" cy="200" r="12" fill="#ef4444"/>
        <circle cx="80" cy="300" r="12" fill="#ef4444"/>
        <circle cx="80" cy="380" r="12" fill="#ef4444"/>
        <circle cx="150" cy="150" r="12" fill="#ef4444"/>
        <circle cx="150" cy="220" r="12" fill="#ef4444"/>
        <circle cx="150" cy="280" r="12" fill="#ef4444"/>
        <circle cx="150" cy="350" r="12" fill="#ef4444"/>
        <!-- კონტრშეტევის ისარი -->
        <line x1="160" y1="250" x2="650" y2="250" stroke="#38ef7d" stroke-width="4" marker-end="url(#arrow)"/>
      `
    },
    gegenpressing: {
      badge: "Gegenpressing: მაღალი პრესინგის ზონა მეტოქის ნახევარზე",
      draw: (svg) => `
        <rect x="400" y="30" x2="770" width="370" height="440" fill="rgba(251, 191, 36, 0.2)" stroke="#fbbf24" stroke-dasharray="8,4"/>
        <circle cx="500" cy="150" r="14" fill="#fbbf24"/>
        <circle cx="520" cy="250" r="14" fill="#fbbf24"/>
        <circle cx="500" cy="350" r="14" fill="#fbbf24"/>
        <circle cx="620" cy="200" r="14" fill="#fbbf24"/>
        <circle cx="620" cy="300" r="14" fill="#fbbf24"/>
      `
    }
  },

  basketball: {
    paceandspace: {
      badge: "Pace & Space: პერიმეტრზე გაშლილი მოთამაშეები 3-ქულიანების ზონაში",
      draw: () => `
        <circle cx="220" cy="80" r="14" fill="#38ef7d"/>
        <circle cx="320" cy="150" r="14" fill="#38ef7d"/>
        <circle cx="350" cy="225" r="14" fill="#38ef7d"/>
        <circle cx="320" cy="300" r="14" fill="#38ef7d"/>
        <circle cx="220" cy="370" r="14" fill="#38ef7d"/>
      `
    },
    triangle: {
      badge: "Triangle Offense: სამკუთხედი კუთხეში, პოსტსა და ფლანგზე",
      draw: () => `
        <circle cx="100" cy="100" r="14" fill="#fbbf24"/>
        <circle cx="180" cy="180" r="14" fill="#fbbf24"/>
        <circle cx="80" cy="280" r="14" fill="#fbbf24"/>
        <line x1="100" y1="100" x2="180" y2="180" stroke="#fbbf24" stroke-width="3"/>
        <line x1="180" y1="180" x2="80" y2="280" stroke="#fbbf24" stroke-width="3"/>
        <line x1="80" y1="280" x2="100" y2="100" stroke="#fbbf24" stroke-width="3"/>
      `
    },
    pickandroll: {
      badge: "Pick & Roll: ბლოკი პერიმეტრზე და ცენტრის შესვლა საჯარიმოში",
      draw: () => `
        <circle cx="280" cy="225" r="14" fill="#38ef7d"/>
        <circle cx="250" cy="210" r="14" fill="#fbbf24"/>
        <path d="M 250,210 Q 200,150 100,160" fill="none" stroke="#fbbf24" stroke-width="4" stroke-dasharray="6,4"/>
      `
    }
  },

  volleyball: {
    system51: {
      badge: "5-1 სისტემა: 1 გამთამაშებელი (S) და 5 შემტევი მოედანზე",
      draw: () => `
        <circle cx="350" cy="120" r="14" fill="#ef4444"/><text x="350" y="124" text-anchor="middle" fill="#fff" font-weight="bold">S</text>
        <circle cx="350" cy="225" r="14" fill="#38ef7d"/>
        <circle cx="350" cy="330" r="14" fill="#38ef7d"/>
        <circle cx="180" cy="100" r="14" fill="#38ef7d"/>
        <circle cx="180" cy="225" r="14" fill="#38ef7d"/>
        <circle cx="180" cy="350" r="14" fill="#38ef7d"/>
      `
    },
    fasttempo: {
      badge: "სწრაფი ტემპი: დაბალი პასები ბადის გასწვრივ",
      draw: () => `
        <line x1="380" y1="80" x2="380" y2="370" stroke="#fbbf24" stroke-width="4"/>
        <circle cx="380" cy="100" r="12" fill="#fbbf24"/>
        <circle cx="380" cy="225" r="12" fill="#fbbf24"/>
        <circle cx="380" cy="350" r="12" fill="#fbbf24"/>
      `
    },
    system62: {
      badge: "6-2 სისტემა: წინა ხაზზე ყოველთვის 3 შემტევია",
      draw: () => `
        <circle cx="320" cy="100" r="14" fill="#38ef7d"/>
        <circle cx="320" cy="225" r="14" fill="#38ef7d"/>
        <circle cx="320" cy="350" r="14" fill="#38ef7d"/>
        <circle cx="120" cy="120" r="14" fill="#ef4444"/><text x="120" y="124" text-anchor="middle" fill="#fff">S1</text>
        <circle cx="120" cy="330" r="14" fill="#ef4444"/><text x="120" y="334" text-anchor="middle" fill="#fff">S2</text>
      `
    }
  }
};

function setTactics(sport, tacticKey, element) {
  // აქტიური ბარათის შეცვლა
  const parent = element.parentElement;
  parent.querySelectorAll('.tactic-card').forEach(c => c.classList.remove('active'));
  element.classList.add('active');

  // შრის განახლება
  const layer = document.getElementById(`${sport}TacticsLayer`);
  const badge = document.getElementById(`${sport}Badge`);
  
  if (TACTICS_DATA[sport] && TACTICS_DATA[sport][tacticKey]) {
    const tactic = TACTICS_DATA[sport][tacticKey];
    layer.innerHTML = tactic.draw();
    badge.innerHTML = `<i class="fa-solid fa-chess"></i> ${tactic.badge}`;
  }
}

/* ==========================================
   2. ქვიზების სისტემა (3 სპორტი)
   ========================================== */
const QUIZZES = {
  football: [
    { q: "რამდენი მოთამაშეა ფეხბურთის ერთ გუნდში მოედანზე?", opts: ["9 მოთამაშე", "11 მოთამაშე", "12 მოთამაშე"], correct: 1 },
    { q: "რამდენ ხანს გრძელდება სტანდარტული საფეხბურთო ტაიმი?", opts: ["40 წუთი", "45 წუთი", "50 წუთი"], correct: 1 },
    { q: "რა არის 'Tiki-Taka'?", opts: ["დაცვითი ტაქტიკა", "მოკლე პასების და ბურთის ფლობის სტილი", "მაღალი პრესინგი"], correct: 1 }
  ],
  basketball: [
    { q: "რამდენი ქულა ეწერება 6.75-მეტრიანი რკალის გარეგანი ტყორცნიდან?", opts: ["2 ქულა", "3 ქულა", "4 ქულა"], correct: 1 },
    { q: "რამდენი წამი აქვს გუნდს შეტევის დასასრულებლად?", opts: ["24 წამი", "30 წამი", "14 წამი"], correct: 0 },
    { q: "რამდენი პერსონალური ჯარიმის შემდეგ ტოვებს მოთამაშე მოედანს?", opts: ["4", "5", "6"], correct: 1 }
  ],
  volleyball: [
    { q: "რამდენი შეხების უფლება აქვს გუნდს ბურთის გადატანამდე?", opts: ["2 შეხება", "3 შეხება", "4 შეხება"], correct: 1 },
    { q: "რამდენ ქულამდე თამაშდება სტანდარტული სეტი?", opts: ["21 ქულამდე", "25 ქულამდე", "30 ქულამდე"], correct: 1 },
    { q: "როგორ გადაადგილდებიან მოთამაშეები როტაციისას?", opts: ["საათის ისრის მიმართულებით", "საათის ისრის საწინააღმდეგოდ", "შემთხვევითად"], correct: 0 }
  ]
};

let currentQuizSport = 'football';

function switchQuiz(sport, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentQuizSport = sport;
  renderQuiz();
}

function renderQuiz() {
  const container = document.getElementById('quizContent');
  const questions = QUIZZES[currentQuizSport];
  
  let html = '';
  questions.forEach((qObj, qIdx) => {
    html += `
      <div class="quiz-q-card">
        <h4>${qIdx + 1}. ${qObj.q}</h4>
        <div class="opts-group">
          ${qObj.opts.map((opt, oIdx) => `
            <div class="quiz-opt" onclick="answerQuiz(this, ${qIdx}, ${oIdx})">${opt}</div>
          `).join('')}
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

function answerQuiz(el, qIdx, oIdx) {
  const qObj = QUIZZES[currentQuizSport][qIdx];
  const parent = el.parentElement;
  
  // დაბლოკვა
  parent.querySelectorAll('.quiz-opt').forEach(opt => opt.style.pointerEvents = 'none');
  
  if (oIdx === qObj.correct) {
    el.classList.add('correct');
  } else {
    el.classList.add('wrong');
    parent.children[qObj.correct].classList.add('correct');
  }
}

/* ==========================================
   3. BMI კალკულატორი
   ========================================== */
function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value) / 100;
  const resultDiv = document.getElementById('bmiResult');

  if (!weight || !height || height <= 0) {
    resultDiv.textContent = 'გთხოვთ შეიყვანოთ სწორი მონაცემები!';
    resultDiv.style.color = '#ef4444';
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

/* ==========================================
   4. ძებნის ფუნქცია
   ========================================== */
function filterContent() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const cards = document.querySelectorAll('.rule-card, .tactic-card');

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(query) ? '' : 'none';
  });
}

// საწყისი ინიციალიზაცია
window.onload = () => {
  setTactics('football', 'tikitaka', document.querySelector('.tactic-card'));
  setTactics('basketball', 'paceandspace', document.querySelectorAll('#basketball .tactic-card')[0]);
  setTactics('volleyball', 'system51', document.querySelectorAll('#volleyball .tactic-card')[0]);
  renderQuiz();
};
