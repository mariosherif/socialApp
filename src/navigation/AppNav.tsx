import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import PostDetails from '../screens/PostDetails/PostDetails';

const AppNav = () => {
  const queryClient = new QueryClient();
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="PostDetails" component={PostDetails} />
        </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default AppNav;
