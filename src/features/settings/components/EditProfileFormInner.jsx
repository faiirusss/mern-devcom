import { useEffect, useRef, useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";
import { Button } from "../../../components/ui/button";
import { Label } from "../../../components/ui/label";
import { Check, Loader2, Trash } from "lucide-react";
import { useMemo } from "react";
import {
  emailStorageAtom,
  profilePicture,
  tokenAtom,
} from "../../../jotai/atoms";
import { apiInstanExpress } from "../../../utils/apiInstance";
import { toast } from "sonner";
import { useAtom } from "jotai";

const EditProfileFormInner = ({ profile }) => {
  const { picture } = profile;
  const [isSubmit, setIsSubmit] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const [emailStorage] = useAtom(emailStorageAtom);
  const [token] = useAtom(tokenAtom);
  const [profilePictureStorage, setProfilePictureStorage] =
    useAtom(profilePicture);

  const onPickProfilePicture = (e) => {
    if (e.target.files) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const inputRef = useRef(null);

  useEffect(() => {
    setProfilePictureStorage(picture);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [picture]);

  const selectedProfilePicturePreview = useMemo(() => {
    if (selectedImage) {
      return URL.createObjectURL(selectedImage);
    }
  }, [selectedImage]);

  const handleUpdateProfilePicture = async () => {
    setIsSubmit(true);
    if (emailStorage && token && selectedImage) {
      const formData = new FormData();
      formData.append("image", selectedImage);
      formData.append("email", emailStorage);
      formData.append("token", token);

      try {
        const updateProfilePicture = await apiInstanExpress.post(
          "settings/upload",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );

        if (updateProfilePicture.status !== 201) {
          toast.error("Update profile picture failed", {
            position: "top-right",
          });
          setIsSubmit(false);
          return;
        }

        setTimeout(() => {
          toast.success("Update profile picture success!", {
            position: "top-right",
          });
          setIsSubmit(false);
        }, 2000);

        setTimeout(() => {
          window.location.reload();
        }, 2500);
      } catch (err) {
        setTimeout(() => {
          toast.error("Update profile picture failed!", {
            position: "top-right",
          });
          setIsSubmit(false);
        }, 1000);
        console.log("error:" + err);
      }
    }
  };

  return (
    <div className="space-y-6">
      <Label htmlFor="picture" className="text-2xl font-bold">
        Profile Image
      </Label>
      <div className="flex items-center gap-4">
        <Avatar className="size-12">
          <AvatarImage
            src={selectedProfilePicturePreview ?? profilePictureStorage ?? ""}
          />
          <AvatarFallback>{emailStorage?.[0].toUpperCase()}</AvatarFallback>
        </Avatar>
        <input
          id="picture"
          accept="image/*"
          type="file"
          ref={inputRef}
          onChange={onPickProfilePicture}
          className="cursor-pointer border p-[7px] w-full rounded-md text-sm"
        />
        {!!selectedImage && (
          <>
            <Button
              variant="destructive"
              className="cursor-pointer"
              onClick={() => {
                setSelectedImage(null);
                if (inputRef.current) {
                  inputRef.current.value = null;
                }
              }}
            >
              <Trash />
            </Button>
            {isSubmit ? (
              <Button disabled type="submit">
                <Loader2 className="animate-spin" />
              </Button>
            ) : (
              <Button
                onClick={handleUpdateProfilePicture}
                className="cursor-pointer"
              >
                <Check />
              </Button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default EditProfileFormInner;
