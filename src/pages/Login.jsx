import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {
  LoginContainer,
  LoginContent,
  LoginTitle,
  LoginForm,
} from "../styles.js";

export default function Login() {
  return (
    <LoginContainer>
      <LoginContent>
        <LoginTitle>Faça seu Login aqui!</LoginTitle>
        <LoginForm>
          <Form className="w-100">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nome:</Form.Label>
              <Form.Control type="nome" placeholder="Nome completo" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" placeholder="Digite seu email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Senha:</Form.Label>
              <Form.Control type="password" placeholder="Digite sua senha" />
              <Form.Text className="text-muted">
                Não compartilhe sua senha com ninguém!
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Lembrar minha senha" />
            </Form.Group>
            <Button
              style={{
                backgroundColor: "#365E32",
                borderColor: "#365E32",
                color: "#FFE6E6",
                fontWeight: "bold",
              }}
              type="submit"
            >
              Enviar
            </Button>
          </Form>
        </LoginForm>
      </LoginContent>
    </LoginContainer>
  );
}
