/* VERSION: 1.0.3.3
   CONTENT: Chapters 1, 2 & 3 - Full Detailed Content
   LAST UPDATED: 2026-02-13
*/

const APP_DATA = [
    {
        id: 0,
        title: "פרק 1: רישוי, אגרות ומוסדות",
        content: `
            <div class="space-y-6 text-right" dir="rtl">
                <section>
                    <h2 class="text-2xl font-black text-blue-800 mb-4 border-b-2 border-blue-600 pb-2 italic">1. מבוא וחוק המתווכים</h2>
                    <p class="text-lg leading-relaxed font-medium text-slate-700">חוק המתווכים במקרקעין (1996) נועד להסדיר את מקצוע התיווך. הכלל הבסיסי: אין לעסוק בתיווך ללא רישיון. מי שעובר על החוק מבצע עבירה פלילית ולא יהיה זכאי לדמי תיווך בשום מקרה.</p>
                </section>

                <section class="bg-blue-50 p-5 rounded-xl border-r-8 border-blue-600 shadow-md">
                    <h3 class="font-bold text-blue-900 mb-4 text-xl underline italic">2. תנאי סף לקבלת רישיון (סעיף 5):</h3>
                    <div class="space-y-4 text-slate-800 font-medium">
                        <p>✅ <b>גיל:</b> 18 ומעלה במועד הגשת הבקשה.</p>
                        <p>✅ <b>אזרחות:</b> אזרח ישראל, תושב ישראל או תושב חוץ עם היתר עבודה חוקי.</p>
                        <p>✅ <b>עבר פלילי:</b> לא הורשע בעבירה שיש עמה קלון ב-5 השנים האחרונות. אם המועמד ריצה מאסר, 5 השנים נספרות מיום סיום ריצוי העונש בפועל.</p>
                        <p>✅ <b>פשיטת רגל:</b> לא פושט רגל. אם היה כזה, חייב להציג צו הפטר חלוט.</p>
                        <p>✅ <b>השכלה:</b> 12 שנות לימוד לפחות.</p>
                        <p>✅ <b>בחינה:</b> מעבר בחינה בציון 60 ומעלה.</p>
                    </div>
                </section>

                <section class="bg-red-50 p-5 rounded-xl border-r-8 border-red-600">
                    <h3 class="font-bold text-red-900 mb-3 text-xl underline italic">3. אגרות והשעיה (סעיף 18):</h3>
                    <p class="font-bold text-slate-800">מועד התשלום השנתי: עד ה-31 במרץ.</p>
                    <p class="bg-white p-3 text-sm border border-red-200 rounded text-slate-700 mt-2 font-bold text-red-600">שימו לב: מי שלא שילם עד המועד, רישיונו מושעה ב-1 באפריל באופן אוטומטי. פעולת תיווך שבוצעה בזמן השעיה אינה מזכה בדמי תיווך.</p>
                </section>
            </div>
        `,
        questions: [
            { q: "מתי נספרות 5 השנים ללא קלון אם אדם ישב במאסר?", options: ["מיום גזר הדין", "מיום סיום ריצוי העונש בפועל", "מיום הגשת הבקשה", "מיום ביצוע העבירה"], correct: 1, exp: "סעיף 5 קובע שהספירה מתחילה רק לאחר סיום ריצוי העונש." }
        ]
    },
    {
        id: 1,
        title: "פרק 2: הזמנה בכתב וזכאות לדמי תיווך",
        content: `
            <div class="space-y-6 text-right" dir="rtl">
                <section>
                    <h2 class="text-2xl font-black text-blue-800 mb-4 border-b-2 border-blue-600 pb-2 italic">1. דרישת הכתב (סעיף 9)</h2>
                    <p class="text-lg leading-relaxed font-medium text-slate-700">זוהי דרישה מהותית. ללא הזמנה חתומה בכתב, אין זכאות לדמי תיווך, אפילו אם המתווך עבד קשה מאוד.</p>
                </section>

                <section class="bg-amber-50 p-5 rounded-xl border-r-8 border-amber-500 shadow-md">
                    <h3 class="font-bold text-amber-900 mb-4 text-xl underline italic">2. חמשת פרטי החובה בהזמנה:</h3>
                    <ul class="space-y-3 text-slate-800 font-bold">
                        <li>👤 1. שמות, כתובות ותעודות זהות של המתווך והלקוח.</li>
                        <li>🏠 2. סוג העסקה (מכירה, קנייה, שכירות).</li>
                        <li>📍 3. תיאור המקרקעין (זיהוי הנכס).</li>
                        <li>💰 4. מחיר העסקה בקירוב.</li>
                        <li>📊 5. דמי התיווך המוסכמים.</li>
                    </ul>
                </section>

                <section class="bg-red-50 p-5 rounded-xl border-r-8 border-red-600">
                    <h3 class="font-bold text-red-900 mb-3 text-xl underline italic italic font-bold">3. איסור פעולות משפטיות (סעיף 12):</h3>
                    <p class="text-slate-700">מתווך לא יסייע בעריכת מסמכים משפטיים כמו זיכרון דברים או חוזה. עריכת מסמך כזה שוללת את הזכאות לדמי תיווך באופן מוחלט.</p>
                </section>
            </div>
        `,
        questions: [
            { q: "האם מתווך שערך זיכרון דברים זכאי לעמלה?", options: ["כן, אם העסקה הצליחה", "לא, זהו איסור מוחלט בחוק", "רק חצי מהסכום", "רק אם הלקוח ויתר לו"], correct: 1, exp: "סעיף 12 קובע שפעולה משפטית מבטלת את הזכאות לדמי תיווך." }
        ]
    },
    {
        id: 2,
        title: "פרק 3: בלעדיות (תקופות ופעולות שיווק)",
        content: `
            <div class="space-y-6 text-right" dir="rtl">
                <section>
                    <h2 class="text-2xl font-black text-blue-800 mb-4 border-b-2 border-blue-600 pb-2 italic">1. תנאים למתן בלעדיות (סעיף 9ב)</h2>
                    <p class="text-lg leading-relaxed font-medium text-slate-700">כדי שתהיה בלעדיות תקפה, חייבים להתקיים שני תנאים נוספים מעבר להזמנה הרגילה:</p>
                    <ul class="list-disc pr-6 space-y-2 font-bold text-blue-900">
                        <li>הבלעדיות תאושר במסמך נפרד מהזמנת התיווך.</li>
                        <li>המתווך יבצע לפחות שתי פעולות שיווק (שלט, פרסום בעיתון, אינטרנט וכדומה).</li>
                    </ul>
                </section>

                <section class="bg-blue-50 p-5 rounded-xl border-r-8 border-blue-600 shadow-md">
                    <h3 class="font-bold text-blue-900 mb-4 text-xl underline italic">2. תקופות הבלעדיות (סעיף 9):</h3>
                    <div class="space-y-3 font-semibold text-slate-700">
                        <p>🏠 <b>דירה למגורים:</b> תקופת הבלעדיות המקסימלית היא <b>6 חודשים</b>.</p>
                        <p>🏗️ <b>נכס אחר (מגרש, חנות):</b> אין הגבלה בחוק, אך אם לא סוכם - הבלעדיות מסתיימת תוך שנה.</p>
                        <p>⚠️ <b>ללא ציון תקופה:</b> אם בנכס למגורים לא צוינה תקופה, הבלעדיות מסתיימת תוך <b>30 יום</b>.</p>
                    </div>
                </section>

                <section class="bg-green-50 p-5 rounded-xl border-r-8 border-green-600">
                    <h3 class="font-bold text-green-900 mb-3 text-xl underline italic">3. חזקת הגורם היעיל:</h3>
                    <p class="text-slate-700">מתווך בבלעדיות שנהג לפי החוק (ביצע פעולות שיווק), חזקה עליו שהיה הגורם היעיל בעסקה, גם אם הקונה הגיע ממקור אחר בתקופה זו.</p>
                </section>
            </div>
        `,
        questions: [
            { q: "מהי תקופת הבלעדיות המקסימלית לדירת מגורים?", options: ["שנה", "3 חודשים", "6 חודשים", "אין הגבלה"], correct: 2, exp: "סעיף 9(ב)(1) קובע מקסימום של חצי שנה לדירת מגורים." },
            { q: "כמה פעולות שיווק לפחות חייב מתווך לבצע בבלעדיות?", options: ["אחת", "שתיים", "שלוש", "חמש"], correct: 1, exp: "התקנות מחייבות לפחות 2 פעולות שיווק מתוך הרשימה בחוק." },
            { q: "מה קורה אם לא צוינה תקופת הבלעדיות בדירת מגורים?", options: ["היא מבוטלת מיד", "היא תקפה ל-6 חודשים", "היא תקפה ל-30 יום", "היא תקפה לשנה"], correct: 2, exp: "לפי סעיף 9, בהיעדר סיכום על תקופה בנכס מגורים, הבלעדיות פוקעת תוך חודש." }
        ]
    }
];
