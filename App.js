import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import AnimeListScreen from './src/screens/AnimeListScreen' 

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

export default createAppContainer(navigator)