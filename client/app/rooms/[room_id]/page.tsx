import { API_BASE_URL, API_ENDPOINTS } from "@/lib/constants";
import { Room } from "@/lib/types";
import Image from "next/image";
import TagsList from "@/components/TagsList";
import { LocateIcon } from "lucide-react";

const RoomPage = async ({
    params,
}: {
    params: Promise<{ room_id: string }>;
}) => {
    let room: Room = {
        id: -1,
        name: "",
        excerpt: "",
        description: "",
        image: "",
        capacity: 0,
        created_at: "",
        updated_at: "",
        tags: [],
    };
    const { room_id } = await params;
    console.log(`${API_BASE_URL}${API_ENDPOINTS.rooms}${room_id}`);
    try {
        const res = await fetch(
            `${API_BASE_URL}${API_ENDPOINTS.rooms}${room_id}`,
            {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            },
        );
        if (!res.ok) {
            console.log("Error getting the room");
        }
        room = await res.json();
    } catch (error) {
        console.log(error);
        console.log("Network Error");
    }
    console.log(room);
    const imageUrl = room.image
        ? room.image.startsWith("http")
            ? room.image
            : `${API_BASE_URL}${room.image}`
        : "";
    return (
        <div className="space-y-12">
            <h1>{room.name}</h1>
            {imageUrl && (
                <Image
                    src={imageUrl}
                    alt={`${room.name} Image`}
                    height={500}
                    width={800}
                    unoptimized={true}
                    className="rounded-2xl"
                />
            )}
            <div className="flex flex-col justify-center md:grid grid-cols-12">
                <div className="md:col-span-7">
                    <div className="px-2">
                        <p className="text-lg font-bold">{room.excerpt}</p>
                        <p className="text-slate-500">
                            Capacity: {room.capacity} Guests ·{" "}
                            {room.room_type
                                ? room.room_type.type
                                : "Standard Room"}
                        </p>
                    </div>

                    <div className="border-t border-b border-slate-300 py-8 my-4">
                        <div className="px-2 space-y-3">
                            <div className="flex items-start">
                                <h3 className="font-bold text-lg mr-4">
                                    About This Room{" "}
                                </h3>
                                <p className="px-2 py-1 mb-2 rounded-full text-bloom-orbit/50 font-bold bg-bloom-orbit/5 border border-bloom-orbit/20 text-xs inline-block">
                                    {room.good_for}
                                </p>
                            </div>
                            <p>{room.description}</p>
                        </div>
                    </div>
                    <TagsList tags={room.tags} />

                    { /* Section for the location services to go */ }

                    <div className="space-y-3 px-2 mt-10">
                        <h3 className="font-bold text-lg mr-4">
                            Location: 
                        </h3>
                            <div className="bg-slate-200 text-slate-500 rounded-lg py-20 items-center justify-center flex gap-2">
                            <LocateIcon />
                                <p>Location Currently Unavailable</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomPage;
