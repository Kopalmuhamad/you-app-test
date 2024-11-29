import BackButton from "@/components/atoms/back-button";
import { Button } from "@/components/atoms/button";
import Container from "@/components/atoms/container";
import ProfileAbout from "@/components/organisme/home/profile-about";
import ProfileImage from "@/components/organisme/home/profile-image";
import ProfileInterest from "@/components/organisme/home/profile-interest";

const HomePage = () => {
  return (
    <div className="w-full">
      <Container>
        <header className="grid grid-cols-3 place-items-center mt-10">
          <BackButton />
          <h1>@username</h1>
          <Button size={"icon"} variant={"ghost"}>
            <svg width="22" height="7" viewBox="0 0 22 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="3.20728" width="4.5358" height="4.5358" rx="1" transform="rotate(-45 0 3.20728)" fill="white" />
              <rect x="7.41504" y="3.20752" width="4.5358" height="4.5358" rx="1" transform="rotate(-45 7.41504 3.20752)" fill="white" />
              <rect x="14.8301" y="3.20752" width="4.5358" height="4.5358" rx="1" transform="rotate(-45 14.8301 3.20752)" fill="white" />
            </svg>
          </Button>
        </header>
        <ProfileImage />
        <ProfileAbout />
        <ProfileInterest />
      </Container>
    </div>
  );
}

export default HomePage