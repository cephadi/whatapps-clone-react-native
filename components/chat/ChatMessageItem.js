import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../utils/colors'

const ChatMessageItem = ({ data }) => {
    return (
        <View
            style={[
                styles.messageContainer, 
                { 
                    backgroundColor: data.isSender ? '#FFF' : colors.color4,
                    alignSelf: data.isSender ? 'flex-start' : 'flex-end' 
                }
            ]}>
            <View style={{ flex: 1 }}>
                <Text style={styles.messageText}>{data.message}</Text>
            </View>
            <View style={styles.timeContainer}>
                <Text style={styles.timeText}>{data.time}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    messageContainer: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginVertical: 8,
        marginHorizontal: 6,
        borderRadius: 10,
        width: '80%',
        minHeight: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 3
    },
    messageText: {
        fontSize: 15,
    },
    timeContainer: {
        alignSelf: 'flex-end'
    },
    timeText: {
        fontSize: 12,
        color: '#8b8b8c',
    }
})

export default ChatMessageItem