import React, { useState, useEffect } from 'react';
import { Searchbar, ActivityIndicator, Colors } from 'react-native-paper';
import { SafeAreaView, View, FlatList } from 'react-native';

import useResults from '../../hooks/useResults';
import ListItem from '../ListItem';
import { styles } from './styleSheet';

const SearchbarComponent = () => {
  
	const [search, setSearch] = useState('');
	const [searchSeasonAnimeApi, results, errorMessage] = useResults();
	const [filteredDataSource, setFilteredDataSource] = useState([]);
	const [masterDataSource, setMasterDataSource] = useState([]);
	const [loading, setLoading] = useState(true);
	
    useEffect(() => {

		try {
			async function getListAnimes() {
				setLoading(true);
				return await results;
			}
			getListAnimes().then(listAnimes => {
				setFilteredDataSource(listAnimes);
				setMasterDataSource(listAnimes);
				setLoading(false);
			});
		} catch (error) {
			setLoading(false);
			console.log(error);
		  }
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
				{
					loading === true ? (
						<ActivityIndicator 
							animating = { true } 
							color = { Colors.red800 }
							style = { styles.loading } 
							size = 'large'
						/>
					) : (
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
					)
				}
				
			</View>
		</SafeAreaView>
	);
};

export default SearchbarComponent;