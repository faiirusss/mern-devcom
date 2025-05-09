import { useAuthState } from "react-firebase-hooks/auth"
import { PageContainer } from "../../../components/layouts/PageContainer"
import { SectionContainer } from "../../../components/layouts/SectionContainer"
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar"
import { auth } from "../../../utils/firebase"
import { IoNewspaperOutline } from "react-icons/io5";
import { IoChatboxOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import { CiHashtag } from "react-icons/ci";
import { Button } from "../../../components/ui/button"

const ProfilePage = () => {
    const [user] = useAuthState(auth)
    if (!user) {
        return <p className="text-center mt-10">Loading or not logged in...</p>; // atau redirect ke login jika perlu
    }
    const username = user.email.split("@")[0];

    return (
        <PageContainer withFooter={false}>
            <div className="bg-foreground w-full h-32 relative">
                <Avatar className="absolute top-0 left-1/2 -translate-x-1/2 border-foreground border-8 size-32 z-10 mt-2">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <SectionContainer padded className="flex absolute bg-background lg:max-w-screen-lg rounded-md top-18 left-1/2 -translate-x-1/2 h-[255px] w-full flex-col justify-center mx-auto">
                    <Button className="absolute top-6 right-6">Edit Profile</Button>
                    <div className="flex flex-col gap-2 justify-center items-center mt-12">
                        <h1 className="text-3xl font-extrabold">{username}</h1>
                        <p>404 bio not found</p>
                        <p className="text-sm mt-4 flex items-center gap-2"><FaBirthdayCake size={20}/> Joined on Jun 25, 2024 <FaGithub size={20}/></p>
                    </div>
                    <div className="bg-background absolute -bottom-38 max-w-1/3 w-full left-0 rounded-md px-4">
                        <div className="flex flex-col space-y-4 py-4 text-foreground/80">
                            <p className="flex items-center gap-2"><IoNewspaperOutline size={20}/>0 posts published</p>
                            <p className="flex items-center gap-2"><IoChatboxOutline size={20}/>0 comments written</p>
                            <p className="flex items-center gap-2"><CiHashtag size={20}/> 0 tags followed</p>
                        </div>
                    </div>
                </SectionContainer>
            </div>
        </PageContainer>
    )
}

export default ProfilePage