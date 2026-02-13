let currentQIndex = 0;
let quizQuestions = [];
let score = 0;

function router(view) {
    const screens = ['home', 'lessons', 'study', 'exams'];
    screens.forEach(s => {
        const el = document.getElementById(`view-${s}`);
        if(el) el.classList.add('hidden');
    });
    
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    
    const targetView = document.getElementById(`view-${view}`);
    if(targetView) targetView.classList.remove('hidden');
    
    const navId = (view === 'study') ? 'nav-lessons' : `nav-${view}`;
    const navEl = document.getElementById(navId);
    if(navEl) navEl.classList.add('active');

    if(view === 'lessons') renderLessons();
    if(view === 'exams') initQuiz();
}

function renderLessons() {
    const list = document.getElementById('lessons-list');
    list.innerHTML = APP_DATA.map(l => `
        <div onclick="openLesson(${l.id})" class="bg-white p-5 rounded-xl border-2 border-slate-100 shadow-sm flex justify-between items-center cursor-pointer mb-2">
            <span class="font-bold text-slate-700">${l.title}</span>
            <span class="text-blue-500 font-bold">למד 📖</span>
        </div>
    `).join('');
}

function openLesson(id) {
    const lesson = APP_DATA.find(l => l.id === id);
    document.getElementById('study-content').innerHTML = lesson.content;
    router('study');
}

function initQuiz() {
    quizQuestions = [];
    APP_DATA.forEach(l => quizQuestions.push(...l.questions));
    currentQIndex = 0;
    score = 0;
    renderQuestion();
}

function renderQuestion() {
    const area = document.getElementById('view-exams');
    const q = quizQuestions[currentQIndex];
    if(!q) return;

    area.innerHTML = `
        <div class="bg-blue-50 p-3 rounded-lg mb-4 text-center font-bold text-blue-800">שאלה ${currentQIndex + 1} מתוך ${quizQuestions.length}</div>
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 class="font-bold text-lg mb-6 text-right">${q.q}</h3>
            <div id="options-grid" class="space-y-3">
                ${q.options.map((opt, i) => `<button onclick="handleAnswer(${i})" class="quiz-btn w-full text-right p-4 border-2 rounded-xl font-bold transition-all">${opt}</button>`).join('')}
            </div>
            <div id="feedback" class="hidden mt-6 p-4 rounded-xl text-sm font-bold"></div>
            <button id="next-btn" onclick="nextQuestion()" class="hidden mt-4 w-full bg-blue-600 text-white p-4 rounded-xl font-bold">לשאלה הבאה ←</button>
        </div>
    `;
}

function handleAnswer(selected) {
    const q = quizQuestions[currentQIndex];
    const feedback = document.getElementById('feedback');
    const btns = document.querySelectorAll('.quiz-btn');
    btns.forEach(b => b.disabled = true);
    
    if(selected === q.correct) {
        btns[selected].classList.add('bg-green-100', 'border-green-500');
        feedback.className = "mt-6 p-4 rounded-xl text-sm font-bold bg-green-50 text-green-700 block text-right";
        feedback.innerHTML = "✅ נכון! " + q.exp;
        score++;
    } else {
        btns[selected].classList.add('bg-red-100', 'border-red-500');
        btns[q.correct].classList.add('bg-green-100', 'border-green-500');
        feedback.className = "mt-6 p-4 rounded-xl text-sm font-bold bg-red-50 text-red-700 block text-right";
        feedback.innerHTML = "❌ טעות. " + q.exp;
    }
    document.getElementById('next-btn').classList.remove('hidden');
}

function nextQuestion() {
    currentQIndex++;
    if(currentQIndex < quizQuestions.length) renderQuestion();
    else {
        alert("סיימת! ציון: " + Math.round(score/quizQuestions.length*100));
        router('home');
    }
}

// הפעלה
window.onload = () => router('home');
