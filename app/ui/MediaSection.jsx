import Image from "next/image"

import Card_1 from "./shared/Card_1"
import Card_2 from "./shared/Card_2"
import Card_3 from "./shared/Card_3"

export default function MediaSection () {
    return (
        <>
            <div className="
            w-full
            hidden
            md:flex flex-col lg:flex-row
            items-stretch justify-between mt-15 px-[20px] md:px-[50px] gap-5">
                <Card_1 />
                <div className="flex gap-5">
                    <Card_2 />
                    <Card_3 />
                </div>          
            </div>
            <div className="
            sm:hidden
            md:w-full
            flex flex-col
            items-center justify-center 
            mt-15 px-5
            gap-10
            ">        
                <Card_2 />
                <Card_3 />
                <Card_1 />
            </div>
        </>
    )
}
        // w-full flex flex-col lg:flex-row
        // items-center lg:items-start
        // justify-center lg:justify-between
        // px-[16px] sm:px-[20px] md:px-[24px] lg:px-[32px] xl:px-[50px]
        // pt-[40px] sm:pt-[50px] md:pt-[60px] lg:pt-[70px] xl:pt-[89px]
        // gap-[12px] sm:gap-[14px] md:gap-[12px] lg:gap-[12px] xl:gap-[20px]
        // flex-shrink-1
        // overflow-x-hidden