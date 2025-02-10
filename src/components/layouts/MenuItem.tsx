import { cn } from "@/lib/utils";
import { NavLink, NavLinkProps } from "react-router";

type Props = {
  title: string;
  isSubMenu?: boolean;
} & NavLinkProps;

const MenuItem = ({ title, className, to, ...props }: Props) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return cn(
          "block px-4 py-2 rounded-sm hover:bg-chart-4",
          isActive && to !== "#" ? "bg-chart-4" : "",
          className
        );
      }}
      {...props}
    >
      {title}
    </NavLink>
  );
};

export default MenuItem;
