import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import colors from '../../utils/colors'

const FAB = ({ onPress, icon }) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.container,
                pressed ? { opacity: 0.7 } : null
            ]}>
            <MaterialIcons name={icon ? icon : "chat"} size={26} color={"#FFF"} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 15,
        right: 15,
        margin: 6,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        padding: 6,
        backgroundColor: colors.color1,
        elevation: 2
    }
}) 

export default FAB

// position --> relative
// position --> absolute