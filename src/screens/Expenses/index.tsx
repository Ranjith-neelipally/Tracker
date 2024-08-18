import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

const Expenses = () => {
  const [first, setfirst] = useState<string>();

  useEffect(() => {
    const setNavigationBarColor = async () => {
      try {
        await changeNavigationBarColor('#C1D6D9');
      } catch (error) {
        console.error('Failed to set navigation bar color:', error);
      }
    };

    setNavigationBarColor();
  }, []);

  const handleValue = (value: string) => {
    setfirst(value);
  };

  console.log(first, 'first');

  return (
    <View>
      <Text>Expenses</Text>
      <Text>Enter a Value</Text>
    </View>
  );
};

export default Expenses;
