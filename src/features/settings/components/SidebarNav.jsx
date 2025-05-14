import { useState } from "react";
import { FcManager, FcPrivacy } from "react-icons/fc";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const SidebarNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isProfileActive =
    location.pathname === "/settings" ||
    location.pathname === "/settings/profile";

  const [selected, setSelected] = useState("");

  const handleSelectChange = (e) => {
    setSelected(e.target.value);
    navigate(e.target.value);
  };
  return (
    <div className="">
      <div className="md:hidden mb-8">
        <select
          value={selected}
          onChange={handleSelectChange}
          className="w-full rounded-md bg-white border border-gray-300"
        >
          <option value="/settings/profile">Profile</option>
          <option value="/settings/account">Account</option>
        </select>
      </div>
      <div className="hidden md:flex flex-col">
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
