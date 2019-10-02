import React from "react";

//Routing
import { Switch, Route } from "react-router-dom";

// Page
import HomePage from "./pages/clients/HomePage/Home.page";
import CoursesPage from "./pages/clients/CoursesPage/Courses.page";
import LoginRegisterPage from "./pages/login-register/LoginRegister.page";

//Components
import Header from "./components/Header/Header.component";
import Footer from "./components/Footer/Footer.component";

function App() {
  return (
    <div className="app-main">
      <Switch>
        <Route path="/admin" component={CoursesPage} />
        <Route path="/login" component={LoginRegisterPage} />
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/courses" component={CoursesPage} />
         
        </Switch>
        <Footer />
      </Switch>
    </div>
  );
}

export default App;
