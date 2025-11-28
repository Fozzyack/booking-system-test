"use client";
import { FILTER_LIST } from "@/utils/constants";
import { Filter, Check } from "lucide-react";
import { SetStateAction } from "react";

interface FilterProps {
    filters: string[];
    setFilters: React.Dispatch<SetStateAction<string[]>>;
}

const FilterSection: React.FC<FilterProps> = ({ filters, setFilters }) => {
    const handleFilterSelect = (
        e: React.MouseEvent<HTMLButtonElement>,
        filter: string,
    ) => {
        setFilters((prev) => {
            e.preventDefault();
            const isSelected = filters.includes(filter);
            console.log(isSelected);
            if (isSelected) {
                return prev.filter((f) => f != filter);
            }
            return [...prev, filter];
        });
    };
    return (
        <div className="mt-4">
            <div className="">
                <Filter className="inline-block" />
                <p className="inline-block p-4">Filter By:</p>
            </div>
            <div className="flex gap-2">
                {FILTER_LIST.map((filter, index) => {
                    const isSelected = filters.includes(filter);
                    return (
                        <button
                            onClick={(e) => {
                                handleFilterSelect(e, filter);
                            }}
                            key={index}
                            className={`flex items-center justify-center border border-bloom-gray p-2 rounded-xl hover:-translate-y-1/12 duration-150 transition-all ease-in-out
                                ${isSelected ? "bg-black text-white" : "bg-slate-200 text-primary"}
                                `}
                        >
                            {isSelected && <Check />}
                            {filter}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};
export default FilterSection;
