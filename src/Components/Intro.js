import React from 'react';

const Intro = () => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-4 border-b-2 border-black">
                <div >
                    <div className="text-[#AB0000] text-[4em] font-times font-[400] tracking-tight pr-10 leading-[1] pt-10 mb-10">
                        Achieve dramatic professional growth in 24 weeks

                    </div>
                    <div>
                        <div className="mb-[1.5em] pl-[.63em] text-[1.25em]">
                            <li className="text-black font-bold">Complete the 6-month Stoa Program</li>
                            <li className="text-[#7e7676bf]">Indias best alternative to the traditional MBA</li>
                        </div>
                        <div className="mb-[1.5em] pl-[.63em] text-[1.25em]">
                            <li className="text-black font-bold">Get benefits of an MBA</li>
                            <li className="text-[#7e7676bf]">Learn business skills, build proof-of-work, and get feedback</li>
                        </div>
                        <div className="mb-[1.5em] pl-[.63em] text-[1.25em]">
                            <li className="text-black font-bold">Win friends and influence people</li>
                            <li className="text-[#7e7676bf]">Join a community of 1,000+ active professionals</li>
                        </div>
                        <div className="mb-[1.5em] pl-[.63em] text-[1.25em]">
                            <li className="text-black font-bold">Earn the Stoa Charter</li>
                            <li className="text-[#7e7676bf]">Demonstrate your competence
                            </li>
                        </div>
                    </div>
                    <p className="text-[#ab0000] font-bold text-[.88em]">NEXT COHORT TO BE ANNOUNCED</p>
                </div>
                <div className="pt-10">
                    <img className="h-[37em]" src="/assets/video_fail.png" alt="Video placeholder" />
                </div>
            </div>
        </div>
    );
};

export default Intro;
