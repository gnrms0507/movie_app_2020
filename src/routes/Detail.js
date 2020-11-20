import React from 'react';

class Detail extends React.Component{
    componentDidMount(){
        const {location,history} = this.props;
        if(location.state === undefined){
            history.push('/');
        }
    }
    render(){
        const {location}=this.props;
        if(location.state){
            return( 
                <div>
                    <h1>{location.state.title}</h1>
            <img src={location.state.poster} alt={location.state.title} title={location.state.title} height="500" width="500"/> 
               <h4> {location.state.year}movie</h4>
           <h3> {location.state.summary.slice(0, 100)}</h3>
           <h3> {location.state.summary.slice(100, 300)}</h3>
           <h3> {location.state.summary.slice(300, 500)}</h3>
           <h2>{location.state.rank}/5.0</h2>

            </div>


            );
        }else{
            return null;



            
        }
       
    }
}


export default Detail;