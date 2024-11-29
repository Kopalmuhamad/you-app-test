'use client'
import { Badge } from '@/components/atoms/badge';
import { Button } from '@/components/atoms/button'
import { RootState } from '@/store/store';
import React from 'react'
import { useSelector } from 'react-redux';

const ProfileImage = () => {
    const aboutData = useSelector((state: RootState) => state.about);
    const isAboutDataValid = Object.values(aboutData).every(value => value !== '' && value !== undefined);
    return (
        <div className='rounded-2xl w-full h-full min-h-[250px] flex items-end justify-start p-4 relative mt-8 bg-[#162329]'>
            <Button size={"icon"} variant={"ghost"} className='absolute top-2 right-2'>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.3925 2.54987L3.57708 8.70528C3.3575 8.93903 3.145 9.39945 3.1025 9.7182L2.84042 12.0132C2.74833 12.842 3.34333 13.4086 4.165 13.267L6.44583 12.8774C6.76458 12.8207 7.21083 12.587 7.43042 12.3461L13.2458 6.1907C14.2517 5.1282 14.705 3.91695 13.1396 2.43654C11.5812 0.970285 10.3983 1.48737 9.3925 2.54987Z" stroke="white" strokeWidth="1.0625" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8.42208 3.57715C8.72667 5.53215 10.3133 7.02673 12.2825 7.22506" stroke="white" strokeWidth="1.0625" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2.125 15.5833H14.875" stroke="white" strokeWidth="1.0625" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </Button>
            <div className='flex items-start justify-end flex-col gap-y-2'>
                <h1 className='mt-auto font-semibold text-base'>@{aboutData.username}</h1>
                <p>{aboutData.gender}</p>
                <div className="flex items-center justify-start gap-x-3">
                    <Badge>
                        {aboutData.horoscope}
                    </Badge>
                    <Badge>
                        {aboutData.zodiac}
                    </Badge>
                </div>
            </div>
        </div>
    )
}

export default ProfileImage