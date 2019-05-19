import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
    root: {
      display: 'flex',
      paddingTop:  20,
      justifyContent:'space-around'
    },
    mg10:{
        marginTop:10
    }
  });

 class RadioBtn extends React.Component{
    constructor(props){
        super(props);
         this.state={
             value:"imperial"
         }   
    }
    componentDidMount(){
      console.log(this.state.value);
    }
    handleChange = event => {
      if(event.target.value!==this.state.value){
        this.setState({ value: event.target.value },()=>{
          this.props.radioChanged(this.state.value)
          console.log(this.state.value);
        });
      }
     
      };
    
      render() {
        const { classes } = this.props;
        return (
            
          <FormControl component="fieldset" className={classes.root} >
            <FormLabel component="legend" className={classes.mg10}></FormLabel>
            <RadioGroup
              aria-label="position"
              name="position"
              value={this.state.value}
              onChange={this.handleChange}
              row
              className={classes.root} 
            >
              <FormControlLabel
                value="imperial"
                control={<Radio   checked={this.state.value === 'imperial'} color="primary" />}
                label="Fahrenhiet"
                labelPlacement="end"
              />
              <FormControlLabel
                value="metric"
                control={<Radio checked={this.state.value === 'metric'} color="primary" />}
                label="Celcius"
                labelPlacement="end"
              />
            </RadioGroup>
          </FormControl>
        );
      }

}

export default withStyles(styles)(RadioBtn)