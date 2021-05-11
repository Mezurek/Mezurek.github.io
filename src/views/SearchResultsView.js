import React, { useContext, useState, useEffect } from "react";
import Recipes from "../components/Main/Recipes/Recipes";
import Pagination from "../components/Pagination/Pagination";
import { Helmet } from "react-helmet";
import { RecipesContext } from "../providers/RecipesProvider";

const SearchResultsView = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(6);
  const { recipeValues, searchValues, searchValue } =
    useContext(RecipesContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const recipe = recipeValues.filter(
    (recipe) =>
      recipe.tags.some((y) => y.tags.includes(searchValue)) ||
      recipe.title.toLowerCase().includes(searchValue)
  );
  useEffect(() => {
    setCurrentPage(1);
  }, [searchValues.search]);

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipe.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="main">
      <Helmet>
        <title>Looking for {searchValue} - Budget Bytes</title>
      </Helmet>
      <h1 className="archivetitle">Looking for {searchValue}</h1>

      <Recipes recipe={currentRecipes} />
      <Pagination
        recipesPerPage={recipesPerPage}
        totalRecipes={recipe.length}
        paginate={paginate}
      />
    </div>
  );
};

export default SearchResultsView;
