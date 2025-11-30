"use client";
import { useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, Calendar, X } from "lucide-react";
import { DateFilterProps } from "@/lib/types";

const DateFilter: React.FC<DateFilterProps> = ({ date, setDate }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const handleClear = () => {
        setDate(undefined);
        setIsModalOpen(false)
    }

    const getDaysInMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const handleDateSelect = (day: number) => {
        const selectedDate = new Date(
            currentMonth.getFullYear(),
            currentMonth.getMonth(),
            day,
        );
        setDate(selectedDate);
        setIsModalOpen(false);
    };

    const handlePrevMonth = () => {
        setCurrentMonth(
            new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1),
        );
    };

    const handleNextMonth = () => {
        setCurrentMonth(
            new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1),
        );
    };

    const renderCalendarDays = () => {
        const daysInMonth = getDaysInMonth(currentMonth);
        const firstDay = getFirstDayOfMonth(currentMonth);
        const days = [];

        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="p-2"></div>);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const isSelected =
                date &&
                date.getDate() === day &&
                date.getMonth() === currentMonth.getMonth() &&
                date.getFullYear() === currentMonth.getFullYear();

            const isToday =
                new Date().getDate() === day &&
                new Date().getMonth() === currentMonth.getMonth() &&
                new Date().getFullYear() === currentMonth.getFullYear();

            days.push(
                <button
                    key={day}
                    onClick={() => handleDateSelect(day)}
                    className={`p-2 rounded-lg hover:bg-gray-100 transition-colors ${
                        isSelected
                            ? "bg-primary text-white hover:bg-primary/80"
                            : ""
                    } ${isToday ? "border-2 border-bloom-primary" : ""}`}
                >
                    {day}
                </button>,
            );
        }

        return days;
    };

    const formatDate = (date: Date) => {
        return date.toLocaleDateString("en-US", {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };

    return (
        <>
            <div className="relative">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
                >
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">
                        {date ? formatDate(date) : "Select Date"}
                    </span>
                </button>
            </div>

            {isModalOpen &&
                createPortal(
                    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
                        <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4 shadow-xl">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold">
                                    Select Date
                                </h3>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                                >
                                    <X width={14} height={14} />
                                </button>
                            </div>

                            <div className="flex items-center justify-between mb-4">
                                <button
                                    onClick={handlePrevMonth}
                                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                </button>
                                <h4 className="text-md font-medium">
                                    {months[currentMonth.getMonth()]}{" "}
                                    {currentMonth.getFullYear()}
                                </h4>
                                <button
                                    onClick={handleNextMonth}
                                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                >
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="grid grid-cols-7 gap-1 mb-2">
                                {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(
                                    (day) => (
                                        <div
                                            key={day}
                                            className="text-center text-xs font-medium text-gray-500 p-2"
                                        >
                                            {day}
                                        </div>
                                    ),
                                )}
                            </div>

                            <div className="grid grid-cols-7 gap-1">
                                {renderCalendarDays()}
                            </div>

                            <div className="flex gap-2 mt-4">
                                <button
                                    onClick={handleClear}
                                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    Clear
                                </button>
                                <button
                                    onClick={() => {
                                        setDate(new Date());
                                        setIsModalOpen(false);
                                    }}
                                    className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors"
                                >
                                    Today
                                </button>
                            </div>
                        </div>
                    </div>,
                    document.body,
                )}
        </>
    );
};

export default DateFilter;
