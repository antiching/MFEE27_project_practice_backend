import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { FaHome } from 'react-icons/fa';

function Breadcrumb() {
  return (
    <>
      <div className="account-breadcrumb d-flex align-items-center">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">
                <FaHome />
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              我的帳戶
            </li>
          </ol>
        </nav>
      </div>
    </>
  );
}

export default Breadcrumb;
