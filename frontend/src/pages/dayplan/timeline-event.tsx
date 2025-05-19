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

function getEventTopOffset(dayplanDay: Date, props: DayplanEventProps) {
    const minOffset = 0;
    const maxOffset = 100;

    const startOfDayTime = getStartOfDay(dayplanDay).getTime();
    const eventStartTime = Math.max(props.start.getTime(), startOfDayTime);
    const minutesSinceStartOfDay = (eventStartTime - startOfDayTime) / 60000;

    let topPercent = (minutesSinceStartOfDay / 1440) * 100;
    topPercent = topPercent > maxOffset ? maxOffset : topPercent;
    topPercent = topPercent < minOffset ? minOffset : topPercent;

    return topPercent;
}

function getStartOfDay(date: Date) {
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    return startOfDay;
}

function getEndOfDay(date: Date) {
    const endOfDay = getStartOfDay(date);
    endOfDay.setDate(endOfDay.getDate() + 1);
    return endOfDay;
}

function getEventHeight(dayplanDate: Date, props: DayplanEventProps) {
    const startOfDay = getStartOfDay(dayplanDate);
    const endOfDay = getEndOfDay(dayplanDate);
    const visualStart = props.start < startOfDay ? startOfDay : props.start;
    const visualEnd = props.end > endOfDay ? endOfDay : props.end;
    const durationMinutes =
        (visualEnd.getTime() - visualStart.getTime()) / 60000;
    return (durationMinutes / 1440) * 100;
}

export type TimelineEventProps = {
    dayplanDay: Date;
    eventProps: DayplanEventProps;
};

export default function TimelineEvent(props: TimelineEventProps) {
    if (
        props.eventProps.start.getDate() > props.dayplanDay.getDate() ||
        props.eventProps.end.getDate() < props.dayplanDay.getDate()
    ) {
        throw new Error(
            "Event passed to the TimelineEvent component doesn't happend during the specified dayplanDay"
        );
    }

    const topPercent = getEventTopOffset(props.dayplanDay, props.eventProps);
    const heightPercent = getEventHeight(props.dayplanDay, props.eventProps);

    return (
        <div
            className="absolute flex flex-col justify-start items-start bg-green-500 text-gray-600 w-5/6 shadow-md rounded-md cursor-pointer"
            style={{ height: `${heightPercent}%`, top: `${topPercent}%` }}
        >
            <EventTitle title={props.eventProps.title} />
            <EventHours
                start={props.eventProps.start}
                end={props.eventProps.end}
            />
            <EventDescription desc={props.eventProps.desc} />
        </div>
    );
}
