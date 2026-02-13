// פונקציית הטעינה המרכזית
document.addEventListener('DOMContentLoaded', () => {
    renderMainMenu();
});

function renderMainMenu() {
    const container = document.getElementById('main-container');
    container.innerHTML = `
        <div class="flex flex-col items-center justify-center min-h-[60vh] space-y-8">
            <h1 class="text-4xl font-black text-blue-900 mb-4">הכנה לבחינת המתווכים</h1>
            
            <button onclick="showLessonsMenu()" class="w-64 p-6 bg-blue-600 text-white rounded-2xl shadow-xl hover:bg-blue-700 transform hover:scale-105 transition-all text-2xl font-bold">
                📚 שיעורים (Lessons)
            </button>

            <button onclick="startExamMode()" class="w-64 p-6 bg-orange-500 text-white rounded-2xl shadow-xl hover:bg-orange-600 transform hover:scale-105 transition-all text-2xl font-bold">
                📝 מבחנים (Exams)
            </button>
        </div>
    `;
}

function showLessonsMenu() {
    const container = document.getElementById('main-container');
    let lessonsHtml = APP_DATA.map(lesson => `
        <button onclick="loadLesson(${lesson.id})" class="w-full p-4 mb-3 bg-white border-2 border-blue-100 rounded-xl text-right hover:border-blue-500 transition-colors shadow-sm flex justify-between items-center">
            <span class="text-xl font-bold text-slate-800">${lesson.title}</span>
            <span class="text-blue-500 font-black">➔</span>
        </button>
    `).join('');

    container.innerHTML = `
        <div class="max-w-2xl mx-auto py-6">
            <div class="flex items-center justify-between mb-8">
                <button onclick="renderMainMenu()" class="text-blue-600 font-bold">⬅ חזור לתפריט</button>
                <h2 class="text-3xl font-black text-slate-900">רשימת שיעורים</h2>
            </div>
            ${lessonsHtml}
        </div>
    `;
}

function loadLesson(id) {
    const lesson = APP_DATA.find(l => l.id === id);
    const container = document.getElementById('main-container');
    
    container.innerHTML = `
        <div class="max-w-3xl mx-auto py-4 animate-fade-in">
            <div class="flex justify-between items-center mb-6 bg-white p-4 rounded-lg shadow-sm sticky top-0 z-10">
                <button onclick="showLessonsMenu()" class="bg-slate-200 px-4 py-2 rounded-lg font-bold">חזור לרשימה</button>
                <h2 class="text-xl font-black text-blue-900">${lesson.title}</h2>
            </div>
            
            <div class="prose prose-blue max-w-none">
                ${lesson.content}
            </div>

            <div class="mt-12 p-6 bg-white rounded-2xl shadow-inner border-2 border-slate-100">
                <h3 class="text-2xl font-bold mb-4 text-center">תרגול מהיר</h3>
                ${renderQuestions(lesson.questions)}
            </div>

            <div class="flex justify-between mt-8 space-x-4">
                ${id < APP_DATA.length - 1 ? `<button onclick="loadLesson(${id + 1})" class="flex-1 bg-green-600 text-white p-4 rounded-xl font-bold text-xl shadow-lg">פרק הבא ➔</button>` : ''}
                <button onclick="showLessonsMenu()" class="flex-1 bg-slate-500 text-white p-4 rounded-xl font-bold text-xl">סיום שיעור</button>
            </div>
        </div>
    `;
    window.scrollTo(0,0);
}

function renderQuestions(questions) {
    return questions.map((q, idx) => `
        <div class="mb-8 p-4 bg-slate-50 rounded-lg">
            <p class="font-bold text-lg mb-4">${q.q}</p>
            <div class="grid grid-cols-1 gap-2">
                ${q.options.map((opt, i) => `
                    <button onclick="checkAnswer(this, ${i}, ${q.correct}, '${q.exp.replace(/'/g, "\\'")}')" class="text-right p-3 bg-white border border-slate-300 rounded-lg hover:bg-blue-50 transition-colors">
                        ${opt}
                    </button>
                `).join('')}
            </div>
            <div class="explanation hidden mt-4 p-3 bg-blue-100 text-blue-900 rounded-lg border-r-4 border-blue-500"></div>
        </div>
    `).join('');
}

function checkAnswer(btn, selected, correct, exp) {
    const parent = btn.parentElement;
    const buttons = parent.querySelectorAll('button');
    const expDiv = parent.nextElementSibling;

    buttons.forEach((b, i) => {
        b.disabled = true;
        if (i === correct) b.classList.add('bg-green-200', 'border-green-500');
        if (i === selected && i !== correct) b.classList.add('bg-red-200', 'border-red-500');
    });

    expDiv.innerHTML = `<b>הסבר:</b> ${exp}`;
    expDiv.classList.remove('hidden');
}

function startExamMode() {
    alert("מצב מבחן (סימולציה) ייפתח בגרסה הבאה!");
}
