import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { FaHome } from 'react-icons/fa';
import { BiUserPlus } from 'react-icons/bi';
function Login() {
  return (
    <>
      <div className="container my-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">
                <FaHome />
              </Link>
            </li>
            <li className="breadcrumb-item">註冊新帳號</li>
          </ol>
        </nav>
        <div className="d-flex justify-content-center">
          <div className="login">
            <p className="text-center login-title">會員登入</p>
            <form className="login-form ">
              <div className="mb-4">
                <label className="form-label">帳戶</label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  required
                  placeholder="請輸入您的 E-MAIL"
                />
              </div>

              <div className="mb-4">
                <label className="form-label">密碼</label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="請輸入您的密碼"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-lg text-white"
              >
                會員登入
              </button>
            </form>
            <p className="login-notice text-center">
              <Link to="/register">
                <BiUserPlus className="add-icon" />
                註冊新會員
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
