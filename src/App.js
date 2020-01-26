import React, { useState } from 'react';
import styled from 'styled-components';

const Title = styled.div`
  text-align:center;
  vertical-align: middle;
  font-size:1.4em;
  padding:1em;
  span {
    color:#0084ff;
  }
`;

const Btns = styled.div`
  max-width:75em;
  margin:auto;
  display:grid;
  grid-template-columns: repeat(auto-fit, 15em);
  justify-content: center
`;

const Button = styled.button`
  margin:0.5em;
  padding: 0.75em 1.5em;
  border:none;
  font-weight:550;
  border-radius:0.3em;
  :hover{
    filter:brightness(90%);
  }
  ${props => props.prim
    ? 'background-color: #0084ff;color:white;'
    : 'background-color: #e0e1e2;color:rgba(0,0,0,0.8)'
  }
`;

const choices = {
  "Western": ["East Side Mario's", "Williams", "Harvey's", "Subway", "Mel's Diner"],
  "Middle Eastern": ["Kabob Hut", "Lazeez Shawarma", "Aunty's Kitchen"],
  "Chinese": ["Chen's", "Morals Village", "Mr Panino's", "Baba Grill", "Gol's Noodle", "Foodie Fruitie", "Mr. Yin"],
  "Korean/Japanese": ["Izna Japanese Noodle", "Asakusa", "Sowon", "Nori village"]
}
const types = Object.keys(choices);

const Chooser = ({ children, choices, setChoice }) => (
  <>
    <Title>{children}</Title>
    <Btns>
      {choices.map(c =>
        <Button key={c} onClick={() => setChoice(c)}>{c}</Button>
      )}
      <Button prim onClick={() => setChoice(choices[choices.length * Math.random() << 0])}>
        Random
        </Button>
    </Btns>
  </>
);

function App() {
  const [type, setType] = useState("");
  const [choice, setChoice] = useState("");
  let restaurants = choices[type];
  return (
    <>
      {!type ?
        <Chooser choices={types} setChoice={setType} >Choose a category</Chooser>
        :
        <>
          <Chooser choices={restaurants} setChoice={setChoice} >
            Choose a <span>{type}</span> restaurant
          </Chooser>
          {choice &&
            <Title>
              Your restaurant is <span>{choice}</span> !
              <Button onClick={() => { setType(""); setChoice("") }}>Retry</Button>
            </Title>
          }
        </>
      }
    </>
  );
}

export default App;
