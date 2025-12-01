import Image from "next/image"
import House1 from '@/public/IstraHouse.jpg'
import Arrow from "./Arrow"

export default function Card_1 () {
    return (
        <div className="
        w-full
        relative overflow-hidden rounded-[15px]
        lg:min-h-[300px] h-full
        lg:min-w-[450px] w-full
        ">
            <Image src={House1} width={1600} alt="Istra House" className="
            h-[200px] md:min-h-[390px]
            w-full
            object-cover object-center transition-all hover:scale-105 duration-400"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-[60%] pointer-events-none"></div>
            <p className="flex items-center justify-center text-[12px] sm:text-[13px] md:text-[14px] font-medium h-[22px] text-black absolute top-3 left-3 bg-white w-[160px] sm:w-[180px] md:w-[204px] rounded-full">Наши авторские проекты</p>
            <div className="absolute flex flex-row items-center bottom-3 sm:bottom-3 md:bottom-4 left-3 sm:left-3 md:left-4 gap-[10px] sm:gap-[12px] md:gap-[14px]">
                <button className="p-2 sm:p-2.5 md:p-3 bg-[#578C62] rounded-full">
                    <Arrow />
                </button>
                <button className="p-2 sm:p-2.5 md:p-3 bg-[#578C62] rounded-full rotate-180">
                    <Arrow />
                </button>
                <div className="flex flex-col text-white">
                    <p className="text-[14px] sm:text-[16px] md:text-[18px]">Дом из клееного бруса «Истра»</p>
                    <p className="flex flex-row items-center gap-[7px]">
                        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 12.4444C0 12.857 0.187301 13.2527 0.520699 13.5444C0.854097 13.8361 1.30628 14 1.77778 14H14.2222C14.6937 14 15.1459 13.8361 15.4793 13.5444C15.8127 13.2527 16 12.857 16 12.4444V1.55556C16 1.143 15.8127 0.747335 15.4793 0.455612C15.1459 0.163888 14.6937 0 14.2222 0H1.77778C1.30628 0 0.854097 0.163888 0.520699 0.455612C0.187301 0.747335 0 1.143 0 1.55556V12.4444ZM8 2.33333H13.3333V7H11.5556V3.88889H8V2.33333ZM2.66667 7H4.44444V10.1111H8V11.6667H2.66667V7Z" fill="white"/>
                        </svg>
                        137 м²
                    </p>
                </div>
            </div>
        </div>
    )
}