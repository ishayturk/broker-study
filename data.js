const APP_DATA = [
    {
        id: 0,
        title: "פרק 1: רישוי ואגרות",
        content: `
            <div class="space-y-6 text-right">
                <section>
                    <h2 class="text-2xl font-black text-blue-800 mb-4">רישוי ואגרות - המדריך המלא</h2>
                    <p class="text-lg">חוק המתווכים במקרקעין (1996) קובע את תנאי הסף לכניסה למקצוע ואת חובות הרישוי.</p>
                </section>
                <section class="bg-blue-50 p-5 rounded-xl border-r-4 border-blue-500 shadow-sm">
                    <h3 class="font-bold text-blue-900 mb-3 text-xl text-right">תנאי סף לקבלת רישיון (סעיף 5):</h3>
                    <ul class="space-y-3 text-slate-700">
                        <li>✅ <b>גיל:</b> 18 ומעלה.</li>
                        <li>✅ <b>אזרחות:</b> אזרח/תושב ישראל או תושב חוץ עם היתר עבודה.</li>
                        <li>✅ <b>יושרה:</b> לא פושט רגל (אלא אם קיבל הפטר).</li>
                        <li>✅ <b>עבר פלילי:</b> ללא עבירה עם קלון ב-5 השנים האחרונות.</li>
                        <li>✅ <b>בחינה:</b> מעבר בחינת הרשם.</li>
                    </ul>
                </section>
                <section class="border-b pb-4">
                    <h3 class="font-bold text-lg text-slate-800 mb-2 underline">אגרה שנתית (סעיף 18):</h3>
                    <p>המועד האחרון לתשלום: <b>31 במרץ</b>. אי תשלום גורר השעיה אוטומטית ואי-זכאות לדמי תיווך.</p>
                </section>
            </div>
        `,
        questions: [
            { q: "מהו התאריך האחרון לתשלום האגרה?", options: ["1 בינואר", "31 במרץ", "31 בדצמבר", "15 באפריל"], correct: 1, exp: "סעיף 18 קובע שהמועד הוא 31 במרץ." },
            { q: "מהו הגיל המינימלי לקבלת רישיון?", options: ["16", "21", "18", "17"], correct: 2, exp: "סעיף 5(א)(1) קובע גיל 18 לפחות." }
        ]
    },
    {
        id: 1,
        title: "פרק 2: הזמנה בכתב וזכאות",
        content: `
            <div class="space-y-6 text-right">
                <section>
                    <h2 class="text-2xl font-black text-blue-800 mb-4 text-right">דרישת הכתב וזכאות</h2>
                    <p class="text-lg">ללא הזמנה חתומה בכתב, המתווך מאבד את זכאותו לעמלה.</p>
                </section>
                <section class="bg-amber-50 p-5 rounded-xl border-r-4 border-amber-500">
                    <h3 class="font-bold text-amber-900 mb-3 text-xl">פרטי חובה בהזמנה (סעיף 9):</h3>
                    <ul class="space-y-2 text-slate-800">
                        <li>📍 שמות ומספרי תעודת זהות של המתווך והלקוח.</li>
                        <li>📍 סוג העסקה (מכירה/שכירות).</li>
                        <li>📍 תיאור הנכס בדרך שמאפשרת זיהוי.</li>
                        <li>📍 מחיר העסקה בקירוב.</li>
                        <li>📍 דמי התיווך המוסכמים (בשקלים או באחוזים).</li>
                    </ul>
                </section>
            </div>
        `,
        questions: [
            { q: "האם מתווך זכאי לדמי תיווך ללא הזמנה בכתב?", options: ["כן", "לא", "רק אם הלקוח הסכים", "רק בדירת מגורים"], correct: 1, exp: "דרישת הכתב בסעיף 9 היא תנאי סף לזכאות." }
        ]
    }
];
