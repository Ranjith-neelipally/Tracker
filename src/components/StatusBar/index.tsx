import {View, Text, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {useTheme} from '../../theme/ThemeContext';
import {Theme} from '../../theme';

const CustomStatusBar = () => {
  const {StatusBarColor} = useTheme();

  console.log('StatusBarColor', StatusBarColor);
  return (
    <>
      <StatusBar backgroundColor={StatusBarColor} />
    </>
  );
};

export default CustomStatusBar;
