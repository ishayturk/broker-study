/* APP LOGIC - VERSION 3.0 */

document.addEventListener('DOMContentLoaded', () => {
    renderMainMenu();
});

function renderMainMenu() {
    const container = document.getElementById('main-container');
    container.innerHTML = `
        <div class="flex flex-col items-center justify-center min-h-[60vh] space-y-8 animate-fade-in">
            <h1 class="text-4xl font-black text-blue-900 mb-4">מערכת הכנה לתיווך</h1>
            
            <button onclick="showLessonsMenu()" class="w-72 p-6 bg-blue-600 text-white rounded-2xl shadow-xl hover:bg-blue-700 transform hover:scale-105 transition-all text-2xl font-bold italic underline">
                📚 שיעורים (Lessons)
            </button>

            <button onclick="alert('מצב מבחן ייפתח בגרסה הבאה!')" class="w-72 p-6 bg-orange-500 text-white rounded-2xl shadow-xl hover:bg-orange-600 transform hover:scale-105 transition-all text-2xl font-bold">
                📝 מבחנים (Exams)
            </button>
        </div>
    `;
}

function showLessonsMenu() {
    const container = document.getElementById('main-container');
    let lessonsHtml = APP_DATA.map(lesson => `
        <button onclick="loadLesson(${lesson.id})" class="w-full p-6 mb-4 bg-white border-2 border-blue-100 rounded-2xl text-right hover:border-blue-600 transition-all shadow-md flex justify-between items-center group">
            <span class="text-xl font-black text-slate-800 group-hover:text-blue-600">${lesson.title}</span>
            <span class="text-blue-500 font-black text-2xl">➔</span>
        </button>
    `).join('');

    container.innerHTML = `
        <div class="max-w-2xl mx-auto py-8 animate-fade-in">
            <div class="flex items-center justify-between mb-10">
                <button onclick="renderMainMenu()" class="bg-slate-200 px-4 py-2 rounded-lg font-bold hover:bg-slate-300">⬅ חזור לתפריט</button>
                <h2 class="text-3xl font-black text-slate-900 border-b-4 border-blue-600">רשימת שיעורים</h2>
            </div>
            ${lessonsHtml}
        </div>
    `;
}

function loadLesson(id) {
    const lesson = APP_DATA.find(l => l.id === id);
    const container = document.getElementById('main-container');
    
    container.innerHTML = `
        <div class="max-w-3xl mx-auto py-6 animate-fade-in">
            <div class="flex justify-between items-center mb-8 bg-white p-4 rounded-xl shadow-sm sticky top-0 z-50">
                <button onclick="showLessonsMenu()" class="text-blue-600 font-bold italic underline">⬅ חזור לרשימה</button>
                <h2 class="text-xl font-black text-blue-900">${lesson.title}</h2>
            </div>
            
            <div class="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 mb-8">
                ${lesson.content}
            </div>

            <div class="flex justify-between gap-4">
                ${id < APP_DATA.length - 1 ? `<button onclick="loadLesson(${id + 1})" class="flex-1 bg-green-600 text-white p-5 rounded-2xl font-black text-xl shadow-lg hover:bg-green-700 transition-all">פרק הבא ➔</button>` : ''}
                <button onclick="showLessonsMenu()" class="flex-1 bg-slate-500 text-white p-5 rounded-2xl font-black text-xl shadow-lg hover:bg-slate-600 transition-all">סיום</button>
            </div>
        </div>
    `;
    window.scrollTo(0,0);
}
