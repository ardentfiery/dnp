import React from "react";

const Singlequiz = ({increaseStep, qn, ans }) => {
    return (
        <div className="text-black w-[50vw]  ">
            <p className="font-bold text-2xl bg-[#0c356a] text-white h-[10vh] rounded-t-lg text-center pt-8">
                {qn}
            </p>
            <div className="flex flex-col gap-4  bg-[#e998c7b6] py-[10vh] rounded-b-lg items-center ">
                {ans.map((oneAns) => {
                    return (
                        <button
                            className="bg-[#0c356a] rounded-lg text-xl hover:bg-[#0c356acd] text-white w-[40%] h-[7vh]"
                            onClick={() => {
                                increaseStep(qn, oneAns);
                                
                            }}
                        >
                           {oneAns}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default Singlequiz;
