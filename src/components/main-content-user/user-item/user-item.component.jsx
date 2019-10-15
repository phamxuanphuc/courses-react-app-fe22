import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import LetterAvatar from "../../letter-avatar/letter-avatar.component";

import { deleteUser } from "../../../redux/reducers/user/user.action";


const UserItem = ({currentPage,taiKhoan, hoTen, email, maLoaiNguoiDung, tenLoaiNguoiDung, onDeleteUser }) => (
  <tr>
    <td>
      <div>
        <LetterAvatar name={hoTen} size="40px" />
      </div>
    </td>
    <td>
      <h6 className="title">{hoTen}</h6>
      <span className="subtitle">{email}</span>
    </td>
    <td>
      {maLoaiNguoiDung === "HV" && (
        <span className="badge badge-success">{tenLoaiNguoiDung}</span>
      )}

      {maLoaiNguoiDung === "GV" && (
        <span className="badge badge-primary">{tenLoaiNguoiDung}</span>
      )}
    </td>
    <td className="date-created">21 July, 2015</td>
    <td className="option">
      <button type="button" className="btn btn-outline-info btn-sm mr-2">
        <i className="fa fa-edit" />
      </button>
      <button type="button" className="btn btn btn-outline-danger btn-sm" onClick={()=>onDeleteUser(taiKhoan, currentPage )}>
        <i className="fa fa-trash-o" />
      </button>
    </td>
  </tr>
);
const mapStateToProps = state=>{
  return{
    currentPage: state.users.currentPage
  }
};
const mapDispatchToProps = dispatch => {
  return {
    onDeleteUser: bindActionCreators(deleteUser, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserItem);

