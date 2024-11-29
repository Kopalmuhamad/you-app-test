'use client'
import { Button } from '@/components/atoms/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/atoms/form'
import { Input } from '@/components/atoms/input'
import InputDate from '@/components/atoms/input-date'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/atoms/select'
import { setAboutData } from '@/store/slices/about-slicer'
import { RootState } from '@/store/store' // Ensure you have the RootState imported
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { z } from 'zod'

interface AboutData {
    username: string;
    gender: string;
    birthday: string; // ISO string format
    horoscope: string;
    zodiac: string;
    height: string;
    weight: string;
}

const formSchema = z.object({
    username: z.string().min(3, { message: "Userame must be at least 3 characters" }).max(20, { message: "Userame must be at most 20 characters" }),
    gender: z.string().min(3, { message: "Gender must be at least 3 characters" }).max(20, { message: "Gender must be at most 20 characters" }),
    birthday: z.date({
        required_error: "A date of birth is required.",
    }),
    horoscope: z.string().min(3, { message: "Horoscope must be at least 3 characters" }).max(20, { message: "Horoscope must be at most 20 characters" }),
    zodiac: z.string().min(3, { message: "Zodiac must be at least 3 characters" }).max(20, { message: "Zodiac must be at most 20 characters" }),
    height: z.string()
        .min(1, { message: "Height is required" })
        .transform((value) => (value === "" ? "" : Number(value)))
        .refine((value) => !isNaN(Number(value)), {
            message: "Please enter a valid number",
        }),
    weight: z.string()
        .min(1, { message: "Weight is required" })
        .transform((value) => (value === "" ? "" : Number(value)))
        .refine((value) => !isNaN(Number(value)), {
            message: "Please enter a valid number",
        }),
})

