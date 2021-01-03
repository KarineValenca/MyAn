import React, { useState, useEffect } from 'react';
import { Searchbar, ActivityIndicator } from 'react-native-paper';
import { SafeAreaView, View, FlatList } from 'react-native';
import axios from 'axios';

import ListItem from '../ListItem';
import { styles } from './styleSheet';
import { apiListAnime } from '../../services/consts';

const SearchbarComponent = () => {
  
	const [search, setSearch] = useState('');
	const [filteredDataSource, setFilteredDataSource] = useState([]);
	const [masterDataSource, setMasterDataSource] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getListAnime();
	});

	async function getListAnime () {
		if(loading) {
			return;
		}

		setLoading(true);
		const animes = await axios.get(apiListAnime);
		setFilteredDataSource(animes.data.anime);
		setMasterDataSource(animes.data.anime);
		setLoading(false);
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
		if (!loading) 
			return null;
		
		return (
			<View style = { styles.loading }>
				<ActivityIndicator />
		  	</View>
		);
	};

	return(
		<SafeAreaView style = {{ flex: 1 }}>
			<View style = { styles.container }>
				<Searchbar
					placeholder = 'Procure Aqui ...'
					onChangeText={(text) => searchFilterFunction(text)}
					value = { search }
				/>
				<FlatList
					data = { filteredDataSource }
					keyExtractor = {(item, index) => item.mal_id }
					maxToRenderPerBatch = { 20 }
					onEndReached = { getListAnime }
					  onEndReachedThreshold = { 0.1 } // equivale ao usuario estar a 10%do final da página
					ListFooterComponent={ renderFooter }
					renderItem = {({ item }) => {
						return(
							<ListItem item = { item } />
						);
					}}
					numColumns = { 2 }
				/>
			</View>
		</SafeAreaView>
	);
}

export default SearchbarComponent;