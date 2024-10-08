import React from 'react'

const Offers = () => {
    return (
        <div className="border-b-2 border-gray-500">
            <div className="text-[3em] font-times text-black pt-[1em] mb-4">Competitive Salary Offers</div>
            <div className="grid grid-cols-4">
                <div className=" bg-white mr-3  leading-[0.5]  " style={{ padding: '.63em 1.25em' }}>
                    <div className="flex"><div className="text-[#3F8D01] font-bold text-[2em]">12.7</div>
                        <div className="text-[1.1em] pt-[0.5em] text-[#3F8D01] font-bold">LPA</div></div>

                    <div className="text-[#7F7F7F] mt-2">AVERAGE SALARY</div>
                </div>
                <div className=" bg-white mr-3  leading-[0.5]  " style={{ padding: '.63em 1.25em' }}>
                    <div className="flex"><div className="text-[#3F8D01] font-bold text-[2em]">11.5</div>
                        <div className="text-[1.1em] pt-[0.5em] text-[#3F8D01] font-bold">LPA</div></div>

                    <div className="text-[#7F7F7F] mt-2">MEDIAN SALARY</div>
                </div>
                <div className=" bg-white mr-3  leading-[0.5]  " style={{ padding: '.63em 1.25em' }}>
                    <div className="flex"><div className="text-[#3F8D01] font-bold text-[2em]">20</div>
                        <div className="text-[1.1em] pt-[0.5em] text-[#3F8D01] font-bold">LPA</div></div>

                    <div className="text-[#7F7F7F] mt-2">HIGHEST SALARY</div>
                </div>
                <div className=" bg-white mr-3  leading-[0.5]  " style={{ padding: '.63em 1.25em' }}>
                    <div className="flex"><div className="text-[#3F8D01] font-bold text-[2em]">62</div>
                        <div className="text-[1.1em] pt-[0.5em] text-[#3F8D01] font-bold">%</div></div>

                    <div className="text-[#7F7F7F] mt-2">AVG SALARY INCREASE</div>
                </div>
            </div>
            <div className="text-[#7F7F7F] text-[.75em] font-bold pt-4 mb-20">
                *BASED ON OUR LAST CAREER DRIVE
            </div>

        </div>
    )
}

export default Offers;
