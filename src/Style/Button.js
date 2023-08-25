import styled from 'styled-components'

 export const Button = styled.button `
color:white;
padding: 10px 18px;
background-color: black;
border-radius:5px;
min-width: 220px;
border: none;
cursor:pointer;
font-size:16px; 
border: 1px solid transparent;
transition: 0.1s background ease-in;



&:hover{
    color:black;
    background-color: white;
    border: 1px solid black;
    transition: 0.3s background ease-in;
}`;
