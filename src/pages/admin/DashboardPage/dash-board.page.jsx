import React from "react";
import LeftSidebar from "../../../components/left-sidebar/left-sidebar.component";
import TopNavbar from "../../../components/top-navbar/top-navbar.component";
import MainContentUsers from "../../../components/main-content-user/main-content-user.component";

const checkAdmin=(userInfo)=>{

}
const DashboardPage = ({history}) => {
  let userInfo=JSON.parse(localStorage.getItem('user'));
  if(!userInfo){
   history.push('/home')
  }
  return (
    <div className="dash-board-page">
      <LeftSidebar />
      <TopNavbar />
      <div id="main-content">
        <MainContentUsers />
      </div>
    </div>
  );
};
export default DashboardPage;
