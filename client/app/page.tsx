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
    const [tags, setTags] = useState<string[]>([]);

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
                if (!res.ok) {
                    throw new Error("Could not get rooms");
                }
                const data = await res.json();
                setRooms(data);
            } catch (error) {
                console.error("Error fetching rooms:", error);
            }
        };
        const fetchTags = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.tags}`);
                if (!res.ok) {
                    throw new Error("Could not get tags");
                }
                const data = await res.json();
                const tag_list: string[] = [];
                for (let i = 0; i < data.length; i++) {
                    if (!tag_list.includes(data[i].tag))
                        tag_list.push(data[i].tag);
                }
                setTags(tag_list);
            } catch (error) {
                console.error("Error fetching tags:", error);
            }
        };
        fetchRooms();
        fetchTags();
    }, []);

    return (
        <div className="min-h-screen">
            <div>
                <div className="space-y-2">
                    <h5 className="text-bloom-orbit text-xs uppercase font-bold">
                        Find Your Space
                    </h5>
                    <h1 className="">Find Your Perfect Spot.</h1>
                    <p className="text-sm">
                        Access premium workspaces, studios and event halls
                        across our areas. Instant booking, no contracts.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-between">
                        <SearchBar value={search} onChange={setSearch} />
                        <DateFilter date={date} setDate={setDate} />
                    </div>
                    <FilterSection
                        selectedTags={filters}
                        onTagToggle={handleTagToggle}
                        tags={tags}
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
