import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import Vehicle from './Vehicle'

const styles = () => ({
  root: {
    flexGrow: 1,
    width: '1000px',
    marginLeft: '30px',
    marginTop: '30px'
  }
});

const ListVehicles = (props) => {
  const { classes } = props;
    return(
        <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
          { props.list.map((vehicle) => {
            return(
              <List component="nav" className={classes.root}>
                <Vehicle 
                  title={vehicle.title}
                  model={vehicle.model}
                  year={vehicle.year}
                  brand={vehicle.brand}
                  price={vehicle.price}
                  km={vehicle.km}
                />
              </List>
            )
          })
          }
          </Grid>
        </Grid>
      </div>
    )
}

export default withStyles(styles)(ListVehicles)