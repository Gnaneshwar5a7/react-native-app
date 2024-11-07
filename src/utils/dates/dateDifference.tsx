export function dateDifference(startDate: Date, endDate: Date) {
  const date1 = startDate.valueOf();
  const date2 = endDate.valueOf();
  const diffTime = date2 - date1;
  // const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return diffTime;
}
