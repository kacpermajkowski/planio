import { fetchDayplanEvents } from "@/lib/backendApi";
import Dayplan from "./dayplan";

export default function DayplanPage() {
    const userSessionToken = "da5b8893-d6ca-5c1c-9a9c-91f40a2a3649";
    const dayplanDay = new Date();

    const events = fetchDayplanEvents(userSessionToken, dayplanDay);
    const props = {
        dayplanDay: dayplanDay,
        events: events,
    };

    return (
        <>
            <Dayplan {...props} />
        </>
    );
}
