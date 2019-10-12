import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// Components
import MainContent from "../main-content/main-content.component";
import UserItem from "./user-item/user-item.component";
import PaginationComponent from "./pagination/pagination.component";
import LoadingComponent from "../AdminComponent/Loading/loading.component";
// Actions
import { fetchUsers } from "../../redux/reducers/user/user.action";

const MainContentUsers = ({ users, loadingStatus, ...porps }) => {
  useEffect(() => {
    porps.getUsers();
  }, []);
  return (
    <div className="content-users">
      <MainContent title="User">
        <div className="row clearfix">
          <div className="col-lg-12">
            <div className="card">
              {loadingStatus && (
                <div className="loading-users">
                  <LoadingComponent />
                </div>
              )}
              {!loadingStatus && (
                <div className="tab-content mt-0">
                  <div className="tab-pane show active" id="Users">
                    <div className="table-responsive">
                      <table className="table table-new">
                        <thead>
                          <tr>
                            <th className="w60">Name</th>
                            <th />
                            <th />
                            <th>Created Date</th>
                            <th className="w100">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {users.map(user => (
                            <UserItem key={user.taiKhoan} {...user} />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <PaginationComponent />
          </div>
        </div>
      </MainContent>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users.users,
    loadingStatus: state.ui.loadingStatus
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getUsers: bindActionCreators(fetchUsers, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContentUsers);
