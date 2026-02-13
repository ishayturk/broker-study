let currentChapterQ = 0;

function router(view) {
    const screens = ['home', 'lessons', 'study'];
    screens.forEach(s => {
        const el = document.getElementById(`view-${s}`);
        if(el) el.classList.add('hidden');
    });
    
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    
    const target = document.getElementById(`view-${view}`);
    if(target) target.classList.remove('hidden');
    
    const navId = (view === 'study') ? 'nav-lessons' : `nav-${view}`;
    const navEl = document.getElementById(navId);
    if(navEl) navEl.classList.add('active');

    if(view === 'lessons') renderLessons();
    document.getElementById('main-view').scrollTop = 0;
}

function renderLessons() {
    const list = document.getElementById('lessons-list');
    list.innerHTML = APP_DATA.map(l => `
        <div onclick="openLesson(${l.id})" class="lesson-card shadow-sm flex justify-between items-center group mb-3 border-2 border-slate-100 p-5 rounded-xl cursor-pointer">
            <div class="text-right">
                <span class="block text-xs font-bold text-blue-500 mb-1 uppercase">פרק ${l.id + 1}</span>
                <span class="text-lg font-bold text-slate-700">${l.title}</span>
            </div>
            <span class="text-2xl">📖</span>
        </div>
    `).join('');
}

function openLesson(id) {
    const lesson = APP_DATA.find(l => l.id === id);
    document.getElementById('study-content').innerHTML = lesson.content;
    currentChapterQ = 0;
    
    // יצירת אזור השאלות אם הוא לא קיים
    let quizArea = document.getElementById('chapter-quiz-container');
    if (!quizArea) {
        quizArea = document.createElement('div');
        quizArea.id = 'chapter-quiz-container';
        document.getElementById('view-study').appendChild(quizArea);
    }
    
    renderChapterQuiz(lesson);
    router('study');
}

function renderChapterQuiz(lesson) {
    const container = document.getElementById('chapter-quiz-container');
    const q = lesson.questions[currentChapterQ];
    
    container.innerHTML = `
        <div class="mt-10 pt-10 border-t-2 border-dashed border-slate-200">
            <h3 class="font-bold text-xl mb-6 text-blue-800 text-right">תרגול נושא: ${lesson.title}</h3>
            <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <div class="text-xs font-bold text-slate-400 mb-2 text-right">שאלה ${currentChapterQ + 1} מתוך ${lesson.questions.length}</div>
                <p class="font-bold text-lg text-slate-800 mb-6 text-right">${q.q}</p>
                <div class="grid gap-3">
                    ${q.options.map((opt, i) => `
                        <button onclick="checkAnswer(${i}, ${lesson.id})" class="chapter-quiz-btn w-full text-right p-4 border-2 border-white bg-white rounded-xl shadow-sm font-bold text-slate-700 hover:border-blue-200 transition-all">${opt}</button>
                    `).join('')}
                </div>
                <div id="quiz-feedback" class="hidden mt-6 p-4 rounded-xl text-sm font-bold"></div>
                <button id="next-q-btn" onclick="nextChapterQ(${lesson.id})" class="hidden mt-4 w-full bg-slate-800 text-white p-4 rounded-xl font-bold">לשאלה הבאה ←</button>
            </div>
        </div>
    `;
}

function checkAnswer(idx, lessonId) {
    const lesson = APP_DATA.find(l => l.id === lessonId);
    const q = lesson.questions[currentChapterQ];
    const feedback = document.getElementById('quiz-feedback');
    const btns = document.querySelectorAll('.chapter-quiz-btn');
    
    btns.forEach(b => b.disabled = true);
    feedback.classList.remove('hidden');

    if(idx === q.correct) {
        btns[idx].classList.add('bg-green-50', 'border-green-500', 'text-green-700');
        feedback.className = "mt-6 p-4 rounded-xl text-sm font-bold bg-green-100 text-green-800 block text-right";
        feedback.innerHTML = "🎯 נכון! " + q.exp;
    } else {
        btns[idx].classList.add('bg-red-50', 'border-red-500', 'text-red-700');
        btns[q.correct].classList.add('bg-green-50', 'border-green-500');
        feedback.className = "mt-6 p-4 rounded-xl text-sm font-bold bg-red-100 text-red-800 block text-right";
        feedback.innerHTML = "💡 לא מדויק. " + q.exp;
    }
    
    if(currentChapterQ < lesson.questions.length - 1) {
        document.getElementById('next-q-btn').classList.remove('hidden');
    } else {
        const nextBtn = document.getElementById('next-q-btn');
        nextBtn.textContent = "סיימת את תרגול הפרק!";
        nextBtn.classList.remove('hidden');
        nextBtn.onclick = () => router('lessons');
    }
}

function nextChapterQ(lessonId) {
    currentChapterQ++;
    renderChapterQuiz(APP_DATA.find(l => l.id === lessonId));
}

window.onload = () => router('home');
