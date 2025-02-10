import ProfileImage from "../ProfileImage";
import LanguageSwitcher from "./LanguageSwitcher";
import useProfileStore from "@/store/profileStore";

const Setting = () => {
  const fullName = useProfileStore((state) => state.fullName);
  return (
    <div className="flex items-center space-x-4">
      <ProfileImage size="sm" editable={true} />
      <span className="font-medium">{fullName}</span>
      <LanguageSwitcher className="ml-auto" />
    </div>
  );
};

export default Setting;
