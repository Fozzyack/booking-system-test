"use client";

import { RoomCardProps } from "@/lib/types";

const RoomCard: React.FC<RoomCardProps> = ({ room, onTagClick }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-0.5 hover:scale-105 transition-all ease-in-out flex flex-col">
            {room.image && (
                <img 
                    src={room.image} 
                    alt={room.name}
                    className="w-full h-48 object-cover"
                />
            )}
            <div className="p-4 flex flex-col grow">
                <h4 className="text-lg font-semibold text-primary">{room.name}</h4>
                <p className="text-sm text-gray-600 mt-1">{room.description}</p>
                <div className="flex flex-wrap gap-2 my-3">
                    {room.tags.slice(0, 3).map(tag => (
                        <span 
                            key={tag.id}
                            className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full cursor-pointer hover:bg-secondary/80"
                            onClick={() => onTagClick?.(tag.tag)}
                        >
                            {tag.tag}
                        </span>
                    ))}
                    {room.tags.length > 3 && (
                        <span className="px-2 py-1 bg-gray-200 text-gray-600 text-xs rounded-full">
                            +{room.tags.length - 3} more
                        </span>
                    )}
                </div>
                <button className="bg-primary text-sm md:text-md flex items-center justify-center text-primary-foreground py-3 rounded-xl mt-auto w-full hover:bg-primary/90 transition-colors">
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default RoomCard;
