import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserProvider } from './UserContext';
import Main from './Main';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Filters from './Filters';
import FullStory from './FullStory';
import AccountInfo from './AccountInfo';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Filters" component={Filters} />
          <Stack.Screen name="FullStory" component={FullStory} />
          <Stack.Screen
            name="AccountInfo"
            component={AccountInfo}
            options={{
              headerTitle: 'Account Info',
              headerStyle: { backgroundColor: '#800000' },
              headerTitleStyle: { color: '#fff', fontSize: 18 },
              headerTintColor: '#fff',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
