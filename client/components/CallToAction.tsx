"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

interface CallToActionProps {
    title: string;
    description: string;
    buttonText?: string;
    buttonHref?: string;
    variant?: "light" | "dark";
    showIcon?: boolean;
}

const CallToAction: React.FC<CallToActionProps> = ({
    title,
    description,
    buttonText = "Browse Spaces",
    buttonHref = "/",
    variant = "light",
    showIcon = false,
}) => {
    const isLight = variant === "light";

    return (
        <div
            className={`rounded-2xl p-12 text-center space-y-4 ${
                isLight
                    ? "bg-gradient-to-r from-bloom-orbit/5 to-bloom-blue/5"
                    : "bg-gradient-to-r from-bloom-orbit to-bloom-blue text-white"
            }`}
        >
            <h2 className="text-3xl font-bold">{title}</h2>
            <p
                className={`max-w-2xl mx-auto ${
                    isLight ? "text-gray-600" : "opacity-90"
                }`}
            >
                {description}
            </p>
            <a
                href={buttonHref}
                className={`inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium transition-all duration-300 ${
                    isLight
                        ? "bg-bloom-orbit text-white hover:bg-bloom-orbit/90"
                        : "bg-white text-bloom-orbit hover:bg-gray-100"
                }`}
            >
                {buttonText}
                {showIcon && <ArrowRight size={18} />}
            </a>
        </div>
    );
};

export default CallToAction;
