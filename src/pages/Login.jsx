import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const styles = {
  loginSection: {
    // width: "250px",
    border: "1px solid #365E32",
    borderRadius: "8px",
    padding: "20px",
    margin: "20px 0",
    marginLeft: "280px",
    width: "500px",
  },
};

export default function Login() {
  return (
    <Container>
      <section style={styles.loginSection}>
        <h2
          style={{
            color: "#365E32",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Faça seu Login aqui!
        </h2>
        <BasicExample />
      </section>
    </Container>
  );
}

function BasicExample() {
  return (
    <Container
      style={{
        color: "#365E32",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form>
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
            fontFamily: "Roboto",
          }}
          type="submit"
        >
          Enviar
        </Button>
      </Form>
    </Container>
  );
}
