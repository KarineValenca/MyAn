import React from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'
import CustomHeader from '../components/CustomHeader'
import { ListItem, Avatar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

const MyListAnimeScreen = () => {
    const list = [
        {
            name: 'Shingeki no Kyojin',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            subtitle: 'Action'
        },
        {
            name: 'Yakusoku no Neverland',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Sci-Fi'
        },
    ]
    keyExtractor = (item, index) => index.toString()
    renderItem = ({ item }) => (
        <ListItem bottomDivider>
            <Avatar source={{uri: item.avatar_url}} />
            <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
                <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
            <Icon name="ellipsis-v" size={20} color="orange"/>
        </ListItem>
    )
    return(
        <View>
            <CustomHeader title="Minha Lista de Animes" />
            <FlatList
                keyExtractor={keyExtractor}
                data={list}
                renderItem={renderItem}
            />
        </View>
    )
}

MyListAnimeScreen.navigationOptions = () => {
    return { headerShown: false }
}

export default MyListAnimeScreen