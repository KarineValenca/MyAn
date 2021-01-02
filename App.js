import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider as PaperProvider } from 'react-native-paper';

import AnimeListScreen from './src/screens/AnimeListScreen';
import SearchPageScreen from './src/screens/SearchPageScreen';

const App = () => {

	const navigator = createStackNavigator({
		SearchPage: SearchPageScreen
	},{
			initialRouteName: 'SearchPage',
			defaultNavigationOptions:{
				title: 'Pesquisa'
			}
		}
	);

  	// const navigator = createStackNavigator({
    //   		AnimeList: AnimeListScreen
    // 	},{
	// 		initialRouteName: 'AnimeList',
	// 		defaultNavigationOptions:{
	// 			title: 'Lista de Animes'
	// 		}
	// 	}
	// );

	const App = createAppContainer(navigator);

	return (
		<PaperProvider>
			<App 
				ref = { navigator => { navigator = navigator }} 
			/>
		</PaperProvider>
  	);
}

export default App;