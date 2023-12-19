"use client";
import React, { useState } from "react";
import Singlequiz from "./Singlequiz";

const Quiz = () => {
    const [step, setstep] = useState(0);
    const [qnAnswer, setqnAnswer] = useState([]);
    const increaseStep = (qn, ans) => {
        if(step<=4){
            setstep(step + 1);

        }
        console.log(qn, ans);
        if (ans !== undefined) {
            const answerObject = {
                question: qn,
                answer: ans,
            };
            setqnAnswer([...qnAnswer, answerObject]);
        }
    };

    return (
        <div className="h-[90vh] flex justify-center items-center">
            {console.log(qnAnswer)}
            {step === 0 && (
                <div className=" text-black w-[50vw] ">
                    <div className="bg-[#0c356a] flex justify-center py-[25px] rounded-t-xl">
                        <img
                            className="h-16"
                            src="https://www.npreviews.com/media/logo/stores/10/SMNP_Logo_Mar_2023_1.png"
                            alt=""
                        />
                    </div>
                    <div className="bg-[#F6ACC5] h-[50vh] rounded-b-xl ">
                        <div>
                            <p className="font-bold text-5xl px-[8vw] pt-[10vh]">
                                Take a 4 question quiz to discover the best
                                study tool for you
                            </p>
                        </div>
                        <div className="flex justify-center mt-[10vh]">
                            {" "}
                            <button
                                onClick={increaseStep}
                                className="transition ease-in-out duration-300 bg-[#0c356a] py-[1rem] px-[4rem] rounded text-white text-2xl hover:text-[#BC1ECB] "
                            >
                                GET STARTED
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {step === 1 && (
                <Singlequiz
                    increaseStep={increaseStep}
                    qn={
                        "When do you plan on taking your nurse practitioner board exam?"
                    }
                    ans={["1-2 weeks", "2-3 weeks", "3-4 weeks", "4-5 weeks"]}
                />
            )}
            {step === 2 && (
                <Singlequiz
                    increaseStep={increaseStep}
                    qn={"Do you have a set schedule?"}
                    ans={[
                        "No, I need async",
                        "i need some schedule",
                        "yes I have a plan",
                    ]}
                />
            )}
            {step === 3 && (
                <Singlequiz
                    increaseStep={increaseStep}
                    qn={
                        "How important it is for you to have someone guide you through the curriculum?"
                    }
                    ans={["Very importnat", "Somewhat important", "Not at all"]}
                />
            )}
            {step === 4 && (
                <Singlequiz
                    increaseStep={increaseStep}
                    qn={"What size learning group do you prefer?"}
                    ans={["50+", "30-40", "Independent"]}
                />
            )}
        </div>
    );
};

export default Quiz;
