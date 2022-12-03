import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import HeaderLogo from './components/ui/HeaderLogo';
import StackNav from './navigation/StackNav';

// cara pakai env di eas
// process.env.API_URL

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
