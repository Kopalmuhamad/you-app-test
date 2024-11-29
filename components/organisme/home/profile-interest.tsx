import { Button, buttonVariants } from '@/components/atoms/button'
import Link from 'next/link'
import React from 'react'

const ProfileInterest = () => {
    return (
        <div className='rounded-2xl w-full h-full min-h-[150px] p-4 relative mt-4 grid grid-rows-[40px_auto] bg-[#162329]'>
            <header className='w-full flex items-center justify-between'>
                <h1 className='text-sm font-'>Interest</h1>
                <Link href={'/interest'} className={buttonVariants({ size: "icon", variant: "ghost" })}>
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.3925 2.54987L3.57708 8.70528C3.3575 8.93903 3.145 9.39945 3.1025 9.7182L2.84042 12.0132C2.74833 12.842 3.34333 13.4086 4.165 13.267L6.44583 12.8774C6.76458 12.8207 7.21083 12.587 7.43042 12.3461L13.2458 6.1907C14.2517 5.1282 14.705 3.91695 13.1396 2.43654C11.5812 0.970285 10.3983 1.48737 9.3925 2.54987Z" stroke="white" strokeWidth="1.0625" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.42208 3.57715C8.72667 5.53215 10.3133 7.02673 12.2825 7.22506" stroke="white" strokeWidth="1.0625" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2.125 15.5833H14.875" stroke="white" strokeWidth="1.0625" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
            </header>
            <div>
                <p className='text-sm text-[#FFFFFF85]'>
                    Add in your interest to find a better match
                </p>
            </div>
        </div>
    )
}

export default ProfileInterest