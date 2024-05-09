// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
import Card from './Components/Cards'
const App = () => {
  // const[count, useCount] = useState(0);
  const myObj = {
    userName : 'Aadarsh Kumar',
    email : 'aadarshKumar@gmail.com',
    Age : 20
  }
  return (
    <>
    <div>
      <Card userName='Code with Aadarsh' someObj = {myObj}/>
    </div>

    </>
  )
}

// const h1_Virtual = <h2>This is the h1 of Virtual Dom</h2>
// console.log(h1_Virtual)
// const h1_Real = document.createElement('h1');
// h1_Real.innerText = 'This is the h1 of Real dom';
// console.log(h1_Real) 

export default App
