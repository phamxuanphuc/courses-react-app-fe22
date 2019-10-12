import React, { useState, Component } from "react";

// Router
import { Link, withRouter } from "react-router-dom";
import { getInforUserFromApi, updateInforUser } from "../../../../redux/reducers/user/user.action";

// SweetAlert
import SweetAlert from 'react-bootstrap-sweetalert';

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      maLoaiNguoiDung: "HV",
      maNhom: "GP01",
      email: "",
      accessToken: "",
      alert: null
    }
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user != null) {
      this.setState({
        taiKhoan: user.taiKhoan,
        matKhau: user.matKhau,
        hoTen: user.hoTen,
        soDT: user.soDT,
        maLoaiNguoiDung: "HV",
        maNhom: "GP01",
        email: user.email,
        accessToken: user.accessToken
      })
    }
  }

  showAlert() {

  }

  hideAlert(check) {
    if(check === true) {
      this.setState({
        alert: null
      });
      localStorage.clear();
      document.location.reload(true);
      this.props.history.push('/login')
    }else{
      this.setState({
        alert: null
      });
    }    
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onSubmit = () => {    
    updateInforUser(this.state, this.state.accessToken, ()=>{
      this.setState({
        alert: (
          <SweetAlert success title="Woot!" onConfirm={() => this.hideAlert(true)} >
            Sửa thông tin thành công! vui lòng đăng nhập lại
            </SweetAlert>)
      });
    }, (err) => {
      this.setState({
        alert: (
          <SweetAlert danger title="Opps!" onConfirm={() => this.hideAlert(false)} >
            {err}
          </SweetAlert>)
      });
    })
  }

  render() {
    return (
      <div className="register">
        {this.state.alert}
        <div className="signIn-form my_signIn-form">
          <form className="contact-form my_contact-form">
            <input
              className="form-control"
              name="taiKhoan"
              placeholder="Tài khoản"
              type="text"
              value={this.state.taiKhoan}
              onChange={this.onChange}
            />
            <input
              className="form-control"
              name="matKhau"
              placeholder="Mật khẩu mới"
              type="text"
              value={this.state.matKhau}
              onChange={this.onChange}
            />
            <input
              className="form-control"
              name="hoTen"
              placeholder="Họ tên"
              type="text"
              value={this.state.hoTen}
              onChange={this.onChange}
            />
            <input
              className="form-control"
              name="soDT"
              placeholder="Số điện thoại"
              type="text"
              value={this.state.soDT}
              onChange={this.onChange}
            />
            <input
              className="form-control"
              name="email"
              placeholder="Email"
              type="email"
              value={this.state.email}
              onChange={this.onChange}
            />
            <div className="submit">
              <a href="#" onClick={this.onSubmit} className="site-btn mr-3 mb-3 mb-md-0">Sửa thông tin</a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default withRouter(Form);
