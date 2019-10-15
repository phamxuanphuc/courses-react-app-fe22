import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// Actions
import { searchUsers } from "../../../redux/reducers/user/user.action";



const SearchComponent = ({...props}) => {
 
  const handleChange = e => {
    props.searchUser(e.target.value);
  };
  return (
    <div className="flexbox">
      <div className="search">
        <div>
          <input
            name="searchContent"
            type="text"
            onChange={handleChange}
            placeholder=" Search . . ."
            required
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = null;
const mapDispatchToProps = dispatch => {
  return {
    searchUser: bindActionCreators(searchUsers, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchComponent);
