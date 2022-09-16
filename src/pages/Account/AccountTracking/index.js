import React from 'react';
import './index.scss';

function AccountTracking() {
  return (
    <div className="account_tracking w-100">
      <div className="account_tracking-product d-flex">
        <div className="col col-lg-3">
          <img
            src="https://cdn.cybassets.com/media/W1siZiIsIjEzODUwL3Byb2R1Y3RzLzMxOTUxMTA1LzE2MDM0MzQ5NTNfZjFlNjEwOTcxYzcwMWZkMmM3MjEucG5nIl0sWyJwIiwidGh1bWIiLCI2MDB4NjAwIl1d.png?sha=a134d4f53b04b833"
            alt="apple juice"
          />
        </div>
        <div className="account_tracking-product-content col col-lg-6 d-flex align-items-center">
          <div>
            <p className="account_tracking-product-content-name">
              Voelkel 蘋果醋
            </p>
            <p className="account_tracking-product-content-price">NT$200</p>
          </div>
        </div>
        <div className="col col-lg-3 d-flex align-items-center">
          <div>
            <button className="mb-1 w-100 btn btn-primary text-white">
              加入購物車
            </button>
            <button className="w-100 btn btn-outline-primary text-primary">
              移除收藏
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountTracking;
