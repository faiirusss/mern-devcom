import { Sidebar } from "../ui/sidebar";
import { Link } from "react-router-dom";

export const AppSidebar = () => {
  return (
    <Sidebar>
      <nav className="flex flex-col p-4 space-y-2">
        <Link to="/" className="text-gray-700 hover:text-gray-900">
          Home
        </Link>
        <Link to="/about" className="text-gray-700 hover:text-gray-900">
          About
        </Link>
        {/* Tambahkan menu lainnya sesuai kebutuhan */}
      </nav>
    </Sidebar>
  );
};
