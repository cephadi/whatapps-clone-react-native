import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen';
import CallScreen from '../screens/CallScreen';
import ContactsScreen from '../screens/ContactsScreen';
import colors from '../utils/colors';

const Tab = createMaterialTopTabNavigator();

export default function TopBarNav() {
    return (
        <Tab.Navigator 
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: colors.color1,
                },
                tabBarPressColor: '#FFF',
                tabBarLabelStyle: {
                    color: '#FFF',
                    fontSize: 16
                },
                tabBarActiveTintColor: '#FFF',
                tabBarIndicatorStyle: {
                    backgroundColor: '#FFF'
                }
            }}
            initialRouteName='Chat'
        >
            <Tab.Screen 
                name="Call" 
                component={CallScreen}
                options={{
                    title: 'Calls',
                }} />
            <Tab.Screen 
                name="Chat" 
                component={ChatScreen}
                options={{
                    title: 'Chats',
                }} />
            <Tab.Screen 
                name="Contacts" 
                component={ContactsScreen} />
        </Tab.Navigator>
    );
}