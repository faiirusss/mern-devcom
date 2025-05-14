import { FcManager, FcPrivacy } from "react-icons/fc";
import { NavLink, useLocation } from "react-router-dom";

const SidebarNav = () => {
  const location = useLocation();
  const isProfileActive =
    location.pathname === "/settings" ||
    location.pathname === "/settings/profile";
  return (
    <div className="">
      <div className="flex flex-col">
        <NavLink
          to="/settings/profile"
          className={
            isProfileActive
              ? "hover:text-foreground/70 text-foreground bg-background font-semibold flex items-center gap-2 rounded-sm p-2 text-sm"
              : "flex items-center gap-2 p-2 text-sm font-medium"
          }
        >
          <FcManager />
          Profile
        </NavLink>

        <NavLink
          to="/settings/account"
          className={({ isActive }) =>
            isActive
              ? "hover:text-foreground/70 text-foreground bg-background font-semibold flex items-center gap-2 rounded-sm p-2 text-sm"
              : "flex items-center gap-2 p-2 text-sm font-medium"
          }
        >
          <FcPrivacy />
          Account
        </NavLink>
      </div>
    </div>
  );
};

export default SidebarNav;
