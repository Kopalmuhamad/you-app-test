import React from 'react'
import { format } from 'date-fns'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
import { FormControl } from './form'
import { Button } from './button'
import { CalendarIcon } from 'lucide-react'
import { Calendar } from './calendar'
import { cn } from '@/lib/utils'

interface DateInputProps {
    value: Date | undefined;
    onChange: (date: Date | undefined) => void;
    className?: string
}

const InputDate: React.FC<DateInputProps> = ({ value, onChange, className }) => {
    return (
        <Popover>
            <PopoverTrigger asChild className={className}>
                <FormControl>
                    <Button
                        variant={"outline"}
                        className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !value && "text-muted-foreground"
                        )}
                    >
                        {value && !isNaN(value.getTime()) ? (
                            format(value, "PPP")
                        ) : (
                            <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    mode="single"
                    selected={value}
                    onSelect={onChange}
                    disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}

export default InputDate