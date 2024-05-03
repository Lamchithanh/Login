import React from "react";

const Productworlk = () => {
  return (
    <div>
      <header>
        <div className="position-sticky">
          <div className="line-short">Xin kính chào quý khách</div>
          {/* logo */}
          <div className="Form-nav">
            <div className="Logo">
              <a href="./NavOption.HTML">
                <img
                  src="https://st-fe-v2.fado.vn/desktop/image/logo/fado_black_v2.svg"
                  alt=""
                  className="logo"
                />
              </a>
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
                <a href="./login.HTML">
                  {" "}
                  <button>Đăng nhập</button>
                </a>
              </div>
              <div className="bag">
                <li>
                  <i className="bi bi-handbag"> </i>
                  <a href="./Cart.HTML">Giỏ hàng</a>
                </li>
              </div>
            </div>
          </div>
          {/* menu sub */}
          <nav className="option">
            <ul className="menu">
              <li>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span
                    style={{ margin: 0, cursor: "pointer" }}
                    className="material-symbols-outlined"
                  >
                    view_cozy
                  </span>
                  <a href="./NavOption.HTML">DANH MỤC</a>
                </div>
                <ul className="submenu">
                  <li>
                    <div className="texticon">
                      <i className="fas fa-desktop" />
                      <a href="./Filterproduct.HTML">Đồ điện tử và công nghệ</a>
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                    </div>
                    <ul className="submenu2">
                      <div className="playout-submenu2">
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Máy tinh và phụ kiện
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Máy tính - máy tính bảng
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Màng hình</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Webcams</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Phụ kiện,linh kiện
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Thiết bị mạng</a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Điện thoại và phụ kiện
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">Điện thoại</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Phụ kiện điện thoại
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Ốp lưng và Cường lực điện thoại
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Tai nghe cho điện thoại
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Điện thoại unlock
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Thiết bị kỹ thuật số
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Máy ảnh,Quay phim và Cammera
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Loa Bluetooth</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Thiết bị Game</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Kính thực tế ảo</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Phụ kiện máy kỹ thuật số
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Điện tử văn phòng
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">Máy in</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Máy chiếu</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Máy hủy tài liệu
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Máy chấm công</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Phụ kiện máy in</a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Tai nghe
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Tai nghe chụp tai (Over-Ear)
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Tai nghe nhét tai (In-Ear và Earbud)
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Tai nghe Game</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Tai nghe thể thao
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Phụ kiện cho tai nghe
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Hệ thống nhà thông minh
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">Tivi</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Âm thanh giải trí tại gia
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Nhà bếp hiện đại
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Đèn chiếu sáng thông minh
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Thiết bị chống trộm
                              </a>
                            </li>
                          </ul>
                        </li>
                      </div>
                    </ul>
                  </li>
                  <li>
                    <div className="texticon">
                      <span className="material-symbols-outlined">
                        watch_screentime
                      </span>
                      <a href="./Filterproduct.HTML">Đồng hồ hàng hiệu</a>
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                    </div>
                    <ul className="submenu2 submenu2-1">
                      <div className="playout-submenu2">
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Đồng hồ Nam
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Đồng hồ thời trang
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Đồng hồ thể thao
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Đồng hồ doanh nhân
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Đồng hồ bỏ túi</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Đồng hồ thông minh
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Đồng hồ Nữ
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Đồng hồ thời trang
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Đồng hồ doanh nhân
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Đồng hồ bỏ túi</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Đồng hồ thông minh
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Thương hiệu nổi bật
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">Tag Heuer</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Rolex</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Tissot</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Michael Kors</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Movado</a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Đồng hồ cho bé trai
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Đồng hồ Mickey Mouse
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Đồng hồ Disney</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Đồng hồ Pokemon</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Đồng hồ Marvel</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Đồng hồ Batman</a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Đồng hồ cho bé gái
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Đồng hồ Minnie Mouse
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Đồng hồ Disney Princess
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Đồng hồ Frozen</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Đồng hồ Elsa</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Đồng hồ Cinderella
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Phụ kiện đồng hồ
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">Dây đồng hồ</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Hộp lên dây đồng hồ tự động
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Hộp đồng hồ</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Pin</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Dụng cụ sửa chửa
                              </a>
                            </li>
                          </ul>
                        </li>
                      </div>
                    </ul>
                  </li>
                  <li>
                    <div className="texticon">
                      <i className="fas fa-mars" />
                      <a href="./Filterproduct.HTML"> Thời trang nữ</a>
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                    </div>
                    <ul className="submenu2 submenu2-2">
                      <div className="playout-submenu2">
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Trang phục nữ
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">Váy đầm</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Cardigan, Áo hoodie, Áo len
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Quần Jean</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Bikini và khăn phủ
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Nội y, Đồ ngủ</a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Giày dép nữ
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">Giày cao gót</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Giày bốt</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Sandal - Giày lười
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Giày Sneaker</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Phụ kiện giày</a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Túi ví nữ
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">Túi xách</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Túi đeo chéo và túi đeo vai
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Ví cầm tay</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Balo thời trang</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Túi Clutches</a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Trang sức và phụ kiện
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Đồ gặm nướu an toàn
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Vòng cổ</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Nhẫn</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Set Trang Sức</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Charm</a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Săn hàng Sale
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Quần áo thời trang
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Giày dép</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Trang sức</a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Phụ kiện thời trang
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">Mắt kính</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Thắt lưng</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Mũ (Nón)</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Nhẫn thông minh</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Vòng tay cá tính
                              </a>
                            </li>
                          </ul>
                        </li>
                      </div>
                    </ul>
                  </li>
                  <li>
                    <div className="texticon">
                      <i className="fas fa-venus" />
                      <a href="./Filterproduct.HTML"> Thời trang nam</a>
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                    </div>
                    <ul className="submenu2 submenu2-3">
                      <div className="playout-submenu2">
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Trang phục nam
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">Áo sơ mi</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Áo thun</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Quần Jean</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Áo khoác thể thao
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Đồ lót</a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Giày dép nam
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">Sneaker</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Giày công sở</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Giày lười</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Giày bốt phủ</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Dép &amp; sandal
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Túi ví nam
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">Túi xách</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Ví nam</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Túi Đeo Chéo</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Vali phủ</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Túi du lịch</a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Săn hàng Sale
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Quần áo thời trang
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Giày dép</a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Phụ kiện thời trang
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">Mắt kính</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Thắt lưng</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Mũ (Nón)</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Nhẫn thông minh phủ
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Vòng tay cá tính
                              </a>
                            </li>
                          </ul>
                        </li>
                      </div>
                    </ul>
                  </li>
                  <li>
                    <div className="texticon">
                      <i className="fas fa-baby-carriage" />
                      <a href="./Filterproduct.HTML"> Mẹ, bé và đồ chơi</a>
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                    </div>
                    <ul className="submenu2 submenu2-4">
                      <div className="playout-submenu2">
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Đồ dùng dành cho trẻ sơ sinh
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Đồ sơ sinh bé gái
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Đồ sơ sinh bé trai
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Tắm và chăm sóc da
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Tã, Bỉm</a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Chăm sóc mẹ trước và sau sinh
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">Gối cho mẹ bầu</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Máy Nghe Nhịp Tim Thai Nhi
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Thời trang bầu</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Máy hút sữa, Túi trữ sữa
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Tắm gội, chăm sóc da
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Xe đẩy và phụ kiện
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Xe đẩy chính hãng
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Phụ tùng thay thế
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Phụ kiện xe đẩy</a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Đồ chơi cho bé
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Đồ gặm nướu an toàn
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Đồ chơi nhà tắm</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Đồ chơi lắp ráp</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Ghế nhún</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Lắp ghép, xếp hình
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Đồ ăn dặm và dụng cụ ăn uống
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Sữa và Thức ăn dặm
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Núm vú và phụ kiện
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Bình sữa chính hãng
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Ghế cho ăn</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Máy pha sửa - làm đồ ăn dặm
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Đồ dùng nhà trẻ
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">Giường ngủ</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Trang trí phòng</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Nội thất</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Thiết bị giữ an toàn cho bé
                              </a>
                            </li>
                          </ul>
                        </li>
                      </div>
                    </ul>
                  </li>
                  <li>
                    <div className="texticon">
                      <i className="fab fa-bitcoin" />
                      <a href="./Filterproduct.HTML"> Làm đẹp</a>
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                    </div>
                    <ul className="submenu2 submenu2-5">
                      <div className="playout-submenu2">
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Chăm sóc tóc
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Chăm sóc tóc chuyên sâu
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Dầu gội - Dầu xả
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Sản phẩm tạo kiểu tóc
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Sản phẩm chống rụng tóc
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Sản phẩm nhuộm tóc
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Chăm sóc da
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">Dành cho da mặt</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Quanh vùng mắt</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Chăm sóc môi</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Chống nắng &amp; dưỡng da
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Trang điểm
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">Mặt</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Mắt</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Môi</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Bộ trang điểm</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Tẩy trang</a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Dụng cụ và phụ kiện
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Cọ và dụng cụ trang điểm
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Dụng cụ tạo kiểu tóc
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Thiết bị Salon và Spa
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Dụng cụ làm móng
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Phụ kiện tắm và nhà tắm
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Chăm sóc cá nhân
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Chăm sóc răng miệng
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Khử mùi</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Sản phẩm Tatoo</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Máy chăm sóc da đa năng
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Tăm và chăm sóc cơ thể
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Dụng cụ tắm &amp; chăm sóc cơ thể
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Tinh dầu &amp; massage
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Xà bông &amp; Sữa tắm
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Tẩy tế bào chết &amp; trị liệu
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Set quà tặng &amp; khuyến mãi
                              </a>
                            </li>
                          </ul>
                        </li>
                      </div>
                    </ul>
                  </li>
                  <li>
                    <div className="texticon">
                      <span className="material-symbols-outlined">
                        health_and_beauty
                      </span>
                      <a href="./Filterproduct.HTML"> Thế giới nước hoa</a>
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                    </div>
                    <ul className="submenu2 submenu2-6">
                      <div className="playout-submenu2">
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Nước hoa nữ
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Nước hoa toàn thân
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Nước hoa Fraiche
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Nước hoa Parfum</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Nước hoa Toilette
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Tinh dầu thơm</a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Nước hoa nam
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Nước hoa toàn thân
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Nước hoa Fraiche
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Nước hoa Parfum</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Nước hoa Toilette
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Tinh dầu thơm</a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Nước hoa trẻ em
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">Tự nhiên</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Không chứa cồn</a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Bộ sản phẩm
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Bộ sản phẩm nước hoa nam
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Bộ sản phẩm nước hoa nữ
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Đặc biệt
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Nến thơm, sáp thơm
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Đèn khuếch tán tinh dầu
                              </a>
                            </li>
                          </ul>
                        </li>
                      </div>
                    </ul>
                  </li>
                  <li>
                    <div className="texticon">
                      <span className="material-symbols-outlined">
                        stadia_controller
                      </span>
                      <a href="./Filterproduct.HTML"> Đồ chơi và game</a>
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                    </div>
                    <ul className="submenu2 submenu2-7">
                      <div className="playout-submenu2">
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Đồ chơi mô hình
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Đồ chơi xây dựng
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Mô hình lắp ráp</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Mô hình nhân vật sinh động
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Búp bê và thú nhồi bông
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Trò chơi vận động ngoài trời
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Nhà bóng chính hãng giá tốt
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Bể bơi ngoài trời chính hãng
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Đất sét, bột nhào
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Tung hứng</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Trò chơi khám phá tự nhiên
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Đồ Chơi Học Tập
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Đồ chơi khoa học
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Đồ chơi toán học và tập đếm
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Đồ chơi sử dụng năng lượng mặt trời
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Đồ chơi đọc và viết cho trẻ
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Đồ chơi học nhạc cụ
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Games
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Trò chơi trên bảng
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Trò chơi thẻ bài
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Đĩa game DVD</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Trò chơi trong nhà
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Máy chơi game cầm tay
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Xe và đồ chơi điều khiển từ xa
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Xe mô hình Die-Cast
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Xe mô hình điều khiển từ xa
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Bộ xe lửa và đường ray
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Bộ xe mô hình</a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Trò chơi điện tử
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">Playstation 4</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">PlayStation 3</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Xbox One</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Xbox 360</a>
                            </li>
                          </ul>
                        </li>
                      </div>
                    </ul>
                  </li>
                  <li>
                    <div className="texticon">
                      <span className="material-symbols-outlined">
                        manufacturing
                      </span>
                      <a href="./Filterproduct.HTML">
                        {" "}
                        Phù tùng,phụ kiện xe hơi
                      </a>
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                    </div>
                    <ul className="submenu2 submenu2-8">
                      <div className="playout-submenu2">
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Chăm sóc - bảo dưỡng ô tô
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Dụng cụ về sinh xe hơi
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Chăm sóc ngoại thất
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Chăm sóc nội thất
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Chăm sóc kinh ô tô
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Phụ kiện ngoại thất
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Chống va đập &amp; Trầy xước
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Thiết bị bảo vệ an toàn
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                phụ kiện bảo vệ ô tô
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                phụ kiện gương xe ô tô
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Bạt phủ xe ô tô</a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Phụ kiện nội thất
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Lọc gió - khử mùi
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Chống trộm cho ô tô
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Ghế ngồi &amp; Bọc ghế
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Đồng hồ đo</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Vô lăng</a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Phụ kiện thay thế
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Ắc quy &amp; Phụ kiện
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Hệ thống phanh &amp; Và phụ kiện
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Làm mát động cơ &amp; và điều hòa
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Hệ thống đèn &amp; Điện
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Bộ lọc gió</a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Điện tử ô tô
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">Âm thanh xe hơi</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Điều hướng GPS</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                An toàn xe hơi &amp; An ninh
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Phụ kiện lắp</a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Thiết bị chiếu sáng &amp; Phụ kiện
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Đèn trang trí cho ô tô
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Đèn chiếu sáng cho ô tô
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Miếng bảo vệ chóa đèn
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Phụ kiện lắp đặt đèn xe
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Đèn báo hiệu</a>
                            </li>
                          </ul>
                        </li>
                      </div>
                    </ul>
                  </li>
                  <li>
                    <div className="texticon">
                      <span className="material-symbols-outlined">
                        {" "}
                        exercise{" "}
                      </span>
                      <a href="./Filterproduct.HTML">
                        Thể thao,du lịch và dã ngoại
                      </a>
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                    </div>
                    <ul className="submenu2 submenu2-9">
                      <div className="playout-submenu2">
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Trang phụ thể thao
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Quần áo thể thao nữ
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Quần áo thể thao nam
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Quần áo thể thao bé gái
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Quần áo thể thao bé trai
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Phụ kiện thể thao
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Giày thể thao nam
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Giày thể thao nữ
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Túi thể thao</a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Yoga, thể hình
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">Thảm tạp Yoga</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Dụng cụ tập Yoga
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Dụng cụ tập Gym</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Thiết bị tập thông minh
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Đồ dùng dã ngoại
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Túi ngủ cấm trại
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Đồ dụng leo núi, dã ngoại
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Phương tiện hỗ trợ đi dã ngoại
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Phụ kiện cho phượt thủ
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Golf
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Trang phục chơi Golf
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Phụ kiện chơi Golf
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Gậy và bộ gậy Golf
                              </a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">
                                Thiết bị tập chơi Golf
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          <ul className="style-submenu2">
                            <a
                              className="submenu-title"
                              href="./Filterproduct.HTML"
                            >
                              Thể thao đặt biệt
                            </a>
                            <li>
                              <a href="./Filterproduct.HTML">Câu cá</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Bóng rổ</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Quần vợt</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Bơi lội</a>
                            </li>
                            <li>
                              <a href="./Filterproduct.HTML">Võ thuật</a>
                            </li>
                          </ul>
                        </li>
                      </div>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="line-underline">
                <a className="line-text" href="../HTML/Bachhoamy.HTML">
                  BÁCH HÓA MỸ
                </a>
              </li>
              <li className="line-underline">
                <a className="line-text" href="./Megavita.HTML">
                  FADO MALL
                </a>
              </li>
              <li className="line-underline">
                <a className="line-text" href="./Codesales.HTML">
                  MÃ GIẢM GIÁ
                </a>
              </li>
              <li className="line-underline">
                <a className="line-text" href="./Assistant.HTML">
                  TRỢ LÝ MUA SẮM
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/*  */}
      <main>
        <section className="around-the-worlk">
          <div className="head-text-inner">
            <img
              height={244}
              src="https://st-fe-v2.fado.vn/desktop/image/bner/bg-globalvip-banner.png?v=3.239.3.14"
              data-src="https://st-fe-v2.fado.vn/desktop/image/bner/bg-globalvip-banner.png?v=3.239.3.14"
              alt="Fado global"
              className="head-background-img ls-is-cached lazyloaded"
            />
          </div>
          <div className="text-deal">
            <h1 className="head-title">Dạo quanh thế giới</h1>
            <p className="head-des">Deal hot khắp thế giới, săn ngay kẻo lỡ</p>
          </div>
        </section>
        <section>
          <li className="line-underline">
            <h5 className="line-textt">Khắp thế giới</h5>
          </li>
        </section>
        <hr />
        <section className="list-item-card">
          <div className="card-sales card-sales5">
            <div className="sales-img">
              <img
                src="https://cdn-beup.woka.io/uploads/banners/2023/12/02/Fado.VN_1701480696.4525.jpg"
                width="100%"
                height="100%"
                alt="Giảm đến 50% - Thực Phẩm Chức Năng"
                className="global-home-deal-card__image"
              />
            </div>
            <div className="card-detail">
              <div className="sales-name-detail">
                Giảm đến 50% - Thực Phẩm Chức Năng
              </div>
              <div className="value values-price">100,000 đ</div>
              <div className="sales-depict">
                <div className="sales-depict-text">
                  Còn <span className="date">4</span> ngày
                </div>
              </div>
            </div>
          </div>
          <div className="card-sales card-sales5">
            <div className="sales-img">
              <img
                src="https://cdn-beup.woka.io/uploads/banners/2023/12/02/Fado.VN_1701480696.4525.jpg"
                width="100%"
                height="100%"
                alt="Giảm đến 50% - Thực Phẩm Chức Năng"
                className="global-home-deal-card__image"
              />
            </div>
            <div className="card-detail">
              <div className="sales-name-detail">
                Giảm đến 50% - Thực Phẩm Chức Năng
              </div>
              <div className="value values-price">100,000 đ</div>
              <div className="sales-depict">
                <div className="sales-depict-text">
                  Còn <span className="date">4</span> ngày
                </div>
              </div>
            </div>
          </div>
          <div className="card-sales card-sales5">
            <div className="sales-img">
              <img
                src="https://cdn-beup.woka.io/uploads/banners/2023/12/02/Fado.VN_1701480696.4525.jpg"
                width="100%"
                height="100%"
                alt="Giảm đến 50% - Thực Phẩm Chức Năng"
                className="global-home-deal-card__image"
              />
            </div>
            <div className="card-detail">
              <div className="sales-name-detail">
                Giảm đến 50% - Thực Phẩm Chức Năng
              </div>
              <div className="value values-price">100,000 đ</div>
              <div className="sales-depict">
                <div className="sales-depict-text">
                  Còn <span className="date">4</span> ngày
                </div>
              </div>
            </div>
          </div>
          <div className="card-sales card-sales5">
            <div className="sales-img">
              <img
                src="https://cdn-beup.woka.io/uploads/banners/2023/12/02/Fado.VN_1701480696.4525.jpg"
                width="100%"
                height="100%"
                alt="Giảm đến 50% - Thực Phẩm Chức Năng"
                className="global-home-deal-card__image"
              />
            </div>
            <div className="card-detail">
              <div className="sales-name-detail">
                Giảm đến 50% - Thực Phẩm Chức Năng
              </div>
              <div className="value values-price">100,000 đ</div>
              <div className="sales-depict">
                <div className="sales-depict-text">
                  Còn <span className="date">4</span> ngày
                </div>
              </div>
            </div>
          </div>
          <div className="card-sales card-sales5">
            <div className="sales-img">
              <img
                src="https://cdn-beup.woka.io/uploads/banners/2023/12/02/Fado.VN_1701480696.4525.jpg"
                width="100%"
                height="100%"
                alt="Giảm đến 50% - Thực Phẩm Chức Năng"
                className="global-home-deal-card__image"
              />
            </div>
            <div className="card-detail">
              <div className="sales-name-detail">
                Giảm đến 50% - Thực Phẩm Chức Năng
              </div>
              <div className="value values-price">100,000 đ</div>
              <div className="sales-depict">
                <div className="sales-depict-text">
                  Còn <span className="date">4</span> ngày
                </div>
              </div>
            </div>
          </div>
          <div className="card-sales card-sales5">
            <div className="sales-img">
              <img
                src="https://cdn-beup.woka.io/uploads/banners/2023/12/02/Fado.VN_1701480696.4525.jpg"
                width="100%"
                height="100%"
                alt="Giảm đến 50% - Thực Phẩm Chức Năng"
                className="global-home-deal-card__image"
              />
            </div>
            <div className="card-detail">
              <div className="sales-name-detail">
                Giảm đến 50% - Thực Phẩm Chức Năng
              </div>
              <div className="value values-price">100,000 đ</div>
              <div className="sales-depict">
                <div className="sales-depict-text">
                  Còn <span className="date">4</span> ngày
                </div>
              </div>
            </div>
          </div>
          <div className="card-sales card-sales5">
            <div className="sales-img">
              <img
                src="https://cdn-beup.woka.io/uploads/banners/2023/12/02/Fado.VN_1701480696.4525.jpg"
                width="100%"
                height="100%"
                alt="Giảm đến 50% - Thực Phẩm Chức Năng"
                className="global-home-deal-card__image"
              />
            </div>
            <div className="card-detail">
              <div className="sales-name-detail">
                Giảm đến 50% - Thực Phẩm Chức Năng
              </div>
              <div className="value values-price">100,000 đ</div>
              <div className="sales-depict">
                <div className="sales-depict-text">
                  Còn <span className="date">4</span> ngày
                </div>
              </div>
            </div>
          </div>
          <div className="card-sales card-sales5">
            <div className="sales-img">
              <img
                src="https://cdn-beup.woka.io/uploads/banners/2023/12/02/Fado.VN_1701480696.4525.jpg"
                width="100%"
                height="100%"
                alt="Giảm đến 50% - Thực Phẩm Chức Năng"
                className="global-home-deal-card__image"
              />
            </div>
            <div className="card-detail">
              <div className="sales-name-detail">
                Giảm đến 50% - Thực Phẩm Chức Năng
              </div>
              <div className="value values-price">100,000 đ</div>
              <div className="sales-depict">
                <div className="sales-depict-text">
                  Còn <span className="date">4</span> ngày
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer">
          <div className="columne-logo">
            <img
              src="https://st-fe-v2.fado.vn/desktop/image/logo/fado_white_v2.svg"
              alt=""
            />
            <div className="conten-introduce">
              FADO.VN - Nền tảng cung cấp giải pháp mua hàng quốc tế phục vụ nhu
              cầu cao cấp, dịch vụ nhanh chóng &amp; tin cậy, nhằm mang đến cho
              bạn những sự lựa chọn thời thượng &amp; độc đáo nhất. Tại đây, quý
              khách hàng có thể lựa chọn không giới hạn với hơn 5 tỷ sản phẩm
              chất lượng chính hãng, từ khắp nơi trên thế giới đặc biệt là từ
              các nước phát triển Mỹ, Đức, Nhật, Úc, Anh, Đức...
            </div>
            <div className="footer-info-appstore">
              <ul className="icon-info">
                <li>
                  <a href="$">
                    <i
                      className="fab fa-facebook"
                      style={{ fontSize: "36px" }}
                    />
                  </a>
                </li>
                <li>
                  <a href="$">
                    <i
                      className="fab fa-instagram"
                      style={{ fontSize: "36px" }}
                    />
                  </a>
                </li>
                <li>
                  <a href="$">
                    <i
                      className="fab fa-youtube-square"
                      style={{ fontSize: "36px" }}
                    />
                  </a>
                </li>
              </ul>
              <ul className="appstore">
                <li>
                  <a href="$">
                    <img
                      src="https://st-fe-v2.fado.vn/desktop/image/logo/app_store_logo_black_v3.png?v=3.239.3.12"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="$">
                    <img
                      src="https://st-fe-v2.fado.vn/desktop/image/logo/google_play_store_logo_black_v3.png?v=3.239.3.12"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="list-columne">
            <div className="footer-columne">
              <ul className="columne">
                <h6 className="footer-title">Hỗ trợ khách hàng</h6>
                <li>
                  <a href="$">Bảo vệ ngươi mua</a>
                </li>
                <li>
                  <a href="$">Hướng dẫn mua hàng</a>
                </li>
                <li>
                  <a href="$">Phương thức thanh toán</a>
                </li>
                <li>
                  <a href="$">Chính sách đổi trả hàng</a>
                </li>
                <li>
                  <a href="$">Câu hỏi thường gặp</a>
                </li>
                <li>
                  <a href="$">Cách thức giao nhận</a>
                </li>
                <li>
                  <a href="$">Chính sách giao dịch</a>
                </li>
                <li>
                  <a href="$">Chính sách bảo mật</a>
                </li>
                <li>
                  <a href="$">Chính sách giải quyết khiếu nại</a>
                </li>
              </ul>
              <ul className="columne">
                <h6 className="footer-title">Về FADO.VN</h6>
                <li>
                  <a href="$">Giới thiệu FADO</a>
                </li>
                <li>
                  <a href="$">Phản hồi khách hàng</a>
                </li>
                <li>
                  <a href="$">Báo chí nói về FADO</a>
                </li>
                <li>
                  <a href="$">Trung tâm hỗ trợ</a>
                </li>
                <li>
                  <a href="$">tin tức</a>
                </li>
                <li>
                  <a href="$">Quy chế hoạt động</a>
                </li>
                <li>
                  <a href="$">Cơ hội nghề nghiệp</a>
                </li>
                <li>
                  <a href="$">Nghĩa vụ thuế</a>
                </li>
                <li>
                  <a href="$">Liên kết hợp tác</a>
                </li>
              </ul>
              <ul className="columne">
                <h6 className="footer-title">Hợp tác &amp; liên kết</h6>
                <li>
                  <a href="$">Bán hàng cùng FADO</a>
                </li>
                <li>
                  <a href="$">Chính sách đại lý</a>
                </li>
              </ul>
              <ul className="columne ship">
                <h6 className="footer-title">Dịch vụ giao hàng</h6>
                <li>
                  <a href="$">
                    <img
                      src="https://st-fe-v2.fado.vn/desktop/image/logo/fado_express_v2.png"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="$">
                    <img
                      src="https://st-fe-v2.fado.vn/desktop/image/logo/proship.png"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
              <ul className="columne card">
                <h6 className="footer-title">Chấp nhận thanh toán</h6>
                <ul className="bg-card">
                  <li>
                    <a href="$">
                      <img
                        className="footer-mini-block__payment-item-img"
                        src="https://st-fe-v2.fado.vn/desktop/image/list-bank/mastercard.png"
                        alt="payment icon"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="$">
                      <img
                        className="footer-mini-block__payment-item-img"
                        src="https://st-fe-v2.fado.vn/desktop/image/list-bank/visa.png"
                        alt="payment icon"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="$">
                      <img
                        className="footer-mini-block__payment-item-img"
                        src="https://st-fe-v2.fado.vn/desktop/image/list-bank/jcb.png"
                        alt="payment icon"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="$">
                      <img
                        className="footer-mini-block__payment-item-img"
                        src="https://st-fe-v2.fado.vn/desktop/image/list-bank/zalopay.png"
                        alt="payment icon"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="$">
                      <img
                        className="footer-mini-block__payment-item-img"
                        src="https://st-fe-v2.fado.vn/desktop/image/list-bank/payoo.png"
                        alt="payment icon"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="$">
                      <img
                        className="footer-mini-block__payment-item-img"
                        src="https://st-fe-v2.fado.vn/desktop/image/list-bank/napas_v2.jpg"
                        alt="payment icon"
                      />
                    </a>
                  </li>
                </ul>
              </ul>
              <ul className="columne certify">
                <h6 className="footer-title">Chứng nhận bởi</h6>
                <li>
                  <a href="$">
                    <img
                      className="footer-mini-block__certify-item-img"
                      src="https://st-fe-v2.fado.vn/desktop/image/logo/tnm.png"
                      alt="Chung nhan Tin Nhiem Mang FADO"
                    />
                  </a>
                </li>
                <li>
                  <a href="$">
                    <img
                      className="footer-mini-block__certify-item-img ls-is-cached lazyloaded"
                      src="https://st-fe-v2.fado.vn/desktop/image/icons/bo-cong-thuong_v2.png?v=3.239.3.12"
                      data-src="https://st-fe-v2.fado.vn/desktop/image/icons/bo-cong-thuong_v2.png?v=3.239.3.12"
                      alt="chung nhan bo cong thuong"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-foot">
          <div className="footer-foot-clo">
            <h6>TÊN DOANH NGHIỆP: CÔNG TY CỔ PHẦN FADO GLOBAL</h6>
            <p>
              Địa chỉ công ty: 60 Nguyễn Đình Chiểu, Phường Đa Kao, Quận 1,
              Thành phố Hồ Chí Minh, Việt Nam Giấy phép số 0316534223. Chịu
              trách nhiệm: FADO GLOBAL
            </p>
          </div>
          <div className="footer-foot-clo">
            <h6>TRỤ SỞ</h6>
            <p>
              21Bis Hậu Giang, Phường 4, Quận Tân Bình, TP. HCM 95-97 Lê Duẩn,
              Phường Cửa Nam, Quận Hoàn Kiếm, TP. Hà Nội
            </p>
          </div>
        </div>
      </footer>
      {/* go top */}
    </div>
  );
};

export default Productworlk;
