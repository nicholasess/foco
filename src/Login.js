import React, { Component } from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 400px;
  height: 100vh;
  margin: 0 auto;
  font-family: "Lato", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 28px;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 5px;
  font-size: 14px;
  margin-top: ${({ last }) => (last ? "10px;" : "0")};
  border-radius: 5px;
  border: 1px solid #000;
  color: #000;
`;

const Button = styled.div`
  width: 300px;
  height: 40px;
  text-align: center;
  background-color: #0984e3;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  border-radius: 5px;
  border-radius: 30px;
  cursor: pointer;
`;

const Message = styled.p`
  font-size: 14px;
  color: #d63031;
  width: 100%;
  height: 10px;
`;

export default class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = () => {
    let { email, password } = this.state;

    if (email === "admin@admin" && Number(password) === 12345) {
      localStorage.setItem("token", "dha98hd8qq89h2981h89h298hd89");
      this.props.handleLogin();
    } else {
      this.setState({ message: "Usuário ou senha está errado!" });
    }
  };

  render() {
    return (
      <Container>
        <Title>Bem vindo ao Foco</Title>
        <Input
          type="text"
          value={this.state.email}
          onChange={e => this.setState({ email: e.target.value })}
          placeholder="Digite o email"
        />
        <Input
          type="password"
          value={this.state.password}
          onChange={e => this.setState({ password: e.target.value })}
          last={true}
          placeholder="Digite a senha"
        />
        <Message>{this.state.message}</Message>
        <Button onClick={this.handleSubmit}>Entrar</Button>
      </Container>
    );
  }
}
