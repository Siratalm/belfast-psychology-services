import { getDefaultSelectedDate, isSlotInPast } from "./date-utils";

describe("date-utils", () => {
  const mockNow = new Date("2026-04-26T12:00:00");

  describe("getDefaultSelectedDate", () => {
    it("returns today if the last slot is still in the future", () => {
      const result = getDefaultSelectedDate(mockNow, "18:00");
      expect(result.getDate()).toBe(26);
    });

    it("returns tomorrow if the last slot is in the past", () => {
      const lateNow = new Date("2026-04-26T19:00:00");
      const result = getDefaultSelectedDate(lateNow, "18:00");
      expect(result.getDate()).toBe(27);
    });
  });

  describe("isSlotInPast", () => {
    it("returns true for a slot that has already passed", () => {
      const slotDate = new Date("2026-04-26");
      const result = isSlotInPast(slotDate, "09:00", mockNow);
      expect(result).toBe(true);
    });

    it("returns false for a future slot", () => {
      const slotDate = new Date("2026-04-26");
      const result = isSlotInPast(slotDate, "15:00", mockNow);
      expect(result).toBe(false);
    });

    it("returns true for a slot within the 30-minute buffer", () => {
      const slotDate = new Date("2026-04-26");
      const result = isSlotInPast(slotDate, "12:15", mockNow, 30);
      expect(result).toBe(true);
    });
  });
});
