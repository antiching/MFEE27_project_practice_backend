import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import './ProductDetail.scss';
import { FaHeart } from 'react-icons/fa';
import BreadcrumbForDetail from './components/BreadcrumbForDetail';
import SwiperForProduct from './components/SwiperForProduct';

import ReactStars from 'react-rating-stars-component';
import ProgressBar from '@ramonak/react-progress-bar';

import axios from 'axios';

function ProductDetail(props) {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]); //資料最後長相是[]
  //setData是非同步

  const { productId } = useParams(); // 把網址上的 : productId 拿出來
  console.log('ProductDetail - productId', productId); //是否有拿到網址變數 :productId

  //axios 一載入就要打API
  useEffect(() => {
    console.log('Product', 'useEffect []');
    console.log('useEffect[]', data);
    //promise base
    let getProductDetail = async () => {
      let response = await axios.get(
        `http://localhost:3002/api/1.0/products/${productId}`
      );
      setData(response.data);
      console.log('useEffect[] after set', data);
    };
    getProductDetail();
  }, []);

  useEffect(() => {
    console.log('Stock', 'useEffect [data]');
    console.log('useEffect[data]', data);
  }, [data]);

  //收藏用TODO:useState裡的true/false要隨著使用者做更換
  const [isLike, setIsLike] = useState(false);

  //星星平均用
  const [averageScore, setAverageScore] = useState(4.5);
  //測試用:做出star bar的陣列
  const starArr = Array(5)
    .fill(5)
    .map((num, index) => num - index);
  //下面幾個是測試用之後可能會用json格式把star的內容包起來
  const [stars, setStars] = useState([
    {
      starCount: 8,
      starPercentage: '50',
    },
  ]);

  //幾顆星的數量
  const [starCount, setStarCount] = useState(8);
  //star bar 的百分比
  const [star, setStar] = useState('50');

  //加入購物車
  //TODO 加withCredentials
  //FIXME    index.js:78 Uncaught (in promise)
  async function handleAddCartItem(productId) {
    console.log('handleAddCartItem', productId);
    let response = await axios.post(
      `http://localhost:3002/api/1.0/member/product/${productId}`
    );
    console.log('handleAddCartItem', response.data);
  }

  return (
    <div className="container">
      <BreadcrumbForDetail />
      <div className="product_detail-product-intro">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-white bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg m-6 cursor-pointer"
            >
              <div className="product_detail-info-box">
                <h1 className="product_detail-product-title">{item.name}</h1>
                <div className="product_detail-product-description">
                  {item.description}
                </div>
                <h2 className="product_detail-product-price">${item.price}</h2>
              </div>
              <img
                className="product_detail-img"
                src={require(`../../Assets/products/${item.image}`)}
              />

              <div className="product_detail-detail-btn-group">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddCartItem(item.id);
                  }}
                  className="btn product_detail-product-btn product_detail-add-cart-btn"
                  type="button"
                >
                  加入購物車
                </button>
                <button
                  className="btn  product_detail-product-btn product_detail-checkout-btn"
                  type="submit"
                >
                  立即購買
                </button>
              </div>
            </div>
          );
        })}

        <img
          className="product_detail-img"
          src={require('../../Assets/products/milk1001.jpg')}
        />
        <div className="product_detail-product-box">
          <div className="product_detail-info-box">
            <h1 className="product_detail-product-title">{props.name}</h1>
            <div className="product_detail-product-description">
              ．絕佳的牛奶替代品,可作為飲料、穀片或從肉汁到杯子蛋糕的一切食用。
              <br />
              不含酵母。猶太潔食品。
              <br />
              ．鈣和維他命 D
              的良好來源是低脂肪、乳糖、膽固醇、角叉菜膠、無酵母、無大豆、素食主義者,包括
              4 克蛋白質和 17 克添加糖。
              <br />
              ．12 包32 盎司紙盒。 可架式不含雙酚 A 的紙盒保留風味和新鮮度。
              開封後冷藏。
            </div>
            <h2 className="product_detail-product-price">NT$123</h2>
          </div>

          <div className="product_detail-detail-btn-group">
            <button
              className="btn product_detail-product-btn product_detail-add-cart-btn"
              type="button"
            >
              加入購物車
            </button>
            <button
              className="btn  product_detail-product-btn product_detail-checkout-btn"
              type="submit"
            >
              立即購買
            </button>
          </div>
          <button
            className="btn d-flex align-items-center  product_detail-product-btn product_detail-like-btn"
            type="button"
            onClick={() => {
              setIsLike(!isLike);
            }}
          >
            <FaHeart
              className={
                isLike ? 'product_detail-heart' : 'product_detail-empty'
              }
            />
            加入最愛
          </button>
        </div>
      </div>
      <section className="product_detail-section product_detail-product-detail">
        <div className="product_detail-section-title">商品介紹</div>
        <div className="product_detail-detail-content">
          Pacific Foods 有機燕麥原味牛奶讓燕麥的甜味閃耀在這款奶油飲料中。
          <br />
          富含鈣和維他命 D
          的良好來源,這款飲料也含有低脂、乳糖、膽固醇和無大豆成分,是純素食主義者,並通過
          USDA 有機認證。 <br />在 Pacific
          Foods,我們非常自豪地使用盡可能靠近家的簡單食譜和乾淨的食材。
          我們避免使用防腐劑、添加劑和轉基因生物,並始終會。
          <br />
          我們的使命是滋養每一個身體,一次一餐。 ​
        </div>
      </section>
      <section className="product_detail-section product_detail-product-comment-score">
        <div className="product_detail-section-title">買家評論</div>
        <div className="product_detail-score-box">
          <div className="product_detail-average-score-box">
            <div className="product_detail-average-score">{averageScore}</div>
            <div className="product_detail-stars">
              <ReactStars
                value={averageScore}
                count={5}
                size={24}
                edit={false}
                activeColor="#ffd700"
                isHalf={true}
              />
            </div>
          </div>
          <div className="product_detail-score-bar">
            <div className="product_detail-score-text">評價分佈顯示</div>
            {/* 可能跑迴圈? */}
            {starArr.map((num, i) => {
              return (
                <div key={i} className="product_detail-star-bar">
                  <p>
                    {num}顆星({starCount})
                  </p>
                  <span className="product_detail-bar-section">
                    <ProgressBar
                      completed={star}
                      customLabel={star + '%'}
                      className="wrapper"
                      bgColor={'#9AAB82'}
                      baseBgColor={'#D9D9D9'}
                      borderRadius="0px"
                      labelAlignment="right"
                      labelSize="11px"
                    />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="product_detail-comment-box">
          <div className="product_detail-comment-top">
            <div className="product_detail-comment-title">
              <p>留言</p>
            </div>
            <div className="product_detail-comment-info">
              <div className="product_detail-comment-top-text">共 7 則</div>
              <Link className="product_detail-comment-top-text" to="">
                查看全部
              </Link>
            </div>
          </div>
          <section className="product_detail-section product_detail-user-comment-box">
            <div className="product_detail-user-img-box">
              <img
                className="product_detail-user-img"
                src={require('../../Assets/member.png')}
                alt="圖片"
              />
            </div>
            <div className="product_detail-user-text">
              <div className="product_detail-user-comment">
                <div className="product_detail-comment-text">王沛慈</div>
                <p className="product_detail-comment-text">我今天也來試試</p>
              </div>
              <div className="product_detail-user-star">
                <div className="product_detail-comment-text">2022/07/14</div>
                <ReactStars
                  value={5}
                  count={5}
                  size={24}
                  edit={false}
                  activeColor="#ffd700"
                  isHalf={true}
                />
              </div>
            </div>
          </section>
          <hr className="product_detail-br" />
          <section className="product_detail-section product_detail-user-comment-box">
            <div className="product_detail-user-img-box">
              <img
                className="product_detail-user-img"
                src={require('../../Assets/member.png')}
                alt="圖片"
              />
            </div>
            <div className="product_detail-user-text">
              <div className="product_detail-user-comment">
                <div className="product_detail-comment-text">王沛慈</div>
                <p className="product_detail-comment-text">我今天也來試試</p>
              </div>
              <div className="product_detail-user-star">
                <div className="product_detail-comment-text">2022/07/14</div>
                <ReactStars
                  value={5}
                  count={5}
                  size={24}
                  edit={false}
                  activeColor="#ffd700"
                  isHalf={true}
                />
              </div>
            </div>
          </section>
          <nav aria-label="Page navigation ">
            <ul className="pagination recipe-pagination">
              <li className="page-item">
                <Link
                  className="page-link"
                  to="/productDetail/:productId"
                  aria-label="Previous"
                >
                  <span aria-hidden="true">&laquo;</span>
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="/productDetail/:productId">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link
                  className="page-link"
                  to="/productDetail/:productId"
                  aria-label="Next"
                >
                  <span aria-hidden="true">&raquo;</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <div className="product_detail-section">
        <div className="product_detail-section-title">相關商品</div>
        <div className="product_detail-carousel">
          <SwiperForProduct />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
