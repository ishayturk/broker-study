/* VERSION: 1.0.3.2
   CONTENT: Chapters 1 & 2 - Full Coverage
   LAST UPDATED: 2026-02-13
*/

const APP_DATA = [
    {
        id: 0,
        title: "פרק 1: רישוי, אגרות ומוסדות (מלא)",
        content: `
            <div class="space-y-6 text-right" dir="rtl">
                <section>
                    <h2 class="text-2xl font-black text-blue-800 mb-4 border-b-2 border-blue-600 pb-2 italic">1. מבוא וחוק המתווכים</h2>
                    <p class="text-lg leading-relaxed font-medium text-slate-700">חוק המתווכים במקרקעין (1996) נועד להסדיר את מקצוע התיווך. חשוב לזכור: העיסוק בתיווך ללא רישיון הוא <b>עבירה פלילית</b> שגוררת קנסות כבדים ואובדן זכאות לדמי תיווך באופן מוחלט.</p>
                </section>

                <section class="bg-blue-50 p-5 rounded-xl border-r-8 border-blue-600 shadow-md">
                    <h3 class="font-bold text-blue-900 mb-4 text-xl underline italic">2. תנאי סף לקבלת רישיון (סעיף 5):</h3>
                    <div class="space-y-4 text-slate-800 font-medium">
                        <p>✅ <b>גיל:</b> בן 18 שנים לפחות במועד הגשת הבקשה.</p>
                        <p>✅ <b>אזרחות:</b> אזרח ישראל, תושב ישראל או תושב חוץ בעל היתר עבודה חוקי (לפי חוק הכניסה לישראל).</p>
                        <p>✅ <b>עבר פלילי:</b> לא הורשע בעבירה שיש עמה <b>קלון</b> ב-5 השנים האחרונות. 
                           <br><span class="text-xs bg-amber-200 px-2 py-1 font-bold rounded">דגש לבחינה:</span> אם ריצה מאסר, 5 השנים נספרות <b>מיום סיום ריצוי העונש בפועל</b>.</p>
                        <p>✅ <b>פשיטת רגל:</b> לא הוכרז כפושט רגל. אם הוכרז - חייב להציג <b>צו הפטר חלוט</b>.</p>
                        <p>✅ <b>השכלה:</b> סיים לפחות 12 שנות לימוד או הוכחה להשכלה מקבילה.</p>
                        <p>✅ <b>בחינה:</b> עבר את בחינת הרשם בציון 60 ומעלה.</p>
                    </div>
                </section>

                <section class="p-4 border-r-4 border-slate-400 bg-slate-50 rounded-lg">
                    <h3 class="font-bold text-lg text-slate-800 mb-2 underline italic">3. רשם המתווכים ומוסדות (סעיפים 2-4):</h3>
                    <ul class="list-disc pr-6 space-y-2 text-slate-700 font-medium">
                        <li><b>מינוי הרשם:</b> שר המשפטים ממנה את הרשם. עליו להיות משפטן הכשיר להיות <b>שופט שלום</b>.</li>
                        <li><b>פנקס המתווכים:</b> מאגר פומבי הפתוח לעיון הציבור. הרישיון נכנס לתוקף רק ברגע הרישום בפנקס.</li>
                        <li><b>סמכויות השר:</b> לקבוע תקנות באישור ועדת החוקה (אגרות, נושאי בחינה, סדרי דין).</li>
                    </ul>
                </section>

                <section class="bg-red-50 p-5 rounded-xl border-r-8 border-red-600">
                    <h3 class="font-bold text-red-900 mb-3 text-xl underline italic">4. אגרות והשעיה (סעיף 18):</h3>
                    <div class="space-y-3 font-bold text-slate-800">
                        <p>⏰ מועד התשלום השנתי: עד ה-<b>31 במרץ</b>.</p>
                        <p class="text-red-700 underline italic">השעיה אוטומטית:</p>
                        <p class="font-medium italic">מי שלא שילם עד המועד - רישיונו מושעה ב-1 באפריל באופן אוטומטי (
