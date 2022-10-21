import styled from 'styled-components';
import bgLoginPage from '../../assets/bgLoginPage.jpg'

export const Wrapper= styled.div`
background-image: url(${bgLoginPage});
backdrop-filter:saturate(120%);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
`
export const FormWrapper= styled.div`
background-color:#ffffffd1;
border-radius: 5px;
padding: 30px;
display: flex;
justify-content: center;
align-items: center;
backdrop-filter: blur(2px); 
`
export const Title= styled.h1`
width: 250px;
text-align: left;
font-size: 30px;
`

