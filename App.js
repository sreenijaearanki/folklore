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
import AddStory from './AddStory';
import FullStory from './FullStory';
import AccountInfo from './AccountInfo';
import Resources from './Resources';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          {/* Main Screen */}
          <Stack.Screen
            name="Main"
            component={Main}
            options={{ headerShown: false }}
          />

          {/* Signup and Login Screens */}
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{
              headerTitle: 'Signup',
              headerStyle: { backgroundColor: '#800000' },
              headerTitleStyle: { color: '#fff' },
              headerTintColor: '#fff',
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerTitle: 'Login',
              headerStyle: { backgroundColor: '#800000' },
              headerTitleStyle: { color: '#fff' },
              headerTintColor: '#fff',
            }}
          />

          {/* Home Screen */}
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />

          {/* Filters Screen */}
          <Stack.Screen
            name="Filters"
            component={Filters}
            options={{
              headerTitle: 'Filters',
              headerStyle: { backgroundColor: '#800000' },
              headerTitleStyle: { color: '#fff' },
              headerTintColor: '#fff',
            }}
          />

          {/* Add Story Screen */}
          <Stack.Screen
            name="AddStory"
            component={AddStory}
            options={{
              headerTitle: 'Add Story',
              headerStyle: { backgroundColor: '#800000' },
              headerTitleStyle: { color: '#fff' },
              headerTintColor: '#fff',
            }}
          />

          {/* Full Story Screen */}
          <Stack.Screen
            name="FullStory"
            component={FullStory}
            options={{
              headerTitle: 'Full Story',
              headerStyle: { backgroundColor: '#800000' },
              headerTitleStyle: { color: '#fff' },
              headerTintColor: '#fff',
            }}
          />

          {/* Resources Screen */}
          <Stack.Screen
            name="Resources"
            component={Resources}
            options={{
              headerTitle: 'Resources',
              headerStyle: { backgroundColor: '#800000' },
              headerTitleStyle: { color: '#fff' },
              headerTintColor: '#fff',
            }}
          />

          {/* Account Info Screen */}
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
