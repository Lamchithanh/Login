import React from "react";
import "../SignUp/Input.scss";
const Input = () => {
  return (
    <div className="Form-input">
      <div className="input">
        <h4 className="name">Họ và tên</h4>
        <input
          type="text"
          className="Input-name"
          placeholder="Vui lòng nhập họ tên chính xác"
        />
        <h4 className="address-Email">Địa chỉ Email</h4>
        <input
          type="text"
          className="Input-email"
          placeholder="Địa chỉ Email "
        />
        <h4 className="Phone">Số điện thoại</h4>
        <input
          type="text"
          className="Input-phone"
          placeholder="Số điện thoại"
        />
        <div className="check-password">
          <div className="pass1">
            <h4>Mật khẩu</h4>
            <input
              type="text"
              className="Input-pass1"
              placeholder="Nhập mật khẩu"
            />
          </div>
          <div className="pass2">
            <h4>Xác nhận mật khẩu</h4>
            <input
              type="password"
              className="Input-pass2"
              placeholder="Nhập lại "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
