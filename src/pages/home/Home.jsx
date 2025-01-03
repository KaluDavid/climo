import React from 'react'
import { Weather } from './components/Weather'
import { WeatherForeCast } from './components/WeatherForeCast'
export default function Home() {
    return (
        <>
            <main className="sm:bg-gradient-to-bl  sm:from-[#45278B] sm:to-[#2E335A] sm:h-full h-screen flex items-center justify-center w-full text-center sm:text-left text-sans">
                <div className="flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center  w-full h-full sm:h-[844px] sm:w-[390px] round-[44px] bg-[url('/img/homeBg.svg')]">
                    <Weather />
                    <WeatherForeCast />
                </div >
            </main>
        </>
    )
}
