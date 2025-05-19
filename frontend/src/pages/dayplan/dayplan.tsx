import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Timeline from "./timeline";
import DayplanDatePicker from "./dayplan-day-picker";
import type { DayplanProps } from "./types";

export default function Dayplan(props: DayplanProps) {
    const { dayplanDay } = props;
    return (
        <Card className="w-120 h-480">
            <CardHeader>
                <CardTitle>Plan dnia</CardTitle>
                <CardDescription className="flex flex-row justify-center items-center m-4">
                    <DayplanDatePicker dayplanDay={dayplanDay} />
                </CardDescription>
            </CardHeader>
            <CardContent className="h-full">
                <Timeline {...props} />
            </CardContent>
            {/* <CardFooter className="flex justify-between">

            </CardFooter> */}
        </Card>
    );
}
