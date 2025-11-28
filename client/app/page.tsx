"use client";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import FilterSection from "@/components/FilterSection";
import { useState } from "react";

export default function Home() {
    const [search, setSearch] = useState("");
    const [filters, setFilters] = useState<string[]>([]);

    return (
        <div className="bg-slate-100 min-h-screen">
            <Header />
            <div className="px-4 md:px-32 py-10">
                <div className="space-y-2">
                    <h5 className="text-bloom-orbit text-xs uppercase font-bold">
                        Find Your Space
                    </h5>
                    <h1 className="text-primary text-4xl font-semibold">
                        Find Your Perfect Spot.
                    </h1>
                    <p className="text-sm">
                        Access premium workspaces, studios and event halls
                        accross or areas. Instant booking, no contracts.
                    </p>
                    <SearchBar search={search} setSearch={setSearch} />
                    <FilterSection filters={filters} setFilters={setFilters} />
                </div>
            </div>
        </div>
    );
}
