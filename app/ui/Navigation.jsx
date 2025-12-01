'use client'
import Image from "next/image"
import Logo from '@/public/logo.png'
import SmallArrow from "./shared/SmallArrow"
import { useState, useEffect } from "react"

export default function Navigation () {
    const [isOpen, setIsOpen] = useState (false)
    const [isDisabled, setIsDisabled] = useState (false)
    const maxBreakpoint = 1266

    const handleClick = () => {
        setIsOpen (prev => !prev)
    }

    useEffect (() => {  
        const check = () => {
            const inactive = (window.innerWidth >= maxBreakpoint)
            setIsDisabled(inactive)
            if (inactive && isOpen) {
                setIsOpen(false)
            }
        }

        check ()
        window.addEventListener('resize', check)
        return () => window.removeEventListener('resize', check)
    }, [isOpen, maxBreakpoint])

    return (
        <div className="flex flex-row pt-[16px] px-[20px] md:px-[50px] items-center justify-start w-full font-medium text-black">
            <Image src={Logo} width={140} alt="Company logo" />
            <div className="hidden md:block flex-row px-[16px] relative">
                <button onClick={()=>handleClick()} disabled={isDisabled} className="md:flex-start flex flex-row items-center bg-[#EAE3E199]/60 px-[20px] gap-1 rounded-full py-2 hover:bg-[#EAE3E199] transition-all ease text-[16px]">
                    <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="0.5" x2="14" y2="0.5" stroke="black"/>
                        <line y1="5.5" x2="14" y2="5.5" stroke="black"/>
                        <line y1="10.5" x2="14" y2="10.5" stroke="black"/>
                    </svg>
                    Меню
                </button>
                <DropDownMenu isOpen={isOpen} />
            </div>
            <div className="hidden xl:flex flex-row flex-1 items-center justify-start gap-4">
                <button className="flex flex-row items-center gap-[3px] text-[16px]">
                    Проекты
                    <SmallArrow />
                </button>
                <button className="text-[16px]">Наше производство</button>
                <button className="flex flex-row items-center gap-[3px] text-[16px]">
                    Фото и видео
                    <SmallArrow />
                </button>
                <button className="text-[16px]">Новости</button>
                <button className="flex flex-row items-center gap-[3px] text-[16px]">
                    Для клиентов
                    <SmallArrow />
                </button>
                <button className="flex flex-row items-center gap-[3px] text-[16px]">
                    О компании
                    <SmallArrow />
                </button>
                <button className="flex flex-row items-center gap-[3px] text-[16px]">
                    Услуги
                    <SmallArrow />
                </button>
            </div>
            <div className="ml-auto">
                <div className="flex flex-row items-center justify-end gap-[8px]">
                    <a href="tel:88003339191" className="hidden md:block text-[18px] hover:border-b-1 transition-all ease whitespace-nowrap">8 (800) 333-91-91</a>
                    <a href="tel:88003339191" className="md:hidden bg-[#EAE3E199]/60 p-2 rounded-full hover:bg-[#EAE3E199] transition-all ease">
                        <SmallArrow />
                    </a>
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
                    <button onClick={()=>handleClick()} disabled={isDisabled} className="bg-[#EAE3E199]/60 p-3 rounded-full hover:bg-[#EAE3E199] transition-all ease md:hidden relative">
                    <DropDownMenuSmall isOpen={isOpen} />
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

export function DropDownMenu ({ isOpen }) {
    return (
        <div className={`
        absolute z-10 bg-gray-100 w-[150%] rounded-2xl
        flex flex-col gap-2 px-5 py-2 items-start justify-between
        transition-all duration-300 ease-out
        origin-top-left
        ${isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}
        `}> 
            <a href="./">
                <p className="flex flex-row items-center justify-start gap-2">
                    Проекты
                    <SmallArrow />
                </p>
            </a>
            <a href="./">
                <p className="flex flex-row items-center justify-start gap-2">
                    Фото и видео
                    <SmallArrow />
                </p>
            </a>
            <a href="./">
                <p className="flex flex-row items-center justify-start gap-2">
                    Для клиентов
                    <SmallArrow />
                </p>
            </a>
            <a href="./">
                <p className="flex flex-row items-center justify-start gap-2">
                    О компании
                    <SmallArrow />
                </p>
            </a>
            <a href="./">
                <p className="flex flex-row items-center justify-start gap-2">
                    Услуги
                    <SmallArrow />
                </p>
            </a>
        </div>
    )
}

export function DropDownMenuSmall ({ isOpen }) {
    return (
        <div className={`
        absolute right-0 top-10 z-10 bg-gray-100 w-[450%] rounded-2xl
        flex flex-col gap-2 px-5 py-2 items-start justify-between
        transition-all duration-300 ease-out
        origin-top-right
        ${isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}
        `}> 
            <a href="./">
                <p className="flex flex-row items-center justify-start gap-2">
                    Проекты
                    <SmallArrow />
                </p>
            </a>
            <a href="./">
                <p className="flex flex-row items-center justify-start gap-2">
                    Фото и видео
                    <SmallArrow />
                </p>
            </a>
            <a href="./">
                <p className="flex flex-row items-center justify-start gap-2">
                    Для клиентов
                    <SmallArrow />
                </p>
            </a>
            <a href="./">
                <p className="flex flex-row items-center justify-start gap-2">
                    О компании
                    <SmallArrow />
                </p>
            </a>
            <a href="./">
                <p className="flex flex-row items-center justify-start gap-2">
                    Услуги
                    <SmallArrow />
                </p>
            </a>
        </div>
    )
}