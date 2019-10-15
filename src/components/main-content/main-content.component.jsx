import React from "react";
import { Link } from "react-router-dom";
import SearchComponent from "../AdminComponent/Search/search.component";

const MainContent = ({ title, children }) => (
  <div className="main-content">
    <div className="container-fluid">
      <div className="block-header">
        <div className="row clearfix">
          <div className="col-12 col-users">
            <div className="header-users">
              <h1>{title}</h1>
              <ol className="breadcrumb2">
                <li className="breadcrumb-item">
                  <Link className="link" to="./">
                    Dashboard
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {title}
                </li>
              </ol>
            </div>
            <div className="search-users">
              <SearchComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="main">{children}</div>
  </div>
);
export default MainContent;
