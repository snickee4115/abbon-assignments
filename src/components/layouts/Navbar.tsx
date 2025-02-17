import { useState } from "react";
import "./hamburger.css";
import Sidebar from "./Sidebar";
import { menus } from "@/constant/menus";
import MenuItem from "./MenuItem";
import { ChevronDown, ChevronUp, HomeIcon } from "lucide-react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { openCurrentLocation } from "@/lib/utils";
import Setting from "./Setting";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <header className="h-16 text-[15px] z-[1000] flex bg-secondary">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <button
        aria-label="open-sidebar"
        type="button"
        className="ml-4 shrink-0 transition-[translate.2s] active:translate-y-[0.0625rem] md:hidden"
        onClick={toggleSidebar}
      >
        <div className={`hamburger hamburger-spin ${sidebarOpen ? "is-active" : ""} `}>
          <div className="hamburger-box">
            <div className="hamburger-inner" />
          </div>
        </div>
      </button>
      <nav className="hidden md:flex px-3.5 my-auto justify-between items-center w-full max-w-7xl mx-auto">
        <div className="gap-8 flex">
          <Link to="/" className="m-auto rounded-full p-2 bg-blue-200">
            <HomeIcon />
          </Link>
          <div className="flex gap-2">
            {menus.map((menu) => (
              <NavItem key={menu.title} menu={menu} />
            ))}
          </div>
        </div>
        <Setting />
      </nav>
    </header>
  );
};

const NavItem = ({ menu }: { menu: (typeof menus)[number] }) => {
  const { t } = useTranslation();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const handleMenuHover = (menuTitle: string | null) => {
    setActiveMenu(menuTitle);
  };

  const handleMenuClick = () => {
    if (menu.externalLink === "/current-location") {
      openCurrentLocation();
      return;
    }
  };
  return (
    <div
      key={menu.title}
      className="relative"
      onMouseEnter={() => menu.subMenus?.length && handleMenuHover(menu.title)}
      onMouseLeave={() => handleMenuHover(null)}
    >
      <div className="flex gap-1">
        <MenuItem
          key={menu.title}
          title={t(menu.title)}
          to={menu.href || "#"}
          onClick={handleMenuClick}
          className={menu.subMenus?.length ? "cursor-default pr-6" : ""}
        />
        {menu.subMenus?.length ? (
          activeMenu ? (
            <ChevronUp className="absolute right-1 top-1/2 -translate-y-1/2 size-4 pointer-events-none" />
          ) : (
            <ChevronDown className="absolute right-1 top-1/2 -translate-y-1/2 size-4 pointer-events-none" />
          )
        ) : null}
      </div>

      {menu.subMenus?.length ? (
        <div
          className={`absolute bg-white rounded-sm shadow-lg min-w-[160px] flex-col gap-1 
                    ${activeMenu === menu.title ? "flex" : "hidden"}`}
        >
          {menu.subMenus.map((subMenu) => (
            <MenuItem key={subMenu.title} title={t(subMenu.title)} to={subMenu.href} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
