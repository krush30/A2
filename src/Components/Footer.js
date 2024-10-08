"use client";
import React, { useState } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="lg:flex lg:items-center lg:justify-between h-[80px] items-center bg-black">
            <div className="min-w-0 flex-1">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight flex pl-5">
                    <img src="https://assets-global.website-files.com/625e90aecfef117c73a46070/63cff08119c60d4695adbc15_v2.svg" />
                    <div className="text-white pl-2 font-times">stoa</div>
                </h2>
            </div>
            <div className="mt-5 flex lg:ml-4 lg:mt-0 flex-col">
                <div className="flex">

                    <span className="hidden sm:block text-white font-times text-[2.03rem] mr-[2.5rem]">
                        <button type="button">Stoa Daily</button>
                    </span>
                    <span className="hidden sm:block text-white font-times text-[2.03rem] mr-[2.5rem]">
                        <button type="button">Stoa Events</button>
                    </span>
                    <span className="hidden sm:block text-white font-times text-[2.03rem] mr-[2.5rem]">
                        <button type="button">Community</button>
                    </span>
                </div>
                <div className="text-[#7F7F7F] text-[.75em] font-bold flex">
                    <div className="pr-3 pt-2">ABOUT</div>
                    <div className="pr-3 pt-2">WORK AT STOA</div>
                    <div className="pr-3 pt-2">HEAR FROM STOA</div>
                    <div className="pr-3 pt-2">TEACH AT STOA</div>
                    <div className="pr-3 pt-2">
                        <button
                            type="button"
                            className=" inline-flex items-center gap-x-2  font-bold   "
                            onClick={toggleModal}
                        >
                            CONTACT US
                        </button>
                    </div>
                    <InstagramIcon className="pr-3 pt-2" />
                    <TwitterIcon className="pr-3 pt-2" />
                    <LinkedInIcon className="pr-3 pt-2" />
                    <YouTubeIcon className="pr-3 pt-2" />
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 overflow-y-auto " role="dialog" aria-modal="true">
                    <div className="bg-[#F4E6D3] flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>

                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
                        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                            <div className="sm:flex sm:items-start">

                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <h3 className="text-lg leading-6 font-medium text-[#ab0000] font-times text-[3.2em]" id="modal-title">
                                        Contact Us
                                    </h3>
                                    <div className="mt-2">
                                        <p className="text-sm text-black text-[1.39em]">
                                            We&apos;d love to hear from you and we&apos;ll respond as soon as possible.
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row">
                                <div className='flex flex-col pl-20'>
                                    <div className='text-black font-bold text-[1.7em] pl-8'>Email</div>
                                    <div className='text-[1.3em] text-[#7F7F7F]'>‍ hello@stoa.com</div>
                                </div>
                                <div className='flex flex-col pl-4'>
                                    <div className='text-black font-bold text-[1.7em] pl-8'>WhatsApp</div>
                                    <div className='text-[1.3em] text-[#7F7F7F]'>‍ +91 7276184656</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
