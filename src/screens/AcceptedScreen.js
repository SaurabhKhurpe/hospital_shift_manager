import React from 'react';
import {View, Text} from 'react-native';
import Button from '../components/Button';
import {logoutUser} from '../api/auth-api';
const AcceptedScreen = (props) => {
  return (
    <View>
      <Text>Accepted Shifts </Text>
      <Button
        style={{width: '30%'}}
        mode="outlined"
        onPress={() => {
          logoutUser();
        }}>
        Logout
      </Button>
    </View>
  );
};

export default AcceptedScreen;
