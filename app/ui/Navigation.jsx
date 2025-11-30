'use client'
import Image from "next/image"
import Logo from '@/public/logo.png'
import { useState } from "react"


export default function Navigation () {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="flex flex-row pt-[16px] px-[20px] md:px-[50px] items-center justify-start w-full font-medium text-black">
            <Image src={Logo} width={140} alt="Company logo" className=""/>
            <div className="hidden md:block flex-row px-[16px]">
                <button className="md:flex-start flex flex-row items-center bg-[#EAE3E199]/60 px-[20px] gap-1 rounded-full py-2 hover:bg-[#EAE3E199] transition-all ease text-[16px]">
                    <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="0.5" x2="14" y2="0.5" stroke="black"/>
                        <line y1="5.5" x2="14" y2="5.5" stroke="black"/>
                        <line y1="10.5" x2="14" y2="10.5" stroke="black"/>
                    </svg>
                    Меню
                </button>
            </div>
            <div className="hidden xl:flex flex-row flex-1 items-center justify-start gap-5">
                <button className="flex flex-row items-center gap-[3px] text-[16px]">
                    Проекты
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <button className="text-[16px]">Наше производство</button>
                <button className="flex flex-row items-center gap-[3px] text-[16px]">
                    Фото и видео
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <button className="text-[16px]">Новости</button>
                <button className="flex flex-row items-center gap-[3px] text-[16px]">
                    Для клиентов
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <button className="flex flex-row items-center gap-[3px] text-[16px]">
                    О компании
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <button className="flex flex-row items-center gap-[3px] text-[16px]">
                    Услуги
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
            <div className="ml-auto">
                <div className="flex flex-row items-center justify-end gap-[8px]">
                    <a href="tel:88003339191" className="hidden sm:block text-[18px] hover:border-b-1 transition-all ease whitespace-nowrap">8 (800) 333-91-91</a>
                    <button className="md:hidden bg-[#EAE3E199]/60 p-2 rounded-full hover:bg-[#EAE3E199] transition-all ease">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.28521 6.64001C6.80721 7.72723 7.5188 8.74621 8.41998 9.64739C9.32116 10.5486 10.3401 11.2602 11.4274 11.7822C11.5209 11.8271 11.5676 11.8495 11.6268 11.8668C11.8371 11.9281 12.0953 11.884 12.2733 11.7565C12.3234 11.7206 12.3663 11.6778 12.452 11.592C12.7143 11.3298 12.8454 11.1987 12.9772 11.113C13.4744 10.7898 14.1153 10.7898 14.6125 11.113C14.7443 11.1987 14.8754 11.3298 15.1376 11.592L15.2838 11.7382C15.6823 12.1368 15.8816 12.3361 15.9899 12.5501C16.2052 12.9758 16.2052 13.4785 15.9899 13.9041C15.8816 14.1182 15.6823 14.3175 15.2838 14.7161L15.1655 14.8343C14.7683 15.2315 14.5697 15.4301 14.2997 15.5818C14 15.7501 13.5347 15.8711 13.191 15.8701C12.8813 15.8692 12.6696 15.8091 12.2463 15.6889C9.97125 15.0432 7.82448 13.8249 6.0335 12.0339C4.24251 10.2429 3.02415 8.09612 2.37843 5.82108C2.25827 5.39774 2.19819 5.18607 2.19727 4.87636C2.19625 4.5327 2.31727 4.06733 2.48559 3.7677C2.63727 3.49768 2.83588 3.29907 3.2331 2.90185L3.35132 2.78362C3.74991 2.38504 3.9492 2.18575 4.16323 2.07749C4.5889 1.86219 5.0916 1.86219 5.51727 2.07749C5.73131 2.18575 5.9306 2.38504 6.32918 2.78362L6.47533 2.92978C6.73754 3.19198 6.86864 3.32308 6.95436 3.45492C7.2776 3.95208 7.2776 4.59302 6.95435 5.09019C6.86864 5.22202 6.73754 5.35312 6.47533 5.61533C6.3896 5.70106 6.34673 5.74393 6.31085 5.79404C6.18334 5.97211 6.13932 6.2303 6.20061 6.44057C6.21786 6.49974 6.24031 6.5465 6.28521 6.64001Z" stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <button className="bg-[#EAE3E199]/60 p-2 rounded-full hover:bg-[#EAE3E199] transition-all ease">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.75 15.75L12.4875 12.4875M14.25 8.25C14.25 11.5637 11.5637 14.25 8.25 14.25C4.93629 14.25 2.25 11.5637 2.25 8.25C2.25 4.93629 4.93629 2.25 8.25 2.25C11.5637 2.25 14.25 4.93629 14.25 8.25Z" stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <button className="bg-[#EAE3E199]/60 p-2 rounded-full hover:bg-[#EAE3E199] transition-all ease">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.0833 2.25C14.725 2.25 16.5 4.76438 16.5 7.11C16.5 11.8603 9.13333 15.75 9 15.75C8.86667 15.75 1.5 11.8603 1.5 7.11C1.5 4.76438 3.275 2.25 5.91667 2.25C7.43333 2.25 8.425 3.01781 9 3.69281C9.575 3.01781 10.5667 2.25 12.0833 2.25Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <button className="bg-[#EAE3E199]/60 p-3 rounded-full hover:bg-[#EAE3E199] transition-all ease md:hidden">
                        <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="0.5" x2="14" y2="0.5" stroke="black"/>
                        <line y1="5.5" x2="14" y2="5.5" stroke="black"/>
                        <line y1="10.5" x2="14" y2="10.5" stroke="black"/>
                    </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
