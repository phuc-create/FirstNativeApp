import { NavigationContainer } from "@react-navigation/native"
import React, { Fragment } from "react"
import { Button, ImageBackground, StyleSheet, Text, View } from "react-native"
import BgApp from '../images/bg.jpg'

const Instruction = ({ navigation }) => {
  const image = BgApp
  return (
    <View style={styles.outer}>
      <ImageBackground source={image} resizeMode={'cover'} style={styles.image} />
      <View style={styles.ins}>
        <Text style={styles.text}>
          (Tiếng việt){"\n"}{"\n"}
          --Bạn sẽ nhận được một con số ngẫu nhiên từ 0000 đến 9999 mỗi lần dự
          đoán bạn sẽ nhận được một gợi ý với số Red points và Blue points
          {"\n"}
        </Text>
        <Text style={{ color: "#e74c3c", fontWeight: "600" }}># Red Point</Text>
        <Text style={styles.text}>
          {"\n"} --Với mỗi một con số đúng và chính xác vị trí sẽ là 1 Red point{"\n"}
        </Text>
        <Text style={{ color: "#3498db", fontWeight: "600" }}>
          # Blue Point
        </Text>
        <Text style={styles.text}>
          {"\n"}
          --Với mỗi một con số đúng và chính xác nhưng sai vị trí sẽ là 1 Blue
          Point
          {"\n"}
        </Text>
        <Text style={{ color: "#f39c12", fontWeight: "600" }}> # Lưu Ý</Text>
        <Text style={styles.text}>
          {"\n"} -- Ví dụ số đã cho là: 0100{"\n"}
          -- Số của bạn là: 0231 .Thì số Red Point là 1 (vì số 0 xuất hiện 1 lần
          và đúng vị trí ) và Blue Point là 1 (vì số 1 đã xuất hiện trong lựa chọn
          của bạn nhưng bạn đã đặt sai vị trí của nó)
          {"\n"}
        </Text>
        <Button onPress={() => navigation.navigate('Home')} title="Back" />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  outer: {
    width: '100%',
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  ins: {
    width: '98%',
    height: "100%",
    lineHeight: 40,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, .5)',
    textAlign: "left",
    margin: 10,
    // marginVertical: 10, //same as setting both marginTop and marginBottom
    // marginHorizontal: "auto",
    color: "#fff"
  },
  image: {
    position: "absolute",
    top: "0%",
    left: "0%",
    flex: 1,
    width: "100%",
    height: "100%",
  },
  text: {
    color: "#fff",
    fontSize: 20
  }
})
export default Instruction
