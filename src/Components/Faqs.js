
"use client";

import { useState } from "react"; import React from 'react'

const Faqs = () => {
    const [showSecondImage, setShowSecondImage] = useState(true);
    const [showSecondImage2, setShowSecondImage2] = useState(true);
    const [showSecondImage3, setShowSecondImage3] = useState(true);
    const [showSecondImage4, setShowSecondImage4] = useState(true);
    const [showSecondImage5, setShowSecondImage5] = useState(true);

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
        <div className="items-center justify-center flex flex-col">
            <div className="text-black text-[3em] font-times text-center pt-10">
                FAQs
            </div>
            <div className="flex gap-[50%] items-center border-b-2 border-gray-500 relative w-[80%] mt-4">
                <div>
                    <div className=" text-[1.1em] text-black font-bold">What will be the career trajectory after Stoa? Can I switch my current role?
                    </div>
                    {!showSecondImage && (
                        <>
                            <div className="text-black text-[1.1em] border-b-2 border-[#7F7F7F] pb-2 pt-4">
                                Stoa enables individuals to develop diverse business skills and build a proof of their competence, making it easier to make career transitions or pivot roles. However, success depends on an individual&apos;s hard work and dedication to their goals, supported by Stoa&apos;s career assistance resources. Our fellows have switched roles, functions, and industries. They have received average salaries of around 15-16 LPA and some have received salaries in the range of 40 LPA as well.
                            </div>
                        </>

                    )}


                </div>


                <div className="relative w-[1.5rem] h-[1.5rem] min-w-9 top-[4%]">
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
            <div className="flex gap-[50%] items-center border-b-2 border-gray-500 relative w-[80%] mt-4">
                <div>
                    <div className=" text-[1.1em] text-black font-bold">Do you guarantee placements?
                    </div>
                    {!showSecondImage2 && (
                        <>
                            <div className="text-black text-[1.1em] border-b-2 border-[#7F7F7F] pb-2 pt-4">
                                Stoa&apos;s week-long &apos;skill sprints&apos; enable individuals to develop diverse business skills and build a proof of their competence, making it easier to make career transitions or pivot roles. However, success depends on an individual&apos;s hard work and dedication to their goals, supported by Stoa&apos;s career assistance resources.
                            </div>
                        </>

                    )}


                </div>


                <div className="absolute w-[1.5rem] h-[1.5rem] min-w-8 right-0">
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
            <div className="flex gap-[50%] items-center border-b-2 border-gray-500 relative w-[80%] mt-4">
                <div>
                    <div className=" text-[1.1em] text-black font-bold">What happens if my company doesnt approve Stoa as a recognised program?
                    </div>
                    {!showSecondImage3 && (
                        <>
                            <div className="text-black text-[1.1em] border-b-2 border-[#7F7F7F] pb-2 pt-4">
                                Stoa provides a practical learning approach that helps individuals gain real-world experience and build a proof of their skills and competence, making it easier to showcase their expertise to potential employers. With Stoa&apos;s career assistance resources, individuals can create an impressive portfolio and connect with potential employers and industry professionals, regardless of their company&apos;s recognition of the program.
                            </div>
                        </>

                    )}


                </div>


                <div className="absolute right-0 w-[1.5rem] h-[1.5rem] min-w-8">
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
            <div className="flex gap-[50%] items-center border-b-2 border-gray-500 relative w-[80%] mt-4">
                <div>
                    <div className=" text-[1.1em] text-black font-bold">What is the Stoa Charter? When does it take place?
                    </div>
                    {!showSecondImage4 && (
                        <>
                            <div className="text-black text-[1.1em] border-b-2 border-[#7F7F7F] pb-2 pt-4">
                                The Stoa Charter is a certification of competence. The Stoa Charter is awarded to those who demonstrate mastery in applying frameworks to solve substantial business problems. It is the highest level of academic honour awarded within the Stoa Programs, granted only to a few outstanding candidates within any cohort. The Charter is awarded upon successfully defending proposed solutions to a business problem, before a jury comprising of executives at leading firms. It&apos;s conducted at the end of the program.
                            </div>
                        </>

                    )}

                </div>


                <div className="absolute right-0 w-[1.5rem] h-[1.5rem] min-w-8">
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
            <div className="flex gap-[50%] items-center border-b-2 border-gray-500 mb-28 relative w-[80%] mt-4">
                <div>
                    <div className=" text-[1.1em] text-black font-bold">Is there an income share agreement or a no-cost EMI?
                    </div>
                    {!showSecondImage5 && (
                        <>
                            <div className="text-black text-[1.1em] border-b-2 border-[#7F7F7F] pb-2 pt-4">
                                We currently do not offer an income share agreement or a no-cost EMI option. However, we have partnered with reputed loan companies that provide education loans with EMIs starting from three months to forty-two months.
                            </div>
                        </>

                    )}

                </div>


                <div className="absolute right-0 w-[1.5rem] h-[1.5rem] min-w-8">
                    <img
                        src="https://assets-global.website-files.com/625e90aecfef117c73a46070/6391c67b15d3162c1f20b681_Accordion%20Control.svg"
                        alt="Accordion Control 1"
                        className="absolute top-0 left-0 w-full h-full object-contain z-10"
                        onClick={toggleImage5}
                    />
                    {showSecondImage5 && (
                        <img
                            src="https://assets-global.website-files.com/625e90aecfef117c73a46070/6391c67b0e2d270fcb68c32e_Accordion%20Control-1.svg"
                            alt="Accordion Control 2"
                            className="absolute top-0 left-0 w-full h-full object-contain z-0 cursor-pointer"
                            onClick={toggleImage5}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Faqs;
