import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as FormCreators } from '../store/actions/form'

const styles = {
    root: {
     
    },
    input: {
      color: "#f5f5f5",
      width: "800px"
    }
  };

class SearchBar extends Component{
    
    render(){
        const { classes } = this.props;
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
                <Link to={this.props.formLink}>
                    <Button variant="contained" onClick={this.props.startAdd} className='button'>Cadastrar</Button>
                </Link>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(FormCreators, dispatch)

export default connect(null, mapDispatchToProps)(withStyles(styles)(SearchBar))