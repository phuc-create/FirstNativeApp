import { createStackNavigator, createAppContainer } from 'react-navigation'
import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import GameBoard from '../views/GameBoard'
import Home from '../views/Home'
import Instruction from '../views/Instruction'
const Stack = createNativeStackNavigator()


// const AppNavigator = createNativeStackNavigator({
//   Home: { screen: Home },
//   GameBoard: { screen: GameBoard }
// })

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Start" component={GameBoard} />
        <Stack.Screen name="Instruction" component={Instruction} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator