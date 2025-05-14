import { useAtom } from "jotai";
import { useState } from "react";
import { CiHashtag } from "react-icons/ci";
import { FaBirthdayCake, FaGithub } from "react-icons/fa";
import { IoChatboxOutline, IoNewspaperOutline } from "react-icons/io5";
import { PageContainer } from "../../../components/layouts/PageContainer";
import { SectionContainer } from "../../../components/layouts/SectionContainer";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";
import { Button } from "../../../components/ui/button";
import { usernameStorage } from "../../../jotai/atoms";

const ProfilePage = () => {
  const [username] = useAtom(usernameStorage);
  const [moreInfo, setMoreInfo] = useState(false);

  return (
    <PageContainer withFooter={false}>
      <div className="bg-foreground w-full h-10 md:h-32 relative md:px-2">
        <Avatar className="absolute top-8 -translate-y-1/2 md:top-1/2 md:-translate-y-1/2 md:left-1/2 md:-translate-x-1/2 left-4 border-foreground border-4 md:border-8 size-16 md:size-32 z-10 mt-2">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <SectionContainer
          padded
          className={`${
            moreInfo
              ? "flex absolute bg-background md:rounded-md top-10 md:top-18 left-1/2 -translate-x-1/2 h-[208px] md:h-[255px] w-full max-w-[992px] lg:px-0 flex-col justify-center"
              : "flex absolute bg-background md:rounded-md top-10 md:top-18 left-1/2 -translate-x-1/2 h-72 md:h-[255px] w-full max-w-[992px] lg:px-0 flex-col justify-center"
          } `}
        >
          <a href={"/settings"}>
            <Button className="absolute top-6 right-6 cursor-pointer">
              Edit Profile
            </Button>
          </a>
          <div className="flex flex-col gap-2 justify-center md:items-center md:mt-12">
            <h1 className="text-2xl md:text-3xl font-extrabold">{username}</h1>
            <p>404 bio not found</p>
            <p className="text-sm mt-4 flex items-center gap-2">
              <FaBirthdayCake size={20} /> Joined on Jun 25, 2024{" "}
              <FaGithub size={20} />
            </p>
          </div>
          <Button
            className={`${
              moreInfo
                ? "hidden relative top-12"
                : "block md:hidden relative top-12"
            }`}
            variant={"outline"}
            onClick={() => setMoreInfo(true)}
          >
            More info about {username}
          </Button>
          <div
            className={`${
              moreInfo
                ? "bg-background md:block absolute -bottom-38 md:max-w-1/3 w-full left-0 rounded-md px-4"
                : "bg-background hidden md:block absolute -bottom-38 max-w-1/3 w-full left-0 rounded-md px-4"
            }`}
          >
            <div className="flex flex-col space-y-4 py-4 text-foreground/80">
              <p className="flex items-center gap-2">
                <IoNewspaperOutline size={20} />0 posts published
              </p>
              <p className="flex items-center gap-2">
                <IoChatboxOutline size={20} />0 comments written
              </p>
              <p className="flex items-center gap-2">
                <CiHashtag size={20} /> 0 tags followed
              </p>
            </div>
          </div>
        </SectionContainer>
      </div>
    </PageContainer>
  );
};

export default ProfilePage;
