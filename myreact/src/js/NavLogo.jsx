import React from "react";

const NavLogo = () => {
  return (
    <div>
      <div className="Form-nav">
        <div className="Logo">
          <img
            src="https://st-fe-v2.fado.vn/desktop/image/logo/fado_black_v2.svg"
            alt=""
            className="logo"
          />
        </div>
        <div className="Search">
          <div className="title-search">
            <li>từ Mỹ</li>
            <li>Luxury</li>
            <li>từ Nhật</li>
            <li>từ Đức</li>
            <li>từ Anh</li>
            <li>Fado Mall</li>
          </div>
          <div className="taskbar-search">
            <div className="input">
              <input type="text" placeholder="Tìm kiếm tại đây..." />
            </div>
            <div className="search-icon">
              <i className="bi bi-search" />
            </div>
          </div>
        </div>
        <div className="Form-signup">
          <div className="signup">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="."
                role="button"
                aria-expanded="false"
              >
                <i className="bi bi-person-circle" /> Đăng nhập
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href=".">
                    Đăng nhập
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href=".">
                    Đăng ký{" "}
                  </a>
                </li>
              </ul>
            </li>
          </div>
          <div className="bag">
            <li>
              <i className="bi bi-handbag"> </i>
              <a href=".">Giỏ hàng</a>
            </li>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default NavLogo;
