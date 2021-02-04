import React, { useState, useEffect, useCallback } from 'react';
import { SafeAreaView, View, StyleSheet, Text, Image } from 'react-native';
import { Searchbar, ActivityIndicator } from 'react-native-paper';
import { OptimizedFlatList } from 'react-native-optimized-flatlist';

import { syncListAnime, getListAnime } from '../../services/animesRealm';
import DescriptionAnime from '../descriptionAnime/DescriptionAnime';

const SearchbarComponent = () => {
  
	const [search, setSearch] = useState('');
	const [filteredDataSource, setFilteredDataSource] = useState([]);
	const [masterDataSource, setMasterDataSource] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function syncList() {

			setLoading(true);
			await syncListAnime();
			const animesList = await getListAnime();
			setFilteredDataSource(animesList);
			setMasterDataSource(animesList);
			setLoading(false);
		}
		
		syncList();
	}, []);

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
		return(
			<View style = { styles.loading }>
				{
					loading ? (
						<ActivityIndicator 
							color = 'black' style = {{ margin: 15 }}
						/>
					) : null
				}
			</View>
		)
	};

	const renderItem = useCallback(({ item }) =>
		<DescriptionAnime item = { item } />
	,[]);

	const keyExtractor = useCallback((item) => item.mal_id.toString(), []);

	return(
		<SafeAreaView style = {{ flex: 1, backgroundColor: 'white' }}>
			<View style = { styles.container }>
				<Searchbar
					placeholder = 'Procure Aqui '
					onChangeText={(text) => searchFilterFunction(text)}
					value = { search }
				/>
				{
					loading ? (
						<View>
							<Image 
								source = { require('../../images/loading.gif') } 
								style = { styles.loadingGif }/>
							<Text style = { styles.textLoading }> 
								Carregando Lista... Por Favor, Aguarde. 
							</Text>
						</View>
					) : (
						<OptimizedFlatList
							data = { filteredDataSource }
							keyExtractor = { keyExtractor }
							maxToRenderPerBatch = { 20 }
							onEndReachedThreshold = { 0.3 }
							ListFooterComponent={ renderFooter }
							renderItem = { renderItem }
							numColumns = { 2 }
						/>
					)
				}
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
    textLoading: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: -20,
		top: 100,
		fontFamily: 'Arial'
	},
	loadingGif: {
		top: 50,
		left: 20,
		width: 266,
		height: 258,
	}
});

export default SearchbarComponent;