import { Outlet, useLocation } from "react-router-dom";
import AuthRoute from "../../../components/layouts/AuthRoute";
import { PageContainer } from "../../../components/layouts/PageContainer";
import { SectionContainer } from "../../../components/layouts/SectionContainer";
import SettingPage from "../pages/SettingPages";
import SidebarNav from "./SidebarNav";

const SettingLayout = () => {
  const location = useLocation();
  const isSetting = location.pathname === "/settings";
  return (
    <AuthRoute>
      <PageContainer className="h-5" withFooter={false}>
        <SectionContainer padded className="w-full mx-auto max-w-5xl mt-7">
          <div className="grid grid-cols-4 grid-rows gap-4">
            <SidebarNav />
            <div className="col-span-3 relative mb-5">
              {isSetting ? <SettingPage /> : <Outlet />}
            </div>
          </div>
        </SectionContainer>
      </PageContainer>
    </AuthRoute>
  );
};

export default SettingLayout;
