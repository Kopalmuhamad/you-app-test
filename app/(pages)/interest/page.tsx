import BackButton from "@/components/atoms/back-button"
import { Button } from "@/components/atoms/button"
import Container from "@/components/atoms/container"

const Interest = () => {
    return (
        <div className="w-full">
            <Container>
                <header className="flex items-center justify-between mt-10">
                    <BackButton />
                    <Button size={"icon"} variant={"ghost"} className="text-[#ABFFFD]">
                        Save
                    </Button>
                </header>
                <div className="mt-20">
                    <h1 className="bg-gradient-to-r from-[#93773e] from-10% via-[#f3eca5] via-50% to-[#d5bd86] to-100% bg-clip-text text-transparent text-xl font-bold">Tell everyone about your self</h1>
                    <h1 className="text-2xl font-bold mt-3">What Interest You?</h1>

                </div>
            </Container>
        </div>
    )
}

export default Interest