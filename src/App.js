import React from "react";

//Routing
import { Switch, Route } from "react-router-dom";

// Page
import HomePage from "./pages/clients/HomePage/Home.page";
import CoursesPage from "./pages/clients/CoursesPage/Courses.page";
import LoginRegisterPage from "./pages/login-register/LoginRegister.page";
import DashboardPage from "./pages/admin/DashboardPage/dash-board.page";
import SignupSignin from "./pages/clients/SignupSigninPage/SignupSignin.page";
import NewPage from "./pages/clients/New/New";

//Components
import Header from "./components/Header/Header.component";
import Footer from "./components/Footer/Footer.component";
// NewPage
import { connect } from "react-redux";
import {
  getCoursesFromApi,
  getCateloriesFromApi
} from "./redux/reducers/courses/courses.action";
import UserPage from "./pages/clients/UserPage/UserPage";



class App extends React.Component {
  componentDidMount() {
    this.props.getCoursesFromApi();
    this.props.getCateloriesFromApi();
    const user = {
      accessToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiZGFubHUxMjM0IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiSFYiLCJuYmYiOjE1NjgwMjgxNzksImV4cCI6MTU2ODAzMTc3OX0.P77_1BNrbF3pUS89xn_meNmz45OAS-npaLV9AZknXO8",
      taiKhoan: "phucdinh",
      hoTen: "Nguyễn Đình Phúc",
      email: "bapnguyen09052000@gmail.com",
      soDt: "0859235748"
    };
    localStorage.setItem("user", JSON.stringify(user));
  }

  render() {
    return (
      <div className="app-main">
        <Switch>
          <Route path="/admin" component={CoursesPage} />
          <Route path="/login" component={LoginRegisterPage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/courses" component={CoursesPage} />
            <Route path="/sign-in" component={SignupSignin} />
            <Route path="/new" component={NewPage} />
            <Route path="/user/danlu" component={UserPage} />
          </Switch>
          <Footer />
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
