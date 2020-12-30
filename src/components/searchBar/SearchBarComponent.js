import React, { useState, useEffect } from 'react';
import { Searchbar } from 'react-native-paper';
import { SafeAreaView, Text, View, FlatList } from 'react-native';
import { styles } from './styleSheet';

import useResults from '../../hooks/useResults';
import ListItem from '../ListItem';

const SearchbarComponent = () => {
  
	const [search, setSearch] = useState('');
	const [searchSeasonAnimeApi, results, errorMessage] = useResults();
	const [filteredDataSource, setFilteredDataSource] = useState([]);
	const [masterDataSource, setMasterDataSource] = useState([]);
	
    useEffect(() => {
		setFilteredDataSource(results);
		setMasterDataSource(results);
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

  	return (
		<SafeAreaView style = {{ flex: 1 }}>
			<View style = { styles.container }>
				<Searchbar
					placeholder = 'Procure Aqui ...'
					onChangeText={(text) => searchFilterFunction(text)}
					value = { search }
				/>
				<FlatList
					data = { filteredDataSource }
					keyExtractor = {(item, index) => index.toString()}
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
};

export default SearchbarComponent;