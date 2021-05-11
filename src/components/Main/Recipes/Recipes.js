import React from "react";
import { Link } from "react-router-dom";

const Recipes = ({ recipe }) => (
  <div className="recipesWrapper">
    {recipe.map((RecipesData) => {
      let articleRoute = "";
      articleRoute = "/" + RecipesData.title.toLocaleLowerCase();
      articleRoute = articleRoute.replace(/\s/g, "-");

      return (
        <article className="recipeTeaser" key={RecipesData.title}>
          <div className="teaserImage">
            <Link to={articleRoute}>
              <img src={RecipesData.imageUrl} alt={RecipesData.title}></img>
            </Link>

            <Link to={articleRoute}>
              <h2 className="teaserPostTitle">{RecipesData.title}</h2>
            </Link>

            <div className="teaserPostCost">
              ${RecipesData.totalCost} Recipe / $
              {Math.round(
                (RecipesData.totalCost / RecipesData.servings) * 100
              ) / 100}{" "}
              Serving
            </div>
          </div>
          <div className="teaserInfo">
            <p>{RecipesData.desc}</p>
          </div>
          <div className="teaserMore">
            <Link to={articleRoute}>Read more...</Link>
          </div>
        </article>
      );
    })}
  </div>
);

export default Recipes;
