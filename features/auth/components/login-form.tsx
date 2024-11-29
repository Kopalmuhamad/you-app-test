'use client'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/atoms/form'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/atoms/input'
import { Button } from '@/components/atoms/button'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { loginSchema, useLogin } from '../hooks/use-login'


const LoginForm = () => {
    const [visible, setVisible] = useState<boolean>(false)

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const { mutate: fetchLogin } = useLogin()

    const onSubmit = (data: z.infer<typeof loginSchema>) => {
        fetchLogin(data)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    name="email"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem className=''>
                            <Input type='email' placeholder="Enter Username/Email" size='lg' {...field} />
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name="password"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem className=''>
                            <div className='relative'>
                                <Input type={'password'} placeholder="Enter Password" size='lg' {...field} />
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type='submit' className='w-full' size={"xl"}>Login</Button>
            </form>
        </Form >
    )
}

export default LoginForm