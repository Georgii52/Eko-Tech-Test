
export default function MainLoad () {

    return (
        <div className="
        w-full flex flex-col lg:flex-row items-start lg:items-center lg:justify-between px-[20px] md:px-[52px] pt-[69px] gap-[24px] z-[1]">
            <div className="">
                <p className="font-bold text-[24px] md:text-[32px] lg:text-[38px] xl:text-[42px]">Мы — лидеры рынка России<br></br> по строительству деревянных домов</p>
                <p className="text-[#4D4D4D] pt-[12px] text-[14px] font-medium md:text-[16px] xl:text-[18]">
                    Сами заготавливаем северный лес в Архангельской области, а потом строим дом «под ключ».
                    <br></br>
                    Построили 302 дома за 2024 год. Всего же за 26 лет построили свыше 5000 домов.
                </p>
            </div>
            <div className=
            "w-full font-medium lg:w-auto flex flex-col md:flex-row lg:flex-col gap-[10px] lg:items-center justify-center">
                <Button_Calc />
                <Button_Call />
            </div>
        </div>
    )
}

export function Button_Calc () {
    return (
        <div className="w-full">
            <button className="w-full lg:w-[280px] xl:w-[328px] bg-[#578C62] text-white py-[16px] sm:py-[18px] md:py-[21px] rounded-full text-[14px] sm:text-[15px] md:text-[16px] hover:bg-[#578C62]/90 transition-all ease">Рассчитать стоимость дома</button>
            <br></br>
        </div>
    )

}

export function Button_Call () {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <button className="w-full lg:w-[280px] xl:w-[328px] border-1 border-[#D7DBE2] text-black py-[16px] sm:py-[18px] md:py-[21px] mb-2 rounded-full text-[14px] sm:text-[15px] md:text-[16px] hover:bg-[#D7DBE2]/10">Задать вопрос в WhatsApp</button>
            <p className="text-[14px] md:text-[14px] text-[#00000080] text-center lg:text-left">Ответим в течение 10 минут</p>
        </div>
    )
}