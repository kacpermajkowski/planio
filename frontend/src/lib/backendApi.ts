export function fetchDayplanEvents(userSessionToken: string, dayplanDay: Date) {
    // const apiUrl = `http://localhost:5173/api/ai`;
    
    // const response = await fetch(apiUrl, {
    //     method: 'POST',
    //     headers: {
    //         'Session': userSessionToken,
    //     },
    // });
    // if (!response.ok) {
    //     throw new Error('Failed to fetch dayplan events');
    // }

    const data = [
        {
            "Completed": false,
            "Description": "Regeneracyjny sen. Zapewnia energię na cały dzień.",
            "EndDate": "07-11-2024-06:00:00",
            "EstimatedMinutes": 420,
            "Priority": 5,
            "StartDate": "06-11-2024-23:00:00",
            "StartHour": 23,
            "Title": "Sen",
            "Type": "Mental Health"
        },
        {
            "Completed": false,
            "Description": "Zapisywanie myśli i planów na dzień.",
            "EndDate": "07-11-2024-06:40:00",
            "EstimatedMinutes": 30,
            "Priority": 3,
            "StartDate": "07-11-2024-06:10:00",
            "StartHour": 6,
            "Title": "Poranny dziennik",
            "Type": "Personal Development"
        },
        {
            "Completed": false,
            "Description": "Codzienna dawka wiedzy językowej.",
            "EndDate": "07-11-2024-07:30:00",
            "EstimatedMinutes": 40,
            "Priority": 3,
            "StartDate": "07-11-2024-06:50:00",
            "StartHour": 6,
            "Title": "Nauka języka",
            "Type": "Education"
        },
        {
            "Completed": false,
            "Description": "Chwila relaksu przed pracą.",
            "EndDate": "07-11-2024-08:10:00",
            "EstimatedMinutes": 30,
            "Priority": 3,
            "StartDate": "07-11-2024-07:40:00",
            "StartHour": 7,
            "Title": "Relax Time",
            "Type": "Leisure"
        },
        {
            "Completed": false,
            "Description": "Przygotowanie posiłku do pracy.",
            "EndDate": "07-11-2024-09:05:00",
            "EstimatedMinutes": 45,
            "Priority": 3,
            "StartDate": "07-11-2024-08:20:00",
            "StartHour": 8,
            "Title": "Obiad",
            "Type": "Chores"
        },
        {
            "Completed": false,
            "Description": "Chwila odpoczynku przed pracą.",
            "EndDate": "07-11-2024-09:45:00",
            "EstimatedMinutes": 30,
            "Priority": 3,
            "StartDate": "07-11-2024-09:15:00",
            "StartHour": 9,
            "Title": "Odpoczynek",
            "Type": "Leisure"
        },
        {
            "Completed": false,
            "Description": "Dotarcie do miejsca pracy",
            "EndDate": "07-11-2024-10:40:00",
            "EstimatedMinutes": 45,
            "Priority": 3,
            "StartDate": "07-11-2024-09:55:00",
            "StartHour": 9,
            "Title": "Podróż do pracy",
            "Type": "Travel"
        },
        {
            "Completed": false,
            "Description": "Obowiązki zawodowe.",
            "EndDate": "07-11-2024-19:00:00",
            "EstimatedMinutes": 480,
            "Priority": 5,
            "StartDate": "07-11-2024-11:00:00",
            "StartHour": 11,
            "Title": "Zmiana w pracy",
            "Type": "Work"
        },
        {
            "Completed": false,
            "Description": "Czas na relacje z bliskimi.",
            "EndDate": "07-11-2024-20:10:00",
            "EstimatedMinutes": 60,
            "Priority": 3,
            "StartDate": "07-11-2024-19:10:00",
            "StartHour": 19,
            "Title": "Spotkanie z przyjaciółmi",
            "Type": "Social"
        },
        {
            "Completed": false,
            "Description": "Wyjście na spektakl teatralny.",
            "EndDate": "07-11-2024-23:10:00",
            "EstimatedMinutes": 170,
            "Priority": 3,
            "StartDate": "07-11-2024-20:20:00",
            "StartHour": 20,
            "Title": "Wizyta w teatrze",
            "Type": "Hobby"
        }
    ]
    return data.map((item: any) => ({
        title: item.Title,
        desc: item.Description,
        start: parseDayplanDate(item.StartDate),
        end: parseDayplanDate(item.EndDate),
    }));
}

function parseDayplanDate(dateStr: string): Date {
    // Expects format: "24-04-2024-09:00:00"
    const [day, month, year, hour, minute, second] = dateStr.split(/[-:]/);
    return new Date(
        Number(year),
        Number(month) - 1,
        Number(day),
        Number(hour),
        Number(minute),
        Number(second)
    );
}