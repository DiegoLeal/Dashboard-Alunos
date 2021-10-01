import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { isEmail } from 'validator';
import { Container } from '../../styles/GlobalStyles';
import *as actions from '../../store/modules/auth/actions';
import { Form } from './styled';
import { get } from "lodash";

export default function Login(props) {
  const dispatch = useDispatch();

  const prevPath = get(props, 'location.state.prevPath', '/');
  
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();
    let formErros = false;    

    if (!isEmail(email)) {
      formErros = true;
      toast.error('E-mail inválido');
    }

    if (password.length < 6 || password.length > 50) {
      formErros = true;
      toast.error('Senha inválida');
    }    

    if (formErros) return;  
    
    dispatch(actions.loginRequest({ email, password, prevPath }));
  };

  return (
    <Container>
      <h1>Login</h1>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}          
          onChange={ e => setEmail(e.target.value)}
          placeholder="E-mail"
        />
        <input
          type="password"
          value={password}          
          onChange={ e => setPassword(e.target.value)}
          placeholder="Senha"
        />
        <button type="submit">Acessar</button>
      </Form>
    </Container>
  );
}
