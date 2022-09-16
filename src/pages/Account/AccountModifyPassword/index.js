import React from 'react';
import './index.scss';

function AccountModifyPassword() {
  return (
    <>
      <div className="account_password w-100">
        <form className="account_password-form">
          <div>
            <label className="form-label">目前密碼</label>
            <input type="password" className="form-control" />
          </div>
          <div>
            <label className="form-label">新密碼</label>
            <input type="password" className="form-control" />
          </div>
          <div>
            <label className="form-label">新密碼確認</label>
            <input type="password" className="form-control" />
          </div>

          <div>
            <button className="btn btn btn-primary text-white" type="submit">
              確定修改
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AccountModifyPassword;
