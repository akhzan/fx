import React from "react"
import { Button, Icon, Text } from "native-base"

const FooterItem = props => {
  return (
    <Button vertical onPress={props.pressEvent}>
      <Icon name={props.icon} style={props.style} />
      <Text style={props.style}>{props.text}</Text>
    </Button>
  )
}

export default FooterItem
