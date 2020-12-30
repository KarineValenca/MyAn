import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AddToListButton from './AddToListButton';

const ListItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: item.image_url }}/>
            <Text style={styles.h1}>{item.title}</Text>
            <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent: 'space-between'}}>
                <Text style={styles.h2}>Gênero: {item.genres[0].name}</Text>
                <AddToListButton />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: 100,
        height: 150,
        resizeMode: 'contain',
        borderRadius: 5,
        alignSelf: 'center',
        margin: 5,

    },
    container: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        margin: 10,
        width: 170,
        padding: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9
    },
    h1: {
        textAlign: 'center',
        fontSize: 14
    },
    h2: {
        textAlign: 'left',
        fontSize: 10,
        padding: 10,
    },
})

export default ListItem