import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import IconBtn from './IconBtn'
import colors from '../../utils/colors'

export default function HeaderLogo() {
    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Text style={{
                    fontSize: 24,
                    color: '#FFF'
                }}>WhatsApp</Text>
            </View>
            <View style={styles.containerBtn}>
                <IconBtn icon={"search"} />
                <IconBtn icon={"chatbox"} />
                <IconBtn icon={"menu"} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.color1,
        paddingTop: 25,
        paddingBottom: 15,
    },
    containerLogo: {
        marginHorizontal: 8
    },
    containerBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 8
    }
})