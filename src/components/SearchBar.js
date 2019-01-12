import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as FormActions } from '../store/actions/form'
import { Creators as ListActions } from '../store/actions/list'

const styles = {
    root: {
     
    },
    input: {
      color: "#f5f5f5",
      width: "800px"
    }
  };

class SearchBar extends Component{

    state = {
        filterText: ''
    }

    handleClick = () => {
        this.props.startAdd()
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
        this.props.filterVehicles(event.target.value)
    }

    render(){
        const { classes } = this.props;
        return(
            <div className="search-bar">
                <TextField
                    id="outlined-bare"
                    className={classes.root}
                    name="filterText"
                    value={this.state.filterText}
                    onChange={this.handleChange}
                    placeholder="Pesquise por um veículo"
                    margin="normal"
                    variant="outlined"
                    InputProps={{
                        className: classes.input
                    }}
                />
                <Link to={this.props.formLink}>
                    <Button variant="contained" onClick={this.handleClick} className='button'>Cadastrar</Button>
                </Link>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({...FormActions, ...ListActions}, dispatch)

export default connect(null, mapDispatchToProps)(withStyles(styles)(SearchBar))