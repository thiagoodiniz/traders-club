import React from 'react'
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom';

const styles = {
    root: {
     
    },
    input: {
      color: "#f5f5f5",
      width: "800px"
    }
  };

const SearchBar = (props) => {
    const { classes } = props;
    return(
        <div className="search-bar">
            <TextField
                id="outlined-bare"
                className={classes.root}
                placeholder="Pesquise por um veículo"
                margin="normal"
                variant="outlined"
                InputProps={{
                    className: classes.input
                }}
            />
            <Link to={props.formLink}>
                <Button variant="contained" className='button'>Cadastrar</Button>
            </Link>
        </div>
    )
}

export default withStyles(styles)(SearchBar)