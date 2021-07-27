import React, {memo} from 'react';
import {ActivityIndicator} from 'react-native';
import auth, {firebase} from '@react-native-firebase/auth';

import Background from '../../components/Background';
import {theme} from '../../core/theme';

// // Initialize Firebase

const AuthLoadingScreen = ({navigation}) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log({user});
      // User is logged in
      navigation.reset({
        index: 0,
        routes: [{name: 'Dashboard'}],
      });
    } else {
      // User is not logged in
      navigation.reset({
        index: 0,
        routes: [{name: 'Home'}],
      });
    }
  });

  return (
    <Background>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </Background>
  );
};

export default memo(AuthLoadingScreen);
