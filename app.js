// app.js
function router(view) {
    const views = ['home', 'lessons', 'study', 'exams'];
    views.forEach(v => document.getElementById(`view-${v}`).classList.add('hidden'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

    document.getElementById(`view-${view}`).classList.remove('hidden');
    const navId = (view === 'study') ? 'nav-lessons' : `nav-${view}`;
    document.getElementById(navId).classList.add('active');

    if(view === 'lessons') renderLessons();
    if(view === 'exams') renderQuiz();
    document.getElementById('main-view').scrollTop = 0;
}

function renderLessons() {
    const list = document.getElementById('lessons-list');
    list.innerHTML = APP_DATA.map(lesson => `
        <div onclick="openLesson(${lesson.id})" class="bg-white p-5 rounded-xl border-2 border-slate-100 shadow-sm flex justify-between items-center cursor-pointer active:bg-blue-50">
            <span class="font-bold text-slate-700">${lesson.title}</span>
            <span class="text-blue-500">📖</span>
        </div>
    `).join('');
}

function openLesson(id) {
    const lesson = APP_DATA.find(l => l.id === id);
    document.getElementById('study-content').innerHTML = lesson.content;
    router('study');
}

function renderQuiz() {
    const area = document.getElementById('quiz-area');
    const allQ = [];
    APP_DATA.forEach(l => allQ.push(...l.questions));

    if(allQ.length === 0) {
        area.innerHTML = "<p class='text-center p-10'>עדיין אין שאלות.</p>";
        return;
    }

    const q = allQ[0]; // כרגע מציג רק שאלה ראשונה כבדיקה
    area.innerHTML = `
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-blue-100">
            <h3 class="font-bold text-lg mb-6">${q.q}</h3>
            <div class="space-y-3">
                ${q.options.map((opt, i) => `
                    <button onclick="alert('${i === q.correct ? 'נכון!' : 'טעות'}')" class="w-full text-right p-4 border-2 rounded-xl hover:border-blue-500 font-bold text-slate-700">${opt}</button>
                `).join('')}
            </div>
        </div>
    `;
}

// אתחול
router('home');
