/* VERSION: 1.0.3.5
   CONTENT: Chapters 1, 2, 3, 4 & 5 - Full Detailed Content
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
                        <li>✅ <b>עבר פלילי:</b> 5 שנים ללא עבירה עם קלון. המוקש: אם היה מאסר, סופרים 5 שנים מהשחרור.</li>
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
        title: "פרק 4: חובת הגינות וגילוי",
        content: `
            <div class="space-y-6 text-right" dir="rtl">
                <section class="bg-purple-50 p-5 rounded-xl border-r-8 border-purple-600 shadow-md">
                    <h2 class="text-2xl font-black text-purple-800 mb-4 border-b-2 border-purple-600 pb-2 italic">גילוי עניין אישי (סעיף 10):</h2>
                    <p class="font-bold text-slate-800">מתווך לא יתווך בעסקה שיש לו בה עניין אישי אלא אם:</p>
                    <ul class="list-disc pr-6 mt-2 space-y-2 font-bold">
                        <li>גילה ללקוח את העניין האישי.</li>
                        <li>קיבל הסכמה <b>בכתב</b>.</li>
                    </ul>
                </section>
                <section class="p-4 bg-slate-50 rounded-lg">
                    <h3 class="font-bold text-slate-900 mb-2 underline italic">חובת הגינות (סעיף 8):</h3>
                    <p>חובה למסור ללקוח כל מידע מהותי הנוגע לנכס, גם אם המוכר ביקש להסתיר זאת.</p>
                </section>
            </div>
        `,
        questions: [
            { q: "מתווך רוצה למכור דירה של אחיו. מה עליו לעשות?", options: ["כלום", "גילוי נאות בעל פה", "גילוי נאות והסכמה בכתב", "אסור לו לתווך"], correct: 2, exp: "סעיף 10 מחייב גילוי עניין אישי והסכמה בכתב." }
        ]
    },
    {
        id: 4,
        title: "פרק 5: חוק הגנת הצרכן",
        content: `
            <div class="space-y-6 text-right" dir="rtl">
                <section>
                    <h2 class="text-2xl font-black text-green-800 mb-4 border-b-2 border-green-600 pb-2 italic text-right italic font-bold">עסקת רוכלות וביטול עסקה</h2>
                    <p class="text-lg leading-relaxed font-bold text-slate-700">חוק הגנת הצרכן חל על מתווכים מול לקוחות פרטיים. הנושא הכי שכיח בבחינה הוא "עסקת רוכלות".</p>
                </section>

                <section class="bg-green-50 p-5 rounded-xl border-r-8 border-green-600 shadow-md">
                    <h3 class="font-bold text-green-900 mb-4 text-xl underline italic text-right italic font-bold">1. מהי עסקת רוכלות?</h3>
                    <p class="font-medium text-slate-800">עסקה שנעשתה <b>לא במקום העסק</b> הקבוע של המתווך (למשל: בבית הלקוח, בבית קפה, או ברחוב).</p>
                </section>

                <section class="bg-amber-50 p-5 rounded-xl border-r-8 border-amber-600">
                    <h3 class="font-bold text-amber-900 mb-3 text-xl underline italic text-right italic font-bold">2. זכות הביטול (המספרים החשובים):</h3>
                    <ul class="space-y-4 font-bold text-slate-800 italic underline italic">
                        <li>🕒 <b>זמן לביטול:</b> תוך 14 יום מיום עשיית ההסכם או מיום קבלת הטופס (לפי המאוחר).</li>
                        <li>💰 <b>דמי ביטול:</b> 5% מערך העסקה או 100 ש"ח (הנמוך מביניהם).</li>
                        <li>❌ <b>ביטול בשל הטעיה:</b> אם המתווך הטעה את הלקוח, אין דמי ביטול בכלל!</li>
                    </ul>
                </section>

                <section class="p-4 bg-red-50 rounded-lg border border-red-200">
                    <h3 class="font-bold text-red-900 mb-2 italic">איסור השפעה בלתי הוגנת:</h3>
                    <p class="text-sm font-bold">חל איסור להפעיל לחץ נפשי, ניצול חולשה או איום על צרכן כדי שיחתום על עסקת תיווך.</p>
                </section>
            </div>
        `,
        questions: [
            { 
                q: "לקוח חתם על הזמנת תיווך בביתו (עסקת רוכלות). תוך כמה זמן הוא יכול לבטל?", 
                options: ["7 ימים", "14 ימים", "24 שעות", "אי אפשר לבטל"], 
                correct: 1, 
                exp: "לפי חוק הגנת הצרכן, עסקת רוכלות ניתנת לביטול תוך 14 יום." 
            },
            { 
                q: "מהם דמי הביטול המקסימליים שניתן לגבות מצרכן שביטל עסקת רוכלות כדין?", 
                options: ["10%", "5% או 100 ש'ח (הנמוך מביניהם)", "אין דמי ביטול", "כל סכום שנקבע בחוזה"], 
                correct: 1, 
                exp: "החוק מגביל את דמי הביטול ל-5% מהעסקה או 100 ש'ח, לפי הנמוך." 
            }
        ]
    }
];
