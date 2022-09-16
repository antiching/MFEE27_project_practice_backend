import React from 'react';
import { BsFacebook, BsInstagram, BsLine } from 'react-icons/bs';
import './index.scss';
function Footer() {
  return (
    <>
      <footer className="footer bg-primary text-white p-lg-5 p-md-4 p-3">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div>
              <div className="footer_about">
                <p className="footer_about-title mb-2">關於我們 About us</p>
                <ul className="footer-links d-flex list-unstyled mb-lg-3">
                  <li>我的帳戶</li>
                  <li>會員制度</li>
                  <li>配送時間及運費規則</li>
                  <li>退款政策</li>
                  <li>隱私政策</li>
                  <li>服務條款</li>
                </ul>
              </div>
              <div className="footer_info mb-lg-3">
                <p className="footer_info-title mb-2">
                  聯絡資訊 Information contact
                </p>
                <p className="mb-2">客服專線：03-1234567</p>
                <p className="mb-2">客服時間：09:00-17:00</p>
                <p className="mb-2">信箱：wholesome@healthy.com</p>
                <p className="mb-2">地址：320桃園市中壢區新生路二段421號</p>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-end">
              <div className="footer-icons mb-3">
                <BsFacebook className="me-3" />
                <BsInstagram className="me-3" />
                <BsLine />
              </div>
            </div>
          </div>

          <div className="footer-copyright py-3">
            <p>copyright</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
