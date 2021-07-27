import React, {memo} from 'react';
import Background from '../../components/Background';
import Header from '../../components/Header';
import Button from '../../components/Button';
import {Paragraph} from 'react-native-paper';

const Home = ({navigation}) => (
  <Background>
    <Header>Hospital Shift Manager</Header>

    <Button mode="contained" onPress={() => navigation.navigate('Login')}>
      Login
    </Button>
    <Button mode="outlined" onPress={() => navigation.navigate('Register')}>
      Sign Up
    </Button>
    <Paragraph style={{position: 'absolute', bottom: 0}}>
      Developed by Saurabh
    </Paragraph>
  </Background>
);

export default memo(Home);
