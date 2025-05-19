import type { DayplanEventProps } from "./types";

function EventTitle({ title }: { title: string }) {
    return <div className="flex">{title}</div>;
}

function EventHours({ start, end }: { start: Date; end: Date }) {
    return (
        <div className="flex">
            {start.toLocaleTimeString("pl-PL")} -{" "}
            {end.toLocaleTimeString("pl-PL")}
        </div>
    );
}

function EventDescription({ desc }: { desc: string }) {
    return <div className="flex">{desc}</div>;
}

export default function TimelineEvent(props: DayplanEventProps) {
    const durationMinutes =
        (props.end.getTime() - props.start.getTime()) / 60000;
    const heightPercent = (durationMinutes / 1440) * 100;

    const startOfDay = new Date(props.start);
    startOfDay.setHours(0, 0, 0, 0);
    const minutesSinceStartOfDay =
        (props.start.getTime() - startOfDay.getTime()) / 60000;
    const topPercent = (minutesSinceStartOfDay / 1440) * 100;
    return (
        <div
            className="absolute flex flex-col justify-start items-start bg-green-500 text-gray-600 w-5/6 shadow-md rounded-md cursor-pointer"
            style={{ height: `${heightPercent}%`, top: `${topPercent}%` }}
        >
            <EventTitle title={props.title} />
            <EventHours start={props.start} end={props.end} />
            <EventDescription desc={props.desc} />
        </div>
    );
}
