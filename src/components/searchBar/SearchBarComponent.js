import React, { useState, useEffect, useCallback } from 'react';
import { SafeAreaView, View, StyleSheet, Alert } from 'react-native';
import { Searchbar, ActivityIndicator } from 'react-native-paper';
import { OptimizedFlatList } from 'react-native-optimized-flatlist';

import ListItem from '../ListItem';
import DescriptionAnime from '../descriptionAnime/DescriptionAnime';
import useResults from '../../hooks/useResults';

const SearchbarComponent = () => {
  
	const [search, setSearch] = useState('');
	const [error, setError] = useState('');
	const [filteredDataSource, setFilteredDataSource] = useState([]);
	const [masterDataSource, setMasterDataSource] = useState([]);
	const [loading, setLoading] = useState(false);
    const [searchSeasonAnimeApi, results, errorMessage] = useResults();

	useEffect(() => {
		getListAnime();
	});

	function getListAnime () {
		setLoading(true);
		try {

			// const response = results.map((anime) => {
			// 	if(anime.episodes === null || anime.episodes === '') {
			// 		anime.episodes = 'Undefined';
			// 	} else {
			// 		anime.episodes = anime.episodes;
			// 	}
			// 	return anime
			// });
			setMasterDataSource(results);
			setFilteredDataSource(results);
			setLoading(false);
		} catch(error) {

			setLoading(false);
			Alert(errorMessage);
		}
	} 

	const searchFilterFunction = (text) => {
		if (text) {
			const newData = masterDataSource.filter(
				function (item) {
					const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
					const textData = text.toUpperCase();
					return itemData.indexOf(textData) > -1;
				}
			);
			setFilteredDataSource(newData);
			setSearch(text);
		} else {
			setFilteredDataSource(masterDataSource);
			setSearch(text);
		}
	};

	const renderFooter = () => {
		if (!loading) {
			return null;
		} 
		
		return (
			<View style = { styles.loading }>
				<ActivityIndicator />
		  	</View>
		);
	};

	const renderItem = useCallback(({ item }) =>
		<DescriptionAnime item = { item } />
	,[]);

	const keyExtractor = useCallback((item) => item.mal_id.toString(), []);

	return(
		<SafeAreaView style = {{ flex: 1 }}>
			<View style = { styles.container }>
				<Searchbar
					placeholder = 'Procure Aqui ...'
					onChangeText={(text) => searchFilterFunction(text)}
					value = { search }
				/>
				<OptimizedFlatList
					data = { filteredDataSource }
					keyExtractor = { keyExtractor }
					maxToRenderPerBatch = { 20 }
					onEndReached = { getListAnime }
					onEndReachedThreshold = { 0.2 }
					ListFooterComponent={ renderFooter }
					renderItem = { renderItem }
					numColumns = { 2 }
				/>
			</View>
		</SafeAreaView>
	);
}

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