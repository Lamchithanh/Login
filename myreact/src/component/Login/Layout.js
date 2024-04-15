import React from "react";
import Button from "./Button";
import "../scss/Layout.scss";
import Input from "./Input";
import LogoOption from "./LogoOption";

const Layout = () => {
  return (
    <div className="body">
      <div className="Form-login">
        <div className="Form-container">
          <LogoOption></LogoOption>
          <Input></Input>
          <div className=" footer">
            <Button>Đăng nhập</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
