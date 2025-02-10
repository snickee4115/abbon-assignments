import React, { useRef } from "react";
import useProfileStore from "@/store/profileStore";
import UserAvatar from "@/assets/images/user-avatar.png";

interface Props {
  size?: "sm" | "lg";
  editable?: boolean;
}

const ProfileImage = ({ size = "sm", editable = false }: Props) => {
  const { profileImage, updateProfile } = useProfileStore();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    if (editable && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateProfile(reader.result as string, profileImage);
      };
      reader.readAsDataURL(file);
    }
  };

  const sizeClasses = size === "lg" ? "w-36 h-36" : "w-10 h-10";

  return (
    <div className="relative" onClick={handleImageClick}>
      <div
        className={`${sizeClasses} rounded-full overflow-hidden ${
          editable ? "cursor-pointer" : ""
        }`}
      >
        <img
          src={profileImage || UserAvatar}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      {editable && (
        <>
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center text-xs py-1">
            Edit
          </div>
          <label htmlFor="profileImageInput" className="hidden">
            Upload Profile Image
          </label>
          <input
            id="profileImageInput"
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
            accept="image/*"
            className="hidden"
            title="Choose a profile image"
          />
        </>
      )}
    </div>
  );
};

export default ProfileImage;
