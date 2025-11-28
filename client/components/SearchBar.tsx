"use client";
import { Search } from "lucide-react";
import { SetStateAction, useRef } from "react";

interface SearchInput {
    search: string;
    setSearch: React.Dispatch<SetStateAction<string>>;
}

const SearchBar: React.FC<SearchInput> = ({ search, setSearch }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        inputRef.current?.focus();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setSearch("");
    };

    return (
        <div className="flex gap-4 flex-wrap">
            <div
                className="bg-white gap-2 flex items-center rounded-xl px-4 py-2 cursor-text border border-slate-300 focus-within:shadow-xl focus-within:scale-105 focus-within:-translate-y-1/12 transition-all ease-in-out duration-300"
                onClick={handleClick}
            >
                <Search className="text-slate-500"/>
                <input
                    className="bg-white outline-none"
                    placeholder="Search..."
                    ref={inputRef}
                    onChange={handleChange}
                    value={search}
                />
            </div>
            <button onClick={handleClear} className="px-4 py-2 rounded-xl border border-slate-500 bg-secondary text-secondary-foreground hover:-translate-y-1/12 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Clear
            </button>
            <button className="px-4 py-2 rounded-xl bg-primary text-primary-foreground hover:-translate-y-1/12 transition-all duration-300">
                Search
            </button>
        </div>
    );
};

export default SearchBar;