const ProfileAbout = () => {
    const [edit, setEdit] = useState<boolean>(false);
    const dispatch = useDispatch();
    const aboutData = useSelector((state: RootState) => state.about);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: aboutData.username || '',
            gender: aboutData.gender || '',
            birthday: aboutData.birthday ? new Date(aboutData.birthday) : undefined,
            horoscope: aboutData.horoscope || '',
            zodiac: aboutData.zodiac || '',
            height: aboutData.height ? Number(aboutData.height) : "",
            weight: aboutData.weight ? Number(aboutData.weight) : "",
        },
    });

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        if (JSON.stringify(data) !== JSON.stringify(aboutData)) {
            dispatch(setAboutData({
                ...data,
                birthday: data.birthday.toISOString(),
            }));
        }
        setEdit(false);
    };

    const isAboutDataValid = Object.values(aboutData).every(value => value !== '' && value !== undefined);

    return (
        <div className='rounded-2xl w-full h-full min-h-[150px] p-4 relative mt-4 grid grid-rows-[40px_auto] bg-[#162329]'>
            <header className='w-full flex items-center justify-between'>
                <h1 className='text-sm font-'>About</h1>
                {edit ?
                    <Button
                        variant="ghost"
                        className="bg-gradient-to-r from-[#93773e] via-[#f3eca5] to-[#d5bd86] bg-clip-text text-transparent"
                        onClick={form.handleSubmit(onSubmit)}
                    >
                        Save & Update
                    </Button>
                    :
                    <Button size="icon" variant="ghost" onClick={() => setEdit(true)}>
                        <svg
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9.3925 2.54987L3.57708 8.70528C3.3575 8.93903 3.145 9.39945 3.1025 9.7182L2.84042 12.0132C2.74833 12.842 3.34333 13.4086 4.165 13.267L6.44583 12.8774C6.76458 12.8207 7.21083 12.587 7.43042 12.3461L13.2458 6.1907C14.2517 5.1282 14.705 3.91695 13.1396 2.43654C11.5812 0.970285 10.3983 1.48737 9.3925 2.54987Z"
                                stroke="white"
                                strokeWidth="1.0625"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M8.42208 3.57715C8.72667 5.53215 10.3133 7.02673 12.2825 7.22506"
                                stroke="white"
                                strokeWidth="1.0625"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M2.125 15.5833H14.875"
                                stroke="white"
                                strokeWidth="1.0625"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Button>
                }
            </header>
            <div>
                {edit ?
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                name='username'
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className='grid grid-cols-[0.3fr_1fr] place-items-center justify-items-start gap-4'>
                                        <FormLabel className='text-nowrap col-start-1'>Username : </FormLabel>
                                        <FormControl>
                                            <Input placeholder='Create Username' placeholderPosition='right' {...field} variant='outline' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                            <FormField
                                control={form.control}
                                name="gender"
                                render={({ field }) => (
                                    <FormItem className='grid grid-cols-[0.3fr_1fr] place-items-center justify-items-start gap-4'>
                                        <FormLabel className='col-start-1'>Gender : </FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className={`col-start-2 h-9 bg-[#FFFFFF0F] border-[#FFFFFF38]`}>
                                                    <SelectValue placeholder="Male" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className={`bg-[#FFFFFF0F] border-[#FFFFFF38]`}>
                                                <SelectItem value="male">Male</SelectItem>
                                                <SelectItem value="femail">Female</SelectItem>
                                                <SelectItem value="Prefer not to say">Prefer not to say</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name='birthday'
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className='grid grid-cols-[0.3fr_1fr] place-items-center justify-items-start gap-4'>
                                        <FormLabel className='text-nowrap col-start-1'>Birthday : </FormLabel>
                                        <InputDate className='col-start-2' {...field} />
                                        <FormMessage />
                                    </FormItem>
                                )} />
                            <FormField
                                name='horoscope'
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className='grid grid-cols-[0.3fr_1fr] place-items-center justify-items-start gap-4'>
                                        <FormLabel className='text-nowrap col-start-1'>Horoscope : </FormLabel>
                                        <FormControl>
                                            <Input placeholder='Add Horoscope' placeholderPosition='right' {...field} variant='outline' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                            <FormField
                                name='zodiac'
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className='grid grid-cols-[0.3fr_1fr] place-items-center justify-items-start gap-4'>
                                        <FormLabel className='text-nowrap col-start-1'>Zodiac : </FormLabel>
                                        <FormControl>
                                            <Input placeholder='Add Zodiac' className='col-start-2' placeholderPosition='right' {...field} variant='outline' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                            <FormField
                                name='height'
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className='grid grid-cols-[0.3fr_1fr] place-items-center justify-items-start gap-4'>
                                        <FormLabel className='text-nowrap col-start-1'>Height : </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                placeholderPosition='right'
                                                placeholder="Height"
                                                {...field}
                                                inputMode="numeric"
                                                onInput={(e: React.FormEvent<HTMLInputElement>) => {
                                                    const input = e.target as HTMLInputElement;
                                                    input.value = input.value.replace(/[^0-9]/g, ""); // Allow only numeric characters
                                                    field.onChange(input.value); // Pass cleaned value to form state
                                                }} variant='outline' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                            <FormField
                                name='weight'
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className='grid grid-cols-[0.3fr_1fr] place-items-center justify-items-start gap-4'>
                                        <FormLabel className='text-nowrap col-start-1'>Weight : </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                placeholderPosition='right'
                                                placeholder="Weight"
                                                {...field}
                                                inputMode="numeric"
                                                onInput={(e: React.FormEvent<HTMLInputElement>) => {
                                                    const input = e.target as HTMLInputElement;
                                                    input.value = input.value.replace(/[^0-9]/g, ""); // Allow only numeric characters
                                                    field.onChange(input.value); // Pass cleaned value to form state
                                                }}
                                                variant='outline' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                        </form>
                    </Form >
                    :
                    (
                        isAboutDataValid ? (
                            <div className="grid gap-1">
                                {aboutData.birthday && (
                                    <p className="text-sm">
                                        <span className="font-semibold">Birthday: </span>
                                        {new Date(aboutData.birthday).toLocaleDateString()}
                                    </p>
                                )}
                                {aboutData.horoscope && (
                                    <p className="text-sm">
                                        <span className="font-semibold">Horoscope: </span>
                                        {aboutData.horoscope}
                                    </p>
                                )}
                                {aboutData.zodiac && (
                                    <p className="text-sm">
                                        <span className="font-semibold">Zodiac: </span>
                                        {aboutData.zodiac}
                                    </p>
                                )}
                                {aboutData.height && (
                                    <p className="text-sm">
                                        <span className="font-semibold">Height: </span>
                                        {aboutData.height}
                                    </p>
                                )}
                                {aboutData.weight && (
                                    <p className="text-sm">
                                        <span className="font-semibold">Weight: </span>
                                        {aboutData.weight}
                                    </p>
                                )}
                            </div>
                        )
                            :
                            <p className="text-sm text-grey-400">
                                Add in your your to help others know you
                                better
                            </p>
                    )
                }
            </div>
        </div>
    );
}

export default ProfileAbout;




