import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <Container
      style={{
        color: "#81A263",
        textAlign: "center",
        paddingBottom: 10,
        fontSize: 18,
        height: 79,
      }}
    >
      <p
        style={{
          paddingTop: "30px",
        }}
      >
        ©️ 2024 - Carolaine dos Santos
      </p>
    </Container>
  );
}
