import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

function AccountInfo() {
  return (
    <>
      <div className="account_info w-100">
        <div className="account_info-card w-100 d-flex">
          <div className="account_info-card-left ">
            <p className="account_info-card-name mb-2">王小明</p>
            <div className="mb-3">
              <Link to="edit">查看個人資訊</Link>
            </div>
            <button className="btn btn-sm btn-outline-primary">登出</button>
          </div>
          <div className="account_info-card-right">
            <div className="d-flex account_info-card-text">
              <p className="pe-lg-4 pe-md-2">
                總累計消費金額 NT$<span>1000</span>
              </p>
              <p>
                可用優惠券
                <Link to="coupons">
                  <span className="px-2">1</span>
                </Link>
                張
              </p>
            </div>
            <Link to="orders" className="btn btn-primary text-white">
              訂單查詢
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountInfo;
