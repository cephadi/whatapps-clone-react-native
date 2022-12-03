import React from 'react'
import { FlatList, View } from 'react-native'
import CallItem from '../components/call/CallItem'
import { calls } from '../utils/data'

export default function CallScreen() {
    return (
        <View>
            <FlatList
                data={calls}
                keyExtractor={(_, index) => index}
                renderItem={({ item }) => <CallItem data={item} /> } />
        </View>
    )
}
