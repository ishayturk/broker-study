// data.js
const APP_DATA = [
    {
        id: 0,
        title: "1. רישוי ואגרות",
        content: `
            <h2 class="text-2xl font-bold text-blue-800 mb-4">פרק 1: רישוי ואגרות</h2>
            <p class="mb-4">חוק המתווכים קובע שמי שעוסק בתיווך ללא רישיון עובר עבירה פלילית.</p>
            <h3 class="font-bold text-lg mb-2 underline">תנאי סף:</h3>
            <ul class="list-disc pr-6 mb-4">
                <li>בגיר (18+)</li>
                <li>אזרח/תושב ישראל</li>
                <li>ללא הרשעה עם קלון ב-5 שנים האחרונות</li>
            </ul>
        `,
        questions: [
            { 
                q: "מתי חל המועד האחרון לתשלום האגרה?", 
                options: ["31.12", "31.03", "01.01", "15.04"], 
                correct: 1, 
                exp: "סעיף 18 קובע שהמועד הוא ה-31 במרץ." 
            }
        ]
    }
];
