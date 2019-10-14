import React from "react";

//Routing
import { Switch, Route, Redirect } from "react-router";

// Page
import HomePage from "./pages/clients/HomePage/Home.page";
import LoginRegisterPage from "./pages/login-register/LoginRegister.page";
import DashboardPage from "./pages/admin/DashboardPage/dash-board.page";
import LoadingCom from './components/AdminComponent/Loading/loading.component'


// NewPage
import { connect } from "react-redux";
import {
  getCoursesFromApi,
  getCateloriesFromApi
} from "./redux/reducers/courses/courses.action";
import { setCurrentUser } from "./redux/reducers/user/user.action";
import { hideLoadingUsers } from "./redux/reducers/ui/ui.action";

class App extends React.Component {

  constructor(props) {
    super(props);
  }
  

  componentDidMount() {
    setTimeout(() => {
      this.props.hideLoadingUsers();
    }, 3000);
    this.props.getCoursesFromApi();
    this.props.getCateloriesFromApi();
    this.props.setCurrentUser(JSON.parse(localStorage.getItem("user")));
    const scrollFunction = () => {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    scrollFunction();
  }

  render() {
    return (
      <div className="app-main">
        <Switch >
          <Redirect from="/" to="/home" exact />
          {/* <Route path="/home" render={()=>(this.props.loading? <div className="bg-loading"><LoadingCom/></div>:<HomePage />)}>      
          </Route> */}
          <Route path="/home" component={HomePage}>      
          </Route>
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
    },
    setCurrentUser: (user) => {
      dispatch(setCurrentUser(user));
    },
    hideLoadingUsers: () => {
      dispatch(hideLoadingUsers())
    }
  };
};

const mapStateToProps = (state) => {
  return{
    loading: state.ui.loadingStatus,
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
