import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import { RecipesContext } from "../providers/RecipesProvider";
import Box from "@material-ui/core/Box";
import { Helmet } from "react-helmet";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
    fontSize: 16,
  },
  icon: {
    zIndex: -1,
    fontSize: 40,
  },
  resize: {
    fontSize: 15,
    lineHeight: 1.8,
  },
}));

const AddFormView = () => {
  const classes = useStyles();

  const {
    formValues,
    ingredientFields,
    instructionsFields,
    tagsFields,
    stepByStepFields,
    handleFormInputChange,
    handleIngredientInputChange,
    handleAddIngredientFields,
    handleRemoveIngredientFields,
    handleInstructionsInputChange,
    handleAddInstructionsFields,
    handleRemoveInstructionsFields,
    handleTagsInputChange,
    handleAddTagsFields,
    handleRemoveTagsFields,
    handleStepByStepInputChange,
    handleAddStepByStepFields,
    handleRemoveStepByStepFields,
    handleSubmit,
  } = useContext(RecipesContext);

  return (
    <div className="main">
      <Helmet>
        <title>Add new recipe - Budget Bytes</title>
      </Helmet>
      <div className="addFormContainer">
        <form className={classes.root}>
          <h3>Author note:</h3>
          <TextField
            name="note"
            label="Author note"
            multiline
            rowsMax={10}
            value={formValues.note}
            onChange={handleFormInputChange}
            variant="filled"
            InputLabelProps={{ style: { fontSize: 20, lineHeight: 1 } }}
            InputProps={{
              classes: {
                input: classes.resize,
              },
              style: { width: "200ch" },
            }}
          />
          <h3>Image source:</h3>
          <TextField
            name="imageUrl"
            label="Image source"
            multiline
            rowsMax={3}
            value={formValues.imageUrl}
            onChange={handleFormInputChange}
            variant="filled"
            InputLabelProps={{ style: { fontSize: 20, lineHeight: 1 } }}
            InputProps={{
              classes: {
                input: classes.resize,
              },
              style: { width: "200ch" },
            }}
          />
          <h3>Title:</h3>
          <TextField
            name="title"
            label="Title"
            multiline
            rowsMax={3}
            value={formValues.title}
            onChange={handleFormInputChange}
            variant="filled"
            InputLabelProps={{ style: { fontSize: 20, lineHeight: 1 } }}
            InputProps={{
              classes: {
                input: classes.resize,
              },
              style: { width: "200ch" },
            }}
          />
          <h3>Description:</h3>
          <TextField
            name="desc"
            label="Description"
            multiline
            rowsMax={10}
            value={formValues.desc}
            onChange={handleFormInputChange}
            variant="filled"
            InputLabelProps={{ style: { fontSize: 20, lineHeight: 1 } }}
            InputProps={{
              classes: {
                input: classes.resize,
              },
              style: { width: "200ch" },
            }}
          />
          <h3>Money and time: </h3>
          <div>
            <TextField
              name="totalCost"
              label="Total cost"
              variant="filled"
              type="number"
              value={formValues.totalCost || ""}
              onChange={handleFormInputChange}
              InputProps={{
                classes: {
                  input: classes.resize,
                },
              }}
              InputLabelProps={{ style: { fontSize: 20, lineHeight: 1 } }}
            />
            <TextField
              name="servings"
              label="Servings"
              variant="filled"
              type="number"
              value={formValues.servings || ""}
              onChange={handleFormInputChange}
              InputProps={{
                classes: {
                  input: classes.resize,
                },
              }}
              InputLabelProps={{ style: { fontSize: 20, lineHeight: 1 } }}
            />
            <TextField
              name="prepTime"
              label="Prep time"
              variant="filled"
              type="number"
              value={formValues.prepTime || ""}
              onChange={handleFormInputChange}
              InputProps={{
                classes: {
                  input: classes.resize,
                },
              }}
              InputLabelProps={{ style: { fontSize: 20, lineHeight: 1 } }}
            />
            <TextField
              name="cookTime"
              label="Cook time"
              variant="filled"
              type="number"
              value={formValues.cookTime || ""}
              onChange={handleFormInputChange}
              InputProps={{
                classes: {
                  input: classes.resize,
                },
              }}
              InputLabelProps={{ style: { fontSize: 20, lineHeight: 1 } }}
            />
          </div>
          <h3> Ingredients:</h3>
          {ingredientFields.map((ingredientField, index) => (
            <div key={index}>
              <div>
                <TextField
                  name="amount"
                  label="Amount"
                  multiline
                  variant="filled"
                  type="number"
                  value={ingredientField.amount}
                  onChange={(e) => handleIngredientInputChange(index, e)}
                  InputProps={{
                    classes: {
                      input: classes.resize,
                    },
                  }}
                  InputLabelProps={{ style: { fontSize: 20, lineHeight: 1 } }}
                />
                <TextField
                  name="unit"
                  label="Unit"
                  variant="filled"
                  multiline
                  value={ingredientField.unit}
                  onChange={(e) => handleIngredientInputChange(index, e)}
                  InputProps={{
                    classes: {
                      input: classes.resize,
                    },
                  }}
                  InputLabelProps={{ style: { fontSize: 20, lineHeight: 1 } }}
                />
                <TextField
                  name="ingredient"
                  label="Ingredient"
                  variant="filled"
                  multiline
                  value={ingredientField.ingredient}
                  onChange={(e) => handleIngredientInputChange(index, e)}
                  InputProps={{
                    classes: {
                      input: classes.resize,
                    },
                    style: { width: "70ch" },
                  }}
                  InputLabelProps={{ style: { fontSize: 20, lineHeight: 1 } }}
                />
              </div>
              <div>
                <IconButton onClick={() => handleAddIngredientFields()}>
                  <AddIcon className={classes.icon} />
                </IconButton>
                <IconButton onClick={() => handleRemoveIngredientFields(index)}>
                  <RemoveIcon className={classes.icon} />
                </IconButton>
              </div>
            </div>
          ))}
          <h3> Instructions:</h3>
          {instructionsFields.map((instructionsField, index) => (
            <div key={index}>
              <div>
                <TextField
                  name="instructions"
                  label="Instructions"
                  multiline
                  rowsMax={10}
                  variant="filled"
                  value={instructionsField.instructions}
                  onChange={(e) => handleInstructionsInputChange(index, e)}
                  InputProps={{
                    classes: {
                      input: classes.resize,
                    },
                    style: { width: "180ch" },
                  }}
                  InputLabelProps={{ style: { fontSize: 20, lineHeight: 1 } }}
                />
              </div>
              <div>
                <IconButton onClick={() => handleAddInstructionsFields()}>
                  <AddIcon className={classes.icon} />
                </IconButton>
                <IconButton
                  onClick={() => handleRemoveInstructionsFields(index)}
                >
                  <RemoveIcon className={classes.icon} />
                </IconButton>
              </div>
            </div>
          ))}
          <h3> Tags:</h3>
          {tagsFields.map((tagsField, index) => (
            <div key={index}>
              <div>
                <TextField
                  name="tags"
                  label="Tag:"
                  multiline
                  rowsMax={3}
                  variant="filled"
                  value={tagsField.tags}
                  onChange={(e) => handleTagsInputChange(index, e)}
                  InputProps={{
                    classes: {
                      input: classes.resize,
                    },
                    style: { width: "30ch" },
                  }}
                  InputLabelProps={{ style: { fontSize: 20, lineHeight: 1 } }}
                />
              </div>
              <div>
                <IconButton onClick={() => handleAddTagsFields()}>
                  <AddIcon className={classes.icon} />
                </IconButton>
                <IconButton onClick={() => handleRemoveTagsFields(index)}>
                  <RemoveIcon className={classes.icon} />
                </IconButton>
              </div>
            </div>
          ))}
          <h3> Step by step:</h3>
          {stepByStepFields.map((stepByStepField, index) => (
            <div key={index}>
              <div>
                <TextField
                  name="stepByStepImg"
                  label="Image:"
                  multiline
                  rowsMax={3}
                  variant="filled"
                  value={stepByStepField.stepByStepImg}
                  onChange={(e) => handleStepByStepInputChange(index, e)}
                  InputProps={{
                    classes: {
                      input: classes.resize,
                    },
                    style: { width: "180ch" },
                  }}
                  InputLabelProps={{ style: { fontSize: 20, lineHeight: 1 } }}
                />

                <TextField
                  name="stepByStepDesc"
                  label="Description:"
                  multiline
                  rowsMax={10}
                  variant="filled"
                  value={stepByStepField.stepByStepDesc}
                  onChange={(e) => handleStepByStepInputChange(index, e)}
                  InputProps={{
                    classes: {
                      input: classes.resize,
                    },
                    style: { width: "180ch" },
                  }}
                  InputLabelProps={{ style: { fontSize: 20, lineHeight: 1 } }}
                />
              </div>
              <div>
                <IconButton onClick={() => handleAddStepByStepFields()}>
                  <AddIcon className={classes.icon} />
                </IconButton>
                <IconButton onClick={() => handleRemoveStepByStepFields(index)}>
                  <RemoveIcon className={classes.icon} />
                </IconButton>
              </div>
            </div>
          ))}
          <Box textAlign="right">
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              type="submit"
              endIcon={<Icon>send</Icon>}
              onClick={handleSubmit}
              style={{ marginRight: "210px" }}
            >
              DODAJ PRZEPIS
            </Button>
          </Box>
        </form>
      </div>
    </div>
  );
};

export default AddFormView;
