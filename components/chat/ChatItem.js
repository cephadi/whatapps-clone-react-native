import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import colors from '../../utils/colors'
import UserPic from '../ui/UserPic'

const TimeInfo = ({ isRead, time, totalMessage }) => {

    if (isRead) {
        return (
            <View style={styles.timeInfoContainer}>
                <View>
                    <Text style={styles.readTimeText}>{time}</Text>
                </View>
            </View>
        )
    }
    
    return (
        <View style={styles.timeInfoContainer}>
            <View>
                <Text style={styles.unreadTimeText}>{time}</Text>
            </View>
            <View style={styles.totalMessageContainer}>
                <Text 
                    style={[
                        styles.unreadTimeText, 
                        { color: '#FFF', fontSize: 15 }
                    ]}>{totalMessage}</Text>
            </View>
        </View>
    )
}

export default function ChatItem({ data }) {
    const navigation = useNavigation();

    return (
        <Pressable
            style={({ pressed }) => [
                styles.chatContainer,
                pressed ? { opacity: 0.5, backgroundColor: '#e8e9eb' } : null
            ]}
            onPress={() => navigation.navigate('DetailChat', { senderName: data.senderName }) }>
            <UserPic source={data.senderPic} />
            <View style={styles.infoContainer}>
                <View style={styles.messageContainer}>
                    <View>
                        <Text style={styles.nameText}>{data.senderName}</Text>
                    </View>
                    <View>
                        <Text style={styles.messageText}>{data.message.substring(0, 50)}...</Text>
                    </View>
                </View>
                <TimeInfo 
                    isRead={data.isRead}
                    time={data.time}
                    totalMessage={data.totalMessage} />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    chatContainer: {
        padding: 8,
        marginBottom: 6,
        flexDirection: 'row',
        alignItems: 'center'
    },
    infoContainer: {
        flexDirection: 'row',
        flex: 1,
        paddingBottom: 8,
        marginLeft: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#CCC',
    },
    messageContainer: {
        flex: 1,
        marginHorizontal: 6,
    },
    nameText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    messageText: {
        fontSize: 16,
        fontWeight: '500',
        color: 'grey'
    },
    timeInfoContainer: {
        alignItems: 'flex-end'
    },
    readTimeText: {
        fontWeight: '600',
        color: 'grey'
    },
    unreadTimeText: {
        fontWeight: '600',
        color: colors.color3
    },
    totalMessageContainer: {
        padding: 4,
        margin: 4,
        alignItems: 'center',
        width: 28,
        borderRadius: 28 / 2,
        backgroundColor: colors.color3
    }
})