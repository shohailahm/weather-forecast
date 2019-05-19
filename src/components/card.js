import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function Cards(props) {
  const { classes,data } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Temprature of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          {data && data.temp}{props.type==="C"?<span>&deg;C</span>:<span>&deg;F</span>}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Humidity
        </Typography>
        <Typography component="p">
          {data && data.humidity}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Date
        </Typography>
        <Typography component="p">
          {data && data.date}
        </Typography>
      </CardContent>
    </Card>
  );
}


export default withStyles(styles)(Cards)