import { SetStateAction } from "react";

// Room Types
export interface Room {
    id: number;
    name: string;
    excerpt: string;
    description: string;
    image: string;
    capacity: number;
    created_at: string;
    updated_at: string;
    good_for: string;
    tags: TagItem[];
    room_type?: RoomType;
}

export interface RoomType {
    id: number;
    type: string;
    room: number;
}

export interface TagItem {
    id: number;
    tag: string;
    room: number;
}

// Filter Types
export interface FilterOptions {
    tags: string[];
    searchTerm: string;
}

// API Response Types
export interface ApiResponse<T> {
    data: T;
    status: number;
    message?: string;
}

export interface RoomsResponse {
    results: Room[];
    count: number;
    next: string | null;
    previous: string | null;
}

// Component Prop Types
export interface RoomCardProps {
    room: Room;
    onTagClick?: (tag: string) => void;
}

export interface BookingModalProps {
    room: Room;
    handleToggleModal: () => void;
}

export interface FilterSectionProps {
    selectedTags: string[];
    tags: string[];
    onTagToggle: (tag: string) => void;
}

export interface DateFilterProps {
    date: Date | undefined;
    setDate: React.Dispatch<SetStateAction<Date | undefined>>;
}

export interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export interface SpacesAvailableProps {
    selectedTags: string[];
    rooms: Room[];
    searchTerm: string;
}
