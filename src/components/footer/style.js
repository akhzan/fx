import { StyleSheet } from "react-native"

const styles = {
  ios: {},
  android: StyleSheet.create({
    footer: {
      backgroundColor: "#fff",
      borderTopColor: "#c2c2c2",
      borderTopWidth: 0.5
    },
    footerItem: {
      color: '#3B3B3B'
    },
    footerItem_active: {
      color: '#84BD00'
    }
  })
}

export default styles
