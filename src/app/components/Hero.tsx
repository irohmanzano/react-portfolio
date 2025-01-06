import React, { useRef, RefObject } from 'react'
import Button from "./Button";
import { motion, useScroll, useTransform } from "motion/react";


function Hero({ref}: {ref: RefObject<HTMLDivElement | null>}) {
    const hero = useRef(null);
    const { scrollYProgress } = useScroll({
        target: hero,
        offset: ['start start', 'end start']
    });
    const bgZoom = useTransform(scrollYProgress, [0, 1], ['100%', '130%']);

    return (
        <>
            <div
                ref={hero}
                className="h-screen"
                style={{
                    fontFamily: 'Space Mono, monospace',
                    color: 'white'
                }}
            >
                <motion.div
                    className="w-full h-full flex flex-col justify-between items-center py-32"
                    style={{
                        backgroundImage: 'url(/blackhole.jpg)',
                        backgroundSize: bgZoom,
                        backgroundPosition: 'center'
                    }}
                >
                    <div
                        className="text-center"
                    >
                        <span
                            className="flex items-center justify-center text-lg"
                        >
                            <svg className="w-5 h-5 text-red-600 dark:text-red-600 inline mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clipRule="evenodd"/>
                            </svg>Philippines
                        </span>
                        <span
                            className="text-2xl"
                        >
                            Hi, I&apos;m <span style={{color: 'yellow', textShadow: '0 0 16px rgba(255, 255, 0, 0.8)'}}>IROH MANZANO</span><br/>
                        </span>
                        <span
                            className="text-4xl"
                        >
                            <span style={{color: 'yellow', textShadow: '0 0 16px rgba(255, 255, 0, 0.8)'}}>Full-Stack Web Developer</span> Specializing in <span style={{color: 'yellow', textShadow: '0 0 16px rgba(255, 255, 0, 0.8)'}}>MERN</span>
                        </span>
                    </div>
                    <div>
                        <Button text='Blast Off 🚀' ref={ref}/>
                    </div>
                    <span
                        className="bottom-6 absolute"
                    >
                        P.S Space is cool :)
                    </span>
                </motion.div>
            </div>
        </>
    )
}

export default Hero