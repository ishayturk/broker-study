/* VERSION: 1.0.3.6
   CONTENT: Chapter 1 - HYPER-DETAILED
   LAST UPDATED: 2026-02-13
*/

const APP_DATA = [
    {
        id: 0,
        title: "פרק 1: חוק המתווכים - רישוי ומוסדות (המדריך המלא)",
        content: `
            <div class="space-y-8 text-right" dir="rtl">
                <section class="bg-slate-50 p-6 rounded-2xl border-r-8 border-slate-800 shadow-sm">
                    <h2 class="text-2xl font-black text-slate-900 mb-4 border-b-2 border-slate-800 pb-2 italic">1. מבוא ומהות החוק</h2>
                    <p class="text-lg leading-relaxed text-slate-700 font-medium">
                        חוק המתווכים במקרקעין (התשנ"ו-1996) הוא חוק <b>צרכני-קוגנטי</b>. זה אומר שמטרתו להגן על הצרכן מפני המתווך (שנחשב לצד החזק). 
                        <br><br>
                        <span class="text-red-700 font-bold underline">כלל הברזל:</span> לאדם אסור לעסוק בתיווך מקרקעין (גם לא כ"עוזר" או "יועץ") ללא רישיון תקף. מי שעושה זאת עובר עבירה פלילית.
                    </p>
                </section>

                <section class="bg-blue-50 p-6 rounded-2xl border-r-8 border-blue-700 shadow-md">
                    <h2 class="text-2xl font-black text-blue-900 mb-4 border-b-2 border-blue-700 pb-2 italic text-right italic font-bold">2. ניתוח תנאי סף (סעיף 5)</h2>
                    
                    <div class="space-y-6">
                        <div class="bg-white p-4 rounded-lg shadow-sm">
                            <h3 class="font-black text-blue-800 mb-2 underline italic text-right italic font-bold">א. כשירות פלילית (הסעיף הכי נשאל)</h3>
                            <p class="text-slate-800 leading-relaxed">
                                המועמד לא הורשע בעבירה שיש עמה <b>קלון</b> ב-5 השנים שקדמו לבקשה. 
                                <br><br>
                                <b>מהו קלון?</b> פגם מוסרי (מרמה, גניבה, הונאה). 
                                <br><b>סוגיית המאסר:</b> אם אדם נשפט ל-10 שנות מאסר והשתחרר היום, הוא יוכל לקבל רישיון רק בעוד 5 שנים מהיום. 5 השנים נספרות <b>מרגע היציאה לחופשי</b> (סיום ריצוי העונש בפועל).
                            </p>
                        </div>

                        <div class="bg-white p-4 rounded-lg shadow-sm">
                            <h3 class="font-black text-blue-800 mb-2 underline italic text-right italic font-bold">ב. פשיטת רגל והפטר</h3>
                            <p class="text-slate-800 leading-relaxed">
                                פושט רגל אינו יכול לקבל רישיון. החוק דורש יציבות כלכלית. 
                                <br><b>החריג:</b> אם ניתן לו "צו הפטר חלוט", המשמעות היא שבית המשפט מחק את חובותיו והוא נקי לצאת לדרך חדשה - רק אז יוכל לבקש רישיון.
                            </p>
                        </div>

                        <div class="bg-white p-4 rounded-lg shadow-sm">
                            <h3 class="font-black text-blue-800 mb-2 underline italic text-right italic font-bold">ג. תושבות זרה</h3>
                            <p class="text-slate-800 leading-relaxed">
                                האם תושב ארה"ב יכול להיות מתווך בישראל? <b>כן.</b> 
                                בתנאי שיש לו היתר עבודה חוקי בישראל לפי חוק הכניסה לישראל. הוא לא חייב להיות אזרח, אך הוא חייב להיות תושב חוקי עם אישור עבודה.
                            </p>
                        </div>
                    </div>
                </section>

                <section class="bg-red-50 p-6 rounded-2xl border-r-8 border-red-700 shadow-md">
                    <h2 class="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-700 pb-2 italic text-right italic font-bold">3. דיני אגרות (סעיף 18)</h2>
                    <p class="text-lg font-bold mb-3">החוק קובע לוח זמנים קשיח:</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="border-2 border-red-200 p-4 rounded-xl bg-white">
                            <p class="text-red-800 font-black italic underline italic">עד ה-31 במרץ:</p>
                            <p>ניתן לשלם את האגרה השנתית המופחתת/הרגילה ללא קנסות.</p>
                        </div>
                        <div class="border-2 border-red-600 p-4 rounded-xl bg-red-100">
                            <p class="text-red-900 font-black italic underline italic">ב-1 באפריל:</p>
                            <p>המתווך הופך ל<b>מושעה אוטומטית</b>. אין צורך בשימוע או במכתב התראה.</p>
                        </div>
                    </div>
                    <div class="mt-6 p-4 bg-white rounded-lg border-2 border-red-800">
                        <h4 class="font-black text-red-900 mb-1 italic underline italic text-right italic font-bold">פסיקה קריטית: "פס"ד מאיר נ' קנラー"</h4>
                        <p class="text-slate-800 italic underline italic">
                            ביהמ"ש העליון קבע: מתווך שביצע פעולה בזמן שהיה מושעה (אפילו ב-2 באפריל), <b>לא זכאי לדמי תיווך</b>. הלקוח יכול לסרב לשלם לו וביהמ"ש יגבה את הלקוח. מטרת ההשעיה היא להרתיע מתווכים מאי-תשלום.
                        </p>
                    </div>
                </section>

                <section class="bg-amber-50 p-6 rounded-2xl border-r-8 border-amber-600 shadow-md">
                    <h2 class="text-2xl font-black text-amber-900 mb-4 border-b-2 border-amber-600 pb-2 italic text-right italic font-bold">4. המבנה הארגוני</h2>
                    <ul class="space-y-4 text-slate-800 font-bold">
                        <li>🏢 <b>רשם המתווכים:</b> משפטן הכשיר להיות שופט שלום. ממונה ע"י שר המשפטים. סמכותו: הנפקת רישיונות, ניהול הפנקס, וגביית אגרות.</li>
                        <li>⚖️ <b>ועדת המשמעת:</b> הרכב של שלושה: יו"ר (משפטן הכשיר להיות שופט שלום), מתווך בעל ותק של 5 שנים לפחות, ונציג ציבור.</li>
                        <li>🚨 <b>עונשין:</b> עיסוק ללא רישיון הוא עבירה פלילית שעונשה עד שנת מאסר או קנס כבד.</li>
                    </ul>
                </section>
            </div>
        `,
        questions: [
            { 
                q: "מתווך לא שילם את האגרה בזמן. ב-5 באפריל הוא החתים לקוח על הזמנה, וב-6 באפריל הוא שילם את האגרה. ב-10 באפריל נחתמה עסקה. האם הוא זכאי לדמי תיווך?", 
                options: ["כן, כי ביום סגירת העסקה היה לו רישיון", "לא, כי ביום החתימה על ההזמנה הוא היה מושעה", "כן, כי הוא שילם את האגרה באותה שנה", "רק אם הלקוח מסכים לשלם לו"], 
                correct: 1, 
                exp: "הזכות לדמי תיווך נולדת ברגע החתימה על ההזמנה וביצוע פעולות התיווך. אם באותו רגע הוא היה מושעה - הזכות לא קיימת." 
            }
        ]
    }
];
