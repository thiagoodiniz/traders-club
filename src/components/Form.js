import React, { Component } from 'react'
import Input from '@material-ui/core/Input'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';

const styles = () => ({
    root: {
      flexGrow: 1,
      padding: 20,
      width: '800px',
      marginTop: '100px',
      marginLeft: '100px'
    },
    inputFullWidth: {
        width: '100%',
        color: '#f5f5f5'
    },
    inputHalfWidth: {
        width: '100%',
        color: '#f5f5f5'
    },
    editButton: {
        backgroundColor: 'transparent', 
        color:"white",
        height: '50px'
    },
    saveButton: {
        height: '50px',
        width: '110px'
    }
  });

class Form extends Component{

    state = {
        title: '',
        model: '',
        year: '',
        brand: '',
        color: '',
        price: '',
        km: ''
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render(){
        const { classes } = this.props;
        return(
                <form className="form-container">
                     <div className={classes.root}>
                        <Grid container spacing={40}>
                            <Grid item xs={12} >
                                <Input
                                    className={classes.inputFullWidth}
                                    name="title"
                                    placeholder="Título"
                                    value={this.state.title}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Input
                                    className={classes.inputHalfWidth}
                                    name="model"
                                    placeholder="Modelo" 
                                    value={this.state.model}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                 <Input
                                    className={classes.inputHalfWidth}
                                    name="year"
                                    placeholder="Ano"
                                    value={this.state.year}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Input
                                    className={classes.inputFullWidth}
                                    name="brand"
                                    placeholder="Montadora"
                                    value={this.state.brand}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Input
                                    className={classes.inputHalfWidth}
                                    name="color"
                                    placeholder="Cor" 
                                    value={this.state.color}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Input
                                    className={classes.inputHalfWidth}
                                    name="price"
                                    placeholder="Preço" 
                                    value={this.state.price}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Input
                                    className={classes.inputHalfWidth}
                                    name="km"
                                    placeholder="KM"
                                    value={this.state.km}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                        </Grid>
    
                        <Grid container spacing={24}>
                            <Grid item xs={12} sm={2} > 
                                <Button className={classes.editButton} variant="contained">Remover</Button>
                            </Grid>
                            <Grid item xs={12} sm={8} > 
                                <Button className={classes.editButton} variant="contained">Cancelar</Button>
                            </Grid>
                            <Grid item xs={12} sm={1} > 
                                <Button className={classes.saveButton} variant="contained">Salvar</Button>
                            </Grid>
                        </Grid>   
                        </div>                         
            </form>
        )     
    }
   
}

export default withStyles(styles)(Form)