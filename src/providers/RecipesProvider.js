import React, { useState } from "react";
import slugify from "slugify";
import { useHistory } from "react-router-dom";

import { Recipes as RecipesData } from "../assets/RecipesData";

export const RecipesContext = React.createContext({
  recipeValues: [],
  formValues: {},
  setSearchValue: "",
  searchValues: {},
  ingredientFields: [],
  instructionsFields: [],
  tagsFields: [],
  stepByStepFields: [],
  submitted: false,
  handleSubmit: () => {},
  handleStepByStepInputChange: () => {},
  handleSearchInputChange: () => {},
  handleAddStepByStepFields: () => {},
  handleRemoveStepByStepFields: () => {},
  handleTagsInputChange: () => {},
  handleAddTagsFields: () => {},
  handleRemoveTagsFields: () => {},
  handleInstructionsInputChange: () => {},
  handleAddInstructionsFields: () => {},
  handleRemoveInstructionsFields: () => {},
  handleIngredientInputChange: () => {},
  handleAddIngredientFields: () => {},
  handleRemoveIngredientFields: () => {},
  handleFormInputChange: () => {},
});

const RecipesProvider = ({ children }) => {
  let history = useHistory();

  const [recipeValues, setRecipeValues] = useState(RecipesData);
  const [submitted, setSubmitted] = useState(false);
  const [formValues, setFormValues] = useState({
    note: "",
    imageUrl: "",
    title: "",
    desc: "",
    totalCost: "",
    servings: "",
    prepTime: "",
    cookTime: "",
  });

  const [searchValue, setSearchValue] = useState("");
  const [searchValues, setSearchValues] = useState({
    search: "",
  });

  const handleSearchInputChange = (e) => {
    setSearchValues({
      ...searchValues,
      [e.target.name]: e.target.value,
    });
  };
  const [ingredientFields, setIngredientFields] = useState([
    {
      amount: "",
      unit: "",
      ingredient: "",
    },
  ]);
  const [instructionsFields, setInstructionsFields] = useState([
    {
      instructions: "",
    },
  ]);
  const [tagsFields, setTagsFields] = useState([
    {
      tags: "",
    },
  ]);
  const [stepByStepFields, setStepByStepFields] = useState([
    {
      stepByStepImg: "",
      stepByStepDesc: "",
    },
  ]);

  const handleFormInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleIngredientInputChange = (index, e) => {
    const values = [...ingredientFields];
    values[index][e.target.name] = e.target.value;
    setIngredientFields(values);
  };
  const handleAddIngredientFields = () => {
    setIngredientFields([
      ...ingredientFields,
      {
        amount: "",
        unit: "",
        ingredient: "",
      },
    ]);
  };
  const handleRemoveIngredientFields = (index) => {
    const values = [...ingredientFields];
    if (values.length > 1) {
      values.splice(index, 1);
      setIngredientFields(values);
    }
  };
  const handleInstructionsInputChange = (index, e) => {
    const values = [...instructionsFields];
    values[index][e.target.name] = e.target.value;
    setInstructionsFields(values);
  };
  const handleAddInstructionsFields = () => {
    setInstructionsFields([
      ...instructionsFields,
      {
        instructions: "",
      },
    ]);
  };
  const handleRemoveInstructionsFields = (index) => {
    const values = [...instructionsFields];
    if (values.length > 1) {
      values.splice(index, 1);
      setInstructionsFields(values);
    }
  };
  const handleTagsInputChange = (index, e) => {
    const values = [...tagsFields];
    values[index][e.target.name] = e.target.value;
    setTagsFields(values);
  };
  const handleAddTagsFields = () => {
    setTagsFields([
      ...tagsFields,
      {
        tags: "",
      },
    ]);
  };
  const handleRemoveTagsFields = (index) => {
    const values = [...tagsFields];
    if (values.length > 1) {
      values.splice(index, 1);
      setTagsFields(values);
    }
  };
  const handleStepByStepInputChange = (index, e) => {
    const values = [...stepByStepFields];
    values[index][e.target.name] = e.target.value;
    setStepByStepFields(values);
  };
  const handleAddStepByStepFields = () => {
    setStepByStepFields([
      ...stepByStepFields,
      {
        stepByStepImg: "",
        stepByStepDesc: "",
      },
    ]);
  };
  const handleRemoveStepByStepFields = (index) => {
    const values = [...stepByStepFields];
    if (values.length > 1) {
      values.splice(index, 1);
      setStepByStepFields(values);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (searchValues.search === "") {
        setSearchValues({ search: "" });
      } else {
        setSearchValue(searchValues.search);
        setSearchValues({ search: "" });
        history.push("/search-results");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRecipeValues([
      {
        note: formValues.note,
        imageUrl: formValues.imageUrl,
        title: formValues.title,
        desc: formValues.desc,
        totalCost: parseFloat(formValues.totalCost),
        servings: parseFloat(formValues.servings),
        prepTime: parseFloat(formValues.prepTime),
        cookTime: parseFloat(formValues.cookTime),
        ingredients: ingredientFields,
        instructions: instructionsFields,
        tags: tagsFields,
        stepByStep: stepByStepFields,
        slug: slugify(formValues.title, { lower: true }),
      },
      ...recipeValues,
    ]);
    setSubmitted(true);
  };
  return (
    <RecipesContext.Provider
      value={{
        recipeValues,
        searchValues,
        searchValue,
        formValues,
        ingredientFields,
        instructionsFields,
        tagsFields,
        stepByStepFields,
        submitted,
        handleKeyDown,
        handleSubmit,
        handleStepByStepInputChange,
        handleSearchInputChange,
        handleAddStepByStepFields,
        handleRemoveStepByStepFields,
        handleTagsInputChange,
        handleAddTagsFields,
        handleRemoveTagsFields,
        handleInstructionsInputChange,
        handleAddInstructionsFields,
        handleRemoveInstructionsFields,
        handleIngredientInputChange,
        handleAddIngredientFields,
        handleRemoveIngredientFields,
        handleFormInputChange,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;
