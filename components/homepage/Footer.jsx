import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="text-white py-[2rem] bg-[#213555] flex flex-col gap-6">
            <div className="flex justify-around  ">
                <div className="flex flex-col gap-3">
                    <div className="font-semibold text-lg">About SMNP</div>
                    <div>About Us</div>
                    <div>FAQ</div>
                    <div>Refund policy</div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="font-semibold text-lg">Study Options</div>
                    <div>Self Placed Courses</div>
                    <div>Live Study Group</div>
                    <div>Question Bank</div>
                    <div>NCLEX Review</div>
                </div>
                <div className="flex gap-4  cursor-pointer ">
                    <div>
                        <CiFacebook className="h-8 w-8 hover:text-[#BC1E7B]" />
                    </div>
                    <div>
                        <FaInstagram className="h-8 w-8 hover:text-[#BC1E7B]" />
                    </div>
                    <div>
                        <AiOutlineYoutube className="h-8 w-8 hover:text-[#BC1E7B] " />
                    </div>
                </div>
                <div>
                    <div className="font-semibold text-lg">Call Us</div>
                    <div>+980 24 8455</div>
                </div>
            </div>
            <div className="flex justify-between w-[80vw]  m-auto">
                <div>&copy;copyrightSAM2023</div>
                <div className="flex gap-5">
                    <div>Terms of Use</div>
                    <div>Privacy Policy</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
