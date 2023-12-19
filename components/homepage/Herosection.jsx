import React from "react";
import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/outline";
const Herosection = () => {
    return (
        <>
            <div className="text-black flex justify-around h-[90vh] items-center bg-[#e8eff87e] ">
                <div className="flex flex-col gap-8">
                    <div className="font-bold text-4xl">
                        Pass your practitioner exam-
                    </div>
                    <div className="font-bold text-2xl">
                        at the first attempt
                    </div>
                    <div className="text-xl">
                        Stop stressing and start studying smarter.
                    </div>
                    <div className="flex gap-4">
                        <div>
                            <button className="bg-[#BC1E7B] text-[#0C356A] rounded py-2 font-bold px-8">
                                Find a study option
                            </button>
                        </div>
                        <div>
                            <button className="bg-[#0C356A] text-white rounded py-2 font-bold px-8">
                                {" "}
                                Join our facebook group
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <Image src="/nurse.png" width={500} height={300} />
                </div>
            </div>
            <div className="h-[90vh] w-[98vw] overflow-x-hidden overflow-y-hidden text-black relative ">
                <div className=" ">
                    <img
                        className="h-[90vh] w-[100%] object-cover opacity-20 "
                        src="/bgimage.jpg"
                    />
                </div>
                <div className="absolute top-0  h-[90vh] w-[98vw]  ">
                    <div className="bg-[#f1f6f92c] w-[40vw] m-auto rounded shadow-lg shadow-gray-300 ">
                        <div className="flex items-center flex-col  m-auto mt-10 ">
                            <div className="font-bold text-3xl text-[#0C356A]">
                                I can help you!
                            </div>
                            <div className="h-1 w-[10vw] bg-[#0C356A]"></div>
                        </div>
                        <div className="w-[40vw] flex flex-col m-auto gap-10  h-[60vh] mt-[10vh]">
                            <div className="flex">
                                <div>
                                    <CheckIcon className="h-6 w-6 text-gray-600" />
                                </div>
                                <div>
                                    <div className="font-bold text-xl">
                                        Learn from my experience
                                    </div>
                                    <div className="text-[#0C356A] font-semibold">
                                        I've passed both the ANCC and AANP exams
                                        - and my review courses have led
                                        students to a 99%+ pass rate!
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <div>
                                    <CheckIcon className="h-6 w-6 text-gray-600" />
                                </div>
                                <div>
                                    <div className="font-bold text-xl">
                                        Save time studying
                                    </div>
                                    <div className="text-[#0C356A] font-semibold">
                                        My comprehensive courses are designed to
                                        identify the study areas that you need
                                        to focus on - and you can work at your
                                        own pace as you prepare for your exam.
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <div>
                                    <CheckIcon className="h-6 w-6 text-gray-600" />
                                </div>
                                <div>
                                    <div className="font-bold text-xl">
                                        Get the support you need
                                    </div>
                                    <div className="text-[#0C356A] font-semibold">
                                        You're not alone – our online community
                                        has 26,000+ members working toward a
                                        shared goal of passing their boards!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Herosection;
