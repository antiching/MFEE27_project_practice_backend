import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';
import { BsCart3, BsSearch } from 'react-icons/bs';

import MobileNav from '../MobileNav';
import './index.scss';
function Header() {
  return (
    <header className="header">
      <div className="container-fluid p-0">
        <div className="header-highlight bg-primary"></div>
        {/* 手機版 navbar */}
        <MobileNav />
        <div className="logo-container d-md-flex d-none justify-content-center align-items-center">
          <img
            className="logo"
            src={require('../../Assets/Logo/logo.png')}
            alt="logo"
          />
          <div className="icon-box d-md-flex d-none">
            {/* 會員 icon -> 下拉式選單 */}
            <div className="dropdown">
              <Link
                className="dropdown-toggle"
                to="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FaRegUser />
              </Link>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <Link className="dropdown-item" to="login">
                    <button className="btn btn-primary text-white">
                      會員登入
                    </button>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="register">
                    <button className="btn btn-primary text-white">
                      會員註冊
                    </button>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="account">
                    我的帳戶
                  </Link>
                </li>
              </ul>
            </div>
            {/* 購物車 icon */}
            <div>
              <Link to="shoppingCart">
                <BsCart3 />
              </Link>
            </div>
            {/* 搜尋 icon */}
            <div>
              <BsSearch className="text-primary" />
            </div>
          </div>
        </div>
        {/* header navbar */}
        <nav className="header-nav justify-content-center align-items-center">
          <ul className="header-nav-links d-flex list-unstyled">
            <li>
              <Link to="products">植物奶</Link>
            </li>
            <li>
              <Link to="products">營養蔬果汁</Link>
            </li>
            <li>
              <Link to="products">營養點心</Link>
            </li>
            <li>
              <Link to="products/sale">本月優惠</Link>
            </li>
            <li>
              <Link to="recipes">美味食譜</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
