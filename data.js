const APP_DATA = [
    {
        id: 0,
        title: "פרק 1: רישוי ואגרות",
        content: `
            <div class="space-y-6 text-right">
                <section>
                    <h2 class="text-2xl font-black text-blue-800 mb-4">רישוי ואגרות - המדריך המלא</h2>
                    <p class="text-lg font-medium">חוק המתווכים במקרקעין (1996) קובע את תנאי הסף לכניסה למקצוע ואת חובות הרישוי השנתיות.</p>
                </section>

                <section class="bg-blue-50 p-5 rounded-xl border-r-4 border-blue-500 shadow-sm">
                    <h3 class="font-bold text-blue-900 mb-3 text-xl">תנאי סף לקבלת רישיון (סעיף 5):</h3>
                    <ul class="space-y-3 text-slate-700">
                        <li class="flex items-center gap-2">✅ <b>גיל:</b> מלאו לו 18 שנים לפחות.</li>
                        <li class="flex items-center gap-2">✅ <b>אזרחות:</b> אזרח ישראל, תושב ישראל, או תושב חוץ עם היתר עבודה כדין.</li>
                        <li class="flex items-center gap-2">✅ <b>יושרה:</b> לא הוכרז כפושט רגל (אלא אם קיבל הפטר).</li>
                        <li class="flex items-center gap-2">✅ <b>עבר פלילי:</b> לא הורשע בעבירה שיש עמה קלון ב-5 השנים שקדמו לבקשה.</li>
                        <li class="flex items-center gap-2">✅ <b>בחינה:</b> עבר בהצלחה את בחינת רשם המתווכים.</li>
                    </ul>
                </section>

                <section class="border-b pb-4">
                    <h3 class="font-bold text-lg text-slate-800 mb-2 underline">אגרה שנתית (סעיף 18):</h3>
                    <p>המועד האחרון לתשלום האגרה השנתית הוא ה-<b>31 במרץ</b> של כל שנה.</p>
                    <div class="mt-3 bg-red-50 text-red-800 p-4 rounded-lg border-r-4 border-red-500">
                        <p class="font-bold text-sm underline mb-1">השלכות אי-תשלום:</p>
                        <p class="text-sm">אי תשלום במועד גורר <b>השעיה אוטומטית</b> של הרישיון. מתווך מושעה אינו רשאי לעסוק בתיווך ואינו זכאי לדמי תיווך עבור עסקאות שבוצעו בתקופה זו.</p>
                    </div>
                </section>

                <section>
                    <h3 class="font-bold text-lg text-slate-800 mb-2">תאגיד מתווכים (סעיף 13):</h3>
                    <p>חברה או שותפות רשאיות לעסוק בתיווך, אך ורק אם פעולת התיווך עצמה מבוצעת על ידי <b>אדם המחזיק ברישיון תיווך בתוקף</b>.</p>
                </section>
            </div>
        `,
        questions: [
            { q: "מהו התאריך האחרון לתשלום האגרה ללא השעיה?", options: ["1 בינואר", "31 במרץ", "31 בדצמבר", "15 באפריל"], correct: 1, exp: "סעיף 18 קובע מפורשות את ה-
