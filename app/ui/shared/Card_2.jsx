import Image from "next/image"
import House2 from '@/public/House2.jpg'

export default function Card_2 () {
    return (
        <div className="
        flex flex-col
        w-full
        gap-[5px] sm:gap-[5px] md:gap-[20px] lg:gap-[22px]
        ">
            <div className="
            h-[200px]
            w-full md:h-full
            lg:min-h-[200px] lg:min-w-[350px]
            lg:max-h-[280px]
            relative overflow-hidden rounded-[15px]">
                <Image src={House2} width={1600} alt="House 2" className="w-full h-full object-cover object-center transition-all hover:scale-105 duration-400"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                <p className="flex items-center justify-center text-[12px] sm:text-[13px] md:text-[14px] font-medium h-[22px] sm:h-[24px] md:h-[28px] text-black absolute top-3 sm:top-3 md:top-4 left-3 sm:left-3 md:left-4 bg-white w-[160px] sm:w-[180px] md:w-[204px] rounded-full">
                    2 выставочные площадки
                </p>
                <div className="absolute w-[250px] sm:w-[280px] md:w-[300px] text-white font-bold text-[16px] sm:text-[18px] md:text-[20px] flex flex-row items-center bottom-3 sm:bottom-3 md:bottom-4 left-3 sm:left-3 md:left-4 gap-[14px]">
                    Посмотрите, как выглядят наши дома вживую
                </div>
            </div>
            <div>
                <p className="text-black/70 text-[13px] sm:text-[14px] flex flex-row items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6666 3.5L5.24998 9.91667L2.33331 7" stroke="black" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Москва, 51-й км МКАД
                </p>
                <p className="text-black/70 text-[13px] sm:text-[14px] flex flex-row items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6666 3.5L5.24998 9.91667L2.33331 7" stroke="black" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Наро-Фоминск
                </p>
            </div>
                <a href={'https://ansaradev.ru/ecotech/bann1.mp4'} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center text-[14px] sm:text-[15px] md:text-[16px] font-semibold text-[#578C62]">
                    Подробнее про выставочные площадки &nbsp;
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 12L10 8L6 4" stroke="#578C62" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </a>
            
        </div>
    )
}