"use client";

import React, { useState } from "react";
import { 
  format, 
  addMonths, 
  subMonths, 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  isSameMonth, 
  isSameDay, 
  addDays, 
  eachDayOfInterval,
  isBefore,
  startOfDay
} from "date-fns";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

import { getDefaultSelectedDate, isSlotInPast } from "@/lib/date-utils";

interface BookingCalendarProps {
  onSelect?: (date: Date, time: string) => void;
}

const TIME_SLOTS = [
  "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"
];

// Mock booked slots
const MOCK_BOOKED_SLOTS: Record<string, string[]> = {
  [format(new Date(), "yyyy-MM-dd")]: ["10:00", "14:00"],
  [format(addDays(new Date(), 1), "yyyy-MM-dd")]: ["09:00", "11:00", "15:00"],
  [format(addDays(new Date(), 2), "yyyy-MM-dd")]: ["13:00", "16:00", "17:00"],
};

export function BookingCalendar({ onSelect }: BookingCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  // Fix: Default to tomorrow if today is past booking hours
  React.useEffect(() => {
    setMounted(true);
    const lastSlot = TIME_SLOTS[TIME_SLOTS.length - 1];
    setSelectedDate(getDefaultSelectedDate(new Date(), lastSlot));
  }, []);

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const onDateClick = (day: Date) => {
    if (isBefore(day, startOfDay(new Date()))) return;
    setSelectedDate(day);
    setSelectedTime(null);
  };

  const renderHeader = () => {
    return (
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-primary" aria-live="polite">
          {format(currentMonth, "MMMM yyyy")}
        </h2>
        <div className="flex gap-2">
          <button
            onClick={prevMonth}
            aria-label="Previous Month"
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextMonth}
            aria-label="Next Month"
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return (
      <div className="grid grid-cols-7 mb-2" role="row">
        {days.map((day) => (
          <div key={day} className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest" role="columnheader">
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const calendarDays = eachDayOfInterval({
      start: startDate,
      end: endDate,
    });

    return (
      <div className="grid grid-cols-7 gap-1" role="grid">
        {calendarDays.map((day) => {
          const isSelected = isSameDay(day, selectedDate);
          const isCurrentMonth = isSameMonth(day, monthStart);
          
          let isPast = false;
          if (mounted) {
            isPast = isBefore(day, startOfDay(new Date()));
          }
          
          return (
            <button
              key={day.toString()}
              disabled={isPast}
              onClick={() => onDateClick(day)}
              aria-label={format(day, "MMMM d, yyyy")}
              aria-pressed={isSelected}
              aria-current={isSelected ? "date" : undefined}
              className={cn(
                "h-10 w-full flex items-center justify-center rounded-lg text-sm transition-all",
                !isCurrentMonth && "text-gray-300",
                isPast && "text-gray-200 cursor-not-allowed",
                isSelected && "bg-accent text-white font-bold shadow-lg shadow-accent/20",
                !isSelected && isCurrentMonth && !isPast && "hover:bg-gray-100 text-gray-700"
              )}
            >
              <span aria-hidden="true">{format(day, "d")}</span>
            </button>
          );
        })}
      </div>
    );
  };

  const renderTimeSlots = () => {
    const dateKey = format(selectedDate, "yyyy-MM-dd");
    const bookedSlots = MOCK_BOOKED_SLOTS[dateKey] || [];

    return (
      <div className="mt-8 border-t border-gray-100 pt-8">
        <div className="flex items-center gap-2 mb-4 text-primary font-bold">
          <Clock size={18} aria-hidden="true" />
          <span id="time-slots-label">Available Times for {format(selectedDate, "MMM d")}</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2" role="listbox" aria-labelledby="time-slots-label">
          {TIME_SLOTS.map((time) => {
            // Avoid hydration mismatch by only checking past slots on client
            let isPast = false;
            if (mounted) {
              isPast = isSlotInPast(selectedDate, time, new Date());
            }
            
            const isBooked = bookedSlots.includes(time) || isPast;
            const isSelected = selectedTime === time;

            return (
              <button
                key={time}
                role="option"
                aria-selected={isSelected}
                disabled={isBooked}
                onClick={() => {
                  setSelectedTime(time);
                  onSelect?.(selectedDate, time);
                }}
                className={cn(
                  "py-2 px-3 rounded-lg text-sm font-medium transition-all border",
                  isBooked && "bg-gray-50 border-gray-100 text-gray-300 cursor-not-allowed",
                  !isBooked && !isSelected && "border-gray-200 text-gray-600 hover:border-accent hover:text-accent",
                  isSelected && "bg-accent border-accent text-white shadow-md shadow-accent/20"
                )}
              >
                {time}
                {isBooked && (
                  <span className="block text-[10px] opacity-60">
                    {isPast ? "Unavailable" : "Booked"}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xl">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
      {renderTimeSlots()}
    </div>
  );
}
