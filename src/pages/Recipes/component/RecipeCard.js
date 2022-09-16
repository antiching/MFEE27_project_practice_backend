import React from 'react';
import { Link } from 'react-router-dom';
import recipeImage from '../Asset/food.jpg';
import { FaLongArrowAltRight } from 'react-icons/fa';

function RecipeCard() {
  return (
    <>
      <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
        <div className="recipe-card ">
          <div className="recipe_img">
            <img src={recipeImage}></img>
          </div>
          <div className="recipe-card-body">
            <div className="recipe_date">張宇平 營養師 | 2022-08-17</div>
            <div className="recipe_title">
              <h4>
                <Link
                  className="recipe-card-title"
                  to="/recipes/recipeDetail/123"
                >
                  早安水果麵包
                </Link>
              </h4>
            </div>
            <div className="recipe_content text-truncate">
              鮮嫩多汁的雞翅帶點蜂蜜的甜味與香氣，嘴饞的時候的最佳良伴
            </div>
            <div className="recipe-readmore">
              <a>
                閱讀更多
                <FaLongArrowAltRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipeCard;
