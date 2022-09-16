import React from 'react';
import './index.scss';
function AccountEdit() {
  return (
    <>
      <div className="account_edit w-100">
        <form className="account_edit-form">
          <div>
            <label className="form-label">姓名</label>
            <input type="text" className="form-control" value={'王小明'} />
          </div>
          <div>
            <label className="form-label">手機</label>
            <input type="phone" className="form-control" value={'0912345678'} />
          </div>
          <div>
            <label className="form-label">電子信箱</label>
            <input
              type="email"
              className="form-control"
              value={'123@test.com'}
            />
          </div>
          <div>
            <label className="form-label">出生日期</label>
            <input type="date" className="form-control" />
          </div>
          <div>
            <label className="form-label">收件地址</label>
            <input
              type="text"
              className="form-control"
              value={'台北市中正區重慶南路一段122號'}
            />
          </div>
          <div>
            <label className="form-label">性別</label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="male"
              />
              <label className="form-check-label" for="male">
                男
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="female"
                checked
              />
              <label className="form-check-label" for="female">
                女
              </label>
            </div>
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

export default AccountEdit;
