import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

import SearchAnimeScreen from './src/screens/AnimeListScreen'
import MyAnimeListScreen from './src/screens/MyAnimeListScreen'

const searchAnimeFlow = createSwitchNavigator({
  SearchAnime: SearchAnimeScreen,
})

searchAnimeFlow.navigationOptions = {
  title: 'Procurar Animes',
  tabBarIcon: ({tintColor}) => <Icon name='search' size={20} color={tintColor} />,
  tabBarOptions: {
    //activeTintColor: '#1B8C11',
    //inactiveTintColor: '#9af192'
  }
}

const myAnimeListFlow = createSwitchNavigator({
  MyAnimeList: MyAnimeListScreen,
})
myAnimeListFlow.navigationOptions = {
  title: 'Minha Lista',
  tabBarIcon: ({tintColor}) => <Icon name='list' size={20} color={tintColor} />,
  tabBarOptions: {
    //activeTintColor: '#1B8C11',
    //inactiveTintColor: '#9af192'
  }
}

const App = () => {
  const mainFlow = createBottomTabNavigator(
    {
      searchAnimeFlow,
      myAnimeListFlow
    },
    {
      initialRouteName: 'searchAnimeFlow',
    }
  )

  const App = createAppContainer(mainFlow)

  return (
    <App ref={ nav => {
      navigator = nav}} />
  )
   
}

export default App