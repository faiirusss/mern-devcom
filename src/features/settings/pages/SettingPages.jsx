import { useAtom } from "jotai"
import { FcManager, FcPrivacy } from "react-icons/fc"
import { PageContainer } from "../../../components/layouts/PageContainer"
import { SectionContainer } from "../../../components/layouts/SectionContainer"
import { Button } from "../../../components/ui/button"
import { emailStorageAtom } from "../../../jotai/atoms"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../../../components/ui/form"
import { Input } from "../../../components/ui/input"
import { Textarea } from "../../../components/ui/textarea"
import { Label } from "../../../components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar"

const SettingPage = () => {
    const form = useForm()
    const [email,] = useAtom(emailStorageAtom)
    if (!email) {
        return <p className="text-center mt-10">Loading or not logged in...</p>; // atau redirect ke login jika perlu
    }
    const username = email.split("@")[0]
    return (
        <PageContainer withFooter={false}>
            <SectionContainer
            padded
            className="min-h-[calc(100vh-144px)] w-full mx-auto max-w-5xl mt-7"
            >
            <div className="grid grid-cols-4 grid-rows-4 gap-4">
                <div className="">
                    <Button className="w-full justify-start bg-background font-semibold" variant={"ghost"}>
                        <FcManager />
                        Profile
                    </Button>
                    <Button className="w-full justify-start" variant={"ghost"}>
                        <FcPrivacy />
                        Account
                    </Button>
                </div>
                <div className="col-span-3">
                    <div>@{username}</div>
                    <div className="bg-background mt-5 p-4 rounded-md">
                        <h1 className="text-2xl font-bold">User</h1>
                        <div className="flex flex-col gap-y-4 mt-5">
                            <Form {...form}>
                                <form className="flex flex-col gap-y-4">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={(field) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="shadcn" {...field} />
                                        </FormControl>
                                        <FormDescription />
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={(field) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="email@gmail.com" {...field} />
                                        </FormControl>
                                        <FormDescription />
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={(field) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input placeholder="username" {...field} />
                                        </FormControl>
                                        <FormDescription />
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />
                                </form>
                            </Form>
                            <div className="space-y-6">
                                <Label htmlFor="picture">Profile image</Label>
                                <div className="flex items-center gap-4">
                                    <Avatar className="size-12">
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <Input id="picture" accept="image/*" type="file"/>           
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-background mt-5 p-5 rounded-md">
                        <h1 className="text-2xl font-bold">Basic</h1>
                        <div className="flex flex-col gap-y-4 mt-5">
                            <Form {...form}>
                                <form className="flex flex-col gap-y-4">
                                <FormField
                                    control={form.control}
                                    name="websiteuri"
                                    render={(field) => (
                                    <FormItem>
                                        <FormLabel>Website URL</FormLabel>
                                        <FormControl>
                                            <Input placeholder="https://yoursite.com" {...field} />
                                        </FormControl>
                                        <FormDescription />
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="bio"
                                    render={(field) => (
                                    <FormItem>
                                        <FormLabel>Bio</FormLabel>
                                        <FormControl>
                                           <Textarea placeholder="A short bio..." {...field}/>
                                        </FormControl>
                                        <FormDescription />
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />
                                </form>
                            </Form>
                        </div>
                    </div>

                    <div className="bg-background mt-5 p-5 rounded-md">
                        <Button className="w-full">Save Profile Information</Button>
                    </div>
                </div>
            </div>
            </SectionContainer>
        </PageContainer>
       
    )
}

export default SettingPage