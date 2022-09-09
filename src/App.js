import React, { useState } from "react";
import Styled from "styled-components";

export const Title = Styled.h1`
  color:white;
  font-size:2rem;
  font-family: "Bebas Neue", cursive;
  text-align:center;
  `;

export const Div = Styled.div`
  background-color: #E88D67;
  width:100%;
  height:40em;
  font-family: "Bebas Neue", cursive;
`;

export const Input = Styled.input`
  border:none;
  font-family: "Bebas Neue", cursive;
  margin-left:20px;
`;

export const Button = Styled.button`
  border:none;
  color: white;
  background-color:#000814;
  font-family: "Bebas Neue", cursive;
  margin-left:10px;
  position:relative;
`;

export default function App() {
  const [input, setInput] = useState();
  const [lista, setLista] = useState([]);

  const Add = () => {
    if (input !== "") {
      const inputBox = {
        value: input !== "" && input,
        status: false,
        id: Date.now()
      };

      setLista((prevState) => [...prevState, inputBox]);
      setInput("");
    }
  };

  const Remove = (id) => {
    const filteredList = lista.filter((item) => item.id !== id);
    setLista(filteredList);
  };

  const RemoveAll = (id) => {
    const filteredList = lista.filter((item) => item.id === "");
    setLista(filteredList);
  };

  return (
    <Div>
      <Title>To Do</Title>
      <form onSubmit={(e) => e.preventDefault()}>
        <Input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            Add();
          }}
        >
          Add
        </Button>

        <Button
          onClick={() => {
            RemoveAll();
          }}
        >
          Remove All
        </Button>
      </form>
      <ul>
        {lista.map((item) => (
          <li>
            {item.value}
            <Button
              onClick={() => {
                Remove(item.id);
              }}
            >
              Remover
            </Button>
          </li>
        ))}
      </ul>
    </Div>
  );
}
