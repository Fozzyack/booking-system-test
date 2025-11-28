"use client";

import { SpacesAvailableProps } from "@/lib/types";
import RoomCard from "./RoomCard";

const SpacesAvailable: React.FC<SpacesAvailableProps> = ({ selectedTags, rooms, searchTerm }) => {
    // Filter rooms based on selected tags and search term
    const filteredRooms = rooms.filter(room => {
        // Check if room has any of the selected tags
        const hasSelectedTags = selectedTags.length === 0 || 
            room.tags.some(tag => selectedTags.includes(tag.tag));
        
        // Check if room matches search term
        const matchesSearch = searchTerm === '' || 
            room.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            room.description.toLowerCase().includes(searchTerm.toLowerCase());
        
        return hasSelectedTags && matchesSearch;
    });

    const handleTagClick = (tag: string) => {
        console.log('Tag clicked:', tag);
        // You can add filtering logic here if needed
    };

    return (
        <div className="">
            <h3 className="text-xl font-semibold mb-4">
                Spaces Available: <span className="text-bloom-orbit">{filteredRooms.length}</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRooms.map(room => (
                    <RoomCard key={room.id} room={room} onTagClick={handleTagClick} />
                ))}
                {filteredRooms.length === 0 && (
                    <div className="col-span-full text-center py-8 text-gray-500">
                        No rooms match your criteria
                    </div>
                )}
            </div>
        </div>
    );
};

export default SpacesAvailable;
