import React from 'react';

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  LabelSeries
} from 'react-vis';

const greenData = [
  {x: 'A', y: 10},
  {x: 'B', y: 5},
  {x: 'C', y: 15}
];

const blueData = [
  {x: 'A', y: 12},
  {x: 'B', y: 2},
  {x: 'C', y: 11}
];

// const labelData = greenData.map((d, idx) => ({
//   x: d.x,
//   y: Math.max(greenData[idx].y, blueData[idx].y)
// }));

class MyBarChart extends React.Component {
    constructor(props){
        super(props);
        debugger
    }
  state = {
    useCanvas: false
  }
  componentDidMount(){
      debugger
  }
   
  labelData =()=>{
      return this.props.data.map((d, idx) => ({
    x: d.x,
    y: d.y
  }));
}


  render() {
    const {useCanvas} = this.state;
    const content = useCanvas ? 'TOGGLE TO SVG' : 'TOGGLE TO CANVAS';
    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
    return (
      <div>
        <XYPlot
          xType="ordinal"
          width={600}
          height={300}
          xDistance={200}
          >
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <BarSeries
            className="vertical-bar-series-example"
            data={this.props.data}/>
          
          <LabelSeries data={this.props.data} />
          
        </XYPlot>
      </div>
    );
  }
}

export default MyBarChart;