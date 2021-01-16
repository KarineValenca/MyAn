import React, { useState, useEffect, useCallback, Component } from 'react';
import { SafeAreaView, View, StyleSheet, Alert, Text } from 'react-native';
import { Searchbar, ActivityIndicator } from 'react-native-paper';
import { OptimizedFlatList } from 'react-native-optimized-flatlist';

import DescriptionAnime from '../descriptionAnime/DescriptionAnime';
import useResults from '../../hooks/useResults';

const Realm = require('realm');

class SearchbarComponent extends Component {

	constructor(props) {
		super(props);
		this.state = { realm: null };
	}

	CheckConnectivity = () => {
		// For Android devices
		if (Platform.OS === "android") {
		  NetInfo.isConnected.fetch().then(isConnected => {
			if (isConnected) {
			  Alert.alert("You are online!");
			} else {
			  Alert.alert("You are offline!");
			}
		  });
		} else {
		  // For iOS devices
		  NetInfo.isConnected.addEventListener(
			"connectionChange",
			this.handleFirstConnectivityChange
		  );
		}
	  };
	
	  handleFirstConnectivityChange = isConnected => {
		NetInfo.isConnected.removeEventListener(
		  "connectionChange",
		  this.handleFirstConnectivityChange
		);
	
		if (isConnected === false) {
		  Alert.alert("You are offline!");
		} else {
		  Alert.alert("You are online!");
		}
	  };

	componentDidMount() {
		Realm.open({
		  schema: [{name: 'Dog', properties: {name: 'string'}}]
		}).then(realm => {
			
		//   realm.write(() => {
		// 	realm.create('Dog', {name: 'Rex'});
		//   });
		  this.setState({ realm });
		});
		if(Realm.ConnectionState !== null) {
			console.log('Conectado')
		} else {
			console.log('Off')
		}
	  }
	
	  componentWillUnmount() {
		// Close the realm if there is one open.
		const {realm} = this.state;
		if (realm !== null && !realm.isClosed) {
		  realm.close();
		}
	  }
	
	  render() {
		const info = this.state.realm
		  ? 'Number of dogs in this Realm: ' + this.state.realm.objects('Dog').length
		  : 'Loading...';
	
		return (
		  <View style={styles.container}>
			<Text style={styles.welcome}>
			  {info}
			</Text>
		  </View>
		);
	  }
}

// const SearchbarComponent = () => {
  
// 	const [search, setSearch] = useState('');
// 	const [filteredDataSource, setFilteredDataSource] = useState([]);
// 	const [masterDataSource, setMasterDataSource] = useState([]);
// 	const [loading, setLoading] = useState(false);
//     const [searchSeasonAnimeApi, results, errorMessage] = useResults();

// 	useEffect(() => {
// 		getListAnime();
// 	});

// 	function getListAnime () {
// 		setLoading(true);
		
// 		try {
// 			setMasterDataSource(results);
// 			setFilteredDataSource(results);
// 			setLoading(false);
// 		} catch(error) {

// 			setLoading(false);
// 			Alert(errorMessage);
// 		}
// 	} 

// 	const searchFilterFunction = (text) => {
// 		if (text) {
// 			const newData = masterDataSource.filter(
// 				function (item) {
// 					const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
// 					const textData = text.toUpperCase();
// 					return itemData.indexOf(textData) > -1;
// 				}
// 			);
// 			setFilteredDataSource(newData);
// 			setSearch(text);
// 		} else {
// 			setFilteredDataSource(masterDataSource);
// 			setSearch(text);
// 		}
// 	};

// 	const renderFooter = () => {
// 		if (!loading) {
// 			return null;
// 		} 
		
// 		return (
// 			<View style = { styles.loading }>
// 				<ActivityIndicator />
// 		  	</View>
// 		);
// 	};

// 	const renderItem = useCallback(({ item }) =>
// 		<DescriptionAnime item = { item } />
// 	,[]);

// 	const keyExtractor = useCallback((item) => item.mal_id.toString(), []);

// 	return(
// 		<SafeAreaView style = {{ flex: 1 }}>
// 			<View style = { styles.container }>
// 				<Searchbar
// 					placeholder = 'Procure Aqui ...'
// 					onChangeText={(text) => searchFilterFunction(text)}
// 					value = { search }
// 				/>
// 				<OptimizedFlatList
// 					data = { filteredDataSource }
// 					keyExtractor = { keyExtractor }
// 					maxToRenderPerBatch = { 20 }
// 					onEndReached = { getListAnime }
// 					onEndReachedThreshold = { 0.2 }
// 					ListFooterComponent={ renderFooter }
// 					renderItem = { renderItem }
// 					numColumns = { 2 }
// 				/>
// 			</View>
// 		</SafeAreaView>
// 	);
// }

const styles =  StyleSheet.create({
    
    container: {
        backgroundColor: 'white',
    },
    itemStyle: {
        padding: 10,
    },
    textInputStyle: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderColor: '#009688',
        backgroundColor: '#FFFFFF',
    },
    loading: {
		top: 240,
		color: 'red'
    },
    textLoading: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: -20,
        top: 10
    }
});

export default SearchbarComponent;
