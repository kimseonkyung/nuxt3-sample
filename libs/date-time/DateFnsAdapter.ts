import {format, addDays, isSameDay} from "date-fns";
import type DateTime from "./DateTime";

export default class DateFnsAdapter implements DateTime {
    format(date: Date): String {
        return format(date, 'yyyy-MM-dd')
    }
    addDays(date: Date, amount: number): Date {
        return addDays(date, amount);
    }
    isSameDay(dateLeft: Date, dateRight: Date): boolean {
        return isSameDay(dateLeft, dateRight);
    }
}
