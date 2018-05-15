import ReactLoading from "react-loading";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default () => (
  <Container>
    <ReactLoading type={"spin"} color={"red"} />{" "}
  </Container>
);
