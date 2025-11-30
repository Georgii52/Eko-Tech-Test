import Image from "next/image";
import Development from '@/public/Development.jpg'

export default function Card_3 () {

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
            relative overflow-hidden rounded-[15px]
            relative overflow-hidden rounded-[15px]">
                <Image src={Development} width={1600} alt="Development" className="w-full h-full object-cover object-center transition-all hover:scale-105 duration-400"/>
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent pointer-events-none"></div>
                <p className="flex items-center justify-center font-medium h-[22px] sm:h-[24px] md:h-[28px] text-white absolute top-[16px] sm:top-[18px] md:top-[22px] left-3 sm:left-3 md:left-4 gap-[8px] sm:gap-[9px] md:gap-[10px]">
                    <a href={'https://ansaradev.ru/ecotech/les3.mp4'} target="_blank" rel="noopener noreferrer">
                        <svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[32px] h-[32px] sm:w-[35px] sm:h-[35px] md:w-[39px] md:h-[38px]">
                            <rect width="38.8903" height="38" rx="19" fill="white"/>
                            <path d="M16.3748 13.6114V24.6102C16.3752 24.7216 16.4096 24.8307 16.4742 24.9259C16.5388 25.0211 16.6313 25.0988 16.7416 25.1505C16.8519 25.2022 16.9759 25.2261 17.1002 25.2195C17.2246 25.2129 17.3446 25.1761 17.4473 25.1131L26.3328 19.6137C26.7012 19.3858 26.7012 18.837 26.3328 18.6085L17.4473 13.1091C17.3448 13.0455 17.2247 13.0081 17.1002 13.0012C16.9756 12.9942 16.8513 13.0179 16.7408 13.0697C16.6302 13.1215 16.5377 13.1994 16.4732 13.2949C16.4087 13.3904 16.3746 13.4998 16.3748 13.6114Z" fill="#578C62"/>
                        </svg>
                    </a>
                    <span className="text-[12px] font-semibold sm:text-[13px] md:text-sm">Видео о том, как создаётся <br></br>идеальный дом</span>
                </p>
            </div>
            <div>
                <p className="text-black/70 text-[13px] sm:text-[14px] flex flex-row items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6666 3.5L5.24998 9.91667L2.33331 7" stroke="black" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Собственная лесозаготовка
                </p>
                <p className="text-black/70 text-[13px] sm:text-[14px] flex flex-row items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6666 3.5L5.24998 9.91667L2.33331 7" stroke="black" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    4 цеха в Архангельской области
                </p>
            </div>
            <a href={'https://ansaradev.ru/ecotech/les3.mp4'} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center justify-start text-[14px] sm:text-[15px] md:text-[16px] font-semibold text-[#578C62]">
                Подробнее о нашей лесозаготовке &nbsp;
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 12L10 8L6 4" stroke="#578C62" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </a>
        </div>
    )
}