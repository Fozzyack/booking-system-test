"use client";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import FilterSection from "@/components/FilterSection";
import SpacesAvailable from "@/components/SpacesAvailable";
import DateFilter from "@/components/DateFilter";

import { Room } from "@/lib/types";
import { API_BASE_URL, API_ENDPOINTS } from "@/lib/constants";
import { useEffect, useState } from "react";

export default function Home() {
    const [search, setSearch] = useState("");
    const [filters, setFilters] = useState<string[]>([]);
    const [rooms, setRooms] = useState<Room[]>([]);
    const [date, setDate] = useState<Date | undefined>(undefined);

    const handleTagToggle = (tag: string) => {
        setFilters((prev) =>
            prev.includes(tag) ? prev.filter((f) => f !== tag) : [...prev, tag],
        );
    };

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const res = await fetch(
                    `${API_BASE_URL}${API_ENDPOINTS.rooms}`,
                );
                if(!res.ok) {
                    throw new Error("Could not get rooms")
                }
                const data = await res.json();
                setRooms(data);
            } catch (error) {
                console.error("Error fetching rooms:", error);
            }
        };
        fetchRooms();
    }, []);

    return (
        <div className="bg-slate-100 min-h-screen">
            <Header />
            <div className="px-4 md:px-32 lg:px-64 py-10">
                <div className="space-y-2">
                    <h5 className="text-bloom-orbit text-xs uppercase font-bold">
                        Find Your Space
                    </h5>
                    <h1 className="text-primary text-4xl font-semibold">
                        Find Your Perfect Spot.
                    </h1>
                    <p className="text-sm">
                        Access premium workspaces, studios and event halls
                        across our areas. Instant booking, no contracts.
                    </p>
                    <div className="flex gap-4 items-center">
                        <SearchBar value={search} onChange={setSearch} />
                        <DateFilter date={date} setDate={setDate} />
                    </div>
                    <FilterSection
                        selectedTags={filters}
                        onTagToggle={handleTagToggle}
                    />
                    <SpacesAvailable
                        rooms={rooms}
                        selectedTags={filters}
                        searchTerm={search}
                    />
                </div>
            </div>
        </div>
    );
}
