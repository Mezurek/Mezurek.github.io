import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RecipesContext } from "../../providers/RecipesProvider";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "50ch",
    },
  },
  resize: {
    fontSize: 16,
    lineHeight: 1.8,
  },
}));

const Header = () => {
  const classes = useStyles();

  const { handleSearchInputChange, searchValues, handleKeyDown } =
    useContext(RecipesContext);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/"></Link>
      </div>

      <div className="header-content">
        <div className="social">
          <Link to="/add-form">
            <FontAwesomeIcon icon={["fas", "plus"]} size="lg" className="fas" />
          </Link>
          <a
            href="https://twitter.com/"
            title="Twitter"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "twitter"]}
              size="lg"
              className="fab"
            />
          </a>
          <a
            href="https://Facebook.com/"
            title="Facebook"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "facebook"]}
              size="lg"
              className="fab"
            />
          </a>
          <a
            href="https://instagram.com/"
            title="instagram"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "instagram"]}
              size="lg"
              className="fab"
            />
          </a>
        </div>

        <div className="input-group ">
          <TextField
            name="search"
            id="standard-search"
            type="search"
            value={searchValues.search}
            onChange={handleSearchInputChange}
            onKeyDown={handleKeyDown}
            InputProps={{
              classes: {
                input: classes.resize,
              },
              style: { width: "30ch" },
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
