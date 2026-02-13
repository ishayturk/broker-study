/* VERSION: 3.0
   CONTENT: Chapters 1-3 - FULL DEEP DIVE
*/
const APP_DATA = [
    {
        id: 0,
        title: "פרק 1: רישוי, אגרות ומוסדות (החומר המלא)",
        content: `
            <div class="space-y-6 text-right" dir="rtl">
                <section class="bg-blue-50 p-6 rounded-2xl border-r-8 border-blue-700 shadow-md">
                    <h2 class="text-2xl font-black text-blue-900 mb-4 border-b-2 border-blue-600 pb-2 italic text-right font-bold">1. תנאי סף לקבלת רישיון (סעיף 5)</h2>
                    <ul class="space-y-4 text-slate-800 font-bold">
                        <li>📍 <b>גיל 18:</b> חייב להיות בן 18 ביום הגשת הבקשה.</li>
                        <li>📍 <b>אזרחות/תושבות:</b> אזרח ישראל, תושב ישראל, או תושב חוץ עם היתר עבודה חוקי.</li>
                        <li>📍 <b>עבר פלילי וקלון:</b> לא הורשע בעבירה שיש עמה קלון ב-5 השנים האחרונות. <br><span class="text-red-700 underline italic">דגש בחינה:</span> אם ריצה מאסר, 5 השנים נספרות <b>מיום השחרור בפועל</b>.</li>
                        <li>📍 <b>פשיטת רגל:</b> פסול לרישיון אלא אם הציג "צו הפטר חלוט".</li>
                        <li>📍 <b>השכלה:</b> 12 שנות לימוד לפחות.</li>
                    </ul>
                </section>
                <section class="bg-red-50 p-6 rounded-2xl border-r-8 border-red-700 shadow-md">
                    <h2 class="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-700 pb-2 italic text-right font-bold">2. אגרות והשעיה אוטומטית (סעיף 18)</h2>
                    <p class="font-black text-red-800 underline">המועד הקובע: 31 במרץ.</p>
                    <p>מתווך שלא שילם עד תאריך זה - <b>מושעה אוטומטית ב-1 באפריל</b>. פעולה בזמן השעיה שוללת זכאות לדמי תיווך לחלוטין (פס"ד מאיר נ' קנלר).</p>
                </section>
            </div>
        `
    },
    {
        id: 1,
        title: "פרק 2: הזמנה בכתב וסעיף 12",
        content: `
            <div class="space-y-6 text-right" dir="rtl">
                <section class="bg-amber-50 p-6 rounded-2xl border-r-8 border-amber-600 shadow-md">
                    <h2 class="text-2xl font-black text-amber-900 mb-4 border-b-2 border-amber-600 pb-2 italic text-right font-bold">1. חמשת פרטי החובה</h2>
                    <p class="font-bold mb-2">ללא אלו אין עמלה (תקנות המתווכים):</p>
                    <ol class="list-decimal pr-8 font-bold text-slate-800 space-y-1">
                        <li>שמות ות.ז של המתווך והלקוח.</li>
                        <li>סוג העסקה (מכירה/שכירות).</li>
                        <li>תיאור הנכס (כתובת ברורה).</li>
                        <li>מחיר העסקה בקירוב.</li>
                        <li>דמי התיווך המוסכמים (+מע"מ לצרכן פרטי).</li>
                    </ol>
                </section>
                <section class="bg-red-100 p-6 rounded-2xl border-r-8 border-red-800 shadow-md">
                    <h2 class="text-xl font-black text-red-900 mb-2 italic underline text-right font-bold">סעיף 12 - איסור סיוע משפטי:</h2>
                    <p class="font-bold">חל איסור מוחלט לערוך זיכרון דברים או חוזה. מתווך שעושה זאת מאבד את כל עמלתו, גם אם העסקה הצליחה!</p>
                </section>
            </div>
        `
    },
    {
        id: 2,
        title: "פרק 3: בלעדיות - תנאים ותקופות",
        content: `
            <div class="space-y-6 text-right" dir="rtl">
                <section class="bg-blue-50 p-6 rounded-2xl border-r-8 border-blue-600 shadow-md">
                    <h2 class="text-2xl font-black text-blue-900 mb-4 border-b-2 border-blue-600 pb-2 italic text-right font-bold">1. תנאי הבלעדיות (סעיף 9)</h2>
                    <p class="font-bold">חובה: 1. מסמך נפרד מההזמנה. 2. ביצוע 2 פעולות שיווק לפחות (שלט, פרסום וכו').</p>
                </section>
                <section class="bg-amber-50 p-6 rounded-2xl border-r-8 border-amber-600 shadow-md">
                    <h2 class="text-2xl font-black text-amber-900 mb-4 border-b-2 border-amber-600 pb-2 italic text-right font-bold">2. תקופות זמן מקסימליות</h2>
                    <p class="font-bold text-red-700 underline">דירת מגורים: מקסימום 6 חודשים. (לא נכתב זמן? 30 יום).</p>
                    <p class="font-bold">נכס עסקי/מגרש: אין הגבלת זמן בחוק. (לא נכתב זמן? שנה).</p>
                </section>
            </div>
        `
    }
];
