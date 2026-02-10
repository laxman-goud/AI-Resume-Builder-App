import React from "react";
import { Link } from "react-router-dom";
import { Home, FileX, Sparkles } from "lucide-react";

/**
 * NotFound Page (404)
 * -------------------
 * Modern 404 page for AI Resume Builder.
 * - Clean green theme
 * - Decorative background glow
 * - Easy to customize text and colors
 */

const NotFound = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden px-4">

            {/* Background gradient glow (theme effect) */}
            <div className="absolute top-20 left-1/4 w-72 h-72 bg-green-600 opacity-30 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-green-600 opacity-30 blur-[100px] rounded-full"></div>

            {/* Main Card */}
            <div className="relative z-10 text-center max-w-lg bg-white/70 backdrop-blur-lg border border-green-100 shadow-xl rounded-2xl p-10">

                {/* Icon */}
                <div className="flex justify-center mb-4">
                    <div className="bg-green-100 p-4 rounded-full">
                        <FileX className="size-10 text-green-600" />
                    </div>
                </div>

                {/* 404 Text */}
                <h1 className="text-6xl font-bold text-green-600">404</h1>

                <h2 className="text-2xl font-semibold text-gray-800 mt-2">
                    Page not found
                </h2>

                {/* Customizable message */}
                <p className="text-gray-500 mt-3">
                    The page you’re looking for doesn’t exist.
                    Let’s get you back to building your AI-powered resume.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">

                    {/* Home Button */}
                    <Link
                        to="/"
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all shadow"
                    >
                        <Home className="size-4" />
                        Go Home
                    </Link>

                    {/* Dashboard Button */}
                    <Link
                        to="/app"
                        className="flex items-center justify-center gap-2 px-6 py-3 border border-green-600 text-green-700 hover:bg-green-50 rounded-lg transition-all"
                    >
                        <Sparkles className="size-4" />
                        Open Dashboard
                    </Link>
                </div>
            </div>

            {/* Font override (matches your other sections) */}
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
                    * {
                        font-family: 'Poppins', sans-serif;
                    }
                `}
            </style>
        </div>
    );
};

export default NotFound;