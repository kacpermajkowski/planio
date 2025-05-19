export type DayplanProps  = {
    dayplanDay: Date,
    events: DayplanEventProps[]
}

export type DayplanEventProps = {
    title: string;
    desc: string;

    start: Date;
    end: Date;
};