"use client";
import React from "react";
import { Search, Filter, Calendar, MapPin, Zap, Users } from "lucide-react";

const Features = () => {
    const features = [
        {
            icon: Search,
            title: "Smart Search",
            description:
                "Find the perfect workspace in seconds. Search by name, location, or amenities to get exactly what you need.",
        },
        {
            icon: Filter,
            title: "Advanced Filtering",
            description:
                "Filter by amenities like High-Speed WiFi, Meeting Rooms, Quiet Zones, and more to match your requirements.",
        },
        {
            icon: Calendar,
            title: "Date-Based Availability",
            description:
                "Check real-time availability and book spaces for specific dates. Know exactly when spaces are available.",
        },
        {
            icon: MapPin,
            title: "Location Details",
            description:
                "View detailed information about each space including capacity, type, and location on the map.",
        },
        {
            icon: Zap,
            title: "Instant Booking",
            description:
                "Book workspaces instantly with no contracts or long-term commitments. Get access immediately.",
        },
        {
            icon: Users,
            title: "Community Focused",
            description:
                "Join a community of professionals and creatives sharing workspace. Free and open to everyone.",
        },
    ];

    return (
        <div className="min-h-screen">
            <div className="space-y-12">
                {/* Header Section */}
                <div className="space-y-4">
                    <h5 className="text-bloom-orbit text-xs uppercase font-bold">
                        Features
                    </h5>
                    <h1 className="text-4xl font-bold">
                        Everything You Need to Find Your Perfect Workspace
                    </h1>
                    <p className="text-lg text-gray-600">
                        Bloom makes it easy to discover and book premium workspaces, studios, and event halls across our areas.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="space-y-4 p-6 rounded-xl border border-gray-200 hover:border-bloom-orbit hover:shadow-lg transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-lg bg-bloom-orbit/10 flex items-center justify-center">
                                    <Icon
                                        size={24}
                                        className="text-bloom-orbit"
                                    />
                                </div>
                                <h3 className="text-xl font-bold">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-bloom-orbit/5 to-bloom-blue/5 rounded-2xl p-12 text-center space-y-4">
                    <h2 className="text-3xl font-bold">
                        Ready to find your perfect space?
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Browse our collection of premium workspaces and book instantly. No contracts, no hassle—just great spaces.
                    </p>
                    <a
                        href="/"
                        className="inline-block rounded-xl px-6 py-3 bg-bloom-orbit text-white hover:bg-bloom-orbit/90 transition-all duration-300 font-medium"
                    >
                        Browse Spaces
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Features;
