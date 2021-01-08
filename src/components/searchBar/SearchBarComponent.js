import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Text, Image, FlatList , SafeAreaView} from 'react-native';
import faker from 'faker';
import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview';

import axios from 'axios';
import { apiListAnime } from '../../services/consts';
import DescriptionAnime from '../descriptionAnime/DescriptionAnime';

const SCREEN_WIDTH = Dimensions.get('window').width;
const fakeData = [];
for(i = 0; i < 100; i+= 1) {
	fakeData.push({
		type: 'NORMAL',
		item: {
			id: i,
			image: faker.image.avatar(),
			name: faker.name.firstName(),
			description: faker.random.words(5),
		},
	});
}

class SearchbarComponent extends Component {

  	constructor(props) {
		super(props);

		_isMounted = false;

		this.state = {
			list: new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(fakeData),
		};

		this.layoutProvider = new LayoutProvider((i) => {
			return this.state.list.getDataForIndex(i).type;
		}, (type, dim) => {
			switch (type) {
				case 'NORMAL': 
				dim.width = SCREEN_WIDTH;
				dim.height = 100;
				break;
				default: 
				dim.width = 0;
				dim.height = 0;
				break;
			};
		});
  }

  	async componentDidMount() {

    	let countRequest = 0;
		const results = [];

		this._isMounted = true;

		await axios.get(apiListAnime).then(response => {
			countRequest = Object.keys(response.data.anime).length;
			if(this._isMounted) {
				for(aux = 0; aux < countRequest; aux ++) {
					results.push({
						type: 'NORMAL',
						item: {
							mal_id: response.data.anime[aux].mal_id,
							title: response.data.anime[aux].title,
							image_url: response.data.anime[aux].image_url
						}
					})
				}
			}
		});

		this.setState({ list: new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(results) })
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	layoutProvider = () => {
		new LayoutProvider((i) => {
			return this.state.list.getDataForIndex(i).type;
		}, (type, dim) => {
			switch (type) {
				case 'NORMAL': 
					dim.width = SCREEN_WIDTH;
					dim.height = 100;
				break;
				default: 
					dim.width = 0;
					dim.height = 0;
				break;
			};
		})
	}

	getItem = (item) => {
		alert('Id : ' + item.mal_id + ' Title : ' + item.title);
	};

  	rowRenderer = (type, data) => {
		return (
			<View style = { styles.listItem } >
				<Image style = { styles.image } source = {{ uri: data.item.image_url }} />
				<View style = { styles.body } >
					<DescriptionAnime item = { data.item }/>
					{/* <Text style = { styles.name } onPress={() => this.getItem(data.item)}> 
						{ data.item.title }
					</Text> */}
				</View>
			</View>
		)
	}

  	render() {
	    return (
			<SafeAreaView style = {{ flex: 1 }}>
				<View style = { styles.container }>
				 	<RecyclerListView
						style = {{ flex: 1 }}
						rowRenderer = { this.rowRenderer }
						dataProvider = { this.state.list }
						layoutProvider = { this.layoutProvider }
					/>	
				</View>
			</SafeAreaView>
		);
  	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFF',
		minHeight: 1,
		minWidth: 1,
	},
	body: {
		marginLeft: 10,
		marginRight: 10,
		maxWidth: SCREEN_WIDTH - (80 + 10 + 20),
	},
	image: {
		height: 80,
		width: 80,
	},
	name: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	listItem: {
		flexDirection: 'row',
		margin: 10,
	},
});

export default SearchbarComponent;