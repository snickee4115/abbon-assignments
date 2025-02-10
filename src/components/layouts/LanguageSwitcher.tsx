import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

const LanguageSwitcher = ({ className }: { className?: string }) => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "th" : "en";
    i18n.changeLanguage(newLang);
    navigate(0);
  };

  return (
    <button
      onClick={toggleLanguage}
      className={cn("px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 cursor-pointer", className)}
    >
      {i18n.language === "en" ? "TH" : "EN"}
    </button>
  );
};

export default LanguageSwitcher;
