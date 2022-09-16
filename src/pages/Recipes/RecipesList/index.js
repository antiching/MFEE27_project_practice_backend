import React from 'react';
import '../styles/recipes.scss';
import RecipeCard from '../component/RecipeCard';
import { Link } from 'react-router-dom';

function RecipesList() {
  return (
    <>
      <div className="navbar recipe-navbar d-flex container-fluid">
        <Link to="/recipes">飲品</Link>
        <Link to="/recipes">烘焙</Link>
        <Link to="/recipes">輕食</Link>
      </div>
      <div className="recipe-list">
        <div className="container ">
          <div className="row">
            <div className="recipe-title d-flex justify-content-between py-3">
              <h1>飲品</h1>
              <div>
                <h6 className="d-inline-flex">共10篇食譜</h6>
                <h6 className="d-inline-flex"> | </h6>
                <h6 className="d-inline-flex">依更新時間排序</h6>
              </div>
            </div>
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />

            <nav aria-label="Page navigation ">
              <ul class="pagination recipe-pagination">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipesList;
