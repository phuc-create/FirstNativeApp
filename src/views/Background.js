import { StyleSheet, Text, View } from 'react-native'
import BgApp from '../images/bg.jpg'

const Background = () => {
  return (
    <div className={styles.appBg}></div>
  )
}

export default Background

const styles = StyleSheet.create({
  appBg: {
    backGround: BgApp,
    width: "100%",
    height: "100%",
  }
})