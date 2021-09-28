import React from "react";
import { useDispatch } from "react-redux";
import * as actionsClicaBotao from "../../store/modules/actions";
import { Container } from "../../styles/GloblalStyles";
import { Title } from "./styled";


export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
      e.preventDefault();

      dispatch(actionsClicaBotao.clicaBotao());
  }
  
    return (
    <Container>
        <Title>
            Login
        </Title>
        <button type="button" onclick={handleClick}>
          enviar
        </button>  
    </Container>
    );
}