import React from 'react'

const Schedule = () => {
    return (
        <div className="border-b-2 border-gray-500">
            <div className="text-[#ab0000] font-bold text-[.88em] ">
                SCHEDULE
            </div>
            <div className="font-times text-[3em] text-black">
                Schedule suitable for working professionals
            </div>
            <div className="text-[1.25em] text-[#7F7F7F]">
                We get it. Work and life gets busy. That’s why the Stoa Program is designed to be light on the weekdays and gives you the flexibility to schedule your own learning.
            </div>
            <img
                className="mt-4 mb-14 rounded"
                src="https://web.archive.org/web/20240414120614im_/https://assets-global.website-files.com/625e90aecfef117c73a46070/6416db24f4c83f37d901316f_Time%20commitment%20for%20Stoa%20Program%20-%20Stoa%20Website-p-800.webp"
            />

            <div className="font-times text-black text-[2em]">
                3 hours total on weekdays, <br />
                6-8 hours live on weekends, <br />
                3 weekends a month
            </div>
            <div className="flex">
                <div className="text-[#7F7F7F] font-bold">Weekdays:</div>
                <div className="text-[#7F7F7F] ">We share a learning prompt that you can consume at your own time.</div>

            </div>
            <div className="flex mb-20">
                <div className="text-[#7F7F7F] font-bold">Weekends:</div>
                <div className="text-[#7F7F7F] ">Your week’s learnings are put to test with a real-world case study to work on.</div>

            </div>

        </div>
    )
}

export default Schedule;
