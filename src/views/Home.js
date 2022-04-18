import { StatusBar } from 'expo-status-bar'
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native'
import BgApp from '../images/bg.jpg'
import { styled } from '../styles/styles.global'

const Home = ({ navigation }) => {
  const LinkControl = [
    { id: 1, title: "New Game", nav: "Start" },
    { id: 2, title: "Rank", nav: "Rank" },
    { id: 3, title: "Instruction", nav: "Instruction" },
  ]
  const image = BgApp
  const onPressHandler = (comp) => navigation.navigate(comp)
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode={'cover'} style={styles.image} />
      <Text style={styles.gameName}>Find it</Text>
      <StatusBar style="auto" />
      <View style={styles.option}>
        {LinkControl.map(link => {
          return (
            <Button
              key={link.id}
              onPress={() => onPressHandler(link.nav)}
              title={link.title}
              // style={styles.button}
              color="#fff"
            />
          )
        })}
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    ...styled.mainView,
    width: "100%",
    height: "100%",
    backgroundColor: '#fff',
  },
  image: {
    position: "absolute",
    top: "0%",
    left: "0%",
    flex: 1,
    width: "100%",
    height: "100%",
  },
  gameName: {
    width: "100%",
    textAlign: "center",
    fontSize: 100,
    // textShadow: "0 0 5px rgba(0, 0, 0, 0.4)",
    color: "#fff",
    fontWeight: "600",
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5
  },
  option: {
    width: "90%",
    height: "auto",
    backgroundColor: "rgba(0,0,0,.5)",
    padding: 20,
    borderRadius: 10,
    marginTop: 20
  },
  button: {
    fontSize: 20,
    color: "#fff",
    textDecorationLine: "underline"
  }
})

export default Home
