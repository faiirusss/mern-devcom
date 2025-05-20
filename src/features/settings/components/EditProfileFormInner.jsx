import { useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";
import { Button } from "../../../components/ui/button";
import { Label } from "../../../components/ui/label";
import { Check, Trash } from "lucide-react";

const EditProfileFormInner = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const onPickProfilePicture = (e) => {
    if (e.target.files) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const handleUpdateProfilePicture = async () => {
    console.log(selectedImage);
  };
  return (
    <div className="space-y-6">
      <Label htmlFor="picture" className="text-2xl font-bold">
        Profile Image
      </Label>
      <div className="flex items-center gap-4">
        <Avatar className="size-12">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <input
          id="picture"
          accept="image/*"
          type="file"
          onChange={onPickProfilePicture}
          className="cursor-pointer border p-[7px] w-full rounded-md text-sm"
        />
        {!!selectedImage && (
          <>
            <Button variant="destructive" className="cursor-pointer">
              <Trash />
            </Button>
            <Button
              onClick={handleUpdateProfilePicture}
              className="cursor-pointer"
            >
              <Check />
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default EditProfileFormInner;
