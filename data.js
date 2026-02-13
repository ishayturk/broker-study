/* VERSION: 1.0.3.4
   CONTENT: Chapters 1, 2, 3 & 4 - Full Detailed Content
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
                        <li>✅ <b>עבר פלילי:</b> 5 שנים ללא עבירה עם קלון. אם היה מאסר, סופרים 5 שנים מהשחרור.</li>
                        <li>✅ <b>פשיטת רגל:</b> חייב להציג צו הפטר חלוט.</li>
                        <li>✅ <b>השכלה:</b> 12 שנות לימוד.</li>
                    </ul>
                </section>
                <section class="bg-red-50 p-5 rounded-xl border-r-8 border-red-600">
                    <h3 class="font-bold text-red-900 mb-3 text-xl underline italic">אגרות והשעיה (סעיף 18):</h3>
                    <p class="font-bold">תשלום עד 31 במרץ. ב-1 באפריל: השעיה אוטומטית.</p>
                </section>
            </div>
        `,
        questions: [
            { q: "מתי נספרות 5 השנים ללא קלון אם אדם ישב במאסר?", options: ["מיום גזר הדין", "מיום סיום ריצוי העונש בפועל", "מיום הגשת הבקשה", "מיום ביצוע העבירה"], correct: 1, exp: "הספירה מתחילה רק לאחר סיום ריצוי העונש." }
        ]
    },
    {
        id: 1,
        title: "פרק 2: הזמנה בכתב וזכאות",
        content: `
            <div class="space-y-6 text-right" dir="rtl">
                <section class="bg-amber-50 p-5 rounded-xl border-r-8 border-amber-500 shadow-md">
                    <h2 class="text-2xl font-black text-amber-900 mb-4 border-b-2 border-amber-600 pb-2 italic">חמשת פרטי החובה:</h2>
                    <ol class="list-decimal pr-6 space-y-2 font-bold">
                        <li>שמות, כתובות ות.ז (מתווך + לקוח).</li>
                        <li>סוג העסקה (מכירה/שכירות).</li>
                        <li>תיאור הנכס.</li>
                        <li>מחיר מבוקש בקירוב.</li>
                        <li>דמי התיווך המוסכמים (+ מעמ לפרטי).</li>
                    </ol>
                </section>
                <section class="bg-red-50 p-5 rounded-xl border-r-8 border-red-600">
                    <h3 class="font-bold text-red-900 mb-3 text-xl underline italic">איסור פעולה משפטית:</h3>
                    <p>מתווך שעזר לכתוב זיכרון דברים או חוזה - <b>מפסיד את כל העמלה שלו</b>.</p>
                </section>
            </div>
        `,
        questions: [
            { q: "האם מתווך רשאי למלא פרטי נכס בזיכרון דברים?", options: ["כן", "מותר רק בחינם", "אסור מוחלט ושולל עמלה", "מותר רק בבלעדיות"], correct: 2, exp: "סעיף 12 אוסר סיוע בעריכת מסמך משפטי." }
        ]
    },
    {
        id: 2,
        title: "פרק 3: בלעדיות (תקופות ושיווק)",
        content: `
            <div class="space-y-6 text-right" dir="rtl">
                <section class="bg-blue-50 p-5 rounded-xl border-r-8 border-blue-600 shadow-md">
                    <h2 class="text-2xl font-black text-blue-800 mb-4 border-b-2 border-blue-600 pb-2 italic">תקופות זמן בבלעדיות:</h2>
                    <ul class="space-y-3 font-bold">
                        <li>🏠 <b>דירת מגורים:</b> עד 6 חודשים.</li>
                        <li>🕒 <b>ללא ציון זמן במגורים:</b> מסתיים תוך 30 יום.</li>
                        <li>🏗️ <b>נכס אחר:</b> כמה שסיכמו (בהעדר סיכום - שנה).</li>
                    </ul>
                </section>
                <section class="p-4 bg-green-50 rounded-lg">
                    <h3 class="font-bold text-green-900 mb-2 italic">חזקת הגורם היעיל:</h3>
                    <p>בבלעדיות עם פעולות שיווק, החוק מניח שהמתווך הוא הגורם היעיל.</p>
                </section>
            </div>
        `,
        questions: [
            { q: "מהי תקופת הבלעדיות המקסימלית לדירת מגורים?", options: ["שנה", "3 חודשים", "6 חודשים", "30 יום"], correct: 2, exp: "סעיף 9ב קובע מקסימום של חצי שנה למגורים." }
        ]
    },
    {
        id: 3,
        title: "פרק 4: חובת הגינות וגילוי (סעיפים 8 ו-10)",
        content: `
            <div class="space-y-6 text-right" dir="rtl">
                <section>
                    <h2 class="text-2xl font-black text-purple-800 mb-4 border-b-2 border-purple-600 pb-2 italic">1. חובת הגינות וזהירות (סעיף 8)</h2>
                    <p class="text-lg leading-relaxed font-bold text-slate-700">מתווך חייב לפעול בנאמנות, בהגינות ובדרך מקובלת. עליו למסור ללקוחו כל מידע שיש בידו בעניין מהותי הנוגע לנכס.</p>
                </section>

                <section class="bg-purple-50 p-5 rounded-xl border-r-8 border-purple-600 shadow-md">
                    <h3 class="font-bold text-purple-900 mb-4 text-xl underline italic">2. גילוי עניין אישי (סעיף 10):</h3>
                    <p class="mb-2 font-bold text-red-800">המכשלה הגדולה ביותר:</p>
                    <p class="font-medium text-slate-800 italic underline italic font-bold">מתווך לא יתווך בעסקה שיש לו בה <b>עניין אישי</b>, אלא אם:</p>
                    <ul class="list-disc pr-6 mt-2 space-y-2 font-bold text-slate-700">
                        <li>גילה ללקוח את העניין האישי שלו.</li>
                        <li>קיבל את הסכמת הלקוח לכך <b>בכתב</b>.</li>
                    </ul>
                    <p class="mt-4 text-sm bg-white p-2 border border-purple-200 rounded italic font-bold">דוגמה: מתווך שרוצה למכור דירה של אחיו, או מתווך שרוצה לקנות בעצמו את הדירה שהוא מפרסם.</p>
                </section>

                <section class="bg-slate-50 p-5 rounded-xl border-r-8 border-slate-600">
                    <h3 class="font-bold text-slate-900 mb-3 text-xl underline italic">3. מה נחשב 'מידע מהותי'?</h3>
                    <p class="text-slate-700 leading-relaxed font-bold">כל דבר שיכול להשפיע על החלטת הקונה:</p>
                    <ul class="list-disc pr-6 space-y-1 font-semibold">
                        <li>ליקויים נסתרים (רטיבות קשה, פגמים בשלד).</li>
                        <li>מצב תכנוני (צו הריסה, זכויות בנייה שלא קיימות).</li>
                        <li>זהות הצדדים (אם המוכר הוא לא הבעלים הרשום).</li>
                    </ul>
                </section>
            </div>
        `,
        questions: [
            { 
                q: "מתווך מציע ללקוח דירה שבבעלות חברה שלמתווך יש בה מניות. מה עליו לעשות?", 
                options: ["אין צורך לעשות כלום", "עליו לגלות זאת ללקוח ולקבל הסכמתו בכתב", "עליו לגלות זאת בעל פה בלבד", "אסור לו לתווך בעסקה זו בכלל"], 
                correct: 1, 
                exp: "סעיף 10 מחייב גילוי עניין אישי והסכמה בכתב מהלקוח." 
            },
            { 
                q: "מתווך יודע שיש צו הריסה לחלק מהדירה, אך המוכר ביקש ממנו לא לספר לקונים. מה עליו לעשות?", 
                options: ["להקשיב למוכר, הוא הלקוח שלו", "לספר לקונים רק אם ישאלו", "חובה עליו לגלות זאת לקונים לפי חובת ההגינות", "להתפטר מהעסקה מבלי לספר"], 
                correct: 2, 
                exp: "סעיף 8 מחייב מסירת כל מידע מהותי הנוגע לנכס, גם אם המוכר מתנגד." 
            }
        ]
    }
];
