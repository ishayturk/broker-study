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
                        <p class="font-medium italic">מי שלא שילם עד המועד - רישיונו מושעה ב-1 באפריל באופן אוטומטי (אין צורך בהתראה).</p>
                        <p class="bg-white p-3 text-sm font-normal border border-red-200 rounded text-slate-600"><b>השלכה קריטית:</b> פעולת תיווך בזמן השעיה אינה מזכה בדמי תיווך, גם אם העסקה הושלמה והלקוח חתם.</p>
                    </div>
                </section>
            </div>
        `,
        questions: [
            { 
                q: "מתווך הורשע בעבירה שיש עמה קלון, ריצה 3 שנות מאסר והשתחרר ב-1.1.2022. מתי יוכל לבקש רישיון?", 
                options: ["1.1.2025", "1.1.2027", "במועד השחרור", "5 שנים מיום גזר הדין"], 
                correct: 1, 
                exp: "לפי סעיף 5, 5 השנים נספרות מיום סיום ריצוי העונש בפועל (2022 + 5 = 2027)." 
            },
            { 
                q: "מה קורה למתווך שלא שילם את האגרה השנתית עד ה-31 במרץ?", 
                options: ["ישלם קנס בלבד", "רישיונו מבוטל לצמיתות", "רישיונו מושעה אוטומטית ב-1 באפריל", "יקבל התראה של 30 יום לפני השעיה"], 
                correct: 2, 
                exp: "סעיף 18 קובע השעיה אוטומטית ללא צורך בהתראה למי שלא שילם עד המועד הקובע." 
            }
        ]
    },
    {
        id: 1,
        title: "פרק 2: הזמנה בכתב וזכאות לדמי תיווך",
        content: `
            <div class="space-y-6 text-right" dir="rtl">
                <section>
                    <h2 class="text-2xl font-black text-blue-800 mb-4 border-b-2 border-blue-600 pb-2 italic">1. דרישת הכתב (סעיף 9)</h2>
                    <p class="text-lg leading-relaxed font-medium text-slate-700">זהו תנאי סף מהותי. מתווך אינו זכאי לדמי תיווך אלא אם הלקוח חתם על <b>הזמנה בכתב</b> לביצוע פעולת תיווך במקרקעין.</p>
                </section>

                <section class="bg-amber-50 p-5 rounded-xl border-r-8 border-amber-500 shadow-md">
                    <h3 class="font-bold text-amber-900 mb-4 text-xl underline italic">2. חמשת פרטי החובה (תקנות 1997):</h3>
                    <p class="mb-4 text-sm font-bold text-amber-800 italic underline italic text-right italic font-bold">חסרונו של אחד מהפרטים הללו עלול לשלול את הזכאות לעמלה בבית המשפט:</p>
                    <ul class="space-y-3 text-slate-800 font-bold">
                        <li>👤 1. שמות, כתובות ומספרי ת.ז של המתווך ושל הלקוח.</li>
                        <li>🏠 2. סוג העסקה (מכירה, קנייה, שכירות).</li>
                        <li>📍 3. תיאור המקרקעין (כתובת או תיאור שיאפשר זיהוי חד-משמעי).</li>
                        <li>💰 4. מחיר העסקה המבוקש (בקירוב).</li>
                        <li>📊 5. דמי התיווך המוסכמים (בשקלים או באחוזים, כולל מע"מ ללקוח פרטי).</li>
                    </ul>
                </section>

                <section class="bg-blue-50 p-5 rounded-xl border-r-8 border-blue-600 shadow-sm">
                    <h3 class="font-bold text-blue-900 mb-3 text-xl underline italic">3. תנאי הזכאות (סעיף 14):</h3>
                    <p class="mb-2 italic text-sm underline text-blue-800 font-bold italic underline">שלושה תנאים מצטברים (חייבים את כולם):</p>
                    <ol class="list-decimal pr-6 space-y-4 font-semibold text-slate-700">
                        <li><b>רישיון בתוקף:</b> המתווך היה בעל רישיון בעת שביצע את הפעולה.</li>
                        <li><b>הזמנה בכתב:</b> מילא אחר הוראות סעיף 9 (חתימה + 5 פרטים).</li>
                        <li><b>הגורם היעיל:</b> המתווך היה הגורם המרכזי שהביא לחתימת הסכם מחייב.</li>
                    </ol>
                </section>

                <section class="bg-red-50 p-5 rounded-xl border-r-8 border-red-600 shadow-md text-right">
                    <h3 class="font-bold text-red-900 mb-3 text-xl underline italic">4. איסור פעולות משפטיות (סעיף 12):</h3>
                    <p class="text-slate-800 font-bold mb-2">חל איסור מוחלט על מתווך לערוך מסמכים משפטיים!</p>
                    <p class="text-slate-700 leading-relaxed font-medium text-sm">מתווך שערך או סייע לערוך מסמך בעל אופי משפטי (כמו זיכרון דברים או חוזה) – <b>מאבד את זכאותו לדמי תיווך</b>, גם אם יש לו הזמנה חתומה בבלעדיות.</p>
                </section>
            </div>
        `,
        questions: [
            { 
                q: "לקוח חתם על הזמנה, אך המתווך שכח לציין את מחיר הנכס המבוקש. מה הדין?", 
                options: ["ההזמנה תקינה", "הוא עלול לאבד את זכאותו לעמלה", "זה חובה רק בבלעדיות", "הלקוח יכול להוסיף את זה בטלפון"], 
                correct: 1, 
                exp: "מחיר הנכס בקירוב הוא אחד מ-5 פרטי החובה בתקנות המתווכים." 
            },
            { 
                q: "האם מתווך רשאי לסייע ללקוח בניסוח זיכרון דברים?", 
                options: ["כן, אם זה בחינם", "כן, כדי לעזור לסגור עסקה", "לא, זהו איסור מוחלט הגורר אובדן עמלה", "רק אם הוא עורך דין במקצועו"], 
                correct: 2, 
                exp: "סעיף 12 אוסר על מתווך לעסוק בפעולות משפטיות, והפרתו שוללת זכאות לדמי תיווך." 
            }
        ]
    }
];
