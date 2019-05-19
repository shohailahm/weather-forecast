import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  progress: {
    margin: 10 * 2,
  },
});

function Loader(props) {
  const { classes } = props;
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <CircularProgress className={classes.progress} />
    
    </div>
  );
}



export default withStyles(styles)(Loader);