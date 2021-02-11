import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TouchableHighlight, View, Image, ScrollView } from 'react-native';

import ListItem from '../ListItem';

const DescriptionAnime = ({ item }) => {

	const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
			<Modal animationType = 'fade' transparent = { true } visible = { modalVisible }>
				<View style = { styles.centeredView }>
					<View style = { styles.modalView }>
						<ScrollView>
							<Image style = { styles.image } source = {{ uri: item.image_url }} />
							<Text style = { styles.title }> Title: { item.title } </Text>
							<Text style = { styles.modalText }> Synopsis: { item.synopsis } </Text>
							<Text style = { styles.modalText }> Episodes: { item.episodes } </Text>
							<Text style = { styles.modalText }> Score: { item.score } </Text>

							<TouchableHighlight
								style={{ ...styles.closeButton }}
								onPress={() => {
									setModalVisible(!modalVisible);
								}}
								underlayColor = '#00ff80'
							>
								<View>
									
									<Text style = { styles.textStyle }> Back </Text>
								</View>
							</TouchableHighlight>
						</ScrollView>
					</View>
				</View>
			</Modal>

			<TouchableHighlight 
				underlayColor = 'transparent' style = { styles.openButton } 
				onPress = {() => { setModalVisible(true); }}
			>
				<ListItem item = { item }/>
			</TouchableHighlight>
		</View>
    );
}

const styles = StyleSheet.create({
	image: {
        width: 150,
		height: 200,
        resizeMode: 'contain',
        borderRadius: 5,
        alignSelf: 'center',
        margin: 5,
		backgroundColor: 'white'
    },
    modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 35,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5
    },
    openButton: {
		borderRadius: 10,
	},
	closeButton: {
		padding: 10,
		borderRadius: 10,
		backgroundColor: '#0080ff'
	},
    textStyle: {
      	color: 'black',
		textAlign: 'center',
		fontSize: 16,
    },
    modalText: {
      	marginBottom: 15,
		textAlign: 'justify'
	},
	title: {
		marginTop: 10,
		marginBottom: 18,
		textAlign: 'center',
		fontSize: 18  
  	}
});

export default DescriptionAnime;