import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { CiHashtag } from "react-icons/ci";
import { FaBirthdayCake, FaGithub } from "react-icons/fa";
import { IoChatboxOutline, IoNewspaperOutline } from "react-icons/io5";
import AuthRoute from "../../../components/layouts/AuthRoute";
import { PageContainer } from "../../../components/layouts/PageContainer";
import { SectionContainer } from "../../../components/layouts/SectionContainer";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";
import { Button } from "../../../components/ui/button";
import {
  createdAt,
  emailStorageAtom,
  profilePicture,
  tokenAtom,
  usernameStorage,
} from "../../../jotai/atoms";
import { apiInstanExpress } from "../../../utils/apiInstance";
import { ExternalLink, MapPinned } from "lucide-react";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const [username] = useAtom(usernameStorage);
  const [emailStorage] = useAtom(emailStorageAtom);
  const [token] = useAtom(tokenAtom);
  const [createdAtAtom] = useAtom(createdAt);
  const [profilePictureStorage] = useAtom(profilePicture);

  const [profile, setProfile] = useState([]);
  const [moreInfo, setMoreInfo] = useState(false);

  const handleGetUserProfile = async () => {
    try {
      const url = `settings/${emailStorage}/${token}`;
      const getProfile = await apiInstanExpress.get(url);
      if (getProfile.status === 200) return getProfile.data;
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    if (emailStorage && token) {
      handleGetUserProfile().then((result) => {
        setProfile(result.data);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emailStorage, token]);

  return (
    <AuthRoute>
      <PageContainer withFooter={false}>
        <div className="bg-foreground w-full h-10 md:h-32 relative md:px-2">
          <Avatar className="absolute top-8 -translate-y-1/2 md:top-1/2 md:-translate-y-1/2 md:left-1/2 md:-translate-x-1/2 left-4 border-foreground border-4 md:border-8 size-16 md:size-32 z-10 mt-2">
            <AvatarImage
              src={profilePictureStorage ?? ""}
              alt=""
              className="object-cover"
            />
            <AvatarFallback>{emailStorage?.[0].toUpperCase()}</AvatarFallback>
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
              <h1 className="text-2xl md:text-3xl font-extrabold">
                {username}
              </h1>
              <p>{profile.bio ? profile.bio : "404 bio not found"}</p>
              <div className="flex text-foreground/70 text-sm gap-8 mt-4">
                {profile.location ? (
                  <p className="flex gap-2 items-center">
                    <MapPinned size={20} />
                    {profile.location}
                  </p>
                ) : (
                  ""
                )}
                <p className=" flex items-center gap-2 ">
                  <FaBirthdayCake size={20} /> Joined on {createdAtAtom}{" "}
                </p>
                {profile.websiteurl ? (
                  <Link
                    to={"https://www.fairuss.my.id"}
                    className="flex items-center gap-2"
                  >
                    <ExternalLink size={20} />
                    {profile.websiteurl}
                  </Link>
                ) : (
                  ""
                )}
                <FaGithub size={20} />
              </div>
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
    </AuthRoute>
  );
};

export default ProfilePage;
