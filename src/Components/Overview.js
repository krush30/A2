import React from 'react';
import Sticky from './Sticky';
import Currculum from './StickySidebar/Currculum';
import Schedule from './StickySidebar/Schedule';
import Faculty from './StickySidebar/Faculty';
import Services from './StickySidebar/Services';
import Charter from './StickySidebar/Charter';

const Overview = () => {
    return (
        <div className="grid grid-cols-3 gap-[50px] mt-[4em]">
            <div className="col-span-1">
                <div className="sticky top-[4em]">
                    <Sticky />
                </div>
            </div>

            <div className="col-span-2 border-b-2 border-gray-500">
                <div id="program-overview" className="text-[#ab0000] font-bold text-[.88em]">
                    PROGRAM OVERVIEW
                </div>
                <div className="font-times text-[3em] text-black">
                    A program designed to provide holistic business education, and career & personal development.
                </div>
                <div className="text-[1.25em] text-[#7F7F7F]">
                    The program starts with a 3-day offline induction in Bengaluru. During the 6 months of the program, you’ll spend most of your time learning online via 23+ weekly sprints. On clearing the mid and the end-term exam and completing the careers checklist, you will get access to career and placement support.
                </div>

                <div id="curriculum" className="pt-7">
                    <Currculum />
                </div>

                <div id="schedule" className="pt-7">
                    <Schedule />
                </div>

                <div id="faculty" className="pt-7">
                    <Faculty />
                </div>

                <div id="career-service" className="pt-7">
                    <Services />
                </div>

                <div id="charter" className="pt-7">
                    <Charter />
                </div>
            </div>
        </div>
    );
};

export default Overview;
