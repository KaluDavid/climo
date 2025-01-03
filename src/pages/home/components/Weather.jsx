import React from 'react'
import house from "/img/housez.svg"

export function Weather() {
    return (
        <>
            <section className='flex items-center flex-col gap-4 text-center justify-center text-center text-white '>
                <h2 className='font-[400] text-[34px] leading-[41px]'>Montreal</h2>
                <h1 className='font-extralight text-[96px] leading-[70px] tracking-wider'>19°</h1>
                <span className='flex items-center flex-col gap-[2px] tracking-widest ' >
                    <h3 className="text-xl font-semibold leading-6 text-grayishLavender">Mostly Clear</h3>
                    <h3 className='flex gap-1 text-xl font-semibold  '><b>H:24°</b> <b>L:18°</b> </h3>
                </span>
            </section>
            <img src={house} alt="house image" className="w-[390px] h-[390px] object-contain" />
        </>
    )
}
