/* VERSION: 3.0
   CONTENT: Chapters 1-3 - TOTAL DEEP DIVE
   STATUS: Full content, no compression.
*/

const APP_DATA = [
    {
        id: 0,
        title: "פרק 1: רישוי, אגרות ומוסדות",
        content: `
            <div class="space-y-6 text-right" dir="rtl">
                <section class="bg-blue-50 p-6 rounded-2xl border-r-8 border-blue-700 shadow-md">
                    <h2 class="text-2xl font-black text-blue-900 mb-4 border-b-2 border-blue-600 pb-2 italic">1. תנאי הסף לקבלת רישיון (סעיף 5)</h2>
                    <ul class="space-y-4 text-slate-800 font-medium">
                        <li><b>🔞 גיל 18:</b> המועמד חייב להיות בן 18 ביום הגשת הבקשה.</li>
                        <li><b>🇮🇱 אזרחות/תושבות:</b> אזרח ישראל, תושב ישראל, או תושב חוץ עם היתר עבודה חוקי לפי חוק הכניסה לישראל.</li>
                        <li><b>⚖️ עבר פלילי וקלון:</b> לא הורשע בעבירה שיש עמה קלון ב-5 השנים שקדמו לבקשה. 
                            <br><span class="text-red-700 font-bold">חשוב לבחינה:</span> אם הוטל עונש מאסר, 5 השנים נספרות <b>מיום סיום ריצוי העונש בפועל</b>.</li>
                        <li><b>💰 פשיטת רגל:</b> פושט רגל פסול. עליו להציג <b>צו הפטר חלוט</b> כדי לקבל רישיון.</li>
                        <li><b>🎓 השכלה:</b> סיים 12 שנות לימוד לפחות.</li>
                    </ul>
                </section>

                <section class="bg-red-50 p-6 rounded-2xl border-r-8 border-red-700 shadow-md">
                    <h2 class="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-700 pb-2 italic">2. אגרות והשעיה אוטומטית (סעיף 18)</h2>
                    <p class="font-bold text-slate-800 italic underline">המועד הקובע: 31 במרץ.</p>
                    <p class="leading-relaxed">האגרה היא עבור שנה קלנדרית. מתווך שלא שילם עד ה-31 במרץ, הופך ל<b>מושעה אוטומטית ב-1 באפריל</b>.</p>
                    <div class="mt-4 p-4 bg-white border-2 border-red-600 rounded-xl">
                        <p class="font-black text-red-900">הלכת "מאיר נ' קנラー":</p>
                        <p class="text-sm italic">מתווך שביצע פעולה בזמן השעיה (אפילו ב-2 באפריל) אינו זכאי לדמי תיווך, גם אם היה הגורם היעיל ביותר.</p>
                    </div>
                </section>
            </div>
        `,
        questions: [{ q: "אדם השתחרר מהכלא ב-2023 אחרי עבירה עם קלון. מתי יוכל לקבל רישיון?", options: ["2023", "2025", "2028", "2030"], correct: 2, exp: "שחרור (2023) + 5 שנים = 2028." }]
    },
    {
        id: 1,
        title: "פרק 2: הזמנה בכתב וסעיף 12",
        content: `
            <div class="space-y-6 text-right" dir="rtl">
                <section class="bg-amber-50 p-6 rounded-2xl border-r-8 border-amber-600 shadow-lg">
                    <h2 class="text-2xl font-black text-amber-900 mb-4 border-b-2 border-amber-600 pb-2 italic">1. חמשת פרטי החובה (תקנות 1997)</h2>
                    <p class="font-bold mb-4">ללא מסמך חתום הכולל את אלה, אין עמלה:</p>
                    <ul class="list-decimal pr-8 space-y-2 font-bold text-slate-800">
                        <li>שמות, כתובות ומספרי תעודת זהות (מתווך ולקוח).</li>
                        <li>סוג העסקה (מכירה, קנייה, שכירות).</li>
                        <li>תיאור הנכס (כתובת או תיאור זיהוי חד משמעי).</li>
                        <li>מחיר העסקה המבוקש בקירוב.</li>
                        <li>דמי התיווך המוסכמים (באחוזים או סכום קבוע). <br><span class="text-sm font-normal">דגש: מול צרכן פרטי חובה לציין אם המחיר כולל מע"מ.</span></li>
                    </ul>
                </section>

                <section class="bg-red-100 p-6 rounded-2xl border-r-8 border-red-800">
                    <h2 class="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-800 pb-2 italic">2. איסור פעולות משפטיות (סעיף 12)</h2>
                    <p class="font-bold">חל איסור מוחלט על מתווך לערוך או לסייע בעריכת מסמכים משפטיים.</p>
                    <p class="mt-2 text-red-800 font-black italic underline">העונש: אובדן מוחלט של דמי התיווך.</p>
                    <p class="text-sm">זה כולל: זיכרון דברים, נספחים לחוזה, או שינוי סעיפים בחוזה קיים.</p>
                </section>
            </div>
        `,
        questions: [{ q: "מה הדין לגבי מתווך שסייע ללקוח לנסח סעיף בזיכרון דברים?", options: ["מותר בחינם", "מותר אם הלקוח ביקש", "אסור מוחלט ושולל עמלה", "מותר בבלעדיות"], correct: 2, exp: "סעיף 12 אוסר על כל סיוע משפטי." }]
    },
    {
        id: 2,
        title: "פרק 3: בלעדיות - תנאים ותקופות (מורחב)",
        content: `
            <div class="space-y-6 text-right" dir="rtl">
                <section class="bg-blue-50 p-6 rounded-2xl border-r-8 border-blue-600 shadow-md">
                    <h2 class="text-2xl font-black text-blue-900 mb-4 border-b-2 border-blue-600 pb-2 italic">1. תנאי הבלעדיות (סעיף 9ב)</h2>
                    <p class="font-bold text-lg mb-2 text-slate-700">כדי שבלעדיות תהיה תקפה חובה שיתקיימו שני תנאים:</p>
                    <div class="space-y-4">
                        <div class="bg-white p-4 rounded-lg shadow-sm">
                            <p class="font-black text-blue-800 underline italic">א. מסמך נפרד:</p>
                            <p>אישור הבלעדיות חייב להיות על גבי <b>מסמך נפרד</b> מהזמנת התיווך הרגילה.</p>
                        </div>
                        <div class="bg-white p-4 rounded-lg shadow-sm">
                            <p class="font-black text-blue-800 underline italic">ב. פעולות שיווק:</p>
                            <p>המתווך חייב לבצע לפחות <b>2 פעולות שיווק</b> מתוך הרשימה בתקנות (שלט, עיתון, אינטרנט, דיוור לשכנים וכו').</p>
                        </div>
                    </div>
                </section>

                <section class="bg-amber-50 p-6 rounded-2xl border-r-8 border-amber-600 shadow-md">
                    <h2 class="text-2xl font-black text-amber-900 mb-4 border-b-2 border-amber-600 pb-2 italic">2. תקופות הבלעדיות - קריטי לבחינה!</h2>
                    <table class="w-full border-collapse border border-amber-300 bg-white text-center">
                        <tr class="bg-amber-200">
                            <th class="border p-2">סוג הנכס</th>
                            <th class="border p-2">תקופה מקסימלית</th>
                            <th class="border p-2">אם לא סוכם תאריך</th>
                        </tr>
                        <tr>
                            <td class="border p-2 font-bold">דירה למגורים</td>
                            <td class="border p-2 text-red-700 font-bold">6 חודשים</td>
                            <td class="border p-2 font-bold">30 יום</td>
                        </tr>
                        <tr>
                            <td class="border p-2 font-bold">נכס מסחרי / מגרש</td>
                            <td class="border p-2">ללא הגבלה (לפי הסכם)</td>
                            <td class="border p-2 font-bold">שנה אחת</td>
                        </tr>
                    </table>
                </section>

                <section class="p-5 bg-green-50 border-r-8 border-green-600 rounded-xl">
                    <h3 class="font-bold text-green-900 text-xl italic underline italic">3. חזקת הגורם היעיל (סעיף 14ב):</h3>
                    <p class="leading-relaxed font-medium">בבלעדיות, אם המתווך ביצע את פעולות השיווק הנדרשות, החוק <b>מניח</b> שהוא היה הגורם היעיל. זהו יתרון עצום, כי הנטל להוכיח שהמתווך <b>לא</b> היה יעיל עובר לכתפי הלקוח.</p>
                </section>
            </div>
        `,
        questions: [
            { q: "מתווך החתים על בלעדיות לדירה ל-8 חודשים. מה תוקף הבלעדיות?", options: ["8 חודשים", "6 חודשים", "מבוטלת לגמרי", "30 יום"], correct: 1, exp: "החוק מגביל בלעדיות למגורים למקסימום של 6 חודשים." }
        ]
    }
];
