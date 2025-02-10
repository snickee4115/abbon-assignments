"use client";

import React, { useState } from "react";
import { Sheet, SheetContent } from "../ui/sheet";
import { Accordion, AccordionContent, AccordionItem } from "../ui/accordion";
import { menus } from "@/constant/menus";
import MenuItem from "./MenuItem";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import { openCurrentLocation } from "@/lib/utils";
import Setting from "./Setting";

type Props = {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ sidebarOpen, setSidebarOpen }: Props) => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState<string>();

  const handleMenuClick = (menu: (typeof menus)[number]) => {
    if (menu.externalLink === "/current-location") {
      openCurrentLocation();
      return;
    }
    setSidebarOpen(false);
  };

  return (
    <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
      <SheetContent
        side="left"
        className="z-[1000] flex flex-col gap-12 min-h-screen overflow-hidden bg-white px-4 py-6 transition duration-300 ease-in-out md:-translate-x-full"
      >
        <Setting />
        <Accordion
          type="single"
          collapsible
          value={expanded}
          className="flex flex-col w-full gap-2"
        >
          {menus.map((menu, index) =>
            menu?.subMenus?.length ? (
              <div key={menu.title}>
                <AccordionItem value={index.toString()}>
                  <div
                    className="flex justify-between items-center gap-1 relative cursor-pointer"
                    onClick={() =>
                      setExpanded(expanded === index.toString() ? undefined : index.toString())
                    }
                  >
                    <MenuItem
                      key={menu.title}
                      title={t(menu.title)}
                      to={menu.href || "#"}
                      className="w-full"
                    />
                    {expanded === index.toString() ? (
                      <ChevronUp className="absolute right-2 pointer-events-none" />
                    ) : (
                      <ChevronDown className="absolute right-2 pointer-events-none" />
                    )}
                  </div>
                  <AccordionContent className="mt-1 flex flex-col gap-1 ms-8">
                    {menu.subMenus.map((subMenu) => (
                      <MenuItem
                        key={subMenu.title}
                        title={t(subMenu.title)}
                        to={subMenu.href}
                        onClick={() => handleMenuClick(menu)}
                      />
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </div>
            ) : (
              <MenuItem
                key={menu.title}
                title={t(menu.title)}
                to={menu.href || "#"}
                onClick={() => handleMenuClick(menu)}
              />
            )
          )}
        </Accordion>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
