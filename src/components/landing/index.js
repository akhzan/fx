import React, { Component } from "react"
import { StyleSheet, View, Image } from "react-native"
import { Text } from "native-base"
import Dimensions from "Dimensions"

var { width } = Dimensions.get("window")

class Landing extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <View>
        <Text style={styles.time}>{this.props.title}</Text>
        <View style={styles.imgContainer}>
          <Image
            resizeMode="cover"
            style={styles.img}
            source={{ uri: "https://www.w3schools.com/css/img_fjords.jpg" }}
          />
          <Image
            resizeMode="cover"
            style={styles.img}
            source={{ uri: "https://www.w3schools.com/css/img_fjords.jpg" }}
          />
          <Image
            resizeMode="cover"
            style={styles.img}
            source={{ uri: "https://www.w3schools.com/css/img_fjords.jpg" }}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  imgContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 0 - 2
  },
  img: {
    margin: 2,
    width: width * 0.5 - 2,
    height: width * 0.5 - 2,
    borderRadius: 2
  },
  time: {
    textAlign: "center",
    padding: 20,
    color: "#333333"
  }
})

export default Landing
