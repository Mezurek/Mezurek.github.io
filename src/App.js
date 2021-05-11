import React, { useContext } from "react";
import "./App.css";
import MainTemplate from "./templates/MainTemplate";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RecipesView from "./views/RecipesView";
import RecipeView from "./views/RecipeView";
import AddFormView from "./views/AddFormView";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import RecipesProvider, { RecipesContext } from "./providers/RecipesProvider";
import { ListItems } from "./assets/Subcategories";
import { MealPreps } from "./assets/MealPreps";
import SearchResultsView from "./views/SearchResultsView";
import HomePage from "./views/HomePage";

function App() {
  const { recipeValues } = useContext(RecipesContext);

  return (
    <>
      <Router>
        <ScrollToTop />
        <RecipesProvider>
          <MainTemplate>
            <Switch>
              <Route path="/" exact render={() => <HomePage />} />
              <Route
                path="/recipes"
                exact
                render={() => <RecipesView recipes={recipeValues} />}
              />
              <Route
                path="/meal-prep"
                exact
                render={() => <RecipesView recipes={recipeValues} />}
              />
              <Route
                path="/search-results"
                exact
                render={() => <SearchResultsView recipes={recipeValues} />}
              />

              {ListItems.map((ListItem) => {
                return (
                  <Route
                    path={ListItem.slug}
                    key={ListItem.slug}
                    exact
                    render={() => <RecipesView recipes={recipeValues} />}
                  />
                );
              })}
              {MealPreps.map((MealPrep) => {
                return (
                  <Route
                    path={MealPrep.slug}
                    key={MealPrep.slug}
                    exact
                    render={() => <RecipesView recipes={recipeValues} />}
                  />
                );
              })}
              <Route path="/add-form" exact component={AddFormView} />
              <Route path={"/:slug"} exact component={RecipeView} />
            </Switch>
          </MainTemplate>
        </RecipesProvider>
      </Router>
    </>
  );
}

export default App;
