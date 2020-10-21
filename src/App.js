import React from 'react';
import axios from 'axios';

class App extends React.Component{
  state={
    isLoading:true,
    movie:[],
  };
  getMovies=async()=>{
    const{
      data: {
        data:{movies},
      },
    }= await axios.get('http://yts-proxy.now.sh/api/v2/list_movies.json');
    this.setState({movies,isLoading:flase});
  };
  componentDidMount(){
    //영화 데이터 로딩
   this.getMovies();
  }
  render(){
    const {isLoading} = this.state;
    return(
      <div>
        {isLoading ? 'Loading...': 'We are ready'}

      </div>
      
    );
  }
}


export default App;
