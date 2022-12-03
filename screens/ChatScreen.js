import React from 'react'
import { FlatList, View } from 'react-native'
import ChatItem from '../components/chat/ChatItem'
import { chats } from '../utils/data'

export default function ChatScreen() {

    return (
        <View>
            <FlatList 
                data={chats}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => <ChatItem data={item} />} />
        </View>
    )
}
