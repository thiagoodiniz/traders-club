import React, {Fragment} from 'react'
import Input from '@material-ui/core/Input'
//import { InputAdornment } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
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

const Form = (props) => {
    const { classes } = props;
    return(
            <Fragment>
                 <form className="form-container">
                 <div className={classes.root}>
                    <Grid container spacing={40}>
                        <Grid item xs={12} >
                            <Input
                                className={classes.inputFullWidth}
                                name="title"
                                placeholder="Título"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Input
                                className={classes.inputHalfWidth}
                                name="model"
                                placeholder="Modelo" 
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                             <Input
                                className={classes.inputHalfWidth}
                                name="year"
                                placeholder="Ano"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Input
                                className={classes.inputFullWidth}
                                name="brand"
                                placeholder="Montadora"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Input
                                className={classes.inputHalfWidth}
                                name="color"
                                placeholder="Cor" 
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Input
                                className={classes.inputHalfWidth}
                                name="price"
                                placeholder="Preço" 
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Input
                                className={classes.inputHalfWidth}
                                name="km"
                                placeholder="KM"
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
                        <Grid item xs={12} sm={1}> 
                            <Button className={classes.saveButton} variant="contained">Salvar</Button>
                        </Grid>
                    </Grid>   
                    </div>                         
                </form>
            
            </Fragment> 
    )
}

export default withStyles(styles)(Form)