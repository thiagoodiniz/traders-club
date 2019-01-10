import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '1000px',
    marginLeft: '30px',
    marginTop: '30px'
  },
  primaryText: {
    color:"white"
  },
  secondaryText: {
    color:"white"
  }
});

const ListVehicles = (props) => {
  const { classes } = props;
    return(
        <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
          { [1,2,3,4].map((n) => {
            return(
              <List component="nav" className={classes.root}>
                  <ListItem button>
                    <ListItemText
                        primary={
                          <Typography component="h1" variant="title" className={classes.primaryText}>
                              {`teste ${n}`}
                          </Typography>
                        }
                        secondary={
                          <React.Fragment>
                            <Typography component="h1" variant="subheading" className={classes.secondaryText}>
                              to Scott, Alex, Jennifer
                            </Typography>
                          </React.Fragment>
                        }
                      />
                    <ListItemSecondaryAction>
                          <Typography component="h1" variant="title" className={classes.primaryText}>
                              {`teste ${n}`}
                          </Typography>
                          <React.Fragment>
                            <Typography component="h1" variant="subheading"className={classes.secondaryText} >
                              to Scott, Alex, Jennifer
                            </Typography>
                          </React.Fragment>
                    </ListItemSecondaryAction>         
                  </ListItem>
                  <Divider />
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