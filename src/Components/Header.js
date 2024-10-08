"use client";
import React, { useState, useEffect } from "react";
import {
    ChevronDownIcon,
} from "@heroicons/react/20/solid";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isExpand, setIsExpand] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false); // Track scroll state

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleExpand = () => {
        setIsExpand(!isExpand);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`sticky top-0 z-50 lg:flex lg:items-center lg:justify-between h-[80px] items-center transition-colors duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"
                }`}
        >
            <div className="min-w-0 flex-1">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                    <img
                        src="https://assets-global.website-files.com/625e90aecfef117c73a46070/63cff08119c60d4695adbc15_v2.svg"
                        alt="Logo"
                    />
                </h2>
            </div>
            <div className="mt-5 flex lg:ml-4 lg:mt-0">
                <span className="hidden sm:block text-[#AB0000] font-bold text-[.9rem] mr-[2.5rem]">
                    <button type="button" onClick={toggleExpand}>
                        PROGRAMS
                        {isExpand ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </button>
                </span>
                <span className="hidden sm:block text-[#AB0000] font-bold text-[.9rem] mr-[2.5rem]">
                    <button type="button">CHRATER HOLDER</button>
                </span>
                <span className="hidden sm:block text-[#AB0000] font-bold text-[.9rem] mr-[2.5rem]">
                    <button type="button">STOA DAILY</button>
                </span>
                <span className="hidden sm:block text-[#AB0000] font-bold text-[.9rem] mr-[2.5rem] ">
                    <button type="button">STOA EVENTS</button>
                </span>
                <span className="hidden sm:block text-[#AB0000] font-bold text-[.9rem] mr-[2.5rem]">
                    <button type="button">COMMUNITY</button>
                </span>

                <span className="hidden sm:block text-[#AB0000] font-bold text-[.9rem] mr-[2.5rem]">
                    <button type="button" onClick={toggleMenu}>
                        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </span>
                {isExpand && (
                    <div className="absolute left-[45%] top-[100%] bg-white shadow-lg p-[1em] text-[.75em] w-[200px]">
                        <div className="p-2 font-bold text-[#AB0000]">General Management</div>
                        <div className="p-2 font-bold text-[#AB0000]">Marketing and Growth</div>
                    </div>
                )}

                {isMenuOpen && (
                    <div className="text-[#7F7F7F] text-[.75em] font-bold flex flex-col bg-white absolute top-[80px] right-[20px] shadow-lg p-4">
                        <div className="pr-3 pt-2">ABOUT</div>
                        <div className="pr-3 pt-2">WORK AT STOA</div>
                        <div className="pr-3 pt-2">HEAR FROM STOA</div>
                        <div className="pr-3 pt-2 border-b-2 border-gray-500">TEACH AT STOA</div>
                        <div className="pr-3 pt-2"></div>
                        <div className="flex pt-2">
                            <InstagramIcon className="pr-3" />
                            <TwitterIcon className="pr-3" />
                            <LinkedInIcon className="pr-3" />
                            <YouTubeIcon className="pr-3" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
