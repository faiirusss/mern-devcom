import { useEffect, useState } from "react";
import { Button } from "../../../components/ui/button";
import { FaGithub } from "react-icons/fa";
import { useAtom } from "jotai";
import { emailStorageAtom, tokenAtom } from "../../../jotai/atoms";
import { apiInstanExpress } from "../../../utils/apiInstance";

const AccountPages = () => {
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
    </>
  );
};

export default AccountPages;
