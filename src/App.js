import React from "react";

//Routing
import { Switch, Route } from "react-router-dom";

// Page
import HomePage from "./pages/clients/HomePage/Home.page";
import CoursesPage from "./pages/clients/CoursesPage/Courses.page";
import SignupSignin from "./pages/clients/SignupSigninPage/SignupSignin.page";


//Components
import Header from "./components/Header/Header.component";
import Footer from "./components/Footer/Footer.component";

import { connect } from 'react-redux';
import { getCoursesFromApi } from './redux/reducers/courses/courses.action';

class App extends React.Component {

  componentDidMount() {
    this.props.getCoursesFromApi();
  }

  render() {
    return (
      <div className='app-main'>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/courses:maKhoaHoc" component={CoursesPage} />
          <Route path="/sign-in" component={SignupSignin} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default connect(null, { getCoursesFromApi })(App);
