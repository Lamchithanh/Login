import React from "react";
import "../scss/Input.scss";
const Input = () => {
  return (
    <div className="Form-input">

      <div className="input">
        <h4 className="Email">Email</h4>
        <input
          type="text"
          className="Input-email"
          placeholder="Điền Email vào đây"
        />
        <h4 className="password">Password</h4>
        <input
          type="password"
          className="Input-password"
          placeholder="Nhập password"
        />
      </div>
      <div className="Forgot-password">
        <p>Quên mật khẩu ?</p>
      </div>
    </div>
  );
};

export default Input;
