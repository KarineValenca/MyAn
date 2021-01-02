import React, { useState, useEffect } from 'react';
import { Searchbar, ActivityIndicator, Colors } from 'react-native-paper';
import { SafeAreaView, View, FlatList, Text } from 'react-native';
import axios from 'axios';

import ListItem from '../ListItem';
import { styles } from './styleSheet';
import { apiListAnime } from '../../services/consts';

const SearchbarComponent = () => {
  
	const [search, setSearch] = useState('');
	const [filteredDataSource, setFilteredDataSource] = useState([]);
	const [masterDataSource, setMasterDataSource] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function getList() {
			await axios.get(apiListAnime)
			.then(response => {
				setFilteredDataSource(response.data.anime);
				setMasterDataSource(response.data.anime);
				setLoading(false);
			})
			.catch(error => console.log(error));
		}
		getList();
	});

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
				{
					loading ? (
						<>
							<Text style = { styles.textLoading }> 
								Carregando Lista, Por Favor Aguarde 
							</Text>
							<ActivityIndicator 
								color = { Colors.red800 }
								style = { styles.loading } 
								size = 'large'
							/>
						</>
					) : (
						<>
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
						</>
					)
				}
			</View>
		</SafeAreaView>
	);
};

export default SearchbarComponent;