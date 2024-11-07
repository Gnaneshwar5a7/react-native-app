export function calculateDueDate(fromDate: Date) {
  if (fromDate !== undefined) {
    const day = fromDate.getDate();
    const newDate = new Date(fromDate);
    newDate.setDate(day + 0);
    newDate.setHours(fromDate.getHours(), fromDate.getMinutes() + 1, 0, 0);
    return newDate;
  }
  return fromDate;
}
