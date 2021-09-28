import React from "react";
import { useDispatch } from "react-redux";
import { Container } from "../../styles/GloblalStyles";
import { Title } from "./styled";


export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
      e.preventDefault();

      dispatch({
        type: 'BOTAO_CLICADO',
    });
  }
  
    return (
    <Container>
        <Title>
            Login
        </Title>
    </Container>
    );
}