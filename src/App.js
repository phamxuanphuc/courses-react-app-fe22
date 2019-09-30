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

function App() {
  return (
    <div className='app-main'>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/login" component={SignupSignin} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
