import React from 'react';
import styled from 'styled-components';

export default function RollDice({currentdice, roleDice}) {
 return (
    <DiceContainer>
        <div className='dice' onClick={roleDice}   >
            <img  src={`/Images/Dice/dice_${currentdice}.png`}  alt='dice1_1' />
        </div>
        <p>Click to Dice Roll</p>
    </DiceContainer>
  )
}


const DiceContainer = styled.div `

    display: flex;
    align-items: center;
    margin-top:48px;
    flex-direction: column;

    p{
        font-size:24px;
    }

    .dice{

        cursor: pointer;

    }

`;

