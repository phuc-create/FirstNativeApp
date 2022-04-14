import React from "react"
import { Text, View } from "react-native"
const ShowAttempt = ({ attemp }) => {
  const sort = attemp.sort((a, b) => b.id - a.id)
  return (
    <View className="attemp-show">
      {sort.length > 0 &&
        sort.map((att) => {
          return (
            <View key={att.id} className="att-guess">
              <Text>{att.id}</Text>
              <Text style={{ fontSize: "30px", fontWeight: "700" }}>
                {att.yourNum}
              </Text>
              <p>{att.guess}</p>
            </View>
          )
        })}
    </View>
  )
}

export default ShowAttempt