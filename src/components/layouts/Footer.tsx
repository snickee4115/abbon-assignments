import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const handlePhoneClick = () => {
    window.location.href = `tel:${t("footer.phoneNumber")}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${t("footer.emailAddress")}`;
  };

  const handleLineClick = () => {
    window.open(`https://line.me/ti/p/${t("footer.lineId")}`, "_blank");
  };

  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-start space-x-2">
            <p>{t("footer.address")}</p>
          </div>
          <div>
            <button
              onClick={handlePhoneClick}
              className="flex items-center space-x-2 hover:text-gray-300"
            >
              <span>{t("footer.phone")}</span>
            </button>
          </div>
          <div>
            <button
              onClick={handleEmailClick}
              className="flex items-center space-x-2 hover:text-gray-300"
            >
              <span>{t("footer.email")}</span>
            </button>
          </div>
          <div>
            <button
              onClick={handleLineClick}
              className="flex items-center space-x-2 hover:text-gray-300"
            >
              <span>{t("footer.line")}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
