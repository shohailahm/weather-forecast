import React from 'react'
import Grid from '@material-ui/core/Grid';
import { NavigateBefore, NavigateNext } from '@material-ui/icons';
export default class ArrBtn extends React.Component{
   render(){
       return(
        <Grid container>
        <Grid item xs={4}>
          {this.props.showLeft?<div onClick={this.props.prev}><NavigateBefore /></div>:null}
        </Grid>
        <Grid item xs={4}>
          
        </Grid>
        <Grid item xs={4}>
          {this.props.showRight?<div onClick={this.props.next}><NavigateNext onClick={()=>this.props.next()}/></div>:null} 
          </Grid>
        </Grid>
       )
   }

}