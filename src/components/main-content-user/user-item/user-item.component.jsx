import React from "react";
import LetterAvatar from "../../letter-avatar/letter-avatar.component";

const UserItem = ({ hoTen, email, maLoaiNguoiDung, tenLoaiNguoiDung }) => (
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
      <button type="button" className="btn btn btn-outline-danger btn-sm">
        <i className="fa fa-trash-o" />
      </button>
    </td>
  </tr>
);
export default UserItem;
