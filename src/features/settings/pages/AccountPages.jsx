import { useEffect, useState } from "react";
import { Button } from "../../../components/ui/button";
import { FaGithub } from "react-icons/fa";
import { useAtom } from "jotai";
import { emailStorageAtom, tokenAtom } from "../../../jotai/atoms";
import { apiInstanExpress } from "../../../utils/apiInstance";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const AccountPages = () => {
  const form = useForm();
  const [profile, setProfile] = useState([]);
  const [emailStorage] = useAtom(emailStorageAtom);
  const [tokenStorage] = useAtom(tokenAtom);

  const handleGetUserProfile = async () => {
    try {
      const url = `settings/${emailStorage}/${tokenStorage}`;
      const getProfile = await apiInstanExpress.get(url);
      if (getProfile.status === 200) return getProfile.data;
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    if (emailStorage && tokenStorage) {
      handleGetUserProfile().then((result) => {
        setProfile(result.data);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emailStorage, tokenStorage]);

  return (
    <>
      <h1 className="font-semibold text-xl">@{profile.username}</h1>
      <div className="bg-background mt-5 p-4 rounded-md">
        <Button className="w-full cursor-pointer">
          <FaGithub />
          Connect GitHub Account
        </Button>
      </div>
      <Form {...form}>
        <form>
          <div className="bg-background mt-5 p-4 rounded-md">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Set new password</h1>
              <p className="text-foreground/70">
                If your account was created using social account authentication,
                you may prefer to add an email log in. If you signed up with a
                social media account,{" "}
                <Link to={"/"} className="text-purple-500">
                  please reset the password
                </Link>{" "}
                for your primary email address ({profile.email}) in order to
                enable this. Please note that email login is in addition to
                social login rather than a replacement for it, so your
                authenticated social account will continue to be linked to your
                account.
              </p>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="newpass"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmpass"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm new password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button>Set New Password</Button>
            </div>
          </div>
          <div className="bg-background mt-5 p-4 rounded-md">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Account emails</h1>
              <div className="flex flex-col gap-3">
                <div className="flex gap-4">
                  <span className="font-bold text-foreground/50">
                    Primary email
                  </span>
                  <p>{profile.email}</p>
                </div>
                <div className="flex gap-4">
                  <span className="font-bold text-foreground/50">
                    Google email
                  </span>
                  <p>{profile.email}</p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </>
  );
};

export default AccountPages;
