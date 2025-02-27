export function getMonthDetails(date: string) {
  const eventDate = new Date(date);
  const month = eventDate.getMonth();
  const monthName = eventDate.toLocaleString("en-US", { month: "long" });
  return { month, monthName };
}
