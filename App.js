import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import AnimeListScreen from './src/screens/AnimeListScreen' 
import React from 'react'
import { Text, View, Button } from 'react-native';

const App = () => {
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

  const App = createAppContainer(navigator)

  return (
    <App ref={ navigator => {
      navigator = navigator}} />
  )
   
}

export default App