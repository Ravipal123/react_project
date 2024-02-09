import React, { useContext } from 'react'
import Component5 from './Component5';
import { FirstName, LastName } from '../App';

const Component4 = () => {
  const fname = useContext(FirstName)
  const lname = useContext(LastName)
  
    return (
        <>
          <h1>My name is {fname} {lname}</h1>
          <Component5 />
        </>
    );
}

export default Component4
