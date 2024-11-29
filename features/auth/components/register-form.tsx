'use client';
import { Form, FormField, FormItem, FormMessage } from '@/components/atoms/form';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { registerSchema, useRegister } from '../hooks/use-register';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/atoms/input';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { Button } from '@/components/atoms/button';

const RegisterForm = () => {
    const [visible, setVisible] = useState<boolean>(false);

    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    });

    const { mutate: fetchRegister } = useRegister();

    const onSubmit = (data: z.infer<typeof registerSchema>) => {
        fetchRegister(data);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
                <FormField
                    name="email"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <Input size="lg" type="email" placeholder="Enter Email" {...field} />
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name="username"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <Input size="lg" type="text" placeholder="Create Username" {...field} />
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name="password"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem >
                            <Input
                                size="lg"
                                type={'password'}
                                placeholder="Create Password"
                                {...field}
                            />
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name="confirmPassword"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <Input
                                size="lg"
                                type={'password'}
                                placeholder="Confirm Password"
                                {...field}
                            />
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full mt-6" size="xl">
                    Register
                </Button>
            </form>
        </Form>
    );
};

export default RegisterForm;
