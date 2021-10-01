import React, { useState, useContext } from "react";
import axios from "axios";
import { get } from "lodash";
import { toast } from "react-toastify";
import { isEmail } from 'validator';

import { Container } from "../../styles/GlobalStyles";
import { Form } from "./styled";
//import axios from '../../services/axios';
import history from '../../services/history';
import Loading from '../../components/Loading';
import { useSelector } from "react-redux";

export default function Register() {
  const id = useSelector(state => state.auth.user.id);
  const nomeStored = useSelector(state => state.auth.user.nome);
  const emailStored = useSelector(state => state.auth.email);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  React.useEffect(() => {
    if(!id) return;

    setNome(nomeStored);
    setEmail(emailStored);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    let formErros = false;

    if (nome.length < 3 || nome.length > 255) {
      formErros = true;
      toast.error('Nome deve ter entre 3 e 255 caracteres')
    }

    if (!isEmail(email)) {
      formErros = true;
      toast.error('E-mail inválido');
    }

    if (password.length < 6 || password.length > 50) {
      formErros = true;
      toast.error('Senha deve ter entre 6 e 50 caracteres');
    }    

    if (formErros) return;

    setIsLoading(true);

    try {
      await axios.post('/users', {
        nome,
        password,
        email,
      });
      toast.success('Cadastro efetuado com sucesso');
      setIsLoading(false);
      history.push('/login');
    } catch (err) {      
      const erros = get(err, 'response.data.erros', []);

      erros.map(error => toast.error(error));
      setIsLoading(false);
    } 
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Register</h1>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome"
          />
        </label>

        <label htmlFor="email">
          E-mail:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu e-mail"
          />
        </label>

        <label htmlFor="password">
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Sua senha"
          />
        </label>

        <button type="submit">Criar Conta</button>
      </Form>
    </Container>
  );
}
