import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadedAuthSelector } from './features/auth/authSlice';
import { getUser } from './features/auth/authApi';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';

const Stack = createStackNavigator();

const Navigator = () => {
  const dispatch = useDispatch();
  const loadedUser = useSelector(loadedAuthSelector);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  return (
    <NavigationContainer>
      {loadedUser ? (
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen options={{ headerShown: false }} name='Home' component={Home} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen options={{ headerShown: false }} name='Login' component={Login} />
          <Stack.Screen options={{ headerShown: false }} name='Register' component={Register} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigator;
