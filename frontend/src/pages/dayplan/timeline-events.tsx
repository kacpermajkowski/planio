import TimelineEvent from "./timeline-event";
import type { DayplanEventProps } from "./types";

export default function TimelineEvents({
    events,
}: {
    events: DayplanEventProps[];
}) {
    return (
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center">
            {events.map((props) => (
                <TimelineEvent {...props} />
            ))}
        </div>
    );
}
