export default interface DateTime {
    format(date: Date): String;
    isSameDay(dateLeft: Date, dateRight: Date): boolean;
    addDays(date: Date, amount: number): Date;
}
