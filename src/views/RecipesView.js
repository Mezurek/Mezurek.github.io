import React, { useContext, useState, useEffect } from "react";
import Subcats from "../components/Main/Subcats/Subcats";
import Recipes from "../components/Main/Recipes/Recipes";
import { ListItems } from "../assets/Subcategories";
import { RecipesContext } from "../providers/RecipesProvider";
import slugify from "slugify";
import Pagination from "../components/Pagination/Pagination";
import { Helmet } from "react-helmet";

const RecipesView = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(6);
  const { recipeValues } = useContext(RecipesContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  let test = slugify(window.location.pathname, { remove: /[/]/g });
  let test2 = test.replace(/-/g, " ");

  const recipe = recipeValues.filter((recipe) =>
    recipe.tags.some((y) => y.tags === test2)
  );
  useEffect(() => {
    setCurrentPage(1);
  }, [test2]);

  const pageTitle = test2.charAt(0).toUpperCase() + test2.slice(1);

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipe.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="main">
      <Helmet>
        <title>{pageTitle} - Budget Bytes</title>
      </Helmet>
      <h1 className="archivetitle">{test2}</h1>
      <div className="catsSearchWrapper">
        <Subcats categories={ListItems} />
      </div>
      <Recipes recipe={currentRecipes} />
      <Pagination
        recipesPerPage={recipesPerPage}
        totalRecipes={recipe.length}
        paginate={paginate}
      />
    </div>
  );
};

export default RecipesView;
