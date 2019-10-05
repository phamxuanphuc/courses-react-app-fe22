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
