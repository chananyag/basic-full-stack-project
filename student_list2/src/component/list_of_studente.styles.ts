import styled from "styled-components";


export const HomePage = styled.div`
  
  height: 100vh;
  width: 100%;
  font-size: 2rem;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #fffff0 0%, #f9cfff 25%, #9fc6f8 50%, #99c7ff 75%, #fff4ff 100%);
  & div {
    width: 80%;
  }
  `;

export const ButtonsContainer = styled.div`

  button {
    margin-top:5%;
    margin-left:45%;
    font-size: 1rem; /* Increase the font size to make the button larger */
    padding: 10px 20px; /* Add padding to adjust the button size */
    background-color:blueviolet;
    color: whitesmoke;
    cursor: pointer;
    border: 3px solid blue;
    border-radius: 20px;
    &:hover {
    background-color: #ff26b3;
    } 
  }
`;

  export const StudenetTopic = styled.div`
    height: 33px;
    margin-top:5%;
    margin-left:20%;
    background-color: #0056b7;
    font-size: large;
    color: black;
    display:flex;
    border-radius: 10px;
    
    
  `;

export const StudenetTopic1 = styled.div`

  margin-top:10%;
  margin-left:0%;
  font-size: large;
  color: black;
  display:flex;

`;


export const ButtonsContainer1 = styled.div`

  button {
    margin-top:5%;
    font-size: 1rem; /* Increase the font size to make the button larger */
    padding: 10px 20px; /* Add padding to adjust the button size */
    background-color:blueviolet;
    color: whitesmoke;
    cursor: pointer;
    border: 3px solid blue;
    border-radius: 20px;
    &:hover {
    background-color: #ff26b3;
    } 
  }
 
`;
export const ButtonsContainerclose = styled.div`

  button {
    margin-top:0px;
    font-size: 1rem; /* Increase the font size to make the button larger */
    padding: 10px 20px; /* Add padding to adjust the button size */
    background-color:blueviolet;
    color: whitesmoke;
    cursor: pointer;
    border: 3px solid blue;
    border-radius: 20px;
    &:hover {
    background-color: #0056b3;
    } 
  }
 
`;

export const Input = styled.div`

  margin-top:10%;
  font-size: large;
  color: black;
  display:flex;
  flex-direction:column;
`;

export const StudenetLIst = styled.div`

  height: 33px;
  width:100%;
  margin-top:1%;
  margin-left:20%;
  font-size: large;
  color: black;
  display:flex;
  background-color:#9996b7;
  border-radius: 10px;
  text-align:center;
  
`;




