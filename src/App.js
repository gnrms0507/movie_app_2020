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
     <Food fav="밥" />
     <Food fav="칭따오" />
     <Food fav="양꼬치" />
     <Food fav="훠궈" />
     <Food fav="마라탕" />
     </div>);
}

export default App;
