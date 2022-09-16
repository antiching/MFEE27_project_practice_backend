import { useState, useEffect } from 'react';
import Collapse from 'bootstrap/js/dist/collapse';
import { Link } from 'react-router-dom';
import './AsideForProductsList.scss';





function AsideForProductsList() {
  useEffect(() => {
    const collapseElementList = document.querySelectorAll('.collapse');
    const collapseList = [...collapseElementList].map(
      (collapseEl) => new Collapse(collapseEl)
    );
  }, []);
  return (
    <div>
      <div
        className="accordion products_layout-aside-accordion accordion-flush col-md-3"
        id="accordionFlushExample"
      >
        <div className="accordion-item products_layout-aside-accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button products_layout-aside-accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              植物奶
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <ul className="list-group">
                <li className="list-group-item products_layout-aside-list-group-item">
                  <Link to="/products">燕麥奶</Link>
                </li>
                <li className="list-group-item products_layout-aside-list-group-item">
                  <Link to="/products">杏仁奶</Link>
                </li>
                <li className="list-group-item products_layout-aside-list-group-item">
                  <Link to="/products">堅果奶</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item products_layout-aside-accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button products_layout-aside-accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              有機蔬果汁
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <ul className="list-group">
                <li className="list-group-item products_layout-aside-list-group-item">
                  <Link to="/products">果汁</Link>
                </li>
                <li className="list-group-item products_layout-aside-list-group-item">
                  <Link to="/products">蔬菜汁、氣泡水</Link>
                </li>
                <li className="list-group-item products_layout-aside-list-group-item">
                  <Link to="/products">果昔、果醋</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item products_layout-aside-accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button products_layout-aside-accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              營養點心
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <ul className="list-group">
                <li className="list-group-item products_layout-aside-list-group-item">
                  <Link to="/products">麥片</Link>
                </li>
                <li className="list-group-item products_layout-aside-list-group-item">
                  <Link to="/products">燕麥棒、蛋白棒</Link>
                </li>
                <li className="list-group-item products_layout-aside-list-group-item">
                  <Link to="/products">堅果</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default AsideForProductsList;
