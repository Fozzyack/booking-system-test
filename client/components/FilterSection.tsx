"use client";
import { AVAILABLE_TAGS } from "@/lib/constants";
import { Filter, Check } from "lucide-react";
import { FilterSectionProps } from "@/lib/types";

const FilterSection: React.FC<FilterSectionProps> = ({ selectedTags, onTagToggle }) => {
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
                {AVAILABLE_TAGS.map((filter, index) => {
                    const isSelected = selectedTags.includes(filter);
                    return (
                        <button
                            onClick={(e) => {
                                handleFilterSelect(e, filter);
                            }}
                            key={index}
                            className={`flex text-xs md:test:sm items-center justify-center border border-bloom-gray p-2 rounded-xl hover:-translate-y-1/12 duration-150 transition-all ease-in-out
                                ${isSelected ? "bg-primary text-primary-foreground" : "bg-slate-200 text-primary"}
                                `}
                        >
                            {isSelected && <Check width={15} height={15}/>}
                            {filter}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default FilterSection;
