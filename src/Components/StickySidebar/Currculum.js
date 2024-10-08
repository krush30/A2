"use client";

import { useState } from "react";
import React from 'react';

const Curriculum = () => {
    const [showSecondImage, setShowSecondImage] = useState(true);
    const [showSecondImage2, setShowSecondImage2] = useState(true);
    const [showSecondImage3, setShowSecondImage3] = useState(true);
    const [showSecondImage4, setShowSecondImage4] = useState(true);
    const [showSecondImage5, setShowSecondImage5] = useState(true);

    console.log(showSecondImage);
    const toggleImage = () => {
        setShowSecondImage(!showSecondImage);
    };

    const toggleImage2 = () => {
        setShowSecondImage2(!showSecondImage2);
    };
    const toggleImage3 = () => {
        setShowSecondImage3(!showSecondImage3);
    };
    const toggleImage4 = () => {
        setShowSecondImage4(!showSecondImage4);
    };
    const toggleImage5 = () => {
        setShowSecondImage5(!showSecondImage5);
    };


    return (
        <div className="mb-16">
            <div className="text-[#ab0000] font-bold text-[.88em]">
                CURRICULUM
            </div>
            <div className="font-times text-[3em] text-black">
                20+ sprints, countless skills
            </div>
            <div className="text-[1.25em] text-[#7F7F7F]">
                Each sprint is designed to help you pick up skills that you can apply at your work. Learn through a mix of individual and team-based modes.
            </div>

            <div className="flex gap-[50%] items-center border-b-2 border-gray-500 relative">

                <div>
                    <div className="font-times text-[2em] text-[#ab0000]">Foundational Concepts
                    </div>
                    {!showSecondImage && (
                        <><div className="text-black text-[1em] font-bold border-b-2 border-dotted border-[#7F7F7F] pb-2 pt-4">
                            Structured Thinking & Problem Solving
                        </div>
                            <div className="text-black text-[1em] font-bold border-b-2 border-dotted border-[#7F7F7F] pb-2 pt-4">
                                Business Writing & Presentations
                            </div>
                            <div className="text-black text-[1em] font-bold  pb-2 pt-4">
                                Zero to One
                            </div>
                            <div className="text-[#7F7F7F] text-[.75em] mt-5 mb-4">
                                *Subject to change
                            </div></>
                    )}

                </div>


                <div className="right-0 w-[1.5rem] h-[1.5rem] absolute  top-[4%] ">
                    <img
                        src="https://assets-global.website-files.com/625e90aecfef117c73a46070/6391c67b15d3162c1f20b681_Accordion%20Control.svg"
                        alt="Accordion Control 1"
                        className="absolute top-0 left-0 w-full h-full object-contain z-10"
                        onClick={toggleImage}
                    />
                    {showSecondImage && (
                        <img

                            src="https://assets-global.website-files.com/625e90aecfef117c73a46070/6391c67b0e2d270fcb68c32e_Accordion%20Control-1.svg"
                            alt="Accordion Control 2"
                            className="absolute top-0 left-0 w-full h-full object-contain z-0 cursor-pointer"
                            onClick={toggleImage}
                        />
                    )}
                </div>
            </div>
            <div className="flex gap-[50%] items-center border-b-2 border-gray-500 relative">
                <div>
                    <div className="font-times text-[2em] text-[#ab0000]">Quantitative Thinking
                    </div>
                    {!showSecondImage2 &&
                        (<><div className="text-black text-[1em] font-bold border-b-2 border-dotted border-[#7F7F7F] pb-2 pt-4">
                            Analytics 101
                        </div>
                            <div className="text-black text-[1em] font-bold border-b-2 border-dotted border-[#7F7F7F] pb-2 pt-4">
                                Financial Modelling
                            </div>
                            <div className="text-black text-[1em] font-bold  pb-2 pt-4">
                                Managerial Finance Fundamentals
                            </div>
                            <div className="text-[#7F7F7F] text-[.75em] mt-5 mb-4">
                                *Subject to change
                            </div></>)}

                </div>


                <div className="absolute w-[1.5rem] h-[1.5rem] right-[0%] top-[4%]">
                    <img
                        src="https://assets-global.website-files.com/625e90aecfef117c73a46070/6391c67b15d3162c1f20b681_Accordion%20Control.svg"
                        alt="Accordion Control 1"
                        className="absolute top-0 left-0 w-full h-full object-contain z-10"
                        onClick={toggleImage2}
                    />
                    {showSecondImage2 && (
                        <img
                            src="https://assets-global.website-files.com/625e90aecfef117c73a46070/6391c67b0e2d270fcb68c32e_Accordion%20Control-1.svg"
                            alt="Accordion Control 2"
                            className="absolute top-0 left-0 w-full h-full object-contain z-0 cursor-pointer"
                            onClick={toggleImage2}
                        />
                    )}
                </div>
            </div>
            <div className="flex gap-[50%] items-center border-b-2 border-gray-500 relative">
                <div>
                    <div className="font-times text-[2em] text-[#ab0000]">Exploring Business Functions
                    </div>
                    {!showSecondImage3 &&
                        (<><div className="text-black text-[1em] font-bold border-b-2 border-dotted border-[#7F7F7F] pb-2 pt-4">
                            User Research & Decision Making
                        </div>
                            <div className="text-black text-[1em] font-bold border-b-2 border-dotted border-[#7F7F7F] pb-2 pt-4">
                                Fundamentals of Marketing
                            </div>
                            <div className="text-black text-[1em] font-bold  pb-2 pt-4">
                                Fundamentals of Product
                            </div>
                            <div className="text-[#7F7F7F] text-[.75em] mt-5 mb-4">
                                *Subject to change
                            </div></>)}

                </div>


                <div className="absolute  w-[1.5rem] h-[1.5rem] right-[0%] top-[4%]">
                    <img
                        src="https://assets-global.website-files.com/625e90aecfef117c73a46070/6391c67b15d3162c1f20b681_Accordion%20Control.svg"
                        alt="Accordion Control 1"
                        className="absolute top-0 left-0 w-full h-full object-contain z-10"
                        onClick={toggleImage3}
                    />
                    {showSecondImage3 && (
                        <img
                            src="https://assets-global.website-files.com/625e90aecfef117c73a46070/6391c67b0e2d270fcb68c32e_Accordion%20Control-1.svg"
                            alt="Accordion Control 2"
                            className="absolute top-0 left-0 w-full h-full object-contain z-0 cursor-pointer"
                            onClick={toggleImage3}
                        />
                    )}
                </div>
            </div>
            <div className="flex gap-[50%] items-center border-b-2 border-gray-500 relative">
                <div>
                    <div className="font-times text-[2em] text-[#ab0000]">Sales & Customer Success
                    </div>
                    {!showSecondImage4 &&
                        (<><div className="text-black text-[1em] font-bold border-b-2 border-dotted border-[#7F7F7F] pb-2 pt-4">
                            The Art & Science of Sales
                        </div>
                            <div className="text-black text-[1em] font-bold border-b-2 border-dotted border-[#7F7F7F] pb-2 pt-4">
                                Customer Success
                            </div>
                            <div className="text-black text-[1em] font-bold  pb-2 pt-4">
                                Tooling for Sales Professionals
                            </div>
                            <div className="text-[#7F7F7F] text-[.75em] mt-5 mb-4">
                                *Subject to change
                            </div></>)}

                </div>


                <div className="absolute w-[1.5rem] h-[1.5rem] right-[0%] top-[4%]">
                    <img
                        src="https://assets-global.website-files.com/625e90aecfef117c73a46070/6391c67b15d3162c1f20b681_Accordion%20Control.svg"
                        alt="Accordion Control 1"
                        className="absolute top-0 left-0 w-full h-full object-contain z-10"
                        onClick={toggleImage4}
                    />
                    {showSecondImage4 && (
                        <img
                            src="https://assets-global.website-files.com/625e90aecfef117c73a46070/6391c67b0e2d270fcb68c32e_Accordion%20Control-1.svg"
                            alt="Accordion Control 2"
                            className="absolute top-0 left-0 w-full h-full object-contain z-0 cursor-pointer"
                            onClick={toggleImage4}
                        />
                    )}
                </div>
            </div>
            <div className="flex gap-[50%] items-center border-b-2 border-gray-500 relative">
                <div>
                    <div className="font-times text-[2em] text-[#ab0000]">General Management Functions
                    </div>
                    {!showSecondImage5 &&
                        (<>
                            <div className="text-black text-[1em] font-bold border-b-2 border-dotted border-[#7F7F7F] pb-2 pt-4">
                                Business Operations
                            </div>
                            <div className="text-black text-[1em] font-bold border-b-2 border-dotted border-[#7F7F7F] pb-2 pt-4">
                                Business Strategy
                            </div>
                            <div className="text-black text-[1em] font-bold  pb-2 pt-4">
                                Measuring Operational Performance
                            </div>
                            <div className="text-[#7F7F7F] text-[.75em] mt-5 mb-4">
                                *Subject to change
                            </div></>)}

                </div>


                <div className="absolute w-[1.5rem] h-[1.5rem] right-[0%] top-[4%]">
                    <img
                        src="https://assets-global.website-files.com/625e90aecfef117c73a46070/6391c67b15d3162c1f20b681_Accordion%20Control.svg"
                        alt="Accordion Control 1"
                        className="absolute top-0 left-0 w-full h-full object-contain z-10"
                        onClick={toggleImage5}
                    />
                    {showSecondImage && (
                        <img
                            src="https://assets-global.website-files.com/625e90aecfef117c73a46070/6391c67b0e2d270fcb68c32e_Accordion%20Control-1.svg"
                            alt="Accordion Control 2"
                            className="absolute top-0 left-0 w-full h-full object-contain z-0 cursor-pointer"
                            onClick={toggleImage5}
                        />
                    )}
                </div>
            </div>
            <div className="flex gap-[50%] items-center relative">
                <div>
                    <div className="font-times text-[2em] text-[#ab0000]">Career Services
                    </div>
                    <div className="text-black text-[1em] font-bold border-b-2 border-dotted border-[#7F7F7F] pb-2 pt-4">
                        Professional Profile Building
                    </div>
                    {!showSecondImage5 && (
                        <>
                            <div className="text-black text-[1em] font-bold border-b-2 border-dotted border-[#7F7F7F] pb-2 pt-4">
                                Build Resume with Proof of Work
                            </div>
                            <div className="text-black text-[1em] font-bold border-b-2 border-dotted border-[#7F7F7F] pb-2 pt-4">
                                Connections to relevant companies
                            </div>
                            <div className="text-black text-[1em] font-bold  pb-2 pt-4">
                                Mock Interviews and Soft Skills Prep
                            </div>
                            <div className="text-[#7F7F7F] text-[.75em] mt-5 mb-4">
                                *Subject to change
                            </div></>
                    )}

                </div>


                <div className="absolute w-[1.5rem] h-[1.5rem] right-[0%] top-[4%]">
                    <img
                        src="https://assets-global.website-files.com/625e90aecfef117c73a46070/6391c67b15d3162c1f20b681_Accordion%20Control.svg"
                        alt="Accordion Control 1"
                        className="absolute top-0 left-0 w-full h-full object-contain z-10"
                        onClick={toggleImage}

                    />
                    {showSecondImage5 && (
                        <img
                            src="https://assets-global.website-files.com/625e90aecfef117c73a46070/6391c67b0e2d270fcb68c32e_Accordion%20Control-1.svg"
                            alt="Accordion Control 2"
                            className="absolute top-0 left-0 w-full h-full object-contain z-0 cursor-pointer"
                            onClick={toggleImage}
                        />
                    )}
                </div>
            </div>

            <img className="pt-20 mb-20" src="https://web.archive.org/web/20240414120614im_/https://assets-global.website-files.com/625e90aecfef117c73a46070/63cf8a6706836dccb4809640_Image.webp" />
        </div>
    );
}

export default Curriculum;
