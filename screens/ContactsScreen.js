import React from 'react'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import ContactItem from '../components/contact/ContactItem'
import { contacts } from '../utils/data'
import { Entypo, FontAwesome } from '@expo/vector-icons'
import colors from '../utils/colors'

export default function ContactsScreen() {
    return (
        <View>
            <View style={styles.topContainer}>
                <Pressable
                    style={({ pressed }) => [
                        styles.btnContainer,
                        pressed ? { opacity: 0.5, backgroundColor: '#e8e9eb' } : null
                    ]}
                    onPress={() => console.log('new group pressed')}>
                    <View style={styles.iconContainer}>
                        <Entypo name='users' size={26} color='#FFF' />
                    </View>
                    <View>
                        <Text style={styles.btnText}>New group</Text>
                    </View>
                </Pressable>
                <View 
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingRight: 16
                    }}>
                    <Pressable
                        style={({ pressed }) => [
                            styles.btnContainer,
                            { flex: 1 },
                            pressed ? { opacity: 0.5, backgroundColor: '#e8e9eb' } : null
                        ]}
                        onPress={() => console.log('new contact pressed')}>
                        <View style={styles.iconContainer}>
                            <Entypo name='add-user' size={26} color='#FFF' />
                        </View>
                        <View>
                            <Text style={styles.btnText}>New contact</Text>
                        </View>
                    </Pressable>
                    <View>
                        <FontAwesome name='qrcode' size={32} color='#5e5a5a' />
                    </View>
                </View>
            </View>
            <View style={styles.titleInfoContainer}>
                <Text style={styles.titleInfoText}>Contacts on WhatsApp</Text>
            </View>
            <FlatList 
                data={contacts}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => <ContactItem data={item} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    topContainer: {
        marginVertical: 8
    },
    btnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        marginVertical: 6,
        marginHorizontal: 8
    },
    iconContainer: {
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        backgroundColor: colors.color1,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12
    },
    btnText: {
        fontSize: 18,
    },
    titleInfoContainer: {
        marginHorizontal: 8,
        marginVertical: 6
    },
    titleInfoText: {
        color: '#5e5a5a',
    }
})