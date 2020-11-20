import React from 'react';
import img01 from './images/1.jpg';
import img02 from './images/2.jpg';
import img03 from './images/3.jpg';
import img04 from './images/4.jpg';
import img05 from './images/5.jpg';
import propTypes from 'prop-types';

function Food({name,picture,message0,rating}){
  return (
    <div>
 <h3>I like {name}</h3>
 <h4>{rating}/5.0</h4>
    <img src={picture} alt={message0}/>
    </div>
 
  )
}

const foodLike = [
  {
    id: 1,
    name:'김치',
    image:img01,
    message0: '김치 사진',
    rating:5,
  },
  {
    id: 2,
    name:'만두',
    image:img02,
    message0: '만두 사진',
    rating:3,
  },
  {
    id: 3,
    name:'피자',
    image:img03,
    message0: '피자 사진',
    rating:5,
  },
  {
    id: 4,
    name:'고기',
    image:img04,
    message0: '고기 사진',
    rating:5,
  },
  {
    id: 5,
    name:'칭따오',
    image:img05,
    message0: '칭따오 사진',
    rating:5,
  }
];

function App() {
  //return <div className="App" />;
  return(
   <div>
     {foodLike.map(dish=>(
     <Food key={dish.id} name={dish.name} picture={dish.image} alt={dish.message0} rating={dish.rating} />
     ))}
     </div>
     );
}

Food.propTypes = {
  name:propTypes.string.isRequired,
  picture: propTypes.string.isRequired,
  message0:propTypes.string.isRequired,
  rating:propTypes.number
}


export default App;
