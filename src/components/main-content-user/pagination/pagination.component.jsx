import React from "react";
import { connect } from "react-redux";
import {
  fetchUsersNext,
  fetchUsersPrev
} from "../../../redux/reducers/user/user.action";
import { bindActionCreators } from "redux";

const PaginationComponent = ({ currentPage, totalPages, ...props }) => {
  const nextPage = page => {
    props.getUsersNext(page);
  };
  const prevPage = page => {
    props.getUsersPrev(page);
  };
  return (
    <div className="pagination">
      {currentPage > 1 && (
        <div className="prev">
          <i className="lni-arrow-left" />
          <span onClick={() => prevPage(currentPage - 1)}>prev</span>
          <span
            className="page-number"
            onClick={() => prevPage(currentPage - 1)}>
            {currentPage - 1}
          </span>
        </div>
      )}

      <div className="current-page">{currentPage}</div>

      {currentPage < totalPages - 1 && (
        <div className="next">
          <span
            className="page-number"
            onClick={() => nextPage(currentPage + 1)}>
            {currentPage + 1}
          </span>
          <span onClick={() => nextPage(currentPage + 1)}>next</span>
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
