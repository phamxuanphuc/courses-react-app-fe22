import React from "react";
import LeftSidebar from "../../../components/left-sidebar/left-sidebar.component";
import TopNavbar from "../../../components/top-navbar/top-navbar.component";
import MainContentUsers from "../../../components/main-content-user/main-content-user.component";

const DashboardPage = () => (
  <div className="dash-board-page">
    <LeftSidebar />
    <TopNavbar />
    <div id="main-content">
      <MainContentUsers />
    </div>
  </div>
);
export default DashboardPage;
