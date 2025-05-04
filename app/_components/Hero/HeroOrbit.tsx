import React from 'react'
import { twMerge } from 'tailwind-merge'

const HeroOrbit = ({
    children,
    size,
    rotation,
    spinDuration,
    shouldSpin,
    shouldOrbit = false,
    obitDuration }: React.PropsWithChildren<{
        size: number;
        rotation: number;
        obitDuration?: string,
        spinDuration?: string
        shouldSpin?: boolean,
        shouldOrbit?: boolean
    }>) => {
    return (
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20'>
            <div className={twMerge(shouldOrbit === true && 'animate-spin')}
                style={{
                    animationDuration: obitDuration
                }}
            >
                <div className='flex items-start justify-start '
                    style={{
                        transform: `rotate(${rotation}deg)`,
                        height: `${size}px`,
                        width: `${size}px`
                    }}
                >
                    <div className={twMerge(shouldSpin === true && 'animate-spin')}
                    style={{
                        animationDuration: spinDuration
                    }}
                    >
                        <div className='inline-flex '
                            style={{
                                transform: `rotate(${rotation * -1}deg)`
                            }}
                        >
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroOrbit