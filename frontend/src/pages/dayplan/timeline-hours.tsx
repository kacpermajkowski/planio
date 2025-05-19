export default function TimelineHours({ hours }: { hours: number[] }) {
    return (
        <div className="flex flex-col justify-between items-end w-fit h-[calc(100%_+_1em)]">
            {hours.map((hour) => (
                <div key={hour} className="flex text-gray-600 text-sm">
                    {hour}
                </div>
            ))}
        </div>
    );
}
