import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native'

const NotifyButton = () => {
    const [bell, setBell] = useState('bell')
    const [notifyText, setNotifyText] = useState('Avise-me')
    
    const changeIcon = (actualIconName) => {
        if(actualIconName === 'bell') {
            setBell('bell-off')
            setNotifyText('Não me avise')
        } else {
           setBell('bell')
           setNotifyText('Avise-me')
        }
    }

    return (
        <TouchableOpacity onPress={() => changeIcon(bell)}>
            <View style={styles.notifyView}>          
                <Text style={{ marginLeft: 5 }}> 
                    {notifyText}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    notifyView: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 3,
    }
})

export default NotifyButton