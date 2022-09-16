import React from 'react';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import './index.scss';
function MobileNav() {
  return (
    <>
      <nav className="header_nav_mobile d-md-none navbar navbar-light bg-white">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div>
            <Link to="/" className="navbar-brand">
              <img
                className="logo"
                src={require('../../Assets/Logo/logo.png')}
                alt="logo"
              />
            </Link>
          </div>
          <div>
            <BsSearch className="header_nav_mobile-search-icon" />
          </div>

          <div
            className="offcanvas offcanvas-start w-75"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <div className="offcanvas-title" id="offcanvasNavbarLabel">
                <Link to="/" className="navbar-brand">
                  <img
                    className="logo"
                    src={require('../../Assets/Logo/logo.png')}
                    alt="logo"
                  />
                </Link>
              </div>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    回首頁
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="account">
                    我的帳戶
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="shoppingCart">
                    購物車
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="products"
                    id="offcanvasNavbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    植物奶
                  </Link>
                  <ul
                    className="dropdown-menu border-0"
                    aria-labelledby="offcanvasNavbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="products">
                        燕麥奶
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="products">
                        杏仁奶
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="products">
                        堅果奶
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="products"
                    id="offcanvasNavbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    有機蔬果汁
                  </Link>
                  <ul
                    className="dropdown-menu border-0"
                    aria-labelledby="offcanvasNavbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="products">
                        果汁
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="products">
                        蔬菜汁、氣泡水
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="products">
                        果昔、果醋
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="products"
                    id="offcanvasNavbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    營養點心
                  </Link>
                  <ul
                    className="dropdown-menu border-0"
                    aria-labelledby="offcanvasNavbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="products">
                        麥片
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="products">
                        燕麥棒、蛋白棒
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="products">
                        堅果
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="recipes"
                    id="offcanvasNavbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    美味食譜
                  </Link>
                  <ul
                    className="dropdown-menu border-0"
                    aria-labelledby="offcanvasNavbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="recipes">
                        飲品
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="recipes">
                        烘培
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="recipes">
                        輕食
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MobileNav;
