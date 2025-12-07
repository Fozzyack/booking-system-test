"use client";
import React from "react";
import { Heart, Users, Zap, Globe } from "lucide-react";
import CallToAction from "@/components/CallToAction";

const values = [
    {
        icon: Heart,
        title: "Community First",
        description:
            "We believe in building spaces where professionals and creatives can collaborate, share ideas, and grow together.",
    },
    {
        icon: Globe,
        title: "Accessible to All",
        description:
            "Everyone deserves access to quality workspaces. That's why Bloom is completely free and open to the community.",
    },
    {
        icon: Zap,
        title: "Frictionless Booking",
        description:
            "We eliminate unnecessary barriers. Book instantly without contracts or complicated processes.",
    },
    {
        icon: Users,
        title: "Collaborative Network",
        description:
            "Connect with like-minded individuals. Share spaces, knowledge, and opportunities with a vibrant community.",
    },
];

const team = [
    {
        role: "Built by",
        description: "Coders for Causes",
        details:
            "A volunteer organization dedicated to creating technology solutions that benefit the community.",
    },
    {
        role: "Powered by",
        description: "Open Source & Modern Tech",
        details:
            "Built with Next.js, React, Django, and other modern technologies to ensure reliability and performance.",
    },
    {
        role: "Supported by",
        description: "Our Community",
        details:
            "Every user, space owner, and contributor helps make Bloom better. We value your feedback and ideas.",
    },
];
const About = () => {
    return (
        <div className="min-h-screen">
            <div className="space-y-16">
                {/* Hero Section */}
                <div className="space-y-4">
                    <h5 className="text-bloom-orbit text-xs uppercase font-bold">
                        About Bloom
                    </h5>
                    <h1 className="text-4xl font-bold">
                        Connecting Communities Through Shared Spaces
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl">
                        Bloom is a free, community-driven platform that makes it
                        easy to discover and book premium workspaces, studios,
                        and event halls. We believe that great work happens when
                        people have access to the right spaces and community.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">
                                Our Mission
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                At Bloom, we're on a mission to democratize
                                access to quality workspaces. Whether you're a
                                freelancer, startup, creative professional, or
                                community group, finding the right space
                                shouldn't be complicated or expensive.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                We believe that by connecting people with spaces
                                and each other, we foster innovation,
                                collaboration, and community growth. Bloom is
                                free because we're committed to removing
                                barriers to opportunity.
                            </p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-bloom-orbit/10 to-bloom-blue/10 rounded-2xl p-8 space-y-4">
                        <h3 className="text-2xl font-bold">
                            What We Believe In
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex gap-3">
                                <span className="text-bloom-orbit font-bold">
                                    ✓
                                </span>
                                <span className="text-gray-600">
                                    Workspaces should be accessible to everyone
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-bloom-orbit font-bold">
                                    ✓
                                </span>
                                <span className="text-gray-600">
                                    Booking should be simple and frictionless
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-bloom-orbit font-bold">
                                    ✓
                                </span>
                                <span className="text-gray-600">
                                    Community thrives when people share
                                    resources
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-bloom-orbit font-bold">
                                    ✓
                                </span>
                                <span className="text-gray-600">
                                    Transparency and honesty matter
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold">Our Values</h2>
                        <p className="text-gray-600">
                            These principles guide everything we do at Bloom.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={index}
                                    className="p-6 rounded-xl border border-gray-200 hover:border-bloom-orbit hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-bloom-orbit/10 flex items-center justify-center shrink-0">
                                            <Icon
                                                size={24}
                                                className="text-bloom-orbit"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-lg font-bold">
                                                {value.title}
                                            </h3>
                                            <p className="text-gray-600">
                                                {value.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Who We Are Section */}
                <div className="space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold">Who We Are</h2>
                        <p className="text-gray-600">
                            Bloom is built and supported by people who care
                            about community.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {team.map((item, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 space-y-3"
                            >
                                <p className="text-sm uppercase font-bold text-bloom-orbit">
                                    {item.role}
                                </p>
                                <h3 className="text-xl font-bold">
                                    {item.description}
                                </h3>
                                <p className="text-gray-600">{item.details}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Journey Section */}
                <div className="bg-gradient-to-r from-bloom-orbit/5 to-bloom-blue/5 rounded-2xl p-12 space-y-6">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold">Our Journey</h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed max-w-3xl">
                        Bloom started as a simple idea: what if finding and
                        booking a workspace was as easy as clicking a few
                        buttons? What if there was a free platform that
                        connected people with spaces and each other?
                    </p>
                    <p className="text-gray-600 leading-relaxed max-w-3xl">
                        We're still early in our journey, and we're grateful for
                        every user, space owner, and community member who
                        believes in what we're building. This is just the
                        beginning.
                    </p>
                </div>

                {/* Get Involved Section */}
                <div className="space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold">Get Involved</h2>
                        <p className="text-gray-600">
                            Have ideas? Want to contribute? We'd love to hear
                            from you.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-gray-200 space-y-3">
                            <h3 className="text-lg font-bold">
                                Have Feedback?
                            </h3>
                            <p className="text-gray-600">
                                Help us improve Bloom. Share your ideas, report
                                issues, or suggest features.
                            </p>
                            <a
                                href="https://github.com/Fozzyack/booking-system-test"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-bloom-orbit font-medium hover:underline"
                            >
                                Report on GitHub →
                            </a>
                        </div>

                        <div className="p-6 rounded-xl border border-gray-200 space-y-3">
                            <h3 className="text-lg font-bold">
                                Want to Contribute?
                            </h3>
                            <p className="text-gray-600">
                                Bloom is built by volunteers. If you want to
                                help build something amazing, we'd love to have
                                you.
                            </p>
                            <a
                                href="/"
                                className="inline-block text-bloom-orbit font-medium hover:underline"
                            >
                                Get in Touch →
                            </a>
                        </div>
                    </div>
                </div>

                <CallToAction
                    title="Ready to Find Your Space?"
                    description="Join our community and discover amazing workspaces. Browse, filter, and book instantly."
                    buttonText="Browse Spaces"
                    buttonHref="/"
                    variant="dark"
                />
            </div>
        </div>
    );
};

export default About;
