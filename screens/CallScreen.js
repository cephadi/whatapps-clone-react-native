import React from 'react'
import { FlatList, View } from 'react-native'
import CallItem from '../components/call/CallItem'
import FAB from '../components/ui/FAB'
import { calls } from '../utils/data'

export default function CallScreen() {
    return (
        <View>
            <FlatList
                data={calls}
                keyExtractor={(_, index) => index}
                renderItem={({ item }) => <CallItem data={item} /> } />
            <FAB onPress={() => console.log('new call')} icon="call" />
        </View>
    )
}
