import React from "react"
import { Text, View, SafeAreaView, FlatList, StyleSheet } from "react-native"
const ShowAttempt = ({ attemp }) => {
  const sort = attemp.sort((a, b) => b.id - a.id)
  // const renderAttemp = ({ item }) => {
  //   return (
  //     <View key={item.id} className="att-guess">
  //       <Text style={{ fontSize: 30, fontWeight: "700" }}>
  //         {item.yourNum}
  //       </Text>
  //       <Text>{item.guess}</Text>
  //     </View>
  //   )
  // }
  return (
    <View style={{ display: "flex", justifyContent: "center", alignItems: "center", marginHorizontal: 0, marginVertical: "auto", width: "100%" }}>
      {sort.length > 0 &&
        sort.map((att) => {
          return (
            <View key={att.id} style={styles.attemp}>
              <Text style={styles.text}>
                {att.yourNum}
              </Text>
              <Text style={{ ...styles.text, fontSize: 16, letterSpacing: 1 }}> {att.guess}</Text>
            </View>
          )
        })}
    </View>
    // <SafeAreaView style={{}}>
    //   <FlatList
    //     data={attemp}
    //     renderItem={renderAttemp}
    //     keyExtractor={(item) => item.id}
    //   />
    // </SafeAreaView>
  )
}
export default ShowAttempt
const styles = StyleSheet.create({
  attemp: {
    textAlign: "center",
    width: 295,
    fontSize: 20,
    marginTop: 10,
    paddingHorizontal: 5,
    paddingVertical: 20,
    borderRadius: 5,
    color: "#fff",
    backgroundColor: 'rgba(0,0,0,.4)',
  },
  text: {
    color: "#fff", fontSize: 30, fontWeight: "700", textAlign: "center", padding: 5

  }
})