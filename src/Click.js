import React, {useState, useEffect} from 'react';

export default function Click() {
  const [count, setCount] = useState();
  const [num, setNum] = useState([]);
  const handleClick = function() {
    setCount(Math.floor(Math.random() * 11));
  }
  
  const showCount = function(){
    num.push(count); 
  }
  useEffect(showCount, [count]);
  
  return (
    <div>
    <button onClick={handleClick}>Click me</button>
    <p>{num}</p>
    </div>
  );

}