import React, { Component } from 'react'
import Input from '@material-ui/core/Input'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as ListActions } from '../store/actions/list'
import { Creators as FormActions } from '../store/actions/form'

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
        km: '',
        showErrors: false
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = () => {
        const {title, model, year, brand, color, price, km} = this.state
        if(!title || !model || !year || !brand || !color || !price || !km){
            this.setState({showErrors: true})
        }else{
            this.props.addVehicle({title, model, year, brand, color, price, km})
            this.clearForm();
        }
    }
    
    componentDidMount(){
        if(this.props.actionForm === 'update'){
            const {title, model, year, brand, color, price, km} = this.props.form.vehicleToUpdate;
            console.log(color)
            this.setState({
                title, 
                model, 
                year, 
                brand, 
                color, 
                price, 
                km,
                showErrors: false
            })
        }
    }

    clearForm(){
        this.setState({
            title: '',
            model: '',
            year: '',
            brand: '',
            color: '',
            price: '',
            km: '',
            showErrors: false
        })
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
                                    error={!this.state.title && this.state.showErrors}
                                    
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Input
                                    className={classes.inputHalfWidth}
                                    name="model"
                                    placeholder="Modelo" 
                                    value={this.state.model}
                                    onChange={this.handleChange}
                                    error={!this.state.model && this.state.showErrors}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                 <Input
                                    className={classes.inputHalfWidth}
                                    name="year"
                                    placeholder="Ano"
                                    value={this.state.year}
                                    onChange={this.handleChange}
                                    error={!this.state.year && this.state.showErrors}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Select
                                    className={classes.inputFullWidth}
                                    name="brand"
                                    placeholder="Montadora"
                                    value={this.state.brand}
                                    onChange={this.handleChange}
                                    error={!this.state.brand && this.state.showErrors}
                                >
                                    <MenuItem value="">
                                        <em>Escolha a montadora...</em>
                                    </MenuItem>
                                    {this.props.brands.map(brand => (
                                        <MenuItem key={brand.id} value={brand.name} >
                                            {brand.name}
                                        </MenuItem>
                                    ))}                                

                                </Select>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Input
                                    className={classes.inputHalfWidth}
                                    name="color"
                                    placeholder="Cor" 
                                    value={this.state.color}
                                    onChange={this.handleChange}
                                    error={!this.state.color && this.state.showErrors}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Input
                                    className={classes.inputHalfWidth}
                                    name="price"
                                    placeholder="Preço" 
                                    value={this.state.price}
                                    onChange={this.handleChange}
                                    error={!this.state.price && this.state.showErrors}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Input
                                    className={classes.inputHalfWidth}
                                    name="km"
                                    placeholder="KM"
                                    value={this.state.km}
                                    onChange={this.handleChange}
                                    error={!this.state.km && this.state.showErrors}
                                />
                            </Grid>
                        </Grid>
    
                        <Grid container spacing={24}>
                            <Grid item xs={12} sm={2} > 
                            {this.props.actionForm === 'update' &&(
                                 <div>
                                    <Button className={classes.editButton} variant="contained">Remover</Button>
                                 </div>
                            )}
                            </Grid>
                            <Grid item xs={12} sm={8} > 
                                {this.props.actionForm === 'update' &&(
                                    <div>
                                        <Button className={classes.editButton} variant="contained">Cancelar</Button>
                                    </div>
                                )}
                            </Grid>
                            <Grid item xs={12} sm={1} > 
                                <Button className={classes.saveButton} onClick={this.handleSubmit} variant="contained">Salvar</Button>
                            </Grid>
                        </Grid>   
                        </div>                         
            </form>
        )     
    }
   
}

const mapDispatchToProps = (dispatch) => bindActionCreators( {...FormActions, ...ListActions} , dispatch)

const mapStateToProps = state => ({
    brands: state.form.brands,
    actionForm: state.form.action,
    form: state.form
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Form))


