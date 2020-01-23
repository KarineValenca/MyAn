import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import AnimeListScreen from './src/screens/AnimeListScreen' 
import {Platform} from 'react-native' 
import React from 'react'


const navigator = createStackNavigator(
  {
    AnimeList: AnimeListScreen
  },
  {
    initialRouteName: 'AnimeList',
    defaultNavigationOptions:{
      title: 'Lista de Animes'
    }
  }
)

const AppContainer = createAppContainer(navigator)

class App extends React.Component {
  render() {
    return (
      <AppContainer
        ref={nav => {
          this.navigator = nav;
        }}
      />
    );
  }
}

export default App