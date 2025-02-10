import LanguageSwitcher from "./LanguageSwitcher";

const Setting = () => {
  return (
    <div className="flex items-center space-x-4">
      <div>avatar</div>
      <div>name</div>
      <LanguageSwitcher className="ml-auto" />
    </div>
  );
};

export default Setting;
