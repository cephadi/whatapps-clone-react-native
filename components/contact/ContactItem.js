import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import UserPic from '../ui/UserPic'
import { AntDesign } from '@expo/vector-icons'
import colors from '../../utils/colors'

const ContactItem = ({ data }) => {
    return (
        <Pressable 
            style={({ pressed }) => [
                styles.contactContainer,
                pressed ? { opacity: 0.5, backgroundColor: '#e8e9eb' } : null
            ]}
            onPress={() => console.log('contact pressed')}>
            <UserPic source={data.contactPic} />
            <View style={styles.infoContainer}>
                <View>
                    <Text style={styles.nameText}>{data.contactName}</Text>
                    <Text style={styles.statusText}>{data.status}</Text>
                    <View style={styles.numberContainer}>
                        <AntDesign name='contacts' size={18} color={colors.color2} />
                        <Text style={styles.numberText}>{data.contactNumber}</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    contactContainer: {
        padding: 8,
        marginBottom: 6,
        flexDirection: 'row',
        alignItems: 'center'
    },
    infoContainer: {
        flex: 1,
        paddingHorizontal: 8,
        paddingVertical: 4
    },
    nameText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    statusText: {
        fontSize: 13,
        fontWeight: '400',
        color: '#8b8b8c',
        marginVertical: 4
    },
    numberContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    numberText: {
        fontSize: 14,
        marginLeft: 4
    }
})

export default ContactItem