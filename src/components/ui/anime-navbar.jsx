"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLocation } from "react-router-dom"
import { HashLink as Link } from 'react-router-hash-link';
import { cn } from "@/lib/utils"

export function AnimeNavBar({ items, className, defaultActive = "Home" }) {
    const location = useLocation()
    const [mounted, setMounted] = useState(false)
    const [hoveredTab, setHoveredTab] = useState(null)
    const [activeTab, setActiveTab] = useState(defaultActive)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024) // Increased breakpoint for better mobile switch
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    if (!mounted) return null

    // Mobile Menu Logic could be added here or we can just scroll horizontally for now
    // For this specific 'pill' design, usually on mobile it stays as a bottom bar or top bar.
    // The provided code handles mobile by showing icons only (md:hidden).

    return (
        <div className="fixed top-2 lg:top-5 left-0 right-0 z-[9999]">
            <div className="flex justify-center pt-2 lg:pt-6">
                <motion.div
                    className="flex items-center gap-1 lg:gap-3 bg-black/70 border border-white/10 backdrop-blur-lg py-2 px-2 rounded-full shadow-lg relative max-w-[95vw] overflow-x-auto scrollbar-hide"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                    }}
                >
                    {items.map((item) => {
                        const Icon = item.icon
                        const isActive = activeTab === item.name
                        const isHovered = hoveredTab === item.name

                        return (
                            <Link
                                key={item.name}
                                smooth
                                to={item.url}
                                onClick={(e) => {
                                    setActiveTab(item.name)
                                }}
                                onMouseEnter={() => setHoveredTab(item.name)}
                                onMouseLeave={() => setHoveredTab(null)}
                                className={cn(
                                    "relative cursor-pointer text-xs lg:text-sm font-semibold px-3 lg:px-6 py-2 lg:py-3 rounded-full transition-all duration-300 whitespace-nowrap",
                                    "text-white/70 hover:text-white",
                                    isActive && "text-white"
                                )}
                            >
                                {isActive && (
                                    <motion.div
                                        className="absolute inset-0 rounded-full -z-10 overflow-hidden"
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: [0.3, 0.5, 0.3],
                                            scale: [1, 1.03, 1]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <div className="absolute inset-0 bg-primary/25 rounded-full blur-md" />
                                        <div className="absolute inset-[-4px] bg-primary/20 rounded-full blur-xl" />
                                        <div className="absolute inset-[-8px] bg-primary/15 rounded-full blur-2xl" />
                                        <div className="absolute inset-[-12px] bg-primary/5 rounded-full blur-3xl" />

                                        <div
                                            className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0"
                                            style={{
                                                animation: "shine 3s ease-in-out infinite"
                                            }}
                                        />
                                    </motion.div>
                                )}

                                <motion.span
                                    className="relative z-10 flex items-center gap-2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Icon size={16} className="lg:hidden" />
                                    <span className="hidden lg:inline">{item.name}</span>
                                    <span className="lg:hidden">{item.name}</span>
                                </motion.span>

                                {/* Simplified hover effect for cleaner look */}
                                <AnimatePresence>
                                    {isHovered && !isActive && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            className="absolute inset-0 bg-white/10 rounded-full -z-10"
                                        />
                                    )}
                                </AnimatePresence>
                            </Link>
                        )
                    })}
                </motion.div>
            </div>
        </div>
    )
}
