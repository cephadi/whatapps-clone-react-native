import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function IconBtn({ icon }) {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.btnContainer
            ]}>
            <View>
                <Ionicons name={icon} color={"#FFF"} size={26} />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        padding: 6
    }
})