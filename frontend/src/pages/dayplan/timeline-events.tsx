import TimelineEvent from "./timeline-event";
import type { DayplanProps } from "./types";

export default function TimelineEvents(props: DayplanProps) {
    return (
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center">
            {props.events.map((eventProps) => (
                <TimelineEvent
                    dayplanDay={props.dayplanDay}
                    eventProps={eventProps}
                />
            ))}
        </div>
    );
}
