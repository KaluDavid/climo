import React from 'react'
import house from "/img/housez.svg"
export default function Home() {
    return (
        <>
            <main className="sm:bg-gradient-to-bl  sm:from-[#45278B] sm:to-[#2E335A] sm:h-full h-screen flex items-center justify-center w-full text-center sm:text-left">
                <div className="flex bg-no-repeat bg-cover bg-center  w-full h-full sm:h-[844px] sm:w-[390px] round-[44px] bg-[url('/img/homeBg.svg')]">
                    <section className='text-center text-white'>
                        <h2 className='font-normal text-[34px] leading-[41px]'>Montreal</h2>
                        <h1 className='font-extralight text-[96px] leading-[70px] '>19°</h1>
                        <span className='flex items-center flex-col gap-[2px]' >
                            <h3>Mostly Clear</h3>
                            <h3 className='flex gap-1 text-xl font-semibold  '><b>H:24°</b> <b>L:18°</b> </h3>
                        </span>
                    </section>
                    <img src={house} alt="house image" className="w-[390px] h-[390px] object-contain" />
                </div>

            </main>
        </>
    )
}
