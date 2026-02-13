const APP_DATA = [
    {
        id: 0,
        title: "פרק 1: רישוי, אגרות ומוסדות",
        content: `
            <div class="space-y-6 text-right">
                <section>
                    <h2 class="text-2xl font-black text-blue-800 mb-4 italic underline">פרק 1: רישוי ומוסדות</h2>
                    <p class="text-lg">חוק המתווכים (1996) מסדיר את המקצוע. העיסוק ללא רישיון הוא עבירה פלילית.</p>
                </section>

                <section class="bg-blue-50 p-5 rounded-xl border-r-4 border-blue-500 shadow-sm">
                    <h3 class="font-bold text-blue-900 mb-3 text-xl italic">1. תנאי סף לרישיון (סעיף 5):</h3>
                    <ul class="space-y-3 text-slate-700 font-semibold">
                        <li>✅ גיל 18 לפחות.</li>
                        <li>✅ אזרח/תושב ישראל או תושב חוץ עם היתר עבודה.</li>
                        <li>✅ לא פושט רגל (אלא אם קיבל הפטר).</li>
                        <li>✅ ללא הרשעה בעבירה שיש עמה קלון ב-5 השנים האחרונות.</li>
                        <li>✅ עמידה בבחינת רשם המתווכים.</li>
                    </ul>
                </section>

                <section>
                    <h3 class="font-bold text-lg text-slate-800 mb-2 underline italic">2. רשם המתווכים (סעיפים 2-3):</h3>
                    <p>ממונה ע"י שר המשפטים. תנאי סף: משפטן הכשיר להיות שופט שלום. תפקידיו: מתן רישיונות, ניהול פנקס המתווכים וגביית אגרות.</p>
                </section>

                <section class="bg-red-50 p-5 rounded-xl border-r-4 border-red-500 font-bold">
                    <h3 class="font-bold text-red-900 mb-2 underline text-right">3. אגרות והשעיה (סעיף 18):</h3>
                    <p>מועד תשלום: עד 31 במרץ. אי תשלום = השעיה אוטומטית. אין זכאות לדמי תיווך בזמן השעיה.</p>
                </section>
            </div>
        `,
        questions: [
            { q: "מיהו הגורם הממנה את רשם המתווכים?", options: ["הממשלה", "שר המשפטים", "הנשיא", "לשכת המתווכים"], correct: 1, exp: "סעיף 2 קובע ששר המשפטים ימנה את הרשם." },
            { q: "מהו התנאי לעבר פלילי?", options: ["אין הגבלה", "10 שנים", "5 שנים ללא קלון", "שנה ללא מאסר"], correct: 2, exp: "החוק דורש 5 שנים ללא עבירה שיש עמה קלון." }
        ]
    },
    {
        id: 1,
        title: "פרק 2: הזמנה בכתב ודמי תיווך",
        content: `
            <div class="space-y-6 text-right">
                <section>
                    <h2 class="text-2xl font-black text-blue-800 mb-4 italic underline text-right">פרק 2: דרישת הכתב וזכאות</h2>
                    <p class="text-lg font-bold text-red-600 underline">דרישה קוגנטית: אי אפשר לוותר על הזמנה בכתב!</p>
                </section>

                <section class="bg-amber-50 p-5 rounded-xl border-r-4 border-amber-500 shadow-sm">
                    <h3 class="font-bold text-amber-900 mb-3 text-xl italic underline text-right">1. 5 פרטי החובה (סעיף 9):</h3>
                    <ul class="space-y-2 text-slate-800 font-bold">
                        <li>1. שמות ות.ז של המתווך והלקוח.</li>
                        <li>2. סוג העסקה (מכירה/שכירות).</li>
                        <li>3. תיאור המקרקעין (כתובת/זיהוי).</li>
                        <li>4. מחיר העסקה בקירוב.</li>
                        <li>5. דמי התיווך המוסכמים (בשקלים או אחוזים).</li>
                    </ul>
                </section>

                <section class="bg-blue-50 p-5 rounded-xl border-r-4 border-blue-500">
                    <h3 class="font-bold text-blue-900 mb-3 text-xl italic underline text-right">2. תנאי זכאות (סעיף 14):</h3>
                    <ol class="list-decimal pr-6 space-y-3 font-bold">
                        <li>רישיון בתוקף במועד הפעולה.</li>
                        <li>הזמנה בכתב חתומה עם כל הפרטים.</li>
                        <li>המתווך היה ה'גורם היעיל' לסגירת העסקה.</li>
                    </ol>
                </section>
            </div>
        `,
        questions: [
            { q: "האם מתווך זכאי לעמלה ללא הזמנה בכתב?", options: ["כן", "לא", "רק אם הלקוח הסכים", "רק בדירה"], correct: 1, exp: "סעיף 9 קובע כי ללא הזמנה חתומה בכתב אין זכאות." },
            { q: "מהו 'הגורם היעיל'?", options: ["מי שהביא את המפתח", "מי שפרסם הכי הרבה", "מי שפעולתו הביאה להסכם מחייב", "המתווך הראשון"], correct: 2, exp: "סעיף 14 מחייב שהמתווך יהיה הגורם היעיל לביצוע העסקה." }
        ]
    }
];
