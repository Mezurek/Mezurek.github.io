import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
    "& .MuiMenuItem-root": {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
  icon: {
    zIndex: -1,
    fontSize: 40,
  },
  resize: {
    fontSize: 15,
    lineHeight: 1.8,
  },
  listItemText: {
    fontSize: 30,
  },
}));

const prices = [
  { value: "5$", label: "0$ to 4.99$" },
  { value: "10$", label: "5$ to 9.99$" },
  { value: "15$", label: "10$ to 14.99$" },
  { value: "20$", label: "15$ to 19.99$" },
  { value: "25$", label: "20$ to 24.99$" },
  { value: "30$", label: "25$ to 29.99$" },
  { value: "30$+", label: "30$+" },
];
const times = [
  { value: "30mins", label: "Up to 30 mins" },
  { value: "60mins", label: "Up to 1 hour" },
  { value: "90mins", label: "Up to 2 hours" },
  { value: "120mins", label: "Up to 3 hours" },
  { value: "3-5h", label: "Between 3 to 5 hours" },
  { value: "5-9h", label: "Between 5 to 9 hours" },
  { value: "10h+", label: "Over 10 hours" },
];

const SearchField = () => {
  const classes = useStyles();
  const [price, setPrice] = useState("Choose");
  const [time, setTime] = useState("Choose");
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  return (
    <div className="searchWrapper">
      <form className={classes.root}>
        <div>
          <TextField
            name="title"
            label="Search in title"
            multiline
            rowsMax={10}
            InputLabelProps={{ style: { fontSize: 20, lineHeight: 1 } }}
            InputProps={{
              classes: {
                input: classes.resize,
              },
              style: { width: "40ch" },
            }}
          />
          <TextField
            name="tags"
            label="Search in tags"
            multiline
            rowsMax={10}
            InputLabelProps={{ style: { fontSize: 20, lineHeight: 1 } }}
            InputProps={{
              classes: {
                input: classes.resize,
              },
              style: { width: "40ch" },
            }}
          />
          <TextField
            id="selectPrice"
            select
            label="Cost"
            value={price}
            onChange={handlePriceChange}
            InputProps={{
              classes: {
                input: classes.resize,
              },
              style: { width: "40ch" },
            }}
            InputLabelProps={{ style: { fontSize: 20, lineHeight: 1 } }}
          >
            {prices.map((option) => (
              <MenuItem
                key={option.value}
                value={option.value}
                classes={{ primary: classes.listItemText }}
              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="selectTime"
            select
            label="Time"
            value={time}
            onChange={handleTimeChange}
            InputProps={{
              classes: {
                input: classes.resize,
              },
              style: { width: "40ch" },
            }}
            InputLabelProps={{ style: { fontSize: 20, lineHeight: 1 } }}
          >
            {times.map((option) => (
              <MenuItem
                key={option.value}
                value={option.value}
                classes={{ primary: classes.listItemText }}
              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className="searchButton">
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
            <SearchIcon />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchField;
