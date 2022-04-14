import AppNavigator from './src/routes/AppNavigator'
import Context from './src/components/context/Context'
import configureStore from './src/redux/store'
import rootReducer from './src/redux/reducers/rootReducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
const store = createStore(rootReducer)
// const store = configureStore()
const AppWrapper = () => {

  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
function App() {
  return (
    <Context>
      <AppNavigator />
    </Context>
  )
}
export default AppWrapper