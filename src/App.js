import React, { useState } from 'react';
import styled from 'styled-components';

const Title = styled.div`
  text-align:center;
  vertical-align: middle;
  // align-items: center;
  // justify-content: center;
  font-size:1.4em;
  padding:1em;
`;

const Btns = styled.div`
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

function App() {
  const [type, setType] = useState("");
  const [choice, setChoice] = useState("");
  let restaurants = choices[type];

  return (
    <>
      {!type ?
        <>
          <Title>Choose a category</Title>
          <Btns>
            {types.map(c =>
              <Button key={c} onClick={() => setType(c)}>{c}</Button>
            )}
            <Button prim onClick={() => setType(types[types.length * Math.random() << 0])}>
              Random
            </Button>
          </Btns>
        </>
        :
        <>
          <Title>Choose a {type} restaurant</Title>
          <Btns>
            {restaurants.map(c =>
              <Button key={c} onClick={() => setChoice(c)}>
                {c}
              </Button>
            )}
            <Button prim onClick={() => setChoice(restaurants[restaurants.length * Math.random() << 0])}>Random</Button>
          </Btns>
          {choice &&
            <Title>
              <span>Your restaurant is {choice} ! </span>
              <Button onClick={() => { setType(""); setChoice("") }}>Retry</Button>
            </Title>
          }
        </>
      }
    </>
  );
}

export default App;
