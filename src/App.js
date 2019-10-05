import React from "react";

//Routing
import { Switch, Route, Redirect } from "react-router";

// Page
import HomePage from "./pages/clients/HomePage/Home.page";
import LoginRegisterPage from "./pages/login-register/LoginRegister.page";
import DashboardPage from "./pages/admin/DashboardPage/dash-board.page";


// NewPage
import { connect } from "react-redux";
import {
  getCoursesFromApi,
  getCateloriesFromApi
} from "./redux/reducers/courses/courses.action";




class App extends React.Component {
  componentDidMount() {
    this.props.getCoursesFromApi();
    this.props.getCateloriesFromApi();
    const user = {
      "taiKhoan": "phucdinh",
      "email": "bapnguyen09052000@gmail.com",
      "soDT": "0859235748",
      "maNhom": "GP01",
      "maLoaiNguoiDung": "HV",
      "hoTen": "Nguyễn Đình Phúc",
      "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoicGh1Y2RpbmgiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJIViIsIm5iZiI6MTU3MDI1ODIzMCwiZXhwIjoxNTcwMjYxODMwfQ.CQoQLTl2I_aTUktnT5EGz3h5vksnlr1aadbUka0MTRw"
    };
    localStorage.setItem("user", JSON.stringify(user));
  }

  render() {
    return (
      <div className="app-main">
        <Switch >
          <Redirect from="/" to="/home" exact />
          <Route path="/home" component={HomePage} />
          <Route  path="/login" component={LoginRegisterPage} />
          <Route  path="/dashboard" component={DashboardPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCoursesFromApi: () => {
      dispatch(getCoursesFromApi());
    },
    getCateloriesFromApi: () => {
      dispatch(getCateloriesFromApi());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
