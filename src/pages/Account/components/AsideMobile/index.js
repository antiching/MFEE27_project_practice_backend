import React from 'react';
import { Dropdown } from 'bootstrap';
import { Link } from 'react-router-dom';
import './index.scss';
function AsideMobile() {
  var dropdownElementList = [].slice.call(
    document.querySelectorAll('.dropdown-toggle')
  );
  var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
    return new Dropdown(dropdownToggleEl);
  });
  return (
    <>
      <div className="account_aside_mobile">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle w-100"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            我的帳戶
          </button>
          <ul
            className="dropdown-menu w-100"
            aria-labelledby="dropdownMenuButton1"
          >
            <li>
              <Link className="dropdown-item" to="">
                我的帳戶
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="edit">
                更新個人資訊
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="modifypassword">
                更改密碼
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="orders">
                訂單查詢
              </Link>
            </li>

            <li>
              <Link className="dropdown-item" to="coupons">
                專屬優惠券
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="tracking">
                收藏清單
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="messages">
                詢問紀錄
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default AsideMobile;
