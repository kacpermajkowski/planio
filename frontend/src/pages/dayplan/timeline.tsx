import TimelineEvents from "./timeline-events";
import TimelineHourLines from "./timeline-hour-lines";
import TimelineHours from "./timeline-hours";
import type { DayplanProps } from "./types";

export default function Timeline(props: DayplanProps) {
    const hours = [];
    for (let i = 0; i <= 24; i++) {
        hours.push(i);
    }

    return (
        <div className="flex flex-row justify-evenly items-center w-full h-full">
            <TimelineHours hours={hours} />
            <div className="flex flex-col justify-between items-center w-full h-full relative">
                {/* TimelineEvents is overlayed over TimelineHourLines.
                    TimelineHourLines provides a background so that a user can more easily read the information.
                */}
                <TimelineHourLines hours={hours} />
                <TimelineEvents {...props} />
            </div>
        </div>
    );
}
