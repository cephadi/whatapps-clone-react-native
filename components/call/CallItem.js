import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Ionicons, Feather } from '@expo/vector-icons'
import UserPic from '../ui/UserPic'
import colors from '../../utils/colors'

export default function CallItem({ data }) {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.callContainer,
                pressed ? { opacity: 0.5, backgroundColor: '#e8e9eb' } : null
            ]}
            onPress={() => console.log('call pressed')}>
            <UserPic source={data.senderPic} />
            <View style={styles.infoContainer}>
                <View>
                    <View>
                        <Text style={styles.nameText}>{data.senderName}</Text>
                    </View>
                    <View style={styles.timeContainer}>
                        <View style={{
                            marginRight: 6
                        }}>
                            <Feather 
                                name={data.calling === 'out' ? 'arrow-up-right' : 'arrow-down-left'}
                                size={20}
                                color={data.isAccepted ? colors.color3 : 'red'} />
                        </View>
                        <View>
                            {data.totalCall > 0 
                            ?   <Text style={styles.timeText}>({data.totalCall}) {data.time}</Text>
                            :   <Text style={styles.timeText}>{data.time}</Text>}
                        </View>
                    </View>
                </View>
                <View>
                    <Ionicons 
                        name={data.typeCall === 'call' ? 'call' : 'videocam'}
                        size={28}
                        color={colors.color1} />
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    callContainer: {
        padding: 8,
        marginBottom: 6,
        flexDirection: 'row',
        alignItems: 'center'
    },
    infoContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 8
    },
    nameText: {
        fontSize: 20,
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    timeText: {
        fontSize: 15,
        fontWeight: '500',
        color: 'grey'
    }
})