import React from 'react';
import { Link } from 'react-router-dom';
import {
  BsSearch,
  BsFillPersonFill,
  BsStarFill,
  BsStarHalf,
  BsStar,
} from 'react-icons/bs';
import { BiTimeFive } from 'react-icons/bi';
import '../styles/RecipesDetail.scss';
import recipeImage from '../Asset/food.jpg';

function RecipeDetail() {
  return (
    <>
      <div className="container recipe-detail-container row">
        <div className="main col-12 col-md-8 col-lg-8 ">
          <div className="recipe-title ">
            <h1>早安水果麵包</h1>
            <h4>鮮嫩多汁的雞翅帶點蜂蜜的甜味與香氣，嘴饞的時候的最佳良伴</h4>
            <div className="recipe-info d-flex">
              <div className="author d-flex">
                <BsFillPersonFill />
                <p>張家娟</p>
              </div>
              <div className="date d-flex">
                <BiTimeFive />
                <p>2020-10-25</p>
              </div>
            </div>
          </div>
          <div className="recipe-image mt-5">
            <img src={recipeImage}></img>
            <button type="button" class="btn btn-outline-secondary">
              收藏
            </button>
          </div>
          <div className="recipe-ingredient mt-5">
            <h3>食材</h3>
            <hr />
            <div className="ingredient-group">
              <div className="ingredient d-flex justify-content-between">
                <div className="ingredient-name">酪梨</div>
                <div className="ingredient-unit">1顆</div>
              </div>
              <div className="ingredient d-flex justify-content-between">
                <div className="ingredient-name">番茄</div>
                <div className="ingredient-unit">2顆</div>
              </div>
              <div className="ingredient d-flex justify-content-between">
                <div className="ingredient-name">九層塔</div>
                <div className="ingredient-unit">30克</div>
              </div>
              <div className="ingredient d-flex justify-content-between">
                <div className="ingredient-name">奶油</div>
                <div className="ingredient-unit">20克</div>
              </div>
              <div className="ingredient d-flex justify-content-between">
                <div className="ingredient-name">法國麵包</div>
                <div className="ingredient-unit">半條</div>
              </div>
              <div className="ingredient d-flex justify-content-between">
                <div className="ingredient-name">洋蔥</div>
                <div className="ingredient-unit">半顆</div>
              </div>
              <div className="ingredient d-flex justify-content-between">
                <div className="ingredient-name">胡椒粉</div>
                <div className="ingredient-unit">適量</div>
              </div>
              <div className="ingredient d-flex justify-content-between">
                <div className="ingredient-name">鹽巴</div>
                <div className="ingredient-unit">適量</div>
              </div>
            </div>
          </div>
          <div className="recipe-steps mt-5">
            <h3>步驟</h3>
            <hr />
            <div className="recipe-step d-flex row">
              <div className="recipe-step-image col-12 col-md-4">
                <img src={recipeImage}></img>
              </div>
              <div className="recipe-step-text col-12 col-md-8">
                酪梨放入碗公加檸檬汁、一小撮鹽（大拇指和食指拈一小撮鹽），用叉子壓碎⋯
              </div>
              <hr />
            </div>
            <div className="recipe-step d-flex row">
              <div className="recipe-step-image col-12 col-md-4">
                <img src={recipeImage}></img>
              </div>
              <div className="recipe-step-text col-12 col-md-8">
                酪梨放入碗公加檸檬汁、一小撮鹽（大拇指和食指拈一小撮鹽），用叉子壓碎⋯
              </div>
              <hr />
            </div>
            <div className="recipe-step d-flex row">
              <div className="recipe-step-image col-12 col-md-4">
                <img src={recipeImage}></img>
              </div>
              <div className="recipe-step-text col-12 col-md-8">
                酪梨放入碗公加檸檬汁、一小撮鹽（大拇指和食指拈一小撮鹽），用叉子壓碎⋯
              </div>
              <hr />
            </div>
            <div className="recipe-step d-flex row">
              <div className="recipe-step-image col-12 col-md-4">
                <img src={recipeImage}></img>
              </div>
              <div className="recipe-step-text col-12 col-md-8">
                酪梨放入碗公加檸檬汁、一小撮鹽（大拇指和食指拈一小撮鹽），用叉子壓碎⋯
              </div>
              <hr />
            </div>
          </div>
          <div className="recipe-review mt-5">
            <div className="review-title d-flex justify-content-between">
              <h3>食譜評論</h3>
              <div className="number">共 7 則</div>
            </div>
            <hr />
            <div className="review">
              <div className="review-name">林凱翔</div>
              <div className="review-content">看起來好好吃!明天來試試看!</div>
              <div className="review-info d-flex justify-content-between">
                <div className="review-date">2022-08-25</div>
                <div className="review-stars">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                </div>
              </div>
              <hr />
            </div>
            <div className="review">
              <div className="review-name">林凱翔</div>
              <div className="review-content">看起來好好吃!明天來試試看!</div>
              <div className="review-info d-flex justify-content-between">
                <div className="review-date">2022-08-25</div>
                <div className="review-stars">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                </div>
              </div>
              <hr />
            </div>
            <div className="review">
              <div className="review-name">林凱翔</div>
              <div className="review-content">看起來好好吃!明天來試試看!</div>
              <div className="review-info d-flex justify-content-between">
                <div className="review-date">2022-08-25</div>
                <div className="review-stars">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                </div>
              </div>
              <hr />
            </div>
            <div className="review">
              <div className="review-name">林凱翔</div>
              <div className="review-content">看起來好好吃!明天來試試看!</div>
              <div className="review-info d-flex justify-content-between">
                <div className="review-date">2022-08-25</div>
                <div className="review-stars">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
        <div className="recipe-sidebar col-0 col-md-4 col-lg-4 ">
          <div className="recipe-category">
            <h3>所有食譜主題</h3>
            <hr />
            <ul>
              <li>
                <Link to="recipes/beverage">飲品</Link>
              </li>
              <li>
                <Link to="recipes/bake">烘焙</Link>
              </li>
              <li>
                <Link to="recipes/light">輕食</Link>
              </li>
            </ul>
          </div>
          <div className="recipe-search">
            <h3>搜尋食譜</h3>
            <hr />
            <form class="d-flex searchbar" role="search">
              <input
                class="me-2 form-control recipe-form-control"
                type="search"
                placeholder="搜尋食譜"
                aria-label="Search"
              />
              <button class="btn" type="submit">
                <BsSearch />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipeDetail;
