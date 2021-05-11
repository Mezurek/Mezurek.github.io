import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RecipesContext } from "../providers/RecipesProvider";
import { Helmet } from "react-helmet";

const RecipeView = () => {
  const timeConvert = (n) => {
    const sum = n;

    const hours = sum / 60;
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    if (rhours === 0) {
      return rminutes + " minute(s).";
    } else {
      return rhours + " Hour(s) and " + rminutes + " minute(s).";
    }
  };
  let { slug } = useParams();

  const { recipeValues } = useContext(RecipesContext);
  const [recipe] = recipeValues.filter((recipe) => recipe.slug === slug);

  const pageTitle = recipe.title.toLowerCase();
  const finalpageTitle = pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1);

  return (
    <div className="main">
      <Helmet>
        <title>{finalpageTitle} - Budget Bytes</title>
      </Helmet>
      <h1 className="postTitle">{recipe.title}</h1>
      <div className="postCost">
        ${recipe.totalCost} Recipe / $
        {Math.round((recipe.totalCost / recipe.servings) * 100) / 100} Serving
      </div>
      <p id="postParagraph">{recipe.note}</p>
      <div className="centerImage">
        <img src={recipe.imageUrl} alt={recipe.title}></img>
      </div>
      <div className="postRecipeWrap">
        <div>
          <h2 className="fancyTitle">{recipe.title}</h2>
          <p className="teaserInfo">{recipe.desc}</p>
          <p className="fancyParagraph">
            Total Cost: ${recipe.totalCost} Recipe / $
            {Math.round((recipe.totalCost / recipe.servings) * 100) / 100}{" "}
            Serving
          </p>
          <div className="postTimes">
            <FontAwesomeIcon icon={["fas", "shopping-cart"]} size="2x" />
            Prep Time: {timeConvert(recipe.prepTime)}
            <FontAwesomeIcon icon={["fas", "utensils"]} size="2x" />
            Cook Time: {timeConvert(recipe.cookTime)}
            <FontAwesomeIcon icon={["fas", "clock"]} size="2x" />
            Total Time: {timeConvert(recipe.prepTime + recipe.cookTime)}
          </div>
          <div className="postIngredients">
            <h4>Ingredients</h4>
            <ul>
              {recipe.ingredients.map((ingredient) => (
                <li key={ingredient.ingredient}>
                  {ingredient.amount} {ingredient.unit} {ingredient.ingredient}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <img
          className="postImage"
          src={recipe.imageUrl}
          alt={recipe.title}
        ></img>
        <div className="postInstructions">
          <h4>Instructions</h4>
          <ul>
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction.instructions}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="stepByStepWrapper">
        <h5>HOW TO MAKE {recipe.title} - STEP BY STEP PHOTOS</h5>
        <ol>
          {recipe.stepByStep.map((step, index) => (
            <div key={index}>
              <li>
                <img src={step.stepByStepImg} alt=" not found"></img>
              </li>{" "}
              <li>{step.stepByStepDesc}</li>
            </div>
          ))}
        </ol>
      </div>
      <div className="postTags">
        <span style={{ color: "#6d6d6d" }}>POSTED IN</span>
        {recipe.tags.map((tag, index) => (
          <span key={index}>
            {" "}
            {tag.tags}
            {index !== recipe.tags.length - 1 ? "," : ""}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RecipeView;
