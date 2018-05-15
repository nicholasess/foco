import React from "react";
import styled from "styled-components";
import typeEvents from "../helpers/typeEvents";
import DB from "../helpers/db";
const Container = styled.div`
  width: 960px;
  margin: 0 auto;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const Content = styled.div`
  width: 100%;
`;

const Navbar = styled.div`
  width: calc(100% - 20px);
  height: 50px;
  background-color: #6c5ce7;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  span {
    cursor: pointer;
  }
`;

const Title = styled.h1`
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const HistoryContainer = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 20px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
`;

const HistoryUser = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const HistoryHour = styled.span`
  font-size: 14px;
  color: #b0b0b0;
`;

const ContainerPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom: 50px;
`;

const Panel = styled.div`
  width: 250px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: ${({ background }) =>
    background ? background : "#0984e3"};
  border-radius: 5px;
  margin-top: 10px;
  span {
    font-size: 18px;
    color: #fff;
    font-weight: 100;
    margin-top: 10px;
  }
  i {
    font-size: 28px;
    color: #fff;
  }
`;

export default class Dashboard extends React.Component {
  state = {
    histories: []
  };

  componentDidMount() {
    this.setState({ histories: DB });
  }

  handleLogout = () => {
    this.props.handleLogout();
  };

  render() {
    return (
      <Container>
        <Navbar>
          <a>Foco</a>
          <span onClick={this.handleLogout}>Sair</span>
        </Navbar>
        <Content>
          <Title>No mês atual</Title>
          <ContainerPanel>
            <Panel background="#00b894">
              <i className="fa fa-user-plus" />
              <span>300 Usuários Ativos</span>
            </Panel>
            <Panel background="#2d3436">
              <i className="fa fa-user-times" />
              <span>10 Usuários Inativos</span>
            </Panel>
            <Panel background="#40739e">
              <i className="fa fa-briefcase" />
              <span>200 Horas Trabalhadas</span>
            </Panel>
          </ContainerPanel>
          <Title>Últimas Atualizações</Title>
          {this.state.histories.map(item => (
            <HistoryContainer>
              <HistoryUser>
                <img
                  src={item.user.thumbnail}
                  width="30"
                  height="30"
                  style={{ borderRadius: "50%", marginRight: "10px" }}
                />
                <strong
                  dangerouslySetInnerHTML={{ __html: item.user.fullname }}
                  style={{ marginRight: "5px" }}
                />
                {typeEvents(item)}
              </HistoryUser>
              <HistoryHour>às {item.created_at}</HistoryHour>
            </HistoryContainer>
          ))}
        </Content>
      </Container>
    );
  }
}
