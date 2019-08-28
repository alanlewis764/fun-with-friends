import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import SearchBar from "./SearchBar";
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { openArtifactForm } from "../actions/index";
import { useDispatch } from 'react-redux';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const UtilityBar = () => {
  
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Grid container alignItems="center" justify="space-between">
      <Grid item>
        <SearchBar />
      </Grid>
      <Grid item>
        <div>
          <IconButton onClick={() => dispatch(openArtifactForm(false))} className={classes.button} aria-label="add">
            <AddIcon />
          </IconButton>
          <IconButton className={classes.button} aria-label="delete">
            <DeleteIcon />
          </IconButton>
          <IconButton className={classes.button} aria-label="menu">
            <MenuIcon />
          </IconButton>
        </div>
      </Grid>
    </Grid>
  )
}

export default UtilityBar