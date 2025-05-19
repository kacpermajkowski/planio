export default function TimelineHourLines({ hours }: { hours: number[] }) {
    return (
        <div className="flex flex-col justify-between items-end w-full h-full absolute top-0 left-0 px-3">
            {hours.map((hour) => (
                <div
                    key={hour}
                    className="flex h-[0.5px] bg-gray-600 w-full  p-0"
                ></div>
            ))}
        </div>
    );
}
