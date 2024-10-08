"use client";
import React from 'react';

const Sticky = () => {

    const handleScroll = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="text-[#7F7F7F] text-[.88em] font-bold">
            <div className="mb-[1em] hover:text-red-600 hover:ml-[1em] transition-all cursor-pointer" onClick={() => handleScroll('program-overview')}>
                PROGRAM OVERVIEW
            </div>
            <div className="mb-[1em] hover:text-red-600 hover:ml-[1em] transition-all cursor-pointer" onClick={() => handleScroll('curriculum')}>
                CURRICULUM
            </div>
            <div className="mb-[1em] hover:text-red-600 hover:ml-[1em] transition-all cursor-pointer" onClick={() => handleScroll('schedule')}>
                SCHEDULE
            </div>
            <div className="mb-[1em] hover:text-red-600 hover:ml-[1em] transition-all cursor-pointer" onClick={() => handleScroll('faculty')}>
                FACULTY
            </div>
            <div className="mb-[1em] hover:text-red-600 hover:ml-[1em] transition-all cursor-pointer" onClick={() => handleScroll('career-service')}>
                CAREER SERVICE
            </div>
            <div className="mb-[1em] hover:text-red-600 hover:ml-[1em] transition-all cursor-pointer" onClick={() => handleScroll('charter')}>
                CHARTER
            </div>
        </div>
    );
};

export default Sticky;
