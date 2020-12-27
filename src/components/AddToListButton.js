import React from 'react'
import { StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const AddToListButton = () => {
    return (
        <TouchableOpacity style={styles.button}>
            <Icon name="plus-square" size={16} color="orange"/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
    }
})
export default AddToListButton