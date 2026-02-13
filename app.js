/* VERSION: 1.0.3 */
let currentQ = 0;

function router(view) {
    // הסתרת כל הסקשנים
    document.querySelectorAll('.view-section').forEach(section => section.classList.add('hidden'));
    
    // הצגת הסקשן הנבחר
    const target = document.getElementById(`view-${view}`);
    if (target) target.classList.remove('hidden');
    
    // עדכון תפריט תחתון
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    const navItem = document.getElementById(`n-${view === 'study' ? 'lessons' : view}`);
    if(navItem) navItem.classList.add('active');

    if(view === 'lessons') renderLessons();
    document.getElementById('main-content').scrollTop = 0;
}

function renderLessons() {
    const list = document.getElementById('view-lessons');
    list.innerHTML = `<h3 class="font-black text-xl mb-4 pr-2">תכנית הלימודים:</h3>`;
    APP_DATA.forEach(lesson => {
        list.innerHTML += `
            <div onclick="openLesson(${lesson.id})" class="bg-white p-5 rounded-2xl border-2 border-slate-100 shadow-sm flex justify-between items-center cursor-pointer hover:border-blue-400 transition-all">
                <div class="text-right">
                    <span class="block text-xs font-bold text-blue-500 uppercase">פרק ${lesson.id + 1}</span>
                    <span class="text-lg font-bold text-slate-800">${lesson.title}</span>
                </div>
                <span class="text-2xl">📖</span>
            </div>`;
    });
}

function openLesson(id) {
    const lesson = APP_DATA.find(l => l.id === id);
    document.getElementById('lesson-text').innerHTML = lesson.content;
    currentQ = 0;
    renderQuiz(lesson);
    router('study');
}

function renderQuiz(lesson) {
    const container = document.getElementById('lesson-quiz');
    const q = lesson.questions[currentQ];
    container.innerHTML = `
        <div class="bg-blue-900 rounded-3xl p-6 text-white text-right shadow-xl mb-10">
            <div class="text-[10px] uppercase font-bold bg-white/20 inline-block px-2 py-1 rounded mb-4">שאלה ${currentQ + 1}/${lesson.questions.length}</div>
            <p class="text-lg font-bold mb-6">${q.q}</p>
            <div class="space-y-3">
                ${q.options.map((o, i) => `
                    <button onclick="checkAns(${i}, ${lesson.id})" class="q-btn w-full p-4 bg-white text-slate-800 rounded-xl text-right font-bold text-sm shadow-sm hover:bg-blue-50 transition-all border-b-4 border-slate-200">
                        ${o}
                    </button>`).join('')}
            </div>
            <div id="fb" class="hidden mt-6 p-4 rounded-xl text-sm font-bold border border-white/20"></div>
            <button id="next-btn" onclick="nextQ(${lesson.id})" class="hidden mt-6 w-full bg-green-500 p-4 rounded-xl font-black text-white shadow-lg animate-bounce">
                לשאלה הבאה ←
            </button>
        </div>`;
}

function checkAns(idx, lessonId) {
    const q = APP_DATA.find(l => l.id === lessonId).questions[currentQ];
    const fb = document.getElementById('fb');
    document.querySelectorAll('.q-btn').forEach(b => b.disabled = true);
    fb.classList.remove('hidden');
    
    if(idx === q.correct) {
        fb.className = "mt-6 p-4 rounded-xl text-sm font-bold bg-green-500/20 text-green-200 border border-green-500/30 text-right";
        fb.innerHTML = "🎯 נכון! <br>" + q.exp;
    } else {
        fb.className = "mt-6 p-4 rounded-xl text-sm font-bold bg-red-500/20 text-red-100 border border-red-500/30 text-right";
        fb.innerHTML = "💡 טעות. התשובה הנכונה היא: " + q.options[q.correct] + ". <br>" + q.exp;
    }
    document.getElementById('next-btn').classList.remove('hidden');
}

function nextQ(lessonId) {
    const lesson = APP_DATA.find(l => l.id === lessonId);
    currentQ++;
    if(currentQ < lesson.questions.length) {
        renderQuiz(lesson);
        document.getElementById('lesson-quiz').scrollIntoView({ behavior: 'smooth' });
    } else {
        document.getElementById('lesson-quiz').innerHTML = `
            <div class="bg-green-600 p-8 rounded-3xl text-white text-center shadow-xl mb-10">
                <p class="text-2xl font-black mb-2 italic">כל הכבוד!</p>
                <p class="opacity-90">סיימת את תרגול הפרק.</p>
                <button onclick="router('lessons')" class="mt-6 bg-white text-green-700 font-black px-8 py-3 rounded-full">חזרה לסילבוס</button>
            </div>`;
    }
}
