"use client";

import { RoomType } from "@/utils/types";

interface Props {
    filters: string[]
    rooms: RoomType[]
}

const SpacesAvailable: React.FC<Props> = ({filters, rooms}) => {
    return (
        <div className="">
            <h3 className="text-xl ">Spaces Available:</h3>
            <div className="grid grid-cols-3 gap-4">
            </div>
        </div>
    );
};
export default SpacesAvailable;
