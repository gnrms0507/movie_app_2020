import React from 'react';

function Food({fav}){
  return (
  <h3>I like {fav}</h3>
  )
}




function App() {
  //return <div className="App" />;
  return(
   <div>
     <h1>Hello</h1>
     <Food fav="kimch" />
     </div>);
}

export default App;
