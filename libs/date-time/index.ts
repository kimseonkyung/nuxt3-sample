import type DateTime from "./DateTime.ts";
import Adapter from "./DateFnsAdapter.ts";

const instance: DateTime = new Adapter();

export function format(date: Date): String {
    return instance.format(date);
}
export function isSameDay(dateLeft: Date, dateRight: Date): boolean {
    return instance.isSameDay(dateLeft, dateRight);
}
export function addDays(date: Date, amount: number): Date {
    return instance.addDays(date, amount);
}
