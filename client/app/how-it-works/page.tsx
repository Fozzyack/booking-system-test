"use client";
import React from "react";
import { Search, Filter, Calendar, CheckCircle, ArrowRight } from "lucide-react";
import CallToAction from "@/components/CallToAction";

const HowItWorks = () => {
    const steps = [
        {
            icon: Search,
            step: 1,
            title: "Search for Spaces",
            description:
                "Browse our collection of premium workspaces, studios, and event halls. Use the search bar to find spaces by name or location.",
        },
        {
            icon: Filter,
            step: 2,
            title: "Filter by Your Needs",
            description:
                "Narrow down your options using advanced filters like High-Speed WiFi, Meeting Rooms, Quiet Zones, and more amenities.",
        },
        {
            icon: Calendar,
            step: 3,
            title: "Check Availability",
            description:
                "Select your preferred date and see real-time availability. View capacity, type, and detailed information about each space.",
        },
        {
            icon: CheckCircle,
            step: 4,
            title: "Book Instantly",
            description:
                "Complete your booking in seconds. No long contracts or complicated processes—just instant access to your chosen workspace.",
        },
    ];

    const benefits = [
        {
            title: "No Contracts",
            description:
                "Book spaces on a flexible, per-use basis without any long-term commitments.",
        },
        {
            title: "Community Driven",
            description:
                "Connect with professionals and creatives in a shared, collaborative environment.",
        },
        {
            title: "Completely Free",
            description:
                "Access premium workspaces at no cost. Browse, filter, and book for free.",
        },
        {
            title: "Real-Time Availability",
            description:
                "Always see current availability. Book the moment a space becomes available.",
        },
    ];

    return (
        <div className="min-h-screen">
            <div className="space-y-16">
                {/* Header Section */}
                <div className="space-y-4">
                    <h5 className="text-bloom-orbit text-xs uppercase font-bold">
                        How It Works
                    </h5>
                    <h1 className="text-4xl font-bold">
                        Finding Your Perfect Workspace is Simple
                    </h1>
                    <p className="text-lg text-gray-600">
                        Follow these four simple steps to discover and book amazing spaces in just minutes.
                    </p>
                </div>

                {/* Steps Section */}
                <div className="space-y-8">
                    {steps.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div key={index} className="flex gap-6 md:gap-8">
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 rounded-full bg-bloom-orbit text-white flex items-center justify-center font-bold text-xl shrink-0">
                                        {item.step}
                                    </div>
                                    {index < steps.length - 1 && (
                                        <div className="w-1 h-24 bg-gradient-to-b from-bloom-orbit to-bloom-orbit/20 mt-4" />
                                    )}
                                </div>

                                <div className="pt-2 pb-8 md:pb-12">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-3">
                                            <Icon
                                                size={24}
                                                className="text-bloom-orbit"
                                            />
                                            <h3 className="text-2xl font-bold">
                                                {item.title}
                                            </h3>
                                        </div>
                                        <p className="text-gray-600 text-lg">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Benefits Section */}
                <div className="space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold">Why Choose Bloom?</h2>
                        <p className="text-gray-600">
                            We're committed to making workspace booking simple, accessible, and free.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-xl border border-gray-200 hover:border-bloom-orbit hover:shadow-lg transition-all duration-300"
                            >
                                <h3 className="text-lg font-bold mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="space-y-4">
                        <details className="group p-6 rounded-xl border border-gray-200 hover:border-bloom-orbit transition-all duration-300 cursor-pointer">
                            <summary className="flex items-center justify-between font-bold text-lg">
                                Is Bloom really free?
                                <span className="transition-transform group-open:rotate-180">
                                    ▼
                                </span>
                            </summary>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                Yes! Bloom is completely free to use. Browse spaces, filter by amenities, check availability, and book—all without paying anything.
                            </p>
                        </details>

                        <details className="group p-6 rounded-xl border border-gray-200 hover:border-bloom-orbit transition-all duration-300 cursor-pointer">
                            <summary className="flex items-center justify-between font-bold text-lg">
                                How do I book a space?
                                <span className="transition-transform group-open:rotate-180">
                                    ▼
                                </span>
                            </summary>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                Browse available spaces, check the date and amenities that match your needs, and click book. It takes just a few clicks!
                            </p>
                        </details>

                        <details className="group p-6 rounded-xl border border-gray-200 hover:border-bloom-orbit transition-all duration-300 cursor-pointer">
                            <summary className="flex items-center justify-between font-bold text-lg">
                                Can I cancel or modify a booking?
                                <span className="transition-transform group-open:rotate-180">
                                    ▼
                                </span>
                            </summary>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                We're working on adding booking management features. For now, contact us directly for any changes to your booking.
                            </p>
                        </details>

                        <details className="group p-6 rounded-xl border border-gray-200 hover:border-bloom-orbit transition-all duration-300 cursor-pointer">
                            <summary className="flex items-center justify-between font-bold text-lg">
                                What spaces are available?
                                <span className="transition-transform group-open:rotate-180">
                                    ▼
                                </span>
                            </summary>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                We have premium workspaces, studios, and event halls across our areas. Browse our full collection on the homepage to see all options.
                            </p>
                        </details>
                    </div>
                </div>

                <CallToAction
                    title="Ready to get started?"
                    description="Browse our spaces now and find your perfect workspace in minutes."
                    buttonText="Browse Spaces"
                    buttonHref="/"
                    showIcon={true}
                />
            </div>
        </div>
    );
};

export default HowItWorks;
