export const menus = [
  {
    title: "navigation.home",
    href: "/",
  },
  {
    title: "navigation.contact",
    subMenus: [
      {
        title: "navigation.contactList",
        href: "/contact/list",
      },
      {
        title: "navigation.createContact",
        href: "/contact/form",
      },
    ],
  },
  {
    title: "navigation.currentLocation",
    externalLink: "/current-location",
  },
];
