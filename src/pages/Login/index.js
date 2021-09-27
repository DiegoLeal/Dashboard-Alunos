import React from "react";
import { Container } from "../../styles/GloblalStyles";
import { Title } from "./styled";
//import axios from "../../services/axios";

export default function Login() {
   /* React.useEffect(() => {
        async function getData() {
            const response = await axios.get('/alunos');
            const { data } = response;
        }

        getData();
    }, []);*/
    return (
    <Container>
        <Title>
            Login
        </Title>
    </Container>
    );
}