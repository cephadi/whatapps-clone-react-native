import React, { useLayoutEffect } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import ChatMessageItem from '../components/chat/ChatMessageItem'
import colors from '../utils/colors'
import { detailChats } from '../utils/data'

const DetailChatScreen = ({ route, navigation }) => {
    const { senderName } = route.params

    useLayoutEffect(() => {
        navigation.setOptions({
            title: senderName
        })

    }, [navigation])

    return (
        <View style={styles.detailChatContainer}>
            <FlatList 
                data={detailChats}
                keyExtractor={(_, i) => i}
                renderItem={({ item }) => <ChatMessageItem data={item} /> } />
        </View>
    )
}

const styles = StyleSheet.create({
    detailChatContainer: {
        flex: 1,
        backgroundColor: colors.color5
    }
})

export default DetailChatScreen