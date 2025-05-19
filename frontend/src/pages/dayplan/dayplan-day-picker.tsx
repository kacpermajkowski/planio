import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

function DayDisplay({ dayplanDay }: { dayplanDay: Date }) {
    const weekday = dayplanDay.toLocaleDateString("pl-PL", { weekday: "long" });
    const dateString = dayplanDay.toLocaleDateString("pl-PL", {});
    return (
        <div className="flex justify-center items-center text-center">
            {weekday} - {dateString}
        </div>
    );
}

export default function DayplanDatePicker({
    dayplanDay,
}: {
    dayplanDay: Date;
}) {
    return (
        <>
            <Button variant="outline" size="icon">
                <ChevronLeft />
            </Button>
            <div className="px-4">
                <DayDisplay dayplanDay={dayplanDay} />
            </div>
            <Button variant="outline" size="icon">
                <ChevronRight />
            </Button>
        </>
    );
}
