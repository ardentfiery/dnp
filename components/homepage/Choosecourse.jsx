import React from 'react'

const Choosecourse = () => {
    const courseArray = [
        {
        title:"BEST VALUE",
        course:"Comprehensive 3-Course Bundle",
        dollar:"$319/monthly",
        desc:"Unlimited acces to all of our recorded content -16+ info-packed hours and all three course study guides!"
    },
        {
        title:"BEST Begineer course",
        course:"Comprehensive 3-Course Bundle",
        dollar:"$319/monthly",
        desc:"Unlimited acces to all of our recorded content -16+ info-packed hours and all three course study guides!"
    },
        {
        title:"BEST VALUE",
        course:"Comprehensive 3-Course Bundle",
        dollar:"$319/monthly",
        desc:"Unlimited acces to all of our recorded content -16+ info-packed hours and all three course study guides!"
    },
        {
        title:"BEST VALUE",
        course:"Comprehensive 3-Course Bundle",
        dollar:"$319/monthly",
        desc:"Unlimited acces to all of our recorded content -16+ info-packed hours and all three course study guides!"
    },
        {
        title:"BEST VALUE",
        course:"Comprehensive 3-Course Bundle",
        dollar:"$319/monthly",
        desc:"Unlimited acces to all of our recorded content -16+ info-packed hours and all three course study guides!"
    },
]
  return (
    <div className='text-black flex flex-col justify-center items-center h-[90vh] gap-5'>

        <div><p className='text-3xl text-[#0c356a] font-semibold '>Take the first step</p></div>
        <div className='text-2xl text-[#0c356a]'>Choose the review course thats right for you</div>
        <div className='flex gap-8 flex-wrap'>
            {courseArray.map((course,index)=>{
                return (

            <div key={index} className='h-fit bg-[#f4bacd] py-[1vh] px-[1.4vw] min-h-[45vh] rounded flex flex-col gap-4 w-[18rem] relative shadow-lg shadow-gray-600 '>
                <div><p className='font-bold text-lg text-[#0c356a]'>{course.title}</p></div>
                <div><p className='font-bold text-[#000] text-xl'>{course.course}</p></div>
                <div className='text-[#0c356a]'><span className='font-semibold '>{course.dollar.split("/")[0]}</span>/{course.dollar.split("/")[1]}</div>
                <div className='h-1 w-[100%] bg-[#0c356a]'></div>
                <div><p className='text-[#000] mb-12'>{course.desc}</p></div>
                <div className='absolute bottom-3'><button className='bg-[#0c356a] rounded px-[2vw]  py-[0.8vh] hover:text-[#bc1ecb]  text-white'>Learn More</button></div>
            </div>

                )
            })}
        </div>
    </div>
  )
}



export default Choosecourse