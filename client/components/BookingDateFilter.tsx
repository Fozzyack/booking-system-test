"use client";

//
// Note: Mainly just re-writing code to practice writing a date picker
//

import { MONTHS } from "@/lib/constants";
import { getDaysInMonth, getFirstDayOfMonth } from "@/utils/date-utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const BookingDateFilter = () => {
    const [currentDate, setCurrentDate] = useState<Date>(new Date());
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const handlePreviousMonth = () => {
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() - 1),
        );
    };
    const handleNextMonth = () => {
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() + 1),
        );
    };

    const handleSelectDate = (day: number) => {
        setSelectedDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth(), day),
        );
    };

    const renderCalendarDays = () => {
        const daysInMonth = getDaysInMonth(currentDate);
        const firstDay = getFirstDayOfMonth(currentDate);
        const days = [];

        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="p-2" />);
        }
        for (let day = 1; day <= daysInMonth; day++) {
            const isSelected =
                selectedDate &&
                selectedDate.getDate() == day &&
                selectedDate.getMonth() == currentDate.getMonth() &&
                selectedDate.getFullYear() == currentDate.getFullYear();

            const isToday =
                new Date().getDate() == day &&
                new Date().getMonth() == currentDate.getMonth() &&
                new Date().getFullYear() == currentDate.getFullYear();

            days.push(
                <button
                    key={`day-button-${day}`}
                    onClick={() => handleSelectDate(day)}
                    className={`p-2 border rounded-lg ${isToday ? "border-primary" : "border-white"} ${isSelected ? "bg-primary text-primary-foreground hover:bg-primary/80" : "hover:bg-slate-100"} transition-all duration-150 `}
                >
                    {day}
                </button>,
            );
        }
        return days;
    };

    return (
        <div className="sticky left-0 top-30 space-y-12">
            <div className="p-8 rounded-xl bg-white inline-block shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all ease-in-out duration-150">
                {/* Might have to change w-xs in the future*/}
                <div className="flex items-center justify-between gap-4 min-w-[300px]">
                    <button
                        className="p-2 rounded-full hover:bg-primary hover:text-white hover:-translate-y-0.5 transition-all ease-in-out duration-300 shrink-0"
                        onClick={handlePreviousMonth}
                    >
                        <ChevronLeft />
                    </button>
                    <div className="px-4 py-2 bg-primary text-white rounded-xl">
                        <p className="whitespace-nowrap">
                            {MONTHS[currentDate.getMonth()]}{" "}
                            {currentDate.getFullYear()}
                        </p>
                    </div>
                    <button
                        className="p-2 rounded-full hover:bg-primary hover:text-white translate-y-0.5 transition-all ease-in-out duration-300 shrink-0"
                        onClick={handleNextMonth}
                    >
                        <ChevronRight />
                    </button>
                </div>
                <div className="space-y-4 mt-4">
                    <div className="grid grid-cols-7 gap-2">
                        {["Su", "Mo", "Tu", "We", "Thu", "Fri", "Sat"].map(
                            (day, index) => (
                                <span key={index}>{day}</span>
                            ),
                        )}
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                        {renderCalendarDays()}
                    </div>
                </div>
                <div className="flex items-center justify-end gap-2 mt-4">
                    <button
                        onClick={() => setSelectedDate(null)}
                        className="bg-white border border-primary px-4 py-2 w-full rounded-xl text-center hover:bg-slate-100 transition-all hover:-translate-y-1 cursor-pointer duration-150"
                    >
                        {" "}
                        Clear
                    </button>
                    <button className="bg-primary text-white border border-black px-4 py-2 w-full rounded-xl text-center hover:-translate-y-1 transition-all duration-150 ease-in-out">
                        {" "}
                        Select
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookingDateFilter;
