/* VERSION: 1.0.3.2
   CONTENT: Chapters 1 & 2 - Clean Structure
   LAST UPDATED: 2026-02-13
*/

const APP_DATA = [
    {
        id: 0,
        title: "פרק 1: רישוי, אגרות ומוסדות",
        content: `
            <div class="space-y-6 text-right" dir="rtl">
                <h2 class="text-2xl font-black text-blue-800 border-b-2 border-blue-600 pb-2">פרק 1: רישוי ומוסדות</h2>
                <div class="bg-blue-50 p-4 rounded-xl border-r-4 border-blue-600">
                    <h3 class="font-bold text-blue-900 mb-2 italic underline">תנאי סף לרישיון:</h3>
                    <p>1. גיל 18 ומעלה.</p>
                    <p>2. אזרח/תושב ישראל או תושב חוץ עם היתר עבודה.</p>
                    <p>3. היעדר עבר פלילי (5 שנים ללא קלון מסיום ריצוי העונש).</p>
                    <p>4. לא פושט רגל (אלא אם קיבל הפטר חלוט).</p>
                    <p>5. השכלה: 12 שנות לימוד.</p>
                    <p>6. מעבר בחינת הרשם (ציון 60).</p>
                </div>
                <div class="bg-red-50 p-4 rounded-xl border-r-4 border-red-600">
                    <h3 class="font-bold text-red-900 mb-2 italic underline text-right font-bold italic underline">אגרות והשעיה:</h3>
                    <p>תשלום אגרה שנתית עד ה-31 במרץ. אי תשלום גורר השעיה אוטומטית ב-1 באפריל ואובדן זכאות לדמי תיווך.</p>
                </div>
            </div>
        `,
        questions: [
            { 
                q: "מה קורה למתווך שלא שילם אגרה עד ה-31 במרץ?", 
                options: ["קנס כספי", "השעיה אוטומטית ב-1 באפריל", "ביטול הרישיון לצמיתות", "אזהרה בלבד"], 
                correct: 1, 
                exp: "לפי סעיף 18, אי תשלום בזמן גורר השעיה מיידית." 
            }
        ]
    },
    {
        id: 1,
        title: "פרק 2: הזמנה בכתב וזכאות",
        content: `
            <div class="space-y-6 text-right" dir="rtl">
                <h2 class="text-2xl font-black text-blue-800 border-b-2 border-blue-600 pb-2 italic">פרק 2: הזמנה בכתב</h2>
                <div class="bg-amber-50 p-4 rounded-xl border-r-4 border-amber-600">
                    <h3 class="font-bold text-amber-900 mb-2 italic underline italic">5 פרטי החובה בהזמנה:</h3>
                    <p>1. פרטי מתווך ולקוח (שם, כתובת, ת.ז).</p>
                    <p>2. סוג העסקה (מכירה/שכירות).</p>
                    <p>3. תיאור הנכס (כתובת ברורה).</p>
                    <p>4. מחיר העסקה בקירוב.</p>
                    <p>5. דמי התיווך המוסכמים.</p>
                </div>
                <div class="bg-slate-50 p-4 rounded-xl border-r-4 border-slate-600 shadow-sm">
                    <h3 class="font-bold text-slate-800 mb-2 italic underline italic">הגורם היעיל:</h3>
                    <p>מתווך זכאי לעמלה רק אם היה 'הגורם היעיל' שהביא לחתימת הסכם מחייב.</p>
                </div>
            </div>
        `,
        questions: [
            { 
                q: "האם מתווך זכאי לדמי תיווך ללא הזמנה חתומה בכתב?", 
                options: ["כן, אם הוא היה יעיל", "לא, דרישת הכתב היא חובה", "רק אם הלקוח הודה בעבודה", "רק בעסקאות מעל מיליון ש'ח"], 
                correct: 1, 
                exp: "סעיף 9 קובע שחובה להחתים על הזמנה בכתב כדי להיות זכאי לעמלה." 
            }
        ]
    }
];
