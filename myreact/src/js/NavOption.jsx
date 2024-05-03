import React from "react";

const NavOption = () => {
  return (
    <div>
      <header>
        <div className="position-sticky">
          <div className="line-short">Xin kính chào quý khách</div>
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
                <a href="/login">
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
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleSlidesOnly"
            data-bs-slide-to={0}
            className="active"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleSlidesOnly"
            data-bs-slide-to={1}
          />
          <button
            type="button"
            data-bs-target="#carouselExampleSlidesOnly"
            data-bs-slide-to={2}
          />
          <button
            type="button"
            data-bs-target="#carouselExampleSlidesOnly"
            data-bs-slide-to={3}
          />
          <button
            type="button"
            data-bs-target="#carouselExampleSlidesOnly"
            data-bs-slide-to={4}
          />
          <button
            type="button"
            data-bs-target="#carouselExampleSlidesOnly"
            data-bs-slide-to={5}
          />
          <button
            type="button"
            data-bs-target="#carouselExampleSlidesOnly"
            data-bs-slide-to={6}
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="home-slider-img ls-is-cached lazyloaded"
              src="https://cdn-beup.woka.io/uploads/banners/2024/01/15/Fado.VN_1705298825.4553.jpg"
              data-src="https://cdn-beup.woka.io/uploads/banners/2024/01/15/Fado.VN_1705298825.4553.jpg"
              alt=""
              height={272}
            />
          </div>
          <div className="carousel-item">
            <img
              className="home-slider-img ls-is-cached lazyloaded"
              src="https://cdn-beup.woka.io/uploads/banners/2023/12/02/Fado.VN_1701480795.525.jpg"
              data-src="https://cdn-beup.woka.io/uploads/banners/2023/12/02/Fado.VN_1701480795.525.jpg"
              alt=""
              height={272}
            />
          </div>
          <div className="carousel-item">
            <img
              className="home-slider-img ls-is-cached lazyloaded"
              src="https://cdn-beup.woka.io/uploads/banners/2024/02/27/Fado.VN_1708999308.9194.jpg"
              data-src="https://cdn-beup.woka.io/uploads/banners/2024/02/27/Fado.VN_1708999308.9194.jpg"
              alt=""
              height={272}
            />
          </div>
          <div className="carousel-item">
            <img
              className="home-slider-img ls-is-cached lazyloaded"
              src="https://cdn-beup.woka.io/uploads/banners/2023/07/10/Fado.VN_1688966521.7044.jpg"
              data-src="https://cdn-beup.woka.io/uploads/banners/2023/07/10/Fado.VN_1688966521.7044.jpg"
              alt=""
              height={272}
            />
          </div>
          <div className="carousel-item">
            <img
              className="home-slider-img ls-is-cached lazyloaded"
              src="https://cdn-beup.woka.io/uploads/banners/2023/08/11/Fado.VN_1691734617.131.jpg"
              data-src="https://cdn-beup.woka.io/uploads/banners/2023/08/11/Fado.VN_1691734617.131.jpg"
              alt=""
              height={272}
            />
          </div>
          <div className="carousel-item">
            <img
              className="home-slider-img ls-is-cached lazyloaded"
              src="https://cdn-beup.woka.io/uploads/banners/2023/12/27/Fado.VN_1703659346.2122.jpg"
              data-src="https://cdn-beup.woka.io/uploads/banners/2023/12/27/Fado.VN_1703659346.2122.jpg"
              alt=""
              height={272}
            />
          </div>
          <div className="carousel-item">
            <img
              className="home-slider-img lazyloaded"
              src="https://cdn-beup.woka.io/uploads/banners/2023/10/02/Fado.VN_1696219891.285.jpg"
              data-src="https://cdn-beup.woka.io/uploads/banners/2023/10/02/Fado.VN_1696219891.285.jpg"
              alt=""
              height={272}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleSlidesOnly"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" />
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleSlidesOnly"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" />
        </button>
      </div>
      <nav className="nav-table">
        <li className="nav-show-info">
          <ul>
            <li>
              <ul className="table-icon">
                <div>
                  <i className="icofont icofont-euro" />
                </div>
                <div>Giá bạn thấy bằng giá bạn trả</div>
              </ul>
            </li>
            <li>
              <ul className="table-icon">
                <div>
                  <i className="icofont icofont-shopify" />
                </div>
                <div>Yên tâm mua sắm, giải tỏa rủi ro</div>
              </ul>
            </li>
            <li>
              <ul className="table-icon">
                <div>
                  <i className="icofont icofont-box" />
                </div>
                <div>Hàng chất lượng, rõ nguồn gốc</div>
              </ul>
            </li>
            <li>
              <ul className="table-icon">
                <div>
                  <i className="icofont icofont-checked" />
                </div>
                <div>Sản phẩm nhập khẩu chính ngạch</div>
              </ul>
            </li>
            <li>
              <ul className="table-icon">
                <div>
                  <i className="icofont icofont-map" />
                </div>
                <div>Liên tục cập nhật hành trình</div>
              </ul>
            </li>
            <li>
              <ul className="table-icon">
                <div>
                  <i className="icofont icofont-world" />
                </div>
                <div>Miễn phí giao hàng trong nước</div>
              </ul>
            </li>
          </ul>
        </li>
        <div className="nav-show-info nav-show-info2">
          <ul>
            <li>Cam kết giá bán niêm yết chính xác trên website</li>
            <li>Bảo vệ quyền lợi Khách Hàng, hỗ trợ đổi trả nhanh chóng</li>
            <li>
              Chất lượng đảm bảo, nguồn gốc rõ ràng, có đánh giá từ người mua và
              thẩm định độ uy tín người bán
            </li>
            <li>An toàn, minh bạch hợp pháp, không sợ rủi ro</li>
            <li>Theo dõi và cập nhật quá trình vận đơn thường xuyên</li>
            <li>
              Miễn phí giao hàng trong nước, áp dụng cho đơn hàng từ 1,5 triệu
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <nav>
          <div className="nav-country">
            <h4>Khám phá thế giới</h4>
            <div className="select-country">
              <ul className="country">
                <li className="active text-center">
                  <a href=".">Mỹ</a>
                </li>
                <li className="line-underline">
                  <a className="line-text" href=".">
                    Nhật
                  </a>
                </li>
                <li className="line-underline">
                  <a className="line-text" href=".">
                    Đức
                  </a>
                </li>
                <li className="line-underline">
                  <a className="line-text" href=".">
                    Anh
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* khám phá thế giới */}
        <section>
          <div className="list-card-sales">
            <div className="card-sales card-sales1">
              <div className="sales-img">
                <img
                  src="https://cdn-beup.woka.io/uploads/banners/2023/07/06/Fado.VN_1688638855.4199.jpg"
                  width="100%"
                  height="100%"
                  alt="Giảm Đến 46% - Tai Nghe Bluetooth"
                  className="global-home-deal-card__image"
                />
              </div>
              <div className="sales-content">
                <div className="card-detail">
                  <div className="sales-name-detail">
                    Giảm Đến 46% - Tai Nghe Bluetooth
                  </div>
                  <div className="sales-depict">
                    <div className="sales-depict-text">Chỉ từ</div>
                    <div className="value values-price">650,000 đ</div>
                    <div className="sales-depict-text depict-date">
                      còn 4 ngày
                    </div>
                  </div>
                </div>
                <div className="sales-price">
                  <div className="sales" style={{ color: "#98a5b9" }}>
                    Giảm
                  </div>
                  <div
                    className="values-sales"
                    style={{ fontSize: "30px", fontWeight: 700 }}
                  >
                    -46%
                  </div>
                </div>
              </div>
            </div>
            <div className="card-sales card-sales2">
              <div className="sales-img">
                <img
                  src="https://cdn-beup.woka.io/uploads/banners/2024/01/11/Fado.VN_1704937885.4905.jpg"
                  width="100%"
                  height="100%"
                  alt="Giảm đến 86% - HÀNG HIỆU SALE NỬA GIÁ"
                  className="global-home-deal-card__image"
                />
              </div>
              <div className="sales-content">
                <div className="card-detail">
                  <div className="sales-name-detail">
                    Giảm đến 86% - HÀNG HIỆU SALE NỬA GIÁ
                  </div>
                  <div className="sales-depict">
                    <div className="sales-depict-text">Chỉ từ</div>
                    <div className="value values-price">2,000,000 đ</div>
                    <div className="sales-depict-text depict-date">
                      còn 4 ngày
                    </div>
                  </div>
                </div>
                <div className="sales-price">
                  <div className="sales" style={{ color: "#98a5b9" }}>
                    Giảm
                  </div>
                  <div
                    className="values-sales"
                    style={{ fontSize: "30px", fontWeight: 700 }}
                  >
                    -86%
                  </div>
                </div>
              </div>
            </div>
            <div className="card-sales card-sales3">
              <div className="sales-img">
                <img
                  src="https://cdn-beup.woka.io/uploads/banners/2023/07/06/Fado.VN_1688631732.1104.jpg"
                  width="100%"
                  height="100%"
                  alt="Giảm đến 30% - Máy ảnh chính hãng Nhật Bản"
                  className="global-home-deal-card__image"
                />
              </div>
              <div className="sales-content">
                <div className="card-detail">
                  <div className="sales-name-detail">
                    Giảm đến 30% - Máy ảnh chính hãng Nhật Bản
                  </div>
                  <div className="sales-depict">
                    <div className="sales-depict-text">Chỉ từ</div>
                    <div className="value values-price">2,000,000 đ</div>
                    <div className="sales-depict-text depict-date">
                      còn 7 ngày
                    </div>
                  </div>
                </div>
                <div className="sales-price">
                  <div className="sales" style={{ color: "#98a5b9" }}>
                    Giảm
                  </div>
                  <div
                    className="values-sales"
                    style={{ fontSize: "30px", fontWeight: 700 }}
                  >
                    -30%
                  </div>
                </div>
              </div>
            </div>
            <div className="card-sales card-sales4">
              <div className="sales-img">
                <img
                  src="https://cdn-beup.woka.io/uploads/banners/2023/11/30/Fado.VN_1701325922.5214.jpg"
                  width="100%"
                  height="100%"
                  alt="Giảm đến 48% - GUCCI LUXURY"
                  className="global-home-deal-card__image"
                />
              </div>
              <div className="sales-content">
                <div className="card-detail">
                  <div className="sales-name-detail">
                    Giảm đến 48% - GUCCI LUXURY
                  </div>
                  <div className="sales-depict">
                    <div className="sales-depict-text">Chỉ từ</div>
                    <div className="value values-price">2,000,000 đ</div>
                    <div className="sales-depict-text depict-date">
                      còn 3 ngày
                    </div>
                  </div>
                </div>
                <div className="sales-price">
                  <div className="sales" style={{ color: "#98a5b9" }}>
                    Giảm
                  </div>
                  <div
                    className="values-sales"
                    style={{ fontSize: "30px", fontWeight: 700 }}
                  >
                    -48%
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
              <div className="sales-content">
                <div className="card-detail">
                  <div className="sales-name-detail">
                    Giảm đến 50% - Thực Phẩm Chức Năng
                  </div>
                  <div className="sales-depict">
                    <div className="sales-depict-text">Chỉ từ</div>
                    <div className="value values-price">100,000 đ</div>
                    <div className="sales-depict-text depict-date">
                      còn 2 ngày
                    </div>
                  </div>
                </div>
                <div className="sales-price">
                  <div className="sales" style={{ color: "#98a5b9" }}>
                    Giảm
                  </div>
                  <div
                    className="values-sales"
                    style={{ fontSize: "30px", fontWeight: 700 }}
                  >
                    -50%
                  </div>
                </div>
              </div>
            </div>
            <div className="card-sales card-sales6">
              <div className="sales-img">
                <img
                  src="https://cdn2.jomashop.com/media//wysiwyg/sales-event/2020/zegna_sun_3.jpg"
                  width="100%"
                  height="100%"
                  alt="Giảm đến 79% - Mắt Kính Thời Trang"
                  className="global-home-deal-card__image"
                />
              </div>
              <div className="sales-content">
                <div className="card-detail">
                  <div className="sales-name-detail">
                    Giảm đến 79% - Mắt Kính Thời Trang
                  </div>
                  <div className="sales-depict">
                    <div className="sales-depict-text">Chỉ từ</div>
                    <div className="value values-price">1,400,000 đ</div>
                    <div className="sales-depict-text depict-date">
                      còn 6 ngày
                    </div>
                  </div>
                </div>
                <div className="sales-price">
                  <div className="sales" style={{ color: "#98a5b9" }}>
                    Giảm
                  </div>
                  <div
                    className="values-sales"
                    style={{ fontSize: "30px", fontWeight: 700 }}
                  >
                    -79%
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* button next */}
          <div className="btn-link-sales">
            {/* <button class="button">
        <span class="text"
          ><a style="text-decoration: none; color: #fff" href="."
            >Trải nghiệm đẳng cấp mua sắm thế giới</a
          >
        </span>
        <svg
          class="arrow"
          viewBox="0 0 448 512"
          height="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
          ></path>
        </svg>
      </button> */}
          </div>
          {/* trademark */}
          <div className="trademark-famous">
            <h4>Thương hiệu nổi bật</h4>
          </div>
          <div className="trademark">
            <div className="card-trademark card-trademark1">
              <div className="trademark-img">
                <img
                  className="cate-item-img ls-is-cached lazyloaded"
                  src="https://cdn-beup.woka.io/uploads/instead-template-banner/2022/11/17/Fado.VN_1668675072.672.jpg"
                  data-src="https://cdn-beup.woka.io/uploads/instead-template-banner/2022/11/17/Fado.VN_1668675072.672.jpg"
                  alt="Mắt kính Gucci"
                />
              </div>
              <div className="trademark-content">
                <div className="trademark-detail">
                  <a
                    rel="nofollow"
                    href="https://fado.vn/deluxe/gucci-sunglasses.html?subtype=Sunglasses"
                    className="cate-item-title"
                  >
                    Mắt kính Gucci
                  </a>
                  <div className="sales-depict-text">Sale up to 66%</div>
                </div>
              </div>
            </div>
            <div className="card-trademark card-trademark2">
              <div className="trademark-img">
                <img
                  className="cate-item-img ls-is-cached lazyloaded"
                  src="https://cdn-beup.woka.io/uploads/instead-template-banner/2022/11/17/Fado.VN_1668674188.8091.jpg"
                  data-src="https://cdn-beup.woka.io/uploads/instead-template-banner/2022/11/17/Fado.VN_1668674188.8091.jpg"
                  alt="Đồng hồ Citizen"
                />
              </div>
              <div className="trademark-content">
                <div className="trademark-detail">
                  <a
                    rel="nofollow"
                    href="https://fado.vn/deluxe/gucci-sunglasses.html?subtype=Sunglasses"
                    className="cate-item-title"
                  >
                    Đồng hồ Michael Kors
                  </a>
                  <div className="sales-depict-text">Sale up to 66%</div>
                </div>
              </div>
            </div>
            <div className="card-trademark card-trademark3">
              <div className="trademark-img">
                <img
                  className="cate-item-img ls-is-cached lazyloaded"
                  src="https://cdn-beup.woka.io/uploads/instead-template-banner/2022/11/17/Fado.VN_1668675011.864.jpg"
                  data-src="https://cdn-beup.woka.io/uploads/instead-template-banner/2022/11/17/Fado.VN_1668675011.864.jpg"
                  alt="Đồng hồ Invicta"
                />
              </div>
              <div className="trademark-content">
                <div className="trademark-detail">
                  <a
                    rel="nofollow"
                    href="https://fado.vn/deluxe/invicta.html"
                    className="cate-item-title"
                  >
                    Đồng hồ Invicta
                  </a>
                  <div className="sales-depict-text">Sale up to 66%</div>
                </div>
              </div>
            </div>
            <div className="card-trademark card-trademark4">
              <div className="trademark-img">
                <img
                  className="cate-item-img ls-is-cached lazyloaded"
                  src="https://cdn-beup.woka.io/uploads/instead-template-banner/2022/11/17/Fado.VN_1668674828.2355.jpg"
                  data-src="https://cdn-beup.woka.io/uploads/instead-template-banner/2022/11/17/Fado.VN_1668674828.2355.jpg"
                  alt="Mắt kính Prada"
                />
              </div>
              <div className="trademark-content">
                <div className="trademark-detail">
                  <a
                    rel="nofollow"
                    href="https://fado.vn/us/s/search?keywords=Prada+sunglasses&query=Prada+sunglasses&psrc=joma"
                    className="cate-item-title"
                  >
                    Mắt kính Prada
                  </a>
                  <div className="sales-depict-text">Sale up to 66%</div>
                </div>
              </div>
            </div>
            <div className="card-trademark card-trademark5">
              <div className="trademark-img">
                <img
                  className="cate-item-img ls-is-cached lazyloaded"
                  src="https://cdn-beup.woka.io/uploads/instead-template-banner/2022/11/17/Fado.VN_1668674719.3417.jpg"
                  data-src="https://cdn-beup.woka.io/uploads/instead-template-banner/2022/11/17/Fado.VN_1668674719.3417.jpg"
                  alt="Nước hoa Versace"
                />
              </div>
              <div className="trademark-content">
                <div className="trademark-detail">
                  <a
                    rel="nofollow"
                    href="https://fado.vn/us/s/search?keywords=Versace+perfume&query=Versace+perfume&psrc=joma"
                    className="cate-item-title"
                  >
                    Nước hoa Versace
                  </a>
                  <div className="sales-depict-text">Sale up to 66%</div>
                </div>
              </div>
            </div>
            <div className="card-trademark card-trademark6">
              <div className="trademark-img">
                <img
                  className="cate-item-img ls-is-cached lazyloaded"
                  src="https://cdn-beup.woka.io/uploads/instead-template-banner/2022/11/17/Fado.VN_1668674611.2676.jpg"
                  data-src="https://cdn-beup.woka.io/uploads/instead-template-banner/2022/11/17/Fado.VN_1668674611.2676.jpg"
                  alt="Túi xách Coach"
                />
              </div>
              <div className="trademark-content">
                <div className="trademark-detail">
                  <a
                    rel="nofollow"
                    href="https://fado.vn/deluxe/coach-handbags.html"
                    className="cate-item-title"
                  >
                    Túi xách Coach
                  </a>
                  <div className="sales-depict-text">Sale up to 66%</div>
                </div>
              </div>
            </div>
            <div className="card-trademark card-trademark7">
              <div className="trademark-img">
                <img
                  className="cate-item-img ls-is-cached lazyloaded"
                  src="https://cdn-beup.woka.io/uploads/instead-template-banner/2022/11/17/Fado.VN_1668674515.4119.jpg"
                  data-src="https://cdn-beup.woka.io/uploads/instead-template-banner/2022/11/17/Fado.VN_1668674515.4119.jpg"
                  alt="Đồng hồ Michael Kors"
                />
              </div>
              <div className="trademark-content">
                <div className="trademark-detail">
                  <a
                    rel="nofollow"
                    href="https://fado.vn/deluxe/michael-kors-watches.html"
                    className="cate-item-title"
                  >
                    Đồng hồ Michael Kors
                  </a>
                  <div className="sales-depict-text">Sale up to 66%</div>
                </div>
              </div>
            </div>
            <div className="card-trademark card-trademark8">
              <div className="trademark-img">
                <img
                  className="cate-item-img ls-is-cached lazyloaded"
                  src="https://cdn-beup.woka.io/uploads/instead-template-banner/2022/11/17/Fado.VN_1668674397.4615.jpg"
                  data-src="https://cdn-beup.woka.io/uploads/instead-template-banner/2022/11/17/Fado.VN_1668674397.4615.jpg"
                  alt="Thời trang Burberry"
                />
              </div>
              <div className="trademark-content">
                <div className="trademark-detail">
                  <a
                    rel="nofollow"
                    href="https://fado.vn/deluxe/ladies-mens-apparel.html?manufacturer=Burberry"
                    className="cate-item-title"
                  >
                    Thời trang Burberry
                  </a>
                  <div className="sales-depict-text">Sale up to 66%</div>
                </div>
              </div>
            </div>
            <div className="card-trademark card-trademark8">
              <div className="trademark-img">
                <img
                  className="cate-item-img ls-is-cached lazyloaded"
                  src="https://cdn-beup.woka.io/uploads/instead-template-banner/2022/11/17/Fado.VN_1668674397.4615.jpg"
                  data-src="https://cdn-beup.woka.io/uploads/instead-template-banner/2022/11/17/Fado.VN_1668674397.4615.jpg"
                  alt="Thời trang Burberry"
                />
              </div>
              <div className="trademark-content">
                <div className="trademark-detail">
                  <a
                    rel="nofollow"
                    href="https://fado.vn/deluxe/ladies-mens-apparel.html?manufacturer=Burberry"
                    className="cate-item-title"
                  >
                    Thời trang Burberry
                  </a>
                  <div className="sales-depict-text">Sale up to 66%</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* deal world */}
        <nav>
          <div className="nav-country nav-country2">
            <h4>Sản phẩm đang giảm giá khắp thế giới</h4>
            <div className="select-country select-country2">
              <ul className="country country2">
                <li className="active">
                  <a href=".">Khắp thế giới</a>
                </li>
                <li className="line-underline">
                  <a className="line-text" href=".">
                    Săn Deal Deluxe
                  </a>
                </li>
                <li className="line-underline">
                  <a className="line-text" href=".">
                    Săn Deal Việt Nam
                  </a>
                </li>
                <li className="line-underline">
                  <a className="line-text" href=".">
                    Săn Deal từ Nhật
                  </a>
                </li>
                <li className="line-underline">
                  <a className="line-text" href=".">
                    Săn Deal từ Đức
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section>
          <div className="card-product-world">
            <div className="card-product">
              <div className="card-product-img">
                <img
                  alt="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                  src="https://cdn-jms.woka.io/media/catalog/product/p/r/prada-ladies-paradoxe-intense-edp-spray-30-oz-fragrances-3614273961707.jpg"
                  data-src="https://cdn-jms.woka.io/media/catalog/product/p/r/prada-ladies-paradoxe-intense-edp-spray-30-oz-fragrances-3614273961707.jpg"
                  className="product-deal-action-card__img ls-is-cached lazyloaded"
                />
              </div>
              <div className="card-product-title">
                <a
                  href="."
                  title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                  className="product-deal-action-card__title-inner"
                >
                  Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances
                  3614273961707
                </a>
              </div>
            </div>
            <div className="card-product">
              <div className="card-product-img">
                <img
                  alt="Viên Uống Hỗ Trợ Nở Mông Tăng Kích Thước Vòng Ba Major Curves Butt Enhancement 60 Viên"
                  src="https://static.megavita.vn/uploads/product/2020/06/12/1591931149.6225.jpg"
                  data-src="https://static.megavita.vn/uploads/product/2020/06/12/1591931149.6225.jpg"
                  className="product-deal-action-card__img ls-is-cached lazyloaded"
                />
              </div>
              <div className="card-product-title">
                <a
                  href="."
                  title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                  className="product-deal-action-card__title-inner"
                >
                  Viên Uống Hỗ Trợ Nở Mông Tăng Kích Thước Vòng Ba Major Curves
                  Butt Enhancement 60 Viên
                </a>
              </div>
            </div>
            <div className="card-product">
              <div className="card-product-img">
                <img
                  alt="Khaki Field Hand Wind Black Dial Men's Watch H69439933"
                  src="https://cdn-jms.woka.io/media/catalog/product/h/a/hamilton-khaki-field-hand-wind-black-dial-mens-watch-h69439933.jpg"
                  data-src="https://cdn-jms.woka.io/media/catalog/product/h/a/hamilton-khaki-field-hand-wind-black-dial-mens-watch-h69439933.jpg"
                  className="product-deal-action-card__img ls-is-cached lazyloaded"
                />
              </div>
              <div className="card-product-title">
                <a
                  href="."
                  title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                  className="product-deal-action-card__title-inner"
                >
                  Khaki Field Hand Wind Black Dial Men's Watch H69439933
                </a>
              </div>
            </div>
            <div className="card-product">
              <div className="card-product-img">
                <img
                  alt="Ivory Caps Pills: Viên uống làm trắng da tự nhiên với Glutathione 1500mg 60 viên"
                  src="https://static.megavita.vn/uploads/product/2021/03/13/1615613790.8288.jpg"
                  data-src="https://static.megavita.vn/uploads/product/2021/03/13/1615613790.8288.jpg"
                  className="product-deal-action-card__img ls-is-cached lazyloaded"
                />
              </div>
              <div className="card-product-title">
                <a
                  href="."
                  title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                  className="product-deal-action-card__title-inner"
                >
                  Ivory Caps Pills: Viên uống làm trắng da tự nhiên với
                  Glutathione 1500mg 60 viên
                </a>
              </div>
            </div>
            <div className="card-product">
              <div className="card-product-img">
                <img
                  alt="Ladies Pride Lahdath EDP Spray 3.4 oz Fragrances 6290360590110"
                  src="https://cdn-jms.woka.io/media/catalog/product/l/a/lattafa-ladies-pride-lahdath-edp-spray-34-oz-fragrances-6290360590110.jpg"
                  data-src="https://cdn-jms.woka.io/media/catalog/product/l/a/lattafa-ladies-pride-lahdath-edp-spray-34-oz-fragrances-6290360590110.jpg"
                  className="product-deal-action-card__img lazyloaded"
                />
              </div>
              <div className="card-product-title">
                <a
                  href="."
                  title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                  className="product-deal-action-card__title-inner"
                >
                  Ladies Pride Lahdath EDP Spray 3.4 oz Fragrances 6290360590110
                </a>
              </div>
            </div>
            <div className="card-product">
              <div className="card-product-img">
                <img
                  alt="10.5 - 11 MM Pink Cultured Freshwater Pearl and 1 1/2 CT TGW Cubic Zirconia Interlaced Halo Clip-Back Earrings in Sterling Silver"
                  src="https://cdn-jms.woka.io/media/catalog/product/a/m/amour-105-11-mm-pink-cultured-freshwater-pearl-and-1-12-ct-tgw-cubic-zirconia-interlaced-halo-clipback-earrings-in-sterling-silver-jms009514.jpg"
                  data-src="https://cdn-jms.woka.io/media/catalog/product/a/m/amour-105-11-mm-pink-cultured-freshwater-pearl-and-1-12-ct-tgw-cubic-zirconia-interlaced-halo-clipback-earrings-in-sterling-silver-jms009514.jpg"
                  className="product-deal-action-card__img lazyloaded"
                />
              </div>
              <div className="card-product-title">
                <a
                  href="."
                  title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                  className="product-deal-action-card__title-inner"
                >
                  10.5 - 11 MM Pink Cultured Freshwater Pearl and 1 1/2 CT TGW
                  Cubic Zirconia Interlaced Halo Clip-Back Earrings in Sterling
                  Silver
                </a>
              </div>
            </div>
            <div className="card-product">
              <div className="card-product-img">
                <img
                  alt="Men Vi Sinh Hỗ Trợ Hệ Tiêu Hóa Cho Trẻ Physician's CHOICE Probiotics for Kids 30 viên"
                  src="https://static.fado.vn/uploads/store-merchant/2023/05/19/Fado.VN_1684464018.6077.png"
                  data-src="https://static.fado.vn/uploads/store-merchant/2023/05/19/Fado.VN_1684464018.6077.png"
                  className="product-deal-action-card__img ls-is-cached lazyloaded"
                />
              </div>
              <div className="card-product-title">
                <a
                  href="."
                  title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                  className="product-deal-action-card__title-inner"
                >
                  Men Vi Sinh Hỗ Trợ Hệ Tiêu Hóa Cho Trẻ Physician's CHOICE
                  Probiotics for Kids 30 viên
                </a>
              </div>
            </div>
            <div className="card-product">
              <div className="card-product-img">
                <img
                  alt="Ladies Chocolate Diamonds Fashion Bracelet in 14K Honey Gold"
                  src="https://cdn-jms.woka.io/media/catalog/product/l/e/le-vianr-ladies-fashion-bracelet-in-14k-honey-gold-deki542.jpg"
                  data-src="https://cdn-jms.woka.io/media/catalog/product/l/e/le-vianr-ladies-fashion-bracelet-in-14k-honey-gold-deki542.jpg"
                  className="product-deal-action-card__img lazyloaded"
                />
              </div>
              <div className="card-product-title">
                <a
                  href="."
                  title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                  className="product-deal-action-card__title-inner"
                >
                  Ladies Chocolate Diamonds Fashion Bracelet in 14K Honey Gold
                </a>
              </div>
            </div>
            <div className="card-product">
              <div className="card-product-img">
                <img
                  alt="GallCleanse Natural Gallstone Cleanse Kit 150 viên 2 hộp – Viên Uống Hỗ Trợ Sỏi Mật Thanh Lọc Gan"
                  src="https://static.megavita.vn/uploads/product/2020/06/11/1591867730.346.jpg"
                  data-src="https://static.megavita.vn/uploads/product/2020/06/11/1591867730.346.jpg"
                  className="product-deal-action-card__img ls-is-cached lazyloaded"
                />
              </div>
              <div className="card-product-title">
                <a
                  href="."
                  title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                  className="product-deal-action-card__title-inner"
                >
                  GallCleanse Natural Gallstone Cleanse Kit 150 viên 2 hộp –
                  Viên Uống Hỗ Trợ Sỏi Mật Thanh Lọc Gan
                </a>
              </div>
            </div>
            <div className="card-product">
              <div className="card-product-img">
                <img
                  alt="Kirkland Signature Fast Acting Lactase – Viên Uống Hỗ Trợ Tiêu Hóa 180 viên"
                  src="https://static.megavita.vn/uploads/product/2020/06/11/1591863951.7536.jpg"
                  data-src="https://static.megavita.vn/uploads/product/2020/06/11/1591863951.7536.jpg"
                  className="product-deal-action-card__img ls-is-cached lazyloaded"
                />
              </div>
              <div className="card-product-title">
                <a
                  href="."
                  title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                  className="product-deal-action-card__title-inner"
                >
                  Kirkland Signature Fast Acting Lactase – Viên Uống Hỗ Trợ Tiêu
                  Hóa 180 viên
                </a>
              </div>
            </div>
          </div>
          {/* button next world */}
          <div className="btn-link-sales">
            <button className="button">
              <span className="text">
                <a
                  style={{ textDecoration: "none", color: "#fff" }}
                  href="./Dealhot.HTML"
                >
                  Khám phá tất cả Deal hot
                </a>
              </span>
              <svg
                className="arrow"
                viewBox="0 0 448 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </button>
          </div>
        </section>
        {/* card-product-watch */}
        <nav>
          <div className="nav-country3">
            <h4>Sản phẩm nhập khẩu chọn lọc</h4>
            <div className="select-country select-country3">
              <ul className="country country3">
                <li className="active">
                  <a href=".">Đồng hồ nam</a>
                </li>
                <li className="line-underline">
                  <a className="line-text" href=".">
                    Đồng hồ nữ
                  </a>
                </li>
                <li className="line-underline">
                  <a className="line-text" href=".">
                    Đồng hồ Unisex
                  </a>
                </li>
                <li className="btn-link-sales">
                  <a href="./Filterproduct.HTML">
                    <button className="button-product">Xem tất cả</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="product-watch all-card-product">
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <a href="../HTML/CardPay.HTML">
                <img
                  src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/t/i/tissot-t-classictradition-chronograph-men_s-watch-t0636171103700.jpg?width=350&height=350"
                  data-src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/t/i/tissot-t-classictradition-chronograph-men_s-watch-t0636171103700.jpg?width=350&height=350"
                  alt="Tissot T-ClassicTradition Chronograph Men's Watch T0636171103700"
                  className="product-card__img lazyloaded"
                />
              </a>
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Tissot T-ClassicTradition Chronograph Men's Watch T0636171103700
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  401,502,295 <sup>đ</sup>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/t/i/tissot-t-classictradition-chronograph-men_s-watch-t0636171103700.jpg?width=350&height=350"
                data-src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/t/i/tissot-t-classictradition-chronograph-men_s-watch-t0636171103700.jpg?width=350&height=350"
                alt="Tissot T-ClassicTradition Chronograph Men's Watch T0636171103700"
                className="product-card__img lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Tissot T-ClassicTradition Chronograph Men's Watch T0636171103700
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  401,502,295 <sup>đ</sup>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/c/i/citizen-promaster-sea-lefty-automatic-black-dial-mens-watch-ny004050e.jpg?width=350&height=350"
                data-src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/c/i/citizen-promaster-sea-lefty-automatic-black-dial-mens-watch-ny004050e.jpg?width=350&height=350"
                alt="Citizen Promaster Sea Lefty Automatic Black Dial Men's Watch NY0040-50E"
                className="product-card__img lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Citizen Promaster Sea Lefty Automatic Black Dial Men's Watch
                NY0040-50E
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  130,578,092 <sup>đ</sup>
                </li>
                <li className="price-product-default">
                  141,190,520 <sup>đ</sup>
                </li>
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/o/m/omega-seamaster-aqua-terra-automatic-mens-watch-22010412110001-22010412110001.jpg?width=350&height=350"
                data-src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/o/m/omega-seamaster-aqua-terra-automatic-mens-watch-22010412110001-22010412110001.jpg?width=350&height=350"
                alt="Omega Seamaster Aqua Terra Automatic Men's Watch 220.10.41.21.10.001"
                className="product-card__img lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Omega Seamaster Aqua Terra Automatic Men's Watch
                220.10.41.21.10.001
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  5,553,654 <sup>đ</sup>
                </li>
                <li className="price-product-default">
                  10,680,104 <sup>đ</sup>
                </li>
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/m/i/mido-ocean-star-automatic-blue-dial-mens-watch-m0268301104100.jpg?width=350&height=350"
                data-src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/m/i/mido-ocean-star-automatic-blue-dial-mens-watch-m0268301104100.jpg?width=350&height=350"
                alt="Mido Ocean Star Automatic Blue Dial Men's Watch M0268301104100"
                className="product-card__img lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Mido Ocean Star Automatic Blue Dial Men's Watch M0268301104100
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  34,304,414 <sup>đ</sup>
                </li>
                <li className="price-product-default">
                  49,006,306 <sup>đ</sup>
                </li>
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/s/e/seiko-5-sports-automatic-black-dial-mens-watch-snzb23j1.jpg?width=350&height=350"
                data-src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/s/e/seiko-5-sports-automatic-black-dial-mens-watch-snzb23j1.jpg?width=350&height=350"
                alt="Seiko 5 Sports Automatic Black Dial Men's Watch SNZB23J1"
                className="product-card__img lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Seiko 5 Sports Automatic Black Dial Men's Watch SNZB23J1
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  8,919,678 <sup>đ</sup>
                </li>
                <li className="price-product-default">
                  11,736,418 <sup>đ</sup>
                </li>
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
        </section>
        <hr style={{ width: "100%" }} />
        {/* card-product-hangbag */}
        <nav>
          <div className="nav-country4">
            <div className="select-country select-country3 select-country4">
              <ul className="country country3">
                <li className="active">
                  <a href=".">Túi xách nam</a>
                </li>
                <li className="line-underline">
                  <a className="line-text" href=".">
                    Túi xách nữ
                  </a>
                </li>
                <li className="line-underline">
                  <a className="line-text" href=".">
                    Ví nữ
                  </a>
                </li>
                <li className="line-underline">
                  <a className="line-text" href=".">
                    Ví nam
                  </a>
                </li>
                <li className="btn-link-sales">
                  <a href="./Filterproduct.HTML">
                    <button className="button-product">Xem tất cả</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="product-hangbag all-card-product">
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/j/i/jimmy-choo-pimlico-star-studded-leather-tote-bag-in-black-193-pimlicos-vlt-black.jpg?width=350&height=350"
                data-src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/j/i/jimmy-choo-pimlico-star-studded-leather-tote-bag-in-black-193-pimlicos-vlt-black.jpg?width=350&height=350"
                alt="Jimmy Choo Pimlico Star Studded Leather Tote Bag In Black"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Jimmy Choo Pimlico Star Studded Leather Tote Bag In Black
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values" />
                <li className="product-note">
                  <a href=".">Xem báo giá</a>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/b/a/bally-mens-chanley-nylon-denim-clutch-bag-mam006ny020u507p.jpg?width=350&height=350"
                data-src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/b/a/bally-mens-chanley-nylon-denim-clutch-bag-mam006ny020u507p.jpg?width=350&height=350"
                alt="Bally Men's Chanley Nylon Denim Clutch Bag"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Bally Men's Chanley Nylon Denim Clutch Bag"
                class="product-card__img ls-is-cached lazyloaded
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values" />
                <li className="product-note">
                  <a href=".">Xem báo giá</a>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/b/a/bally-mens-chanley-nylon-denim-clutch-bag-mam006ny020u507p.jpg?width=350&height=350"
                data-src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/b/a/bally-mens-chanley-nylon-denim-clutch-bag-mam006ny020u507p.jpg?width=350&height=350"
                alt="Bally Men's Chanley Nylon Denim Clutch Bag"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Bally Men's Chanley Nylon Denim Clutch Bag"
                class="product-card__img ls-is-cached lazyloaded
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values" />
                <li className="product-note">
                  <a href=".">Xem báo giá</a>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/s/a/salvatore-ferragamo-nylon-sf-business-bag-in-black-240286-750067.jpg?width=350&height=350"
                data-src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/s/a/salvatore-ferragamo-nylon-sf-business-bag-in-black-240286-750067.jpg?width=350&height=350"
                alt="Salvatore Ferragamo Nylon SF Business Bag In Black"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Salvatore Ferragamo Nylon SF Business Bag In Black
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values" />
                <li className="product-note">
                  <a href=".">Xem báo giá</a>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/b/o/bottega-veneta-mens-leather-duffle-bag-in-grey-609942-vcqh1-1446.jpg?width=350&height=350"
                data-src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/b/o/bottega-veneta-mens-leather-duffle-bag-in-grey-609942-vcqh1-1446.jpg?width=350&height=350"
                alt="Bottega Veneta Men's Leather Duffle Bag In Grey"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Bottega Veneta Men's Leather Duffle Bag In Grey
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values" />
                <li className="product-note">
                  <a href=".">Xem báo giá</a>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/m/o/moncler-pastel-yellow-mens-travel-jet-rusksack-backpack-h109a5a00009m1864110.jpg?width=350&height=350"
                data-src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/m/o/moncler-pastel-yellow-mens-travel-jet-rusksack-backpack-h109a5a00009m1864110.jpg?width=350&height=350"
                alt="Moncler Pastel Yellow Men's Travel Jet Rusksack Backpack"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Moncler Pastel Yellow Men's Travel Jet Rusksack Backpack
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values" />
                <li className="product-note">
                  <a href=".">Xem báo giá</a>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
        </section>
        <hr style={{ width: "100%" }} />
        {/* card-product-shoes */}
        <nav>
          <div className="nav-country4">
            <div className="select-country select-country3 select-country4">
              <ul className="country country3">
                <li className="active">
                  <a href=".">Sneaker nữ</a>
                </li>
                <li className="line-underline">
                  <a className="line-text" href=".">
                    Giày nam
                  </a>
                </li>
                <li className="line-underline">
                  <a className="line-text" href=".">
                    Sandals
                  </a>
                </li>
                <li className="line-underline">
                  <a className="line-text" href=".">
                    cao gót
                  </a>
                </li>
                <li className="line-underline">
                  <a className="line-text" href=".">
                    Boosts
                  </a>
                </li>
                <li className="btn-link-sales">
                  <a href="./Filterproduct.HTML">
                    <button className="button-product">Xem tất cả</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="product-shoes all-card-product">
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-amz.woka.io/images/I/61FhJ-MBXIL._SR200,200_.jpg"
                data-src="https://cdn-amz.woka.io/images/I/61FhJ-MBXIL._SR200,200_.jpg"
                alt="Rocket Dog Women's Cheery Plush Foam Comfort Sneaker"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Rocket Dog Women's Cheery Plush Foam Comfort Sneaker
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  1,280,552 <sup>đ</sup>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-amz.woka.io/images/I/61FhJ-MBXIL._SR200,200_.jpg"
                data-src="https://cdn-amz.woka.io/images/I/61FhJ-MBXIL._SR200,200_.jpg"
                alt="Rocket Dog Women's Cheery Plush Foam Comfort Sneaker"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Rocket Dog Women's Cheery Plush Foam Comfort Sneaker
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  1,280,552 <sup>đ</sup>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-amz.woka.io/images/I/51+3J2SqJRL._SR200,200_.jpg"
                data-src="https://cdn-amz.woka.io/images/I/51+3J2SqJRL._SR200,200_.jpg"
                alt="Skechers Women's D'Lites Fresh Start Memory Foam Lace-up Sneaker Fashion"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Skechers Women's D'Lites Fresh Start Memory Foam Lace-up Sneaker
                Fashion
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  1,267,915 <sup>đ</sup>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-amz.woka.io/images/I/81symEdXSCL._SR200,200_.jpg"
                data-src="https://cdn-amz.woka.io/images/I/81symEdXSCL._SR200,200_.jpg"
                alt="Skechers Women's Summits Quick Getaway Sneaker"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Skechers Women's Summits Quick Getaway Sneaker
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  1,979,393 <sup>đ</sup>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-amz.woka.io/images/I/612LrzjV43L._SR200,200_.jpg"
                data-src="https://cdn-amz.woka.io/images/I/612LrzjV43L._SR200,200_.jpg"
                alt="Skechers Women's Bobs Squad Chaos – Face Off Sneaker"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Skechers Women's Bobs Squad Chaos – Face Off Sneaker
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  1,896,413 đ <sup>đ</sup>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-amz.woka.io/images/I/51WdO00xMqL._SR200,200_.jpg"
                data-src="https://cdn-amz.woka.io/images/I/51WdO00xMqL._SR200,200_.jpg"
                alt="Propet Womens Ultra Walking Sneakers Shoes - Grey, Orange"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Propet Womens Ultra Walking Sneakers Shoes - Grey, Orange
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  1,463,144 <sup>đ</sup>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
        </section>
        <hr style={{ width: "100%" }} />
        {/* card-product-speaker */}
        <nav>
          <div className="nav-country4">
            <div className="select-country select-country3 select-country4">
              <ul className="country country3">
                <li className="active">
                  <a href=".">Tai nghe</a>
                </li>
                <li className="line-underline">
                  <a className="line-text" href=".">
                    Loa
                  </a>
                </li>
                <li className="line-underline">
                  <a className="line-text" href=".">
                    Laptop
                  </a>
                </li>
                <li className="line-underline">
                  <a className="line-text" href=".">
                    Máy tính bảng
                  </a>
                </li>
                <li className="line-underline">
                  <a className="line-text" href=".">
                    Phụ kiện máy tính
                  </a>
                </li>
                <li className="btn-link-sales">
                  <a href="./Filterproduct.HTML">
                    <button className="button-product">Xem tất cả</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="product-shoes all-card-product">
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-amz.woka.io/images/I/51DkbWZIg+L._SR200,200_.jpg"
                data-src="https://cdn-amz.woka.io/images/I/51DkbWZIg+L._SR200,200_.jpg"
                alt="Sony WH-1000XM4 Wireless Premium Noise Canceling Overhead Headphones with Mic for Phone-Call and Alexa Voice Control, Black WH1000XM4"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Sony WH-1000XM4 Wireless Premium Noise Canceling Overhead
                Headphones with Mic for Phone-Call and Alexa Voice Control,
                Black WH1000XM4
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  1,280,552 <sup>đ</sup>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-amz.woka.io/images/I/51DkbWZIg+L._SR200,200_.jpg"
                data-src="https://cdn-amz.woka.io/images/I/51DkbWZIg+L._SR200,200_.jpg"
                alt="Sony WH-1000XM4 Wireless Premium Noise Canceling Overhead Headphones with Mic for Phone-Call and Alexa Voice Control, Black WH1000XM4"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Sony WH-1000XM4 Wireless Premium Noise Canceling Overhead
                Headphones with Mic for Phone-Call and Alexa Voice Control,
                Black WH1000XM4
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  1,280,552 <sup>đ</sup>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-amz.woka.io/images/I/7120GgUKj3L._SR200,200_.jpg"
                data-src="https://cdn-amz.woka.io/images/I/7120GgUKj3L._SR200,200_.jpg"
                alt="Apple AirPods (2nd Generation) Wireless Ear Buds, Bluetooth Headphones with Lightning Charging Case Included, Over 24 Hours of Battery Life, Effortless Setup for iPhone"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Apple AirPods (2nd Generation) Wireless Ear Buds, Bluetooth
                Headphones with Lightning Charging Case Included, Over 24 Hours
                of Battery Life, Effortless Setup for iPhone
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  7,560,858 <sup>đ</sup>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-amz.woka.io/images/I/41wYbyr3LLL._SR200,200_.jpg"
                data-src="https://cdn-amz.woka.io/images/I/41wYbyr3LLL._SR200,200_.jpg"
                alt="Apple EarPods Headphones with Lightning Connector, Wired Ear Buds for iPhone with Built-in Remote to Control Music, Phone Calls, and Volume"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Apple EarPods Headphones with Lightning Connector, Wired Ear
                Buds for iPhone with Built-in Remote to Control Music, Phone
                Calls, and Volume
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  3,077,276 <sup>đ</sup>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-amz.woka.io/images/I/517nUTMioFL._SR200,200_.jpg"
                data-src="https://cdn-amz.woka.io/images/I/517nUTMioFL._SR200,200_.jpg"
                alt="Koss KPH7 Lightweight Portable Headphone, Black"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Koss KPH7 Lightweight Portable Headphone, Black
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  1,896,413 <sup>đ</sup>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-amz.woka.io/images/I/51bRSWrEc7S._SR200,200_.jpg"
                data-src="https://cdn-amz.woka.io/images/I/51bRSWrEc7S._SR200,200_.jpg"
                alt="Beats Studio Buds - True Wireless Noise Cancelling Earbuds - Compatible with Apple & Android, Built-in Microphone, IPX4 Rating, Sweat Resistant Earphones, Class 1 Bluetooth Headphones - Black"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Beats Studio Buds - True Wireless Noise Cancelling Earbuds -
                Compatible with Apple &amp; Android, Built-in Microphone, IPX4
                Rating, Sweat Resistant Earphones, Class 1 Bluetooth Headphones
                - Black
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  4,618,084 <sup>đ</sup>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
        </section>
        <hr style={{ width: "100%" }} />
        {/* card-product-camera */}
        <nav>
          <div className="nav-country4">
            <div className="select-country select-country3 select-country4">
              <ul className="country country3">
                <li className="active">
                  <a href=".">Máy ảnh kỹ thuật số</a>
                </li>
                <li className="line-underline">
                  <a className="line-text" href=".">
                    Máy ảnh film
                  </a>
                </li>
                <li className="line-underline">
                  <a className="line-text" href=".">
                    Lens
                  </a>
                </li>
                <li className="btn-link-sales">
                  <a href="./Filterproduct.HTML">
                    <button className="button-product">Xem tất cả</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="product-shoes all-card-product">
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-amz.woka.io/images/I/61X+fPlyOHL._SR200,200_.jpg"
                data-src="https://cdn-amz.woka.io/images/I/61X+fPlyOHL._SR200,200_.jpg"
                alt="RICOH GR IIIx HDF, Premium Digital Compact Camera with a Built-in Highlight Diffusion Filter, 24MP APS-C Size CMOS Sensor, 40mmF2.8 GR Lens (in The 35mm Format)"
                className="product-card__img lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                RICOH GR IIIx HDF, Premium Digital Compact Camera with a
                Built-in Highlight Diffusion Filter, 24MP APS-C Size CMOS
                Sensor, 40mmF2.8 GR Lens (in The 35mm Format)
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  44,885,568 <sup>đ</sup>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-amz.woka.io/images/I/61X+fPlyOHL._SR200,200_.jpg"
                data-src="https://cdn-amz.woka.io/images/I/61X+fPlyOHL._SR200,200_.jpg"
                alt="RICOH GR IIIx HDF, Premium Digital Compact Camera with a Built-in Highlight Diffusion Filter, 24MP APS-C Size CMOS Sensor, 40mmF2.8 GR Lens (in The 35mm Format)"
                className="product-card__img lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                RICOH GR IIIx HDF, Premium Digital Compact Camera with a
                Built-in Highlight Diffusion Filter, 24MP APS-C Size CMOS
                Sensor, 40mmF2.8 GR Lens (in The 35mm Format)
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  44,885,568 <sup>đ</sup>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-amz.woka.io/images/I/71BNR1UMHBL._SR200,200_.jpg"
                data-src="https://cdn-amz.woka.io/images/I/71BNR1UMHBL._SR200,200_.jpg"
                alt='VIVITAR Kids Tech - Kids Camera 2" Screen for Joyful Moments - Snap 12MP Pics, Record 1080p HD Videos, Build in Games, Durable Drop-Proof Case, USB Rechargeable for Non-Stop Fun'
                className="product-card__img lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                VIVITAR Kids Tech - Kids Camera 2" Screen for Joyful Moments -
                Snap 12MP Pics, Record 1080p HD Videos, Build in Games, Durable
                Drop-Proof Case, USB Rechargeable for Non-Stop Fun
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  1,270,734 <sup>đ</sup>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-amz.woka.io/images/I/91JwqqrK5mL._SR200,200_.jpg"
                data-src="https://cdn-amz.woka.io/images/I/91JwqqrK5mL._SR200,200_.jpg"
                alt="SONY Cinema Line FX30 Super 35 Camera"
                className="product-card__img lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                SONY Cinema Line FX30 Super 35 Camera
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  90,683,445 <sup>đ</sup>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-amz.woka.io/images/I/71ZGGVVfXsL._SR200,200_.jpg"
                data-src="https://cdn-amz.woka.io/images/I/71ZGGVVfXsL._SR200,200_.jpg"
                alt="Panasonic LUMIX S5IIX Mirrorless Camera, 24.2MP Full Frame Phase Hybrid AF, Unlimited Recording, 5.8K Pro-Res, RAW Over HDMI, IP Streaming, 20-60mm F3.5-5.6 + 50mm F1.8 Lenses-DC-S5M2XWK"
                className="product-card__img lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Canon EOS R6 Mark II - Full Frame Mirrorless Camera (Body Only)
                - Still &amp; Video - 24.2MP, CMOS, Continuous Shooting - DIGIC
                X Image Processing - 6K Video Oversampling - Advanced Subject
                Detection
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  1,896,413 <sup>đ</sup>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-amz.woka.io/images/I/71ZGGVVfXsL._SR200,200_.jpg"
                data-src="https://cdn-amz.woka.io/images/I/71ZGGVVfXsL._SR200,200_.jpg"
                alt="Panasonic LUMIX S5IIX Mirrorless Camera, 24.2MP Full Frame Phase Hybrid AF, Unlimited Recording, 5.8K Pro-Res, RAW Over HDMI, IP Streaming, 20-60mm F3.5-5.6 + 50mm F1.8 Lenses-DC-S5M2XWK"
                className="product-card__img lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Panasonic LUMIX S5IIX Mirrorless Camera, 24.2MP Full Frame Phase
                Hybrid AF, Unlimited Recording, 5.8K Pro-Res, RAW Over HDMI, IP
                Streaming, 20-60mm F3.5-5.6 + 50mm F1.8 Lenses-DC-S5M2XWK
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  42,412,578 <sup>đ</sup>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
        </section>
        <hr style={{ width: "100%" }} />
        {/* carf-product-glasses */}
        <nav>
          <div className="nav-country4">
            <div className="select-country select-country3 select-country4">
              <ul className="country country3">
                <li className="active">
                  <a href=".">Mắt kinh nam</a>
                </li>
                <li className="line-underline">
                  <a className="line-text" href=".">
                    Mắt kinh nữ
                  </a>
                </li>
                <li className="line-underline">
                  <a className="line-text" href=".">
                    Gọng kính
                  </a>
                </li>
                <li className="line-underline">
                  <a className="line-text" href=".">
                    Mắt kính Unisex
                  </a>
                </li>
                <li className="btn-link-sales">
                  <a href="./Filterproduct.HTML">
                    <button className="button-product">Xem tất cả</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="product-shoes all-card-product">
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/t/o/tom-ford-fausto-smoke-browline-mens-sunglasses-ft0711-01a-53.jpg?width=350&height=350"
                data-src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/t/o/tom-ford-fausto-smoke-browline-mens-sunglasses-ft0711-01a-53.jpg?width=350&height=350"
                alt="Tom Ford Fausto Smoke Browline Men's Sunglasses FT0711 01A 53"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Tom Ford Fausto Smoke Browline Men's Sunglasses FT0711 01A 53
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values" />
                <li className="product-note">
                  <a href=".">Xem báo giá</a>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/t/o/tom-ford-fausto-smoke-browline-mens-sunglasses-ft0711-01a-53.jpg?width=350&height=350"
                data-src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/t/o/tom-ford-fausto-smoke-browline-mens-sunglasses-ft0711-01a-53.jpg?width=350&height=350"
                alt="Tom Ford Fausto Smoke Browline Men's Sunglasses FT0711 01A 53"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Tom Ford Fausto Smoke Browline Men's Sunglasses FT0711 01A 53
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values" />
                <li className="product-note">
                  <a href=".">Xem báo giá</a>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/g/u/gucci-red-logo-rectangular-mens-sunglasses-gg1221s-004-56.jpg?width=350&height=350"
                data-src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/g/u/gucci-red-logo-rectangular-mens-sunglasses-gg1221s-004-56.jpg?width=350&height=350"
                alt="Gucci Red Logo Rectangular Men's Sunglasses GG1221S 004 56"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Gucci Red Logo Rectangular Men's Sunglasses GG1221S 004 56
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values" />
                <li className="product-note">
                  <a href=".">Xem báo giá</a>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/b/u/burberry-scott-polarized-dark-grey-pilot-mens-sunglasses-be3135-114481-59.jpg?width=350&height=350"
                data-src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/b/u/burberry-scott-polarized-dark-grey-pilot-mens-sunglasses-be3135-114481-59.jpg?width=350&height=350"
                alt="Burberry Scott Polarized Dark Grey Pilot Men's Sunglasses BE3135 114481 59"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Burberry Scott Polarized Dark Grey Pilot Men's Sunglasses BE3135
                114481 59
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values" />
                <li className="product-note">
                  <a href=".">Xem báo giá</a>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/h/u/hugo-boss-grey-rectangular-mens-sunglasses-hg-1162s-0807ir-57-hg-1162s-0807ir-57_1.jpg?width=350&height=350"
                data-src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/h/u/hugo-boss-grey-rectangular-mens-sunglasses-hg-1162s-0807ir-57-hg-1162s-0807ir-57_1.jpg?width=350&height=350"
                alt="Hugo Boss Grey Rectangular Men's Sunglasses HG 1162/S 0807/IR 57"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Hugo Boss Grey Rectangular Men's Sunglasses HG 1162/S 0807/IR 57
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values" />
                <li className="product-note">
                  <a href=".">Xem báo giá</a>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/g/u/gucci-grey-navigator-mens-sunglasses-gg0909s-001-63.jpg?width=350&height=350"
                data-src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/g/u/gucci-grey-navigator-mens-sunglasses-gg0909s-001-63.jpg?width=350&height=350"
                alt="Gucci Grey Navigator Men's Sunglasses GG0909S 001 63"
                className="product-card__img lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Gucci Grey Navigator Men's Sunglasses GG0909S 001 63
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values" />
                <li className="product-note">
                  <a href=".">Xem báo giá</a>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
        </section>
        <hr style={{ width: "100%" }} />
        {/* card-product-clothes-girl */}
        <nav>
          <div className="nav-country4">
            <div className="select-country select-country3 select-country4">
              <ul className="country country3">
                <li className="active">
                  <a href=".">Váy đầm</a>
                </li>
                <li className="line-underline">
                  <a className="line-text" href=".">
                    Áo
                  </a>
                </li>
                <li className="line-underline">
                  <a className="line-text" href=".">
                    Quần
                  </a>
                </li>
                <li className="line-underline">
                  <a className="line-text" href=".">
                    Blazer
                  </a>
                </li>
                <li className="line-underline">
                  <a className="line-text" href=".">
                    Áo khoác
                  </a>
                </li>
                <li className="btn-link-sales">
                  <a href="./Filterproduct.HTML">
                    <button className="button-product">Xem tất cả</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="product-shoes all-card-product">
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-amz.woka.io/images/I/61q9gE6UhJL._SR200,200_.jpg"
                data-src="https://cdn-amz.woka.io/images/I/61q9gE6UhJL._SR200,200_.jpg"
                alt="The Drop Women's Sade Linen Cutout Midi Dress"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                he Drop Women's Sade Linen Cutout Midi Dress
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  2,134,070 <sup>đ</sup>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-amz.woka.io/images/I/61q9gE6UhJL._SR200,200_.jpg"
                data-src="https://cdn-amz.woka.io/images/I/61q9gE6UhJL._SR200,200_.jpg"
                alt="The Drop Women's Sade Linen Cutout Midi Dress"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                he Drop Women's Sade Linen Cutout Midi Dress
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  2,134,070 <sup>đ</sup>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-amz.woka.io/images/I/714A7XPKFtL._SR200,200_.jpg"
                data-src="https://cdn-amz.woka.io/images/I/714A7XPKFtL._SR200,200_.jpg"
                alt="The Drop Women's Veronique High-Waist Slit Skirt"
                className="product-card__img lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                The Drop Women's Veronique High-Waist Slit Skirt
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  1,362,198 <sup>đ</sup>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-amz.woka.io/images/I/61+Nhrnf-FL._SR200,200_.jpg"
                data-src="https://cdn-amz.woka.io/images/I/61+Nhrnf-FL._SR200,200_.jpg"
                alt="The Drop Women's Ilana Loose Sleeveless Wide-Hem Poplin Maxi Dress"
                className="product-card__img lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                The Drop Women's Ilana Loose Sleeveless Wide-Hem Poplin Maxi
                Dress
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  2,123,510 <sup>đ</sup>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-amz.woka.io/images/I/61aBz1Mp7RL._SR200,200_.jpg"
                data-src="https://cdn-amz.woka.io/images/I/61aBz1Mp7RL._SR200,200_.jpg"
                alt="The Drop Women's Maya Silky Slip Skirt"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                The Drop Women's Maya Silky Slip Skirt
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  1,658,957 <sup>đ</sup>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-amz.woka.io/images/I/61bTRHwaZLL._SR200,200_.jpg"
                data-src="https://cdn-amz.woka.io/images/I/61bTRHwaZLL._SR200,200_.jpg"
                alt="The Drop Women's Haniyyah A-Line Midi Skirt"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                The Drop Women's Haniyyah A-Line Midi Skirt
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  1,947,685 <sup>đ</sup>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
        </section>
        <hr style={{ width: "100%" }} />
        {/* carf-product-clothes-boy */}
        <nav>
          <div className="nav-country4">
            <div className="select-country select-country3 select-country4">
              <ul className="country country3">
                <li className="active">
                  <a href=".">Áo thun</a>
                </li>
                <li className="line-underline">
                  <a className="line-text" href=".">
                    Áo sơ mi
                  </a>
                </li>
                <li className="line-underline">
                  <a className="line-text" href=".">
                    Quần
                  </a>
                </li>
                <li className="line-underline">
                  <a className="line-text" href=".">
                    Áo khoác
                  </a>
                </li>
                <li className="line-underline">
                  <a className="line-text" href=".">
                    Suits
                  </a>
                </li>
                <li className="btn-link-sales">
                  <a href="./Filterproduct.HTML">
                    <button className="button-product">Xem tất cả</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="product-shoes all-card-product">
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-amz.woka.io/images/I/61bpLyKOi5L._SR200,200_.jpg"
                data-src="https://cdn-amz.woka.io/images/I/61bpLyKOi5L._SR200,200_.jpg"
                alt="American Apparel Unisex Heavyweight Cotton Long Sleeve T-Shirt, Style G1304, 2-Pack"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                American Apparel Unisex Heavyweight Cotton Long Sleeve T-Shirt,
                Style G1304, 2-Pack
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  741,259 <sup>đ</sup>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-amz.woka.io/images/I/61bpLyKOi5L._SR200,200_.jpg"
                data-src="https://cdn-amz.woka.io/images/I/61bpLyKOi5L._SR200,200_.jpg"
                alt="American Apparel Unisex Heavyweight Cotton Long Sleeve T-Shirt, Style G1304, 2-Pack"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                American Apparel Unisex Heavyweight Cotton Long Sleeve T-Shirt,
                Style G1304, 2-Pack
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  741,259 <sup>đ</sup>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-amz.woka.io/images/I/716lh9ztPVL._SR200,200_.jpg"
                data-src="https://cdn-amz.woka.io/images/I/716lh9ztPVL._SR200,200_.jpg"
                alt="Hanes mens Beefyt T-shirt, Heavyweight Cotton Crewneck Tee, 1 Or 2 Pack, Available in Tall Sizes"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Hanes mens Beefyt T-shirt, Heavyweight Cotton Crewneck Tee, 1 Or
                2 Pack, Available in Tall Sizes
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  666,046 <sup>đ</sup>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-amz.woka.io/images/I/71c7eRazT8S._SR200,200_.jpg"
                data-src="https://cdn-amz.woka.io/images/I/71c7eRazT8S._SR200,200_.jpg"
                alt="Jerzees Men's Dri-Power Cotton Blend Long Sleeve Tees, Moisture Wicking, Odor Protection, UPF 30+, Sizes S-3x"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Jerzees Men's Dri-Power Cotton Blend Long Sleeve Tees, Moisture
                Wicking, Odor Protection, UPF 30+, Sizes S-3x
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  454,520 <sup>đ</sup>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-amz.woka.io/images/I/81Um+H35McL._SR200,200_.jpg"
                data-src="https://cdn-amz.woka.io/images/I/81Um+H35McL._SR200,200_.jpg"
                alt="Russell Athletic Men's Dri-Power Short Sleeve Tees, Moisture Wicking, Odor Protection, UPF 30+"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Russell Athletic Men's Dri-Power Short Sleeve Tees, Moisture
                Wicking, Odor Protection, UPF 30+
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  456,312 <sup>đ</sup>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-amz.woka.io/images/I/71yfUqwsb7L._SR200,200_.jpg"
                data-src="https://cdn-amz.woka.io/images/I/71yfUqwsb7L._SR200,200_.jpg"
                alt="Amazon Essentials Men's Slim-Fit Tank Top"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Amazon Essentials Men's Slim-Fit Tank Top
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  375,118 <sup>đ</sup>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
        </section>
        <hr style={{ width: "100%" }} />
        {/* carf-product-adorn */}
        <nav>
          <div className="nav-country4">
            <div className="select-country select-country3 select-country4">
              <ul className="country country3">
                <li className="active">
                  <a href=".">Trang sức</a>
                </li>
                <li className="line-underline">
                  <a className="line-text" href=".">
                    Nón
                  </a>
                </li>
                <li className="line-underline">
                  <a className="line-text" href=".">
                    Khăn Choàng
                  </a>
                </li>
                <li className="line-underline">
                  <a className="line-text" href=".">
                    Dây nịt
                  </a>
                </li>
                <li className="btn-link-sales">
                  <a href="./Filterproduct.HTML">
                    <button className="button-product">Xem tất cả</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="product-shoes all-card-product">
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/s/w/swarovski-pink-rose-goldtone-plated-iconic-swan-drop-earrings-5647544.jpg?width=350&height=350"
                data-src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/s/w/swarovski-pink-rose-goldtone-plated-iconic-swan-drop-earrings-5647544.jpg?width=350&height=350"
                alt="Swarovski Pink Rose Gold-Tone Plated Iconic Swan Drop Earrings"
                className="product-card__img lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Swarovski Pink Rose Gold-Tone Plated Iconic Swan Drop Earrings
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values" />
                <li className="product-note">
                  <a href=".">Xem báo giá</a>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/s/w/swarovski-pink-rose-goldtone-plated-iconic-swan-drop-earrings-5647544.jpg?width=350&height=350"
                data-src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/s/w/swarovski-pink-rose-goldtone-plated-iconic-swan-drop-earrings-5647544.jpg?width=350&height=350"
                alt="Swarovski Pink Rose Gold-Tone Plated Iconic Swan Drop Earrings"
                className="product-card__img lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Swarovski Pink Rose Gold-Tone Plated Iconic Swan Drop Earrings
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values" />
                <li className="product-note">
                  <a href=".">Xem báo giá</a>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/b/u/burberry-asymmetrical-ball-chain-drop-earrings-4078247.jpg?width=350&height=350"
                data-src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/b/u/burberry-asymmetrical-ball-chain-drop-earrings-4078247.jpg?width=350&height=350"
                alt="Burberry Asymmetrical Ball Chain Drop Earrings"
                className="product-card__img lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Burberry Asymmetrical Ball Chain Drop Earrings
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values" />
                <li className="product-note">
                  <a href=".">Xem báo giá</a>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/g/u/gucci-icon-gg-tissue-stud-earrings-ybd094074002.jpg?width=350&height=350"
                data-src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/g/u/gucci-icon-gg-tissue-stud-earrings-ybd094074002.jpg?width=350&height=350"
                alt="Gucci Icon GG Tissue Stud Earrings"
                className="product-card__img lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Gucci Icon GG Tissue Stud Earrings
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values" />
                <li className="product-note">
                  <a href=".">Xem báo giá</a>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/s/w/swarovski-rhodiumplated-hoop-earrings-5390189.jpg?width=350&height=350"
                data-src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/s/w/swarovski-rhodiumplated-hoop-earrings-5390189.jpg?width=350&height=350"
                alt="Swarovski Rhodium-Plated Hoop Earrings"
                className="product-card__img lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Swarovski Rhodium-Plated Hoop Earrings
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values" />
                <li className="product-note">
                  <a href=".">Xem báo giá</a>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/h/a/haus-of-brilliance-18k-white-gold-5x4mm-red-ruby-and-17-cttw-diamond-halo-leaf-18-pendant-necklace-gh-color-si1si2-clarity-020270nv84.jpg?width=350&height=350"
                data-src="https://cdn-jms.woka.io/media/catalog/product/cache/df24c858758eb768757877f23cd17493/h/a/haus-of-brilliance-18k-white-gold-5x4mm-red-ruby-and-17-cttw-diamond-halo-leaf-18-pendant-necklace-gh-color-si1si2-clarity-020270nv84.jpg?width=350&height=350"
                alt='Haus of Brilliance 18K White Gold 5x4MM Red Ruby and 1/7 Cttw Diamond Halo Leaf 18" Pendant Necklace (G-H Color, SI1-SI2 Clarity)'
                className="product-card__img lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Haus of Brilliance 18K White Gold 5x4MM Red Ruby and 1/7 Cttw
                Diamond Halo Leaf 18" Pendant Necklace (G-H Color, SI1-SI2
                Clarity)
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values" />
                <li className="product-note">
                  <a href=".">Xem báo giá</a>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
        </section>
        <hr style={{ width: "100%" }} />
        {/* carf-product-lamp */}
        <nav>
          <div className="nav-country4">
            <div className="select-country select-country3 select-country4">
              <ul className="country country3">
                <li className="active">
                  <a href=".">đèn</a>
                </li>
                <li className="line-underline">
                  <a className="line-text" href=".">
                    Thảm
                  </a>
                </li>
                <li className="line-underline">
                  <a className="line-text" href=".">
                    Nến thơm
                  </a>
                </li>
                <li className="line-underline">
                  <a className="line-text" href=".">
                    Lọa hoa
                  </a>
                </li>
                <li className="btn-link-sales">
                  <a href="./Filterproduct.HTML">
                    <button className="button-product">Xem tất cả</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="product-shoes all-card-product">
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-amz.woka.io/images/I/61BrQ7eYNYL._SR200,200_.jpg"
                data-src="https://cdn-amz.woka.io/images/I/61BrQ7eYNYL._SR200,200_.jpg"
                alt="Daylight Artist Studio Lamp 2-6,000 Lux LED with 95+ CRI, 24cm Wide Shade"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Daylight Artist Studio Lamp 2-6,000 Lux LED with 95+ CRI, 24cm
                Wide Shade
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  8,181,654 <sup>đ</sup>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-amz.woka.io/images/I/61BrQ7eYNYL._SR200,200_.jpg"
                data-src="https://cdn-amz.woka.io/images/I/61BrQ7eYNYL._SR200,200_.jpg"
                alt="Daylight Artist Studio Lamp 2-6,000 Lux LED with 95+ CRI, 24cm Wide Shade"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Daylight Artist Studio Lamp 2-6,000 Lux LED with 95+ CRI, 24cm
                Wide Shade
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  8,181,654 <sup>đ</sup>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-amz.woka.io/images/I/61VvRkY1MiL._SR200,200_.jpg"
                data-src="https://cdn-amz.woka.io/images/I/61VvRkY1MiL._SR200,200_.jpg"
                alt="Cal Lighting BO-769 Leaf, Flower, Fruit One Floor Lamp Lighting Accessories, Matt Black, 64 x35x13.9"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Cal Lighting BO-769 Leaf, Flower, Fruit One Floor Lamp Lighting
                Accessories, Matt Black, 64 x35x13.9
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  11,723,795 <sup>đ</sup>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-amz.woka.io/images/I/61CmPI6hV8L._SR200,200_.jpg"
                data-src="https://cdn-amz.woka.io/images/I/61CmPI6hV8L._SR200,200_.jpg"
                alt='Catalina Lighting 24290-000 Adjustable LED Mini Clip Reading Lamp, Multipurpose Clip Lamp for Office, Dorm, or Bedroom, Smart Home Compatible, LED Bulb Included, 5", Black'
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Catalina Lighting 24290-000 Adjustable LED Mini Clip Reading
                Lamp, Multipurpose Clip Lamp for Office, Dorm, or Bedroom, Smart
                Home Compatible, LED Bulb Included, 5", Black
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  443,060 <sup>đ</sup>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-amz.woka.io/images/I/611fJoTucdL._SR200,200_.jpg"
                data-src="https://cdn-amz.woka.io/images/I/611fJoTucdL._SR200,200_.jpg"
                alt="Modern Spiral RGB Table Lamp, Touch Dimmable LED Bedside Lamp, Modern Nightstand lamp with 10 Lighting Modes, Cool Lamps for Bedroom Living Room Office Art Deco, Unique Lamps for Gift Giving"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Modern Spiral RGB Table Lamp, Touch Dimmable LED Bedside Lamp,
                Modern Nightstand lamp with 10 Lighting Modes, Cool Lamps for
                Bedroom Living Room Office Art Deco, Unique Lamps for Gift
                Giving
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  4,242,809 <sup>đ</sup>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-product card-product-watch">
            <div className="card-product-img">
              <img
                src="https://cdn-amz.woka.io/images/I/41Hz0tvQZ5L._SR200,200_.jpg"
                data-src="https://cdn-amz.woka.io/images/I/41Hz0tvQZ5L._SR200,200_.jpg"
                alt="Bright LED Floor Lamp Adjustable Gooseneck Standing Eyelash Light for Eyelash Extensions Facial Spa Salon Makeup Task Reading lamp"
                className="product-card__img ls-is-cached lazyloaded"
              />
            </div>
            <div className="card-product-title">
              <a
                href="."
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
                Bright LED Floor Lamp Adjustable Gooseneck Standing Eyelash
                Light for Eyelash Extensions Facial Spa Salon Makeup Task
                Reading lamp
              </a>
            </div>
            <div className="price-product-icon">
              <ul className="price-product">
                <li className="price-product-values">
                  1,566,502 <sup>đ</sup>
                </li>
                <li className="price-product-default" />
              </ul>
              <ul className="item-icon">
                <li className="add-cart">
                  <i className="icofont-cart-alt" />
                </li>
                <li className="add-like">
                  <i className="icofont-heart-alt" />
                </li>
              </ul>
            </div>
          </div>
        </section>
        <hr style={{ width: "100%" }} />
        <div className="trademark-famous">
          <h4>FADO Blog</h4>
        </div>
        {/* Fado article */}
        <section className="Fado-article">
          <div className="list-card-article">
            <div className="card-article">
              <div className="card-article-img">
                <img
                  src="https://fado.vn/blog/wp-content/uploads/2022/03/nen-thom-la-gi-768x432.webp"
                  alt="Nến thơm là gì? Top 8 công dụng tuyệt vời của nến thơm"
                  className="home-blog__item-img"
                />
              </div>
              <div className="card-article-title">
                <h5>Nến thơm là gì? Top 8 công dụng tuyệt vời của nến thơm</h5>
              </div>
            </div>
            <div className="card-article">
              <div className="card-article-img">
                <img
                  src="https://fado.vn/blog/wp-content/uploads/2022/03/tui-xach-tang-me-768x432.webp"
                  alt="Bật mí 7 mẫu túi xách sang trọng quý phái tặng mẹ  "
                  className="home-blog__item-img"
                />
              </div>
              <div className="card-article-title">
                <h5>
                  Bật mí 7 mẫu túi xách sang trọng quý phái tặng mẹ&nbsp;&nbsp;
                </h5>
              </div>
            </div>
            <div className="card-article">
              <div className="card-article-img">
                <img
                  src="https://fado.vn/blog/wp-content/uploads/2022/03/kem-chong-nang-cell-fusion-c-768x448.webp"
                  alt="Review Top 6 kem chống nắng Cell Fusion C hiệu quả nhất hiện nay"
                  className="home-blog__item-img"
                />
              </div>
              <div className="card-article-title">
                <h5>
                  Review Top 6 kem chống nắng Cell Fusion C hiệu quả nhất hiện
                  nay
                </h5>
              </div>
            </div>
            <div className="card-article">
              <div className="card-article-img">
                <img
                  src="https://fado.vn/blog/wp-content/uploads/2022/03/tay-te-bao-chet-cho-moi-768x432.webp"
                  alt="Chia sẻ 12 cách tẩy tế bào chết cho môi hiệu quả tại nhà"
                  className="home-blog__item-img"
                />
              </div>
              <div className="card-article-title">
                <h5>
                  Chia sẻ 12 cách tẩy tế bào chết cho môi hiệu quả tại nhà
                </h5>
              </div>
            </div>
            <div className="card-article">
              <div className="card-article-img">
                <img
                  src="https://fado.vn/blog/wp-content/uploads/2024/03/nuoc-tay-trang-bioderma-768x432.webp"
                  alt="Review top 3 nước tẩy trang Bioderma được tin dùng"
                  className="home-blog__item-img"
                />
              </div>
              <div className="card-article-title">
                <h5>Review top 3 nước tẩy trang Bioderma được tin dùng</h5>
              </div>
            </div>
            <div className="card-article">
              <div className="card-article-img">
                <img
                  src="https://fado.vn/blog/wp-content/uploads/2024/03/calisthenics-la-gi-768x512.webp"
                  alt="Calisthenics là gì? Những lưu ý cho người mới tập Calisthenics"
                  className="home-blog__item-img"
                />
              </div>
              <div className="card-article-title">
                <h5>
                  Calisthenics là gì? Những lưu ý cho người mới tập Calisthenics
                </h5>
              </div>
            </div>
          </div>
          {/* button next */}
          <div className="btn-link-sales">
            <button className="button">
              <span className="text">
                <a
                  style={{ textDecoration: "none", color: "#fff" }}
                  href="./Shareinfo.HTML"
                >
                  Xem thêm
                </a>
              </span>
              <svg
                className="arrow"
                viewBox="0 0 448 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </button>
          </div>
        </section>
        {/* user-review */}
        <section className="user-review">
          <hr style={{ width: "100%" }} />
          <div className="comment-famous">
            <h3>Nhận xét từ khách hàng</h3>
            <button className="add-user-review">
              Gửi đánh giá của quý khách
            </button>
          </div>
          {/* Carousel */}
          <div className="carousel-slide">
            <div className="group-comment">
              <div className="carousel-comment">
                <div className="card-user-review">
                  <div className="user-review-avatar">
                    <i className="icofont-user" />
                  </div>
                  <div className="user-name">
                    <div className="user-name-email">
                      thanh0981263712@gmail.com
                    </div>
                    <div className="customer">Khách hàng</div>
                  </div>
                </div>
                <div className="customer customer-comment">
                  Hàng tốt, giao nhanh, uy tín Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Blanditiis aspernatur ab maxime
                  asperiores ex! Quasi a soluta ratione porro veniam sed ad
                  sequi? Quae, delectus praesentium! Quisquam nesciunt et
                  doloremque!
                </div>
              </div>
              <div className="carousel-comment">
                <div className="card-user-review">
                  <div className="user-review-avatar">
                    <i className="icofont-user" />
                  </div>
                  <div className="user-name">
                    <div className="user-name-email">
                      thanh0981263712@gmail.com
                    </div>
                    <div className="customer">Khách hàng</div>
                  </div>
                </div>
                <div className="customer customer-comment">
                  Hàng tốt, giao nhanh, uy tín Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Blanditiis aspernatur ab maxime
                  asperiores ex! Quasi a soluta ratione porro veniam sed ad
                  sequi? Quae, delectus praesentium! Quisquam nesciunt et
                  doloremque!
                </div>
              </div>
              <div className="carousel-comment">
                <div className="card-user-review">
                  <div className="user-review-avatar">
                    <i className="icofont-user" />
                  </div>
                  <div className="user-name">
                    <div className="user-name-email">
                      thanh0981263712@gmail.com
                    </div>
                    <div className="customer">Khách hàng</div>
                  </div>
                </div>
                <div className="customer customer-comment">
                  Hàng tốt, giao nhanh, uy tín Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Blanditiis aspernatur ab maxime
                  asperiores ex! Quasi a soluta ratione porro veniam sed ad
                  sequi? Quae, delectus praesentium! Quisquam nesciunt et
                  doloremque!
                </div>
              </div>
              <div className="carousel-comment">
                <div className="card-user-review">
                  <div className="user-review-avatar">
                    <i className="icofont-user" />
                  </div>
                  <div className="user-name">
                    <div className="user-name-email">
                      thanh0981263712@gmail.com
                    </div>
                    <div className="customer">Khách hàng</div>
                  </div>
                </div>
                <div className="customer customer-comment">
                  Hàng tốt, giao nhanh, uy tín Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Blanditiis aspernatur ab maxime
                  asperiores ex! Quasi a soluta ratione porro veniam sed ad
                  sequi? Quae, delectus praesentium! Quisquam nesciunt et
                  doloremque!
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/*  */}
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
                  <a href=".">
                    <i
                      className="fab fa-facebook"
                      style={{ fontSize: "36px" }}
                    />
                  </a>
                </li>
                <li>
                  <a href=".">
                    <i
                      className="fab fa-instagram"
                      style={{ fontSize: "36px" }}
                    />
                  </a>
                </li>
                <li>
                  <a href=".">
                    <i
                      className="fab fa-youtube-square"
                      style={{ fontSize: "36px" }}
                    />
                  </a>
                </li>
              </ul>
              <ul className="appstore">
                <li>
                  <a href=".">
                    <img
                      src="https://st-fe-v2.fado.vn/desktop/image/logo/app_store_logo_black_v3.png?v=3.239.3.12"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href=".">
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
                  <a href=".">Bảo vệ ngươi mua </a>
                </li>
                <li>
                  <a href=".">Hướng dẫn mua hàng</a>
                </li>
                <li>
                  <a href=".">Phương thức thanh toán</a>
                </li>
                <li>
                  <a href=".">Chính sách đổi trả hàng</a>
                </li>
                <li>
                  <a href=".">Câu hỏi thường gặp</a>
                </li>
                <li>
                  <a href=".">Cách thức giao nhận</a>
                </li>
                <li>
                  <a href=".">Chính sách giao dịch</a>
                </li>
                <li>
                  <a href=".">Chính sách bảo mật</a>
                </li>
                <li>
                  <a href=".">Chính sách giải quyết khiếu nại</a>
                </li>
              </ul>
              <ul className="columne">
                <h6 className="footer-title">Về FADO.VN</h6>
                <li>
                  <a href=".">Giới thiệu FADO</a>
                </li>
                <li>
                  <a href=".">Phản hồi khách hàng</a>
                </li>
                <li>
                  <a href=".">Báo chí nói về FADO</a>
                </li>
                <li>
                  <a href=".">Trung tâm hỗ trợ</a>
                </li>
                <li>
                  <a href=".">tin tức</a>
                </li>
                <li>
                  <a href=".">Quy chế hoạt động</a>
                </li>
                <li>
                  <a href=".">Cơ hội nghề nghiệp</a>
                </li>
                <li>
                  <a href=".">Nghĩa vụ thuế</a>
                </li>
                <li>
                  <a href=".">Liên kết hợp tác</a>
                </li>
              </ul>
              <ul className="columne">
                <h6 className="footer-title">Hợp tác &amp; liên kết</h6>
                <li>
                  <a href=".">Bán hàng cùng FADO</a>
                </li>
                <li>
                  <a href=".">Chính sách đại lý</a>
                </li>
              </ul>
              <ul className="columne ship">
                <h6 className="footer-title">Dịch vụ giao hàng</h6>
                <li>
                  <a href=".">
                    <img
                      src="https://st-fe-v2.fado.vn/desktop/image/logo/fado_express_v2.png"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href=".">
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
                    <a href=".">
                      <img
                        className="footer-mini-block__payment-item-img"
                        src="https://st-fe-v2.fado.vn/desktop/image/list-bank/mastercard.png"
                        alt="payment icon"
                      />
                    </a>
                  </li>
                  <li>
                    <a href=".">
                      <img
                        className="footer-mini-block__payment-item-img"
                        src="https://st-fe-v2.fado.vn/desktop/image/list-bank/visa.png"
                        alt="payment icon"
                      />
                    </a>
                  </li>
                  <li>
                    <a href=".">
                      <img
                        className="footer-mini-block__payment-item-img"
                        src="https://st-fe-v2.fado.vn/desktop/image/list-bank/jcb.png"
                        alt="payment icon"
                      />
                    </a>
                  </li>
                  <li>
                    <a href=".">
                      <img
                        className="footer-mini-block__payment-item-img"
                        src="https://st-fe-v2.fado.vn/desktop/image/list-bank/zalopay.png"
                        alt="payment icon"
                      />
                    </a>
                  </li>
                  <li>
                    <a href=".">
                      <img
                        className="footer-mini-block__payment-item-img"
                        src="https://st-fe-v2.fado.vn/desktop/image/list-bank/payoo.png"
                        alt="payment icon"
                      />
                    </a>
                  </li>
                  <li>
                    <a href=".">
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
                  <a href=".">
                    <img
                      className="footer-mini-block__certify-item-img"
                      src="https://st-fe-v2.fado.vn/desktop/image/logo/tnm.png"
                      alt="Chung nhan Tin Nhiem Mang FADO"
                    />
                  </a>
                </li>
                <li>
                  <a href=".">
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
      <div className="bar-icon-top">
        <a href=".">
          <i className="icofont-rocket-alt-1" />
        </a>
      </div>
    </div>
  );
};

export default NavOption;
