import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import Vehicle from './Vehicle'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as FormActions } from '../store/actions/form'
import {Link} from 'react-router-dom';

const styles = () => ({
  root: {
    flexGrow: 1,
    width: '1000px',
    marginLeft: '50px',
    marginTop: '30px'
  }
});

class ListVehicles extends Component{

  handleClick = (id, title, model, color, year, brand, price, km) =>{
    this.props.startUpdate({id, title, model, color, year, brand, price, km});
  }  

  render(){
    const { classes } = this.props;
    return(
        <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
          { this.props.list && this.props.list.map((vehicle) => {
            return(
              <Link to='form' style={{ textDecoration: 'none' }}>
                  <List component="nav" onClick={() => this.handleClick(vehicle.id,vehicle.title,vehicle.model,vehicle.color,vehicle.year,vehicle.brand,vehicle.price,vehicle.km)} className={classes.root}>
                      <Vehicle 
                        id={vehicle.id}
                        title={vehicle.title}
                        model={vehicle.model}
                        year={vehicle.year}
                        brand={vehicle.brand}
                        price={vehicle.price}
                        km={vehicle.km}
                      />
                  </List>
              </Link>
            )
          })
          }
          </Grid>
        </Grid>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(FormActions, dispatch)

export default connect(null, mapDispatchToProps)(withStyles(styles)(ListVehicles))