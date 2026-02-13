/* VERSION: 1.0.3.3
   CONTENT: Chapters 1, 2 & 3 - FULL DETAIL + EXAM TRAPS
   LAST UPDATED: 2026-02-13
*/

const APP_DATA = [
    {
        id: 0,
        title: "פרק 1: רישוי, אגרות ומוסדות",
        content: `
            <div class="space-y-6 text-right" dir="rtl">
                <section class="bg-blue-50 p-5 rounded-xl border-r-8 border-blue-600 shadow-md">
                    <h2 class="text-2xl font-black text-blue-800 mb-4 border-b-2 border-blue-600 pb-2 italic">תנאי סף ורישוי (סעיף 5)</h2>
                    <ul class="space-y-2 text-slate-800 font-medium">
                        <li>✅ <b>גיל 18:</b> במועד הגשת הבקשה.</li>
                        <li>✅ <b>אזרחות/תושבות:</b> אזרח, תושב ישראל או תושב חוץ עם היתר עבודה.</li>
                        <li>✅ <b>עבר פלילי:</b> 5 שנים ללא עבירה עם קלון. <b>המוקש:</b> אם היה מאסר, סופרים 5 שנים מהשחרור.</li>
                        <li>✅ <b>פשיטת רגל:</b> חייב להציג צו הפטר חלוט.</li>
                        <li>✅ <b>השכלה:</b> 12 שנות לימוד.</li>
                    </ul>
                </section>

                <section class="bg-red-50 p-5 rounded-xl border-r-8 border-red-600">
                    <h3 class="font-bold text-red-900 mb-3 text-xl underline italic">מוקשי אגרות (סעיף 18):</h3>
                    <p class="font-bold text-slate-800">1. תשלום עד 31 במרץ.</p>
                    <p class="font-bold text-slate-800">2. ב-1 באפריל: השעיה אוטומטית (אין צורך בהודעה מהרשם!).</p>
                    <p class="font-bold text-slate-800">3. פעולה בזמן השעיה = אין עמלה, גם אם הלקוח חתם ורוצה לשלם.</p>
                </section>

                <section class="p-4 bg-slate-100 rounded-lg">
                    <h3 class="font-bold text-lg text-slate-800 mb-2 underline italic">רשם המתווכים:</h3>
                    <p>ממונה ע"י שר המשפטים. חייב להיות משפטן הכשיר להיות שופט שלום. מנהל את הפנקס הפתוח לציבור.</p>
                </section>
            </div>
        `,
        questions: [
            { q: "אדם הורשע בעבירה עם קלון ונידון ל-2 שנות מאסר. הוא השתחרר ב-2024. מתי יוכל לקבל רישיון?", options: ["2026", "2024", "2029", "2031"], correct: 2, exp: "5 שנים מיום השחרור (2024 + 5 = 2029)." },
            { q: "מתווך שילם את האגרה ב-2 באפריל וביצע עסקה ב-3 באפריל. האם הוא זכאי לדמי תיווך?", options: ["כן, כי הוא שילם לפני העסקה", "לא, כי הוא מושעה לנצח", "רק אם קיבל אישור מהרשם", "כן, אבל עם קנס"], correct: 0, exp: "מרגע ששילם ההשעיה מבוטלת. אם העסקה בוצעה אחרי התשלום, הוא זכאי." }
        ]
    },
    {
        id: 1,
        title: "פרק 2: הזמנה בכתב וזכאות",
        content: `
            <div class="space-y-6 text-right" dir="rtl">
                <section class="bg-amber-50 p-5 rounded-xl border-r-8 border-amber-500 shadow-md">
                    <h2 class="text-2xl font-black text-amber-900 mb-4 border-b-2 border-amber-600 pb-2 italic">חמשת פרטי החובה (תקנות 97):</h2>
                    <p class="mb-4 font-bold text-red-700 italic">זכור: חסרון של אחד מהם עלול להפיל תביעה לעמלה!</p>
                    <ol class="list-decimal pr-6 space-y-2 font-bold">
                        <li>שמות, כתובות ות.ז (מתווך + לקוח).</li>
                        <li>סוג העסקה (מכירה/שכירות).</li>
                        <li>תיאור הנכס (כתובת או תיאור מזהה).</li>
                        <li>מחיר מבוקש בקירוב.</li>
                        <li>דמי התיווך המוסכמים (בשקלים או אחוזים + מעמ לפרטי).</li>
                    </ol>
                </section>

                <section class="bg-red-50 p-5 rounded-xl border-r-8 border-red-600">
                    <h3 class="font-bold text-red-900 mb-3 text-xl underline italic italic font-bold">איסור פעולה משפטית (סעיף 12):</h3>
                    <p class="font-bold text-slate-800 italic underline italic">המכשלה הכי גדולה בבחינה:</p>
                    <p>מתווך שעזר לכתוב זיכרון דברים או חוזה - <b>מפסיד את כל העמלה שלו</b>, גם אם יש לו הזמנה חתומה ובלעדיות.</p>
                </section>

                <section class="p-4 bg-blue-50 rounded-lg">
                    <h3 class="font-bold text-lg text-blue-800 mb-2 italic underline italic">תנאי הזכאות (סעיף 14):</h3>
                    <p>1. רישיון בתוקף. 2. הזמנה תקינה. 3. גורם יעיל.</p>
                </section>
            </div>
        `,
        questions: [
            { q: "האם מתווך רשאי למלא עבור הצדדים את פרטי הנכס בזיכרון דברים?", options: ["כן, זה שירות ללקוח", "מותר רק אם הוא לא לוקח כסף על זה", "אסור מוחלט ושולל עמלה", "מותר רק בבלעדיות"], correct: 2, exp: "סעיף 12 אוסר סיוע בעריכת מסמך משפטי מכל סוג." }
        ]
    },
    {
        id: 2,
        title: "פרק 3: בלעדיות (תקופות ושיווק)",
        content: `
            <div class="space-y-6 text-right" dir="rtl">
                <section class="bg-blue-50 p-5 rounded-xl border-r-8 border-blue-600 shadow-md">
                    <h2 class="text-2xl font-black text-blue-800 mb-4 border-b-2 border-blue-600 pb-2 italic">כללי הבלעדיות (סעיף 9ב):</h2>
                    <p class="font-bold">1. חייב מסמך נפרד מההזמנה הרגילה.</p>
                    <p class="font-bold">2. המתווך חייב לבצע 2 פעולות שיווק לפחות (שלט, עיתון, אינטרנט וכו').</p>
                </section>

                <section class="bg-amber-50 p-5 rounded-xl border-r-8 border-amber-500">
                    <h3 class="font-bold text-amber-900 mb-3 text-xl underline italic">תקופות זמן (הכי חשוב לבחינה!):</h3>
                    <ul class="space-y-3 font-bold">
                        <li>🏠 <b>דירת מגורים:</b> עד 6 חודשים.</li>
                        <li>🕒 <b>דירת מגורים ללא ציון זמן:</b> מסתיים תוך 30 יום.</li>
                        <li>🏗️ <b>נכס אחר (עסקי/מגרש):</b> כמה שסיכמו. לא סיכמו? שנה.</li>
                    </ul>
                </section>

                <section class="p-4 bg-green-50 rounded-lg">
                    <h3 class="font-bold text-green-900 mb-2">חזקת הגורם היעיל:</h3>
                    <p>מתווך שעשה פעולות שיווק בבלעדיות, החוק מניח שהוא הגורם היעיל. הלקוח הוא זה שיצטרך להוכיח בבית משפט שהמתווך לא היה יעיל כדי להתחמק מתשלום.</p>
                </section>
            </div>
        `,
        questions: [
            { q: "נכס בבלעדיות למגורים שבו לא נרשם תאריך סיום. מתי הבלעדיות פוקעת?", options: ["אחרי 6 חודשים", "אחרי 30 יום", "אחרי שנה", "היא לא תקפה בכלל"], correct: 1, exp: "סעיף 9 קובע שבהיעדר תאריך בנכס מגורים, הבלעדיות היא ל-30 יום בלבד." },
            { q: "האם מותר לרשום בלעדיות לדירת מגורים לשנה שלמה?", options: ["כן, אם הצדדים הסכימו", "לא, המקסימום הוא חצי שנה", "רק אם זה נכס מסחרי", "כן, אם המתווך משלם על השיווק"], correct: 1, exp: "החוק מגביל בלעדיות למגורים ל-6 חודשים בלבד." }
        ]
    }
];
