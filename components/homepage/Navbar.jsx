"use client";
import React from "react";
import { ChevronDownIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import styles from "./styles.module.css";

const navbar = () => {
    return (
        <div className="flex justify-around  bg-[#0C356A] h-[10vh] sticky top-0 items-center text-lg z-50">
            <div>
                <img
                    className="h-16"
                    src="https://www.npreviews.com/media/logo/stores/10/SMNP_Logo_Mar_2023_1.png"
                    alt=""
                />
            </div>
            <div className="flex items-center gap-8 h-[100%] relative">
                <div
                    className={`flex gap-1bg=green-500 h-[100%] items-center cursor-pointer ${styles.studyoption}`}
                >
                    <div className=" ">study options</div>
                    <div>
                        <ChevronDownIcon className="h-4 w-4  text-white" />
                    </div>
                </div>
                <div
                    className={`bg-white rounded absolute text-base shadow-lg shadow-grey top-[5rem] w-[14rem] ${styles.studydropdown}`}
                >
                    <ul className=" ">
                        <li className="hover:bg-[#BC1E7B] px-8 py-2 rounded  text-[#0C356A] cursor-pointer ">
                            Live Study Groups
                        </li>
                        <li className="hover:bg-[#BC1E7B] px-8 py-2 rounded text-[#0C356A] cursor-pointer ">
                            Self-Paced Courses
                        </li>
                        <li className="hover:bg-[#BC1E7B] px-8 py-2 rounded text-[#0C356A] cursor-pointer ">
                            Question Bank
                        </li>
                        <li className="hover:bg-[#BC1E7B] px-8 py-2 rounded text-[#0C356A] cursor-pointer ">
                            1:1 sessions
                        </li>
                        <li className="hover:bg-[#BC1E7B] px-8 py-2 rounded text-[#0C356A] cursor-pointer ">
                            Job Hunt Course
                        </li>
                    </ul>
                </div>
                <div
                    className={`flex gap-1  h-[100%] items-center cursor-pointer ${styles.resourceoption}`}
                >
                    <div className="">resources</div>
                    <div>
                        <ChevronDownIcon className="h-4 w-4 text-white" />
                    </div>
                </div>
                <div
                    className={`bg-white rounded absolute text-base shadow-lg shadow-grey top-[5rem] left-[11rem] w-[14rem] ${styles.resourcedropdown}`}
                >
                    <ul className=" ">
                        <li className="hover:bg-[#BC1E7B] px-8 py-2 rounded  text-[#0C356A] cursor-pointer ">
                            All Resources
                        </li>
                        <li className="hover:bg-[#BC1E7B] px-8 py-2 rounded text-[#0C356A] cursor-pointer ">
                            FAQs
                        </li>
                        <li className="hover:bg-[#BC1E7B] px-8 py-2 rounded text-[#0C356A] cursor-pointer ">
                            Podcast
                        </li>
                        <li className="hover:bg-[#BC1E7B] px-8 py-2 rounded text-[#0C356A] cursor-pointer ">
                            Free Live Classes
                        </li>
                        <li className="hover:bg-[#BC1E7B] px-8 py-2 rounded text-[#0C356A] cursor-pointer ">
                            Blog
                        </li>
                    </ul>
                </div>
                <div>about</div>
                <div>contact</div>
            </div>
            <div className="flex gap-4 items-center">
                <div className="bg-[#BC1E7B] px-6 py-1 rounded">login</div>
                <div>
                    <ShoppingCartIcon className="h-6 w-6 text-white" />
                </div>
            </div>
        </div>
    );
};

export default navbar;
