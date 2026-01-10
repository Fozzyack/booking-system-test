"use client";

import BookingDateFilter from "./BookingDateFilter";
import BookingTimeComponent from "./BookingTimeCard";
import { useState } from "react";

const BookingSection = () => {
    const [selectedTime, setSelectedTime] = useState<string>("");
    const [currentDate, setCurrentDate] = useState<Date>(new Date());
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    return (
        <div className="px-4 md:p-0 space-y-8 sticky left-0 top-24">
            <BookingDateFilter currentDate={currentDate} selectedDate={selectedDate} setCurrentDate={setCurrentDate} setSelectedDate={setSelectedDate}/>
            <BookingTimeComponent
                selectedTime={selectedTime}
                setSelectedTime={setSelectedTime}
                startTime_24hour={8}
                endTime_24hour={19}
            />
        </div>
    );
};

export default BookingSection;
