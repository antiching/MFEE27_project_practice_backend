import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

function Aside() {
  return (
    <>
      <aside className="account_aside">
        <p className="account_aside-title">我的帳戶</p>
        <ul className="list-unstyled account_aside-list ">
          <li>
            <Link to="">我的帳戶</Link>
          </li>
          <li>
            <Link to="edit">更新個人資訊</Link>
          </li>
          <li>
            <Link to="modifypassword">更改密碼</Link>
          </li>
          <li>
            <Link to="orders">訂單查詢</Link>
          </li>

          <li>
            <Link to="coupons">專屬優惠券</Link>
          </li>
          <li>
            <Link to="tracking">收藏清單</Link>
          </li>
          <li>
            <Link to="messages">詢問紀錄</Link>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Aside;
