import React from 'react';
import RadioBtn from '../components/radioBtn';
import Cards from '../components/card';
import ArrBtn from '../components/ArrBtn';
import {connect} from 'react-redux';
import { userActions } from '../store/actions/dataActions';
import Loader from '../components/Loader';
import './home.css';
import { indigo } from '@material-ui/core/colors';
import MyBarChart from '../components/Chart';

 class Home extends React.Component{
    constructor(props){
     super(props);
     this.state={
         units:"imperial",
         loading:true,
         imperials:[],
         metrics:[],
         farArr:[],
         celArr:[],
         index:0
     }
    }

    //getting Data from Api and stroring in Redux
    componentDidMount(){
       this.props.dispatch(userActions.getTemp(this.state.units));   
    }
      
//inital seting up of cards
    showCards=()=>{
        if(this.state.units==="metric"){
            if(!this.props.metrics)return;
             let celArr=this.getArr(this.props.metrics);
             let graphCel=this.getGraphData(this.props.metrics);
            this.setState({show:false,celArr,index:2,prevInd:-1,cardLoading:false,showRight:true,GraphData:graphCel});
        }else{
            let farArr=this.getArr(this.props.imperials);
            let graphFar=this.getGraphData(this.props.imperials);
           this.setState({show:false,farArr,index:2,prevInd:-1,cardLoading:false,showRight:true,GraphData:graphFar});
     }
    }

    //onfrontArrowClick
    onNext=()=>{
        this.setState({index:this.state.index+3,prevInd:this.state.index},()=>{
            if(this.state.index>=this.state.imperials.length){
                this.setState({index:this.state.imperials.length-1,showRight:false})
            }
            if(this.state.index>3){
                this.setState({showLeft:true});
            }
        });
    }

    //onbackArrowClick
    onPrev=()=>{
        this.setState({index:this.state.prevInd,prevInd:this.state.prevInd-3},()=>{
            if(this.state.index<=2){
                this.setState({index:2,showLeft:false})
            }
            if(this.state.index<=this.state.imperials.length-3){
                this.setState({showRight:true});
            }
        });
     
    }


    //radioButton Changed
    tempChanged=(item)=>{
        this.setState({units:item,cardLoading:true,index:0},()=>{
            if(!this.props.metrics||!this.props.imperials){
             return   this.props.dispatch(userActions.getTemp(this.state.units)); 
            }
            this.showCards();
        })
    }
     
    static getDerivedStateFromProps(props, state) {
      if(props.imperials!==state.imperials){
          return {imperials:props.imperials,loading:false,show:true}
      }
      if(props.metrics!==state.metrics){
          return {metrics:props.metrics,loading:false,show:true}
      }
      return null;
    }

    componentDidUpdate(nextProps){
     if(this.state.show && this.state.index===0){
         this.showCards();
     }
    }

     //removing excess items from the array
    getArr=(arr)=>{
        let newArr=arr.map((i,ind)=>{
            let neDay=new Date();
            let day=neDay.getUTCDate()+ind;
            let mon=neDay.getUTCMonth()+1;
            let yr=neDay.getUTCFullYear();
            let dataDate=day+'/'+mon+'/'+yr;
            return {temp:i.temp.max,date:dataDate,humidity:i.humidity}    
     })
     return newArr;
    }

    //converting obj to {x:1,y:1} for graph
    getGraphData=(arr)=>{
        let newArr=arr.map((i,ind)=>{
            let neDay=new Date();
            let day=neDay.getUTCDate()+ind;
            return {x:day,y:i.temp.max}    
     })

     return newArr;
    }


    render(){
        if(this.state.loading){
            return (
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',minHeight:'100vh'}}>
                    <Loader/>
                </div>
            )
        }
        return(
            <div className="main">
                <div>
                   <RadioBtn radioChanged={this.tempChanged}/>
                </div>
                <div style={{marginVertical:32}}>
                    <ArrBtn showLeft={this.state.showLeft} prev={this.onPrev} next={this.onNext} showRight={this.state.showRight}/>
                </div>
                  {!this.state.cardLoading?this.state.units==="imperial"?<div className="card">{this.state.farArr.map((data,ind)=>(ind<=this.state.index  && ind>this.state.prevInd && <Cards type="F" data={data}/>))}  
                </div>
                :
                <div className="card">{this.state.celArr.map((data,ind)=>(ind<=this.state.index  && ind>this.state.prevInd && <Cards type="C" data={data}/>))}    
                </div>:null}
                <div style={{display:'flex',alignItems:'center',marginTop:20,justifyContent:'center'}}>
                  {this.state.GraphData &&  <MyBarChart data={this.state.GraphData}/> }
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        metrics:state.data.metrics,
        imperials:state.data.imperials   
    }
}

export default connect(mapStateToProps)(Home);