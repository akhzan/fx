import React, { Component } from "react"
import {
  Container,
  Header,
  Title,
  Content,
  Body,
} from "native-base"
import { Platform, StyleSheet } from "react-native"

import Landing from "./components/landing"
import Footer from "./components/footer"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body style={styles.container}>
            <Title>fx</Title>
          </Body>
        </Header>
        <Content>
          <Landing title="TODAY" />
          <Landing title="YESTERDAY" />
        </Content>
        <Footer />
      </Container>
    )
  }
}
