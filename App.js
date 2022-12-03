import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import HeaderLogo from './components/ui/HeaderLogo';
import StackNav from './navigation/StackNav';

export default function App() {
    return (
        <>
            <HeaderLogo />
            <NavigationContainer>
                <StackNav />
            </NavigationContainer>
            <StatusBar style="light" />
        </>
    );
}
