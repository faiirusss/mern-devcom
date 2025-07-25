import { zodResolver } from "@hookform/resolvers/zod";
import { useAtom } from "jotai";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaGithub } from "react-icons/fa";
import { toast } from "sonner";
import { Button } from "../../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import {
  emailStorageAtom,
  tokenAtom,
  usernameStorage,
} from "../../../jotai/atoms";
import { profileFormSchema } from "../../../schemas/profile";
import { apiInstanExpress } from "../../../utils/apiInstance";
import EditProfileFormInner from "../components/EditProfileFormInner";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, githubProvider } from "../../../utils/firebase";

const SettingPage = () => {
  const form = useForm({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      websiteurl: "",
      location: "",
      bio: "",
    },
  });

  const [emailStorage] = useAtom(emailStorageAtom);
  const [token] = useAtom(tokenAtom);
  const [, setUsernameStorage] = useAtom(usernameStorage);
  const [profile, setProfile] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    if (profile) {
      form.setValue("name", profile.name ?? "");
      form.setValue("username", profile.username ?? "");
      form.setValue("email", profile.email ?? "");
      form.setValue("location", profile.location ?? "");
      form.setValue("websiteurl", profile.websiteurl ?? "");
      form.setValue("bio", profile.bio ?? "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile]);

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

  const handleUpdateSetting = async (values) => {
    setIsSubmit(true);
    if (emailStorage && token) {
      try {
        const updateProfile = await apiInstanExpress.post("settings", {
          email: emailStorage,
          token: token,
          data: values,
        });
        setUsernameStorage(values.username);

        if (updateProfile.status !== 201) {
          toast.error("Update profile failed!", {
            position: "top-right",
          });
          setIsSubmit(false);
          return;
        }

        setTimeout(() => {
          toast.success("Update profile success!", {
            position: "top-right",
          });
          setIsSubmit(false);
        }, 2000);

        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } catch (error) {
        setIsSubmit(false);
        console.log(error);
      }
    }
  };

  const connectWithGithub = async () => {
    try {
      await signInWithPopup(auth, githubProvider);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <h1 className="font-semibold text-xl">@{profile.username}</h1>
      <div className="bg-background mt-5 p-4 rounded-md">
        <Button onClick={connectWithGithub} className="w-full cursor-pointer">
          <FaGithub />
          Connect GitHub Account
        </Button>
      </div>
      <div className="bg-background mt-5 p-4 rounded-md">
        <EditProfileFormInner profile={profile} />
      </div>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleUpdateSetting)}>
            {/* box user */}
            <div className="bg-background mt-5 p-4 rounded-md">
              <div className="space-y-4">
                <h1 className="text-2xl font-bold">User</h1>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john.doe@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="johndoe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* box basic */}
            <div className="bg-background mt-5 p-4 rounded-md">
              <div className="space-y-4">
                <h1 className="text-2xl font-bold">Basic</h1>
                <FormField
                  control={form.control}
                  name="websiteurl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Website URL</FormLabel>
                      <FormControl>
                        <Input placeholder="https://yoursite.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input placeholder="Jakarta, Indonesia" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bio</FormLabel>
                      <FormControl>
                        <Textarea {...field} placeholder="A short bio..." />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* box button */}
            <div
              className="bg-background mt-5 p-4 rounded-md"
              // className={`${
              //   form.formState.isDirty
              //     ? "absolute w-full bottom-0 bg-background mt-5 py-6 px-4 rounded-md"
              //     : "bg-background mt-5 py-6 px-4 rounded-md"
              // }`}
            >
              {isSubmit ? (
                <Button disabled type="submit" className="w-full">
                  <Loader2 className="animate-spin" />
                  Please wait
                </Button>
              ) : (
                <Button
                  disabled={!form.formState.isDirty}
                  type="submit"
                  className="w-full cursor-pointer"
                >
                  Save Profile Information
                </Button>
              )}
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default SettingPage;
