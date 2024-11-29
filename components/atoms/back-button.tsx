'use client'
import { ChevronLeft } from 'lucide-react'
import React from 'react'
import { Button } from './button'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

const BackButton = ({ className }: { className?: string }) => {
    const router = useRouter()
    return (
        <Button className={cn(className, "")} onClick={() => router.back()} variant={"link"}>
            <ChevronLeft />
            Back
        </Button>)
}

export default BackButton