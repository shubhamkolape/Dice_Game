import styled from 'styled-components'
import { Button } from '../Style/Button'
import React, {useState} from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RollDice from './RollDice'
import Rules from './Rules'




export default function GamePlay() {


  const [score, Setscore] = useState(0);
  const [selectednumber, setselectednumber] =useState();
  const [currentdice, setcurrentdice] = useState(1);
  const [error, seterror] = useState();
  const [showrules, setshowrules] = useState(false)


  
  const generateRandomNumber = (min , max) => {
    return Math.floor(Math.random() * (max - min) + min);
};




const roleDice = () =>{
  if(!selectednumber){
    seterror("You have not selected any number") ;
    return;
  }

  
    const radomNumber = generateRandomNumber(1,7);
    
    setcurrentdice((prev)=> radomNumber );


    if (selectednumber === radomNumber){
      Setscore((prev)=> prev + radomNumber);
    }
    else{
      Setscore((prev)=> prev - 2 );
    }
    setselectednumber(undefined);
    
  };


  const Reset = () =>{
    Setscore(0)
  }

  return (
    <MainContainer>
      <div className='top_section'>
        <TotalScore score={score}/>
         <NumberSelector  error={error} seterror={seterror}  selectednumber={selectednumber} setselectednumber={setselectednumber} />
      </div>
    <RollDice currentdice={currentdice}  roleDice={roleDice}/>
    <div className='buttons'>
      <Button onClick={Reset}>Reset Score</Button>
      <Button onClick={()=> setshowrules((prev)=> !prev)}>{showrules ? "Hide" : "Show"} Rules</Button>
    </div>
    {showrules && <Rules/>}
    </MainContainer>
   
  )
}

const MainContainer = styled.div `

padding-top:70px;
 .top_section{
  display:flex;
  justify-content : space-around;
  align-items: end;
 }
 .buttons {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;

