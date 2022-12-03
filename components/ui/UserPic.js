import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

export default function UserPic({ source }) {
    return (
        <View style={styles.imageProfileContainer}>
            <Image 
                source={source}
                style={styles.imageProfile} />
        </View>
    )
}

const styles = StyleSheet.create({
    imageProfileContainer: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
    },
    imageProfile: {
        width: '100%',
        height: '100%'
    },
})