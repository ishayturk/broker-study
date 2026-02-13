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
    list.innerHTML = `<h3 class="font-black text-xl mb-4 pr-2">תכנית הלימודים</h3>`;
    APP_DATA.forEach(lesson => {
        list.innerHTML += `
            <div onclick="openLesson(${lesson.id})" class="bg-white p-5 rounded-2xl border-2 border-slate-100 shadow-sm flex justify-between items-center cursor-pointer hover:border-blue-300">
                <div class="text-right">
                    <span class="block text-xs font-bold text-blue-500 uppercase">פרק ${lesson.id + 1}</span>
                    <span class="text-lg font-bold text-slate-700">${lesson.title}</span>
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
        <div class="bg-slate-800 rounded-3xl p-6 text-white text-right">
            <div class="text-xs opacity-60 mb-2">תרגול פרק: שאלה ${currentQ + 1}/${lesson.questions.length}</div>
            <p class="text-lg font-bold mb-6">${q.q}</p>
            <div class="space-y-3">
                ${q.options.map((o, i) => `<button onclick="checkAns(${i}, ${lesson.id})" class="q-btn w-full p-4 bg-white/10 rounded-xl text-right hover:bg-white/20 transition-all">${o}</button>`).join('')}
            </div>
            <div id="fb" class="hidden mt-4 p-4 rounded-xl text-sm font-bold"></div>
            <button id="next-btn" onclick="nextQ(${lesson.id})" class="hidden mt-4 w-full bg-blue-500 p-4 rounded-xl font-bold">המשך ←</button>
        </div>`;
}

function checkAns(idx, lessonId) {
    const q = APP_DATA.find(l => l.id === lessonId).questions[currentQ];
    const fb = document.getElementById('fb');
    document.querySelectorAll('.q-btn').forEach(b => b.disabled = true);
    fb.classList.remove('hidden');
    
    if(idx === q.correct) {
        fb.className = "mt-4 p-4 rounded-xl text-sm font-bold bg-green-500/20 text-green-300";
        fb.innerHTML = "🎯 נכון! " + q.exp;
    } else {
        fb.className = "mt-4 p-4 rounded-xl text-sm font-bold bg-red-500/20 text-red-300";
        fb.innerHTML = "💡 טעות. המענה הנכון: " + q.options[q.correct] + ". " + q.exp;
    }
    document.getElementById('next-btn').classList.remove('hidden');
}

function nextQ(lessonId) {
    const lesson = APP_DATA.find(l => l.id === lessonId);
    currentQ++;
    if(currentQ < lesson.questions.length) renderQuiz(lesson);
    else {
        document.getElementById('lesson-quiz').innerHTML = `
            <div class="bg-green-600 p-6 rounded-3xl text-white text-center font-bold">
                <p class="text-xl mb-2">כל הכבוד! 🎉</p>
                <p>סיימת את תרגול הפרק בהצלחה.</p>
                <button onclick="router('lessons')" class="mt-4 bg-white text-green-600 px-6 py-2 rounded-full">חזרה לסילבוס</button>
            </div>`;
    }
}
