import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TopBarNav from './TopBarNav'
import DetailChatScreen from '../screens/DetailChatScreen'
import colors from '../utils/colors'

const Stack = createNativeStackNavigator()

const StackNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='TopBarNav' 
                component={TopBarNav}
                options={{
                    headerShown: false
                }} />
            <Stack.Screen 
                name='DetailChat' 
                options={{
                    headerStyle: {
                        backgroundColor: colors.color1
                    },
                    headerTintColor: '#FFF',
                    title: 'Detail Chat'
                }}
                component={DetailChatScreen} />
        </Stack.Navigator>
    )
}

export default StackNav