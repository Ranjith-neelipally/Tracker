import {View, Text, Image} from 'react-native';
import React from 'react';
import {WelcomeCardProps} from './helpers';
import {Header, SubHeader} from '../Text/styles';

const WelcomeCard = ({
  greetingMessage = 'Hello, ',
  imageUri,
  userName = 'Ranjith',
}: WelcomeCardProps) => {
  return (
    <>
      <View
        style={{
          display: 'flex',
          padding: 16,
          flexDirection: 'column',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Header>{greetingMessage}</Header>
          {imageUri && (
            <Image
              style={{height: 40, width: 40, borderRadius: 20}}
              source={{uri: imageUri}}
            />
          )}
        </View>
        <View>
          <SubHeader>{`${userName}, How can i help today ?`}</SubHeader>
        </View>
      </View>
    </>
  );
};

export default WelcomeCard;
