import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    console.log('constructor!')
  }
  state={
    count:0,
  }
  add=() =>{
    this.setState(current=>({
      count: current.count+1
    }));
  };
  minus=() =>{
    this.setState(current=>({
      count: current.count-1
    }));
  };
  componentDidMount(){
    console.log('component did mount!');
  }
  componentDidUpdate(){
    console.log('component did update');
  }
  componentWillUnmount(){
    console.log('component will unmount');
  }
  render(){
    console.log('render!');
    return(
      <div>
        <h1>The number is:{this.state.count}</h1>
        <button onClick={this.add}>Add</button>&nbsp;&nbsp;&nbsp;
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}


export default App;
