"use client";

//
// Note: Mainly just re-writing code to practice writing a date picker
//

import { MONTHS } from "@/lib/constants";
import { getDaysInMonth, getFirstDayOfMonth } from "@/utils/date-utils";
import { useState } from "react";

const BookingDateFilter = () => {
    const [currentDate, setCurrentDate] = useState<Date>(new Date());

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

    console.log(currentDate);

    return (
        <div className="text-center space-y-12">
            <p>
                {" "}
                {MONTHS[currentDate.getMonth()]} {currentDate.getFullYear()}
            </p>
            <div className="flex items-center justify-center gap-4">
                <button
                    className="p-4 rounded-xl bg-primary text-white"
                    onClick={handlePreviousMonth}
                >
                    Prev
                </button>
                <button
                    className="p-4 rounded-xl bg-primary text-white"
                    onClick={handleNextMonth}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default BookingDateFilter;
