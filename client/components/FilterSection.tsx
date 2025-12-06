"use client";
import { Filter, Check } from "lucide-react";
import { FilterSectionProps } from "@/lib/types";

const FilterSection: React.FC<FilterSectionProps> = ({
    tags,
    selectedTags,
    onTagToggle,
}) => {
    const handleFilterSelect = (
        e: React.MouseEvent<HTMLButtonElement>,
        filter: string,
    ) => {
        e.preventDefault();
        onTagToggle(filter);
    };


    return (
        <div className="flex items-center gap-4 py-4 flex-wrap">
            <div className="flex items-center justify-center">
                <Filter className="" />
                <p className="">Filter By:</p>
            </div>
            <div className="flex gap-2 flex-wrap">
                {tags.map((filter, index) => {
                    const isSelected = selectedTags.includes(filter);
                    return (
                        <button
                            onClick={(e) => {
                                handleFilterSelect(e, filter);
                            }}
                            key={index}
                            className={`flex text-xs md:text-sm items-center justify-center gap-1 border border-bloom-gray p-2 rounded-xl hover:-translate-y-1 duration-300 transition-all ease-in-out
                                ${isSelected ? "bg-primary text-primary-foreground" : "bg-slate-200 text-primary"}
                                `}
                        >
                            <Check
                                className={`transition-all duration-300 ease-in-out ${isSelected ? "w-4 h-4 opacity-100" : "w-0 h-0 opacity-0"}`}
                            />
                            {filter}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default FilterSection;
