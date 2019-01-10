import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
    text: {
      color:"white"
    }    
  });

const Vehicle = (props) => {
    const { classes } = props;
    return(
        <div>
            <ListItem button>
                <ListItemText
                    primary={
                    <Typography component="h1" variant="title" className={classes.text}>
                        {props.title}
                    </Typography>
                    }
                    secondary={
                    <React.Fragment>
                        <Typography component="h1" variant="subheading" className={classes.text}>
                        {`${props.model} • ${props.brand} • ${props.km} KM `}
                        </Typography>
                    </React.Fragment>
                    }
                />
                <ListItemSecondaryAction>
                    <Typography component="h1" variant="title" className={classes.text}>
                        {`R$ ${props.price}`}
                    </Typography>
                    <React.Fragment>
                        <Typography component="h1" variant="subheading"className={classes.text} >
                            {props.year}
                        </Typography>
                    </React.Fragment>
                </ListItemSecondaryAction>         
            </ListItem>
            <Divider />
        </div>
    )
}

export default withStyles(styles)(Vehicle)