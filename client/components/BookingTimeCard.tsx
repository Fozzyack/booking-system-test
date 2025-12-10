"use client";

interface BookingTimeComponentType {
    startTime_24hour: number;
    endTime_24hour: number;
    selectedTime: string;
    setSelectedTime: (value: string) => void;
}

const BookingTimeComponent: React.FC<BookingTimeComponentType> = ({
    selectedTime,
    setSelectedTime,
    startTime_24hour,
    endTime_24hour,
}) => {
    const timeConstruction = () => {
        // Note: this needs to take in a start_time and end_time (when it is available)
        const times = [];
        // This should run between start_time and end_time
        // Starting hour * 2 and ending hour * 2
        for (let i = startTime_24hour * 2; i < endTime_24hour * 2; i++) {
            const hour = Math.floor(i / 2).toString();
            const minutes = i % 2 === 0 ? ":00" : ":30";
            const total_time = hour + minutes;

            times.push(
                <button
                    key={i}
                    onClick={() => setSelectedTime(total_time)}
                    className={`py-1 px-1 text-sm rounded-lg border border-slate-200 hover:-translate-y-0.5 transition-all duration-150 ease-in-out  ${selectedTime === total_time ? "bg-primary text-white hover:bg-primary/80" : "bg-white hover:bg-slate-100"} transition-all ease-in-out duration-300`}
                >
                    {total_time}
                </button>,
            );
        }
        return times;
    };
    return (
        <div className="w-full bg-white rounded-xl border-slate-200 shadow-xl p-8 space-y-4">
            <h5 className="text-lg font-bold">Select a Time</h5>
            <div className="grid grid-cols-4 gap-1">{timeConstruction()}</div>
            <button onClick={() => setSelectedTime("")} className="flex-1 w-full px-4 py-2 border border-primary rounded-lg hover:bg-gray-50 hover:-translate-y-1 transition-all ease-in-out">
                Clear
            </button>
        </div>
    );
};

export default BookingTimeComponent;
