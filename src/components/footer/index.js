import React, { Component } from "react"
import { Footer, FooterTab, Button, Icon, Text } from "native-base"
import { Platform } from "react-native"

import FooterItem from "./footer-item"
import styles from "./style"

const stylesPlatform = Platform.select({
  ios: styles.ios,
  android: styles.android
})

class FooterApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 0
    }
  }

  _activatePage = page => {
    const state = { ...this.state, active: page }
    this.setState(state)
  }

  render() {
    const { active } = this.state
    const menus = [
      { id: 0, icon: "home", text: "home" },
      { id: 1, icon: "search", text: "browse" },
      { id: 2, icon: "person", text: "profile" }
    ]
    return (
      <Footer>
        <FooterTab style={stylesPlatform.footer}>
          {menus.map(x => (
            <FooterItem
              key={x.id}
              pressEvent={() => this._activatePage(x.id)}
              icon={x.icon}
              text={x.text}
              style={
                active === x.id
                  ? stylesPlatform.footerItem_active
                  : stylesPlatform.footerItem
              }
            />
          ))}
        </FooterTab>
      </Footer>
    )
  }
}

export default FooterApp
