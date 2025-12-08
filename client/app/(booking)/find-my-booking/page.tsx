"use client";
import { useState, useRef } from "react";
import { Search } from "lucide-react";

const FindMyBookingPage = () => {
    const [email, setEmail] = useState("");
    const emailRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Backend integration will go here
        console.log("Searching for booking with email:", email);
    };

    return (
        <div className="flex-1 flex flex-col items-center justify-center">
            <div className="w-full max-w-md space-y-6">
                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold">Find My Booking</h1>
                    <p className="text-sm text-gray-600">
                        Enter your email address to search for your booking
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label
                            htmlFor="email"
                            className="pl-2 text-sm font-bold"
                        >
                            Email Address
                        </label>
                        <div
                            onClick={() => emailRef.current?.focus()}
                            className="bg-white mt-2 gap-2 flex items-center rounded-xl px-4 py-2 cursor-text border border-slate-300 focus-within:shadow-xl focus-within:scale-105 focus-within:-translate-y-1/12 transition-all ease-in-out duration-300"
                        >
                            <Search className="text-slate-500" />
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                ref={emailRef}
                                placeholder="your.email@example.com"
                                required
                                className="bg-white outline-none w-full py-1"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full px-4 py-2 rounded-xl bg-primary text-primary-foreground hover:-translate-y-1/12 transition-all duration-300"
                    >
                        Search Booking
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FindMyBookingPage;
