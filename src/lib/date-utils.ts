import { isBefore, startOfDay, addDays } from "date-fns";

/**
 * Returns the default selected date. 
 * If today's booking window is closed (e.g. after 6pm), returns tomorrow.
 */
export function getDefaultSelectedDate(now: Date, lastSlotTime: string): Date {
  const [hours, minutes] = lastSlotTime.split(":").map(Number);
  const lastSlotToday = new Date(now);
  lastSlotToday.setHours(hours, minutes, 0, 0);

  if (isBefore(lastSlotToday, now)) {
    return addDays(startOfDay(now), 1);
  }
  return startOfDay(now);
}

/**
 * Checks if a specific time slot is in the past relative to the current time.
 */
export function isSlotInPast(slotDate: Date, slotTime: string, now: Date, bufferMinutes: number = 30): boolean {
  const [hours, minutes] = slotTime.split(":").map(Number);
  const slotDateTime = new Date(slotDate);
  slotDateTime.setHours(hours, minutes, 0, 0);

  const bufferTime = new Date(now.getTime() + bufferMinutes * 60000);
  return isBefore(slotDateTime, bufferTime);
}
