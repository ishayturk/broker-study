/* VERSION: 1.0.2 */
let currentQ = 0;

function router(view) {
    document.getElementById('view-home').classList.add('hidden');
    document.getElementById('view-lessons').classList.add('hidden');
    document.getElementById('view-study').classList.add('hidden');
    document.getElementById(`view-${view}`).classList.remove('hidden');
    
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    const navItem = document.getElementById(`n-${view === 'study' ? 'lessons' : view}`);
    if(navItem) navItem.classList.add('active');

    if(view === 'lessons') renderLessons();
    document.getElementById('main-content').scrollTop = 0;
}

function renderLessons() {
    const list = document.getElementById('view-lessons');
    list.innerHTML = `<h3 class="font-black text-xl mb-4 pr-2 text-slate-800 italic">סילבוס לימודים רשמי:</h3>`;
    APP_DATA.forEach(lesson => {
        list.innerHTML += `
            <div onclick="openLesson(${lesson.id})" class="bg-white p-5 rounded-2xl border-2 border-slate-100 shadow-sm flex justify-between items-center cursor-pointer hover:border-blue-400 transition-all active:scale-95">
                <div class="text-right">
                    <span class="block text-xs font-bold text-blue-500 mb-1 uppercase tracking-tighter">פרק ${lesson.id + 1}</span>
                    <span class="text-lg font-bold text-slate-800">${lesson.title}</span>
                </div>
                <span class="bg-blue-50 p-3 rounded-full text-2xl">📖</span>
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
        <div class="bg-blue-900 rounded-3xl p-6 text-white text-right shadow-xl">
            <div class="text-[10px] uppercase font-bold bg-white/20 inline-block px-2 py-1 rounded-md mb-4 tracking-widest">תרגול עצמי: שאלה ${currentQ + 1}/${lesson.questions.length}</div>
            <p class="text-lg font-bold mb-6 leading-tight">${q.q}</p>
            <div class="space-y-3">
                ${q.options.map((o, i) => `
                    <button onclick="checkAns(${i}, ${lesson.id})" class="q-btn w-full p-4 bg-white text-slate-800 rounded-xl text-right font-bold text-sm shadow-sm hover:bg-blue-50 transition-all border-b-4 border-slate-200">
                        ${o}
                    </button>`).join('')}
            </div>
            <div id="fb" class="hidden mt-6 p-4 rounded-xl text-sm font-bold border border-white/20"></div>
            <button id="next-btn" onclick="nextQ(${lesson.id})" class="hidden mt-6 w-full bg-green-500 hover:bg-green-400 p-4 rounded-xl font-black text-white shadow-lg transition-all animate-bounce">
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
        fb.className = "mt-6 p-4 rounded-xl text-sm font-bold bg-green-500/20 text-green-200 border border-green-500/30";
        fb.innerHTML = "🎯 תשובה נכונה! <br><span class="font-normal opacity-90 italic">" + q.exp + "</span>";
    } else {
        fb.className = "mt-6 p-4 rounded-xl text-sm font-bold bg-red-500/20 text-red-100 border border-red-500/30";
        fb.innerHTML = "💡 לא מדויק. <br><span class="font-normal opacity-90 italic">התשובה הנכונה היא: " + q.options[q.correct] + ". " + q.exp + "</span>";
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
            <div class="bg-gradient-to-br from-green-500 to-green-700 p-8 rounded-3xl text-white text-center shadow-xl border-4 border-white/20">
                <p class="text-4xl mb-4">🏆</p>
                <p class="text-2xl font-black mb-2 italic underline">סיכום הפרק הושלם!</p>
                <p class="opacity-90 font-medium">עברת על כל החומר והשאלות בפרק זה.</p>
                <button onclick="router('lessons')" class="mt-6 bg-white text-green-700 font-black px-8 py-3 rounded-full shadow-lg active:scale-90 transition-all uppercase text-sm tracking-widest">חזרה לסילבוס</button>
            </div>`;
    }
}
