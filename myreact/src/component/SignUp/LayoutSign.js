import React from "react";
import Button from "./Button";
import "../SignUp/Layout.scss";
import Input from "./Input";
import LogoOption from "./LogoOption";

const LayoutSign = () => {
  return (
    <div className="body">
      <div className="Form-login">
        <div className="Form-container">
          <LogoOption></LogoOption>
          <Input></Input>
          <div className=" footer">
            <Button>Đăng ký</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutSign;
