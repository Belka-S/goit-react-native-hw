import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { authStateChange } from './redux/auth/authOperations';
import { useRoute } from './services/router';

export const Main = () => {
  const { stateChange } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authStateChange());
  }, []);

  return (
    <NavigationContainer style={{ flex: 1 }}>
      <StatusBar style="auto" />
      {useRoute(stateChange)}
    </NavigationContainer>
  );
};
