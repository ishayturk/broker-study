/* VERSION: 1.0.3.7
   CONTENT: Chapters 1-7 - FULL ACADEMIC DETAIL
   LAST UPDATED: 2026-02-13
*/

const APP_DATA = [
    {
        id: 0,
        title: "פרק 1: רישוי, אגרות ומוסדות",
        content: `
            <div class="space-y-6 text-right" dir="rtl">
                <section class="bg-blue-50 p-6 rounded-2xl border-r-8 border-blue-700 shadow-md">
                    <h2 class="text-2xl font-black text-blue-900 mb-4 border-b-2 border-blue-600 pb-2">תנאי סף לקבלת רישיון (סעיף 5)</h2>
                    <ul class="space-y-3 text-lg font-medium">
                        <li>✅ <b>גיל:</b> 18 ומעלה ביום הגשת הבקשה.</li>
                        <li>✅ <b>עבר פלילי:</b> ללא קלון ב-5 השנים האחרונות. <b>דגש:</b> אם ריצה מאסר, הספירה מתחילה מהשחרור.</li>
                        <li>✅ <b>פשיטת רגל:</b> אסור, אלא אם קיבל "הפטר חלוט".</li>
                        <li>✅ <b>אגרה:</b> תשלום עד ה-31 במרץ. ב-1 באפריל חלה השעיה אוטומטית.</li>
                    </ul>
                </section>
            </div>
        `,
        questions: [{ q: "מתי חלה השעיה אוטומטית למתווך שלא שילם?", options: ["1 בינואר", "31 במרץ", "1 באפריל", "במועד הבחינה"], correct: 2, exp: "השעיה אוטומטית חלה ב-1 באפריל." }]
    },
    {
        id: 1,
        title: "פרק 2: הזמנה בכתב וזכאות לעמלה",
        content: `
            <div class="space-y-6 text-right" dir="rtl">
                <section class="bg-amber-50 p-6 rounded-2xl border-r-8 border-amber-600 shadow-md">
                    <h2 class="text-2xl font-black text-amber-900 mb-4 border-b-2 border-amber-600 pb-2">חמשת פרטי החובה בהזמנה</h2>
                    <p class="font-bold">1. שמות ות.ז | 2. סוג העסקה | 3. תיאור הנכס | 4. מחיר בקירוב | 5. עמלה מוסכמת.</p>
                    <p class="mt-4 text-red-700 font-black italic underline italic">איסור סעיף 12:</p>
                    <p>מתווך שערך זיכרון דברים או סייע בניסוח משפטי - מאבד את זכאותו לעמלה!</p>
                </section>
            </div>
        `,
        questions: [{ q: "האם מותר למתווך לערוך זיכרון דברים?", options: ["כן", "לא", "רק אם הוא עו'ד", "רק בבלעדיות"], correct: 1, exp: "סעיף 12 אוסר על מתווך לבצע פעולה משפטית." }]
    },
    {
        id: 2,
        title: "פרק 3: בלעדיות - תנאים ותקופות",
        content: `
            <div class="space-y-6 text-right" dir="rtl">
                <section class="bg-blue-50 p-6 rounded-2xl border-r-8 border-blue-700 shadow-md">
                    <h2 class="text-2xl font-black text-blue-900 mb-4 border-b-2 border-blue-600 pb-2">תקופות הבלעדיות</h2>
                    <p><b>דירת מגורים:</b> מקסימום 6 חודשים. לא נקבע זמן? 30 יום.</p>
                    <p><b>נכס עסקי:</b> לפי הסכמה. לא נקבע זמן? שנה אחת.</p>
                    <p class="font-bold mt-2">חובה: מסמך נפרד וביצוע 2 פעולות שיווק.</p>
                </section>
            </div>
        `,
        questions: [{ q: "מהי תקופת המקסימום לבלעדיות בדירת מגורים?", options: ["3 חודשים", "6 חודשים", "שנה", "חודש"], correct: 1, exp: "המקסימום למגורים הוא חצי שנה." }]
    },
    {
        id: 3,
        title: "פרק 4: חובת הגינות וגילוי",
        content: `
            <div class="space-y-6 text-right" dir="rtl">
                <section class="bg-purple-50 p-6 rounded-2xl border-r-8 border-purple-700 shadow-md">
                    <h2 class="text-2xl font-black text-purple-900 mb-4 border-b-2 border-purple-600 pb-2">עניין אישי (סעיף 10)</h2>
                    <p>מתווך שיש לו עניין אישי בנכס חייב לגלות זאת ללקוח ולקבל <b>אישור בכתב</b>. ללא אישור בכתב, העסקה פסולה מבחינת זכאות לעמלה.</p>
                </section>
            </div>
        `,
        questions: [{ q: "האם גילוי עניין אישי בעל פה מספיק?", options: ["כן", "לא, חייב בכתב", "רק אם הלקוח הסכים", "רק בשכירות"], correct: 1, exp: "סעיף 10 מחייב הסכמה בכתב בלבד." }]
    },
    {
        id: 4,
        title: "פרק 5: חוק הגנת הצרכן",
        content: `
            <div class="space-y-6 text-right" dir="rtl">
                <section class="bg-green-50 p-6 rounded-2xl border-r-8 border-green-700 shadow-md">
                    <h2 class="text-2xl font-black text-green-900 mb-4 border-b-2 border-green-600 pb-2">ביטול עסקת רוכלות</h2>
                    <p><b>זמן ביטול:</b> 14 יום. | <b>דמי ביטול:</b> 5% או 100 ש"ח (הנמוך ביניהם).</p>
                    <p><b>הטעיה:</b> אסור להטעות צרכן בפרט מהותי (גודל נכס, רישום בטאבו וכו').</p>
                </section>
            </div>
        `,
        questions: [{ q: "מהם דמי הביטול המקסימליים בחוק הגנת הצרכן?", options: ["500 ש'ח", "100 ש'ח", "5%", "100 ש'ח או 5% (הנמוך)"], correct: 3, exp: "החוק מגביל ל-100 שח או 5%, הנמוך מביניהם." }]
    },
    {
        id: 5,
        title: "פרק 6: חוק המקרקעין - מושגי יסוד",
        content: `
            <div class="space-y-6 text-right" dir="rtl">
                <section class="bg-slate-50 p-6 rounded-2xl border-r-8 border-slate-800 shadow-md">
                    <h2 class="text-2xl font-black text-slate-900 mb-4 border-b-2 border-slate-800 pb-2 italic text-right italic font-bold italic underline italic underline italic">מהם מקרקעין?</h2>
                    <p class="text-lg">קרקע, כל הבנוי והנטוע עליה וכל דבר אחר המחובר אליה חיבור של קבע (לא כולל מטלטלין).</p>
                    
                    <h3 class="font-bold text-xl mt-4 underline italic text-right italic font-bold">זכויות במקרקעין:</h3>
                    <ul class="list-disc pr-6 space-y-2 font-medium">
                        <li>👑 <b>בעלות:</b> הזכות הכי חזקה. להחזיק, להשתמש ולעשות כל עסקה.</li>
                        <li>📜 <b>שכירות:</b> זכות להחזיק ולהשתמש שלא לצמיתות (מעל 5 שנים = חכירה, מעל 25 שנים = חכירה לדורות).</li>
                        <li>🤝 <b>זיקת הנאה:</b> זכות שימוש ללא חזקה (למשל זכות מעבר בשביל).</li>
                        <li>🛑 <b>זכות קדימה:</b> זכות של אדם לרכוש נכס לפני שהוא מוצע לאחרים.</li>
                    </ul>
                </section>
            </div>
        `,
        questions: [{ q: "מהי חכירה לדורות?", options: ["שכירות מעל שנה", "שכירות מעל 5 שנים", "שכירות מעל 25 שנים", "בעלות מלאה"], correct: 2, exp: "חכירה לדורות היא שכירות לתקופה של מעל 25 שנה." }]
    },
    {
        id: 6,
        title: "פרק 7: רישום מקרקעין והערות אזהרה",
        content: `
            <div class="space-y-6 text-right" dir="rtl">
                <section class="bg-red-50 p-6 rounded-2xl border-r-8 border-red-700 shadow-md">
                    <h2 class="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600 pb-2 italic text-right italic font-bold">1. רישום בטאבו (סעיף 7)</h2>
                    <p class="text-lg">עסקה במקרקעין טעונה רישום. היא מסתיימת רק ברגע הרישום בפנקסי המקרקעין (טאבו). עד הרישום, מדובר ב<b>התחייבות לעשות עסקה</b> בלבד.</p>
                </section>

                <section class="bg-orange-50 p-6 rounded-2xl border-r-8 border-orange-600 shadow-md">
                    <h2 class="text-2xl font-black text-orange-900 mb-4 border-b-2 border-orange-600 pb-2 italic text-right italic font-bold">2. הערת אזהרה (סעיף 126)</h2>
                    <p class="font-bold">המטרה: למנוע "עסקאות נוגדות" (מכירת אותה דירה לפעמיים).</p>
                    <p>הערת אזהרה נרשמת כשיש התחייבות בכתב לעסקה. ברגע שהיא רשומה, לא ניתן לרשום עסקה אחרת שסותרת אותה ללא הסכמת בעל ההערה.</p>
                </section>

                <section class="bg-blue-50 p-6 rounded-2xl border-r-8 border-blue-600 shadow-sm italic">
                    <h3 class="font-bold text-blue-900">3. פומביות הרישום:</h3>
                    <p>הפנקסים בטאבו פתוחים לעיון הציבור. כל אדם יכול להוציא "נסח טאבו" תמורת אגרה ולראות מי הבעלים של כל נכס.</p>
                </section>
            </div>
        `,
        questions: [
            { q: "מתי מסתיימת עסקה במקרקעין?", options: ["בחתימה על החוזה", "בתשלום הכסף", "ברגע הרישום בטאבו", "בקבלת המפתח"], correct: 2, exp: "לפי סעיף 7, עסקה נגמרת ברישום. עד אז היא רק התחייבות." },
            { q: "מה המטרה העיקרית של הערת אזהרה?", options: ["להוריד מס", "למנוע עסקאות סותרות", "לאשר את מחיר הדירה", "לקבל משכנתא"], correct: 1, exp: "הערת אזהרה נועדה להזהיר ולמנוע רישום עסקה שנוגדת את ההתחייבות הקיימת." }
        ]
    }
];
