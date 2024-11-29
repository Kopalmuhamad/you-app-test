import BackButton from "@/components/atoms/back-button"
import Container from "@/components/atoms/container"
import RegisterForm from "@/features/auth/components/register-form"
import Link from "next/link"

const RegisterPage = () => {
    return (
        <div className='relative'>
            <Container>
                <BackButton className='mt-10' />
                <div className='mt-10'>
                    <h1 className='text-2xl font-bold ml-6 mb-8'>Register</h1>
                    <RegisterForm />
                    <p className='text-sm text-center mt-12'>Have an account? <Link href="/login" className='bg-gradient-to-r from-[#93773e] from-10% via-[#f3eca5] via-50% to-[#d5bd86] to-100% bg-clip-text text-transparent'>Login Here</Link></p>
                </div>
            </Container>
        </div>
    )
}

export default RegisterPage