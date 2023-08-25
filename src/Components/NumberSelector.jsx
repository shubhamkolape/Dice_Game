import React from 'react'
import styled from 'styled-components'

export default function NumberSelector({error, seterror,  selectednumber, setselectednumber}) {

    const numbers = [1,2,3,4,5,6];


    
   const NumberSelectorhandler =  (value) =>{
    setselectednumber(value)
    seterror("")
   };

  return (

    <NumberSelectorContainer>
    <p className='error'>{error}</p>
        <div className='flex'>
        {numbers.map((value, i)=>(
            <Box
             IsSelected ={value === selectednumber}
              onClick ={()=> NumberSelectorhandler(value)}
            key={i}>{value}</Box>
         ))}
         </div> 
         <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

const NumberSelectorContainer = styled.div `


display: flex;
flex-direction: column;
align-items: end;
gap:24px;
.flex{
    display:flex;
    gap: 24px;
}
p{
    font-size:24px;
    font-weight: 700;
}

.error{
  color:red;  
}
`;

const Box = styled.div `
    height: 72px;
    width: 72px; 
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-weight:700;
    font-size: 24px;
    cursor: pointer;   
    background-color: ${(props )=> props.IsSelected  ? "black" : "white"   };
    color: ${(props )=> !props.IsSelected  ? "black" : "white"   };
`; 

