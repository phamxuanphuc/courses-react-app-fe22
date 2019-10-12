import React from "react";
import LeftSidebar from "../../../components/left-sidebar/left-sidebar.component";
import TopNavbar from "../../../components/top-navbar/top-navbar.component";
import MainContentUsers from "../../../components/main-content-user/main-content-user.component";
//Routing
import {Route, BrowserRouter as Router } from "react-router-dom";
// api
import {fetchUsers} from '../../../../src/apis/api.users'

const DashboardPage = ({ history }) => {
  let userInfo = JSON.parse(localStorage.getItem("user"));
  if (!userInfo) {
    history.push("/home");
  }
  fetchUsers()
  
  return (
    <div className="dash-board-page">
      <LeftSidebar />
      <TopNavbar />
      <div id="main-content">
        <Router>
          <Route path="/dashboard/users" component={MainContentUsers} />
        </Router>
      </div>
    </div>
  );
};
export default DashboardPage;
