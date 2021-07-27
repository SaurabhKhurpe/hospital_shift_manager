import React, {memo} from 'react';
import {Avatar} from 'react-native-paper';

const Logo = () => (
  <Avatar.Icon size={84} icon="cricket" color="red" backgroundColor="white" />
);

export default memo(Logo);