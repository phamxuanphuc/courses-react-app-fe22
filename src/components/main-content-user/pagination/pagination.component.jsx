import React from "react";
import { connect } from "react-redux";
import {
  fetchUsersNext,
  fetchUsersPrev
} from "../../../redux/reducers/user/user.action";
import { bindActionCreators } from "redux";

const PaginationComponent = ({
  currentPage,
  totalPages,
  searchUser,
  ...props
}) => {
  const nextPage = (page, search) => {
    console.log(search);
    props.getUsersNext(page, search);
  };
  const prevPage = (page, search) => {
    props.getUsersPrev(page, search);
  };
  return (
    <div className="pagination">
      {currentPage > 1 && (
        <div className="prev">
          <i className="lni-arrow-left" />
          <span onClick={() => prevPage(currentPage - 1,searchUser )}>prev</span>
          <span
            className="page-number"
            onClick={() => prevPage(currentPage - 1,searchUser)}>
            {currentPage - 1}
          </span>
        </div>
      )}

      <div className="current-page">{currentPage}</div>

      {currentPage < totalPages - 1 && (
        <div className="next">
          <span
            className="page-number"
            onClick={() => nextPage(currentPage + 1,searchUser)}>
            {currentPage + 1}
          </span>
          <span onClick={() => nextPage(currentPage + 1,searchUser)}>next</span>
          <i className="lni-arrow-right" />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentPage: state.users.currentPage,
    totalPages: state.users.totalPages,
    searchUser: state.users.search
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getUsersNext: bindActionCreators(fetchUsersNext, dispatch),
    getUsersPrev: bindActionCreators(fetchUsersPrev, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationComponent);
