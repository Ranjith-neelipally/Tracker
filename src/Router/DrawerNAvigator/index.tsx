import React, {useEffect, useState} from 'react';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {NavItems} from '../Routes';
import IconWrapper from '../../components/Icons';
import {Icons} from '../../components/Icons/icons';
import {CustomTabBarButtonStyles} from '../TabNavigator/styles';
import {FontRegular, Header, SubHeader} from '../../components/Text/styles';
import axios from 'axios';
import WelcomeCard from '../../components/WelcomeCard/inde';

const DrawerNavigator: React.FC<DrawerContentComponentProps> = props => {
  const [adminDetails, setadminDetails] = useState<any>();

  const fetchAdminDetails = async () => {
    try {
      const response = await axios.get('http://192.168.31.109:8083/get-admin', {
        params: {
          email: 'ranjithkrn99@gmail.com',
        },
      });
      if (response) {
        setadminDetails(response.data.response);
      }
    } catch (error) {
      setadminDetails(error);
    }
  };

  useEffect(() => {
    fetchAdminDetails();
  }, []);

  // console.log(adminDetails?.profilePic, 'adminDetails');
  return (
    <View style={{flex: 1}}>
      <View style={{padding: 12}}>
        {/* <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Header>Hello,</Header>
          {adminDetails && adminDetails.profilePic && (
            <Image
              style={{height: 40, width: 40, borderRadius: 20}}
              source={{uri: adminDetails?.profilePic}}
            />
          )}
        </View>

        <SubHeader>
          {adminDetails ? adminDetails.userName : 'Ranjith'}
        </SubHeader>*/}
      </View>
      <WelcomeCard imageUri={adminDetails && adminDetails.profilePic} />
      {props.state.routes.map((route, index) => {
        const isFocused = props.state.index === index;

        const onPress = () => {
          props.navigation.navigate(route.name);
        };

        const navItem = NavItems.find(item => item.name === route.name);

        return (
          <CustomTabBarButtonStyles
            key={route.key}
            onPress={onPress}
            style={{
              padding: 10,
              backgroundColor: '#fff',
            }}>
            {navItem && (
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
                <IconWrapper
                  fillColor={isFocused ? '#c0dcdc' : '#000'}
                  icon={route.name as keyof typeof Icons}
                />
                <FontRegular
                  TextTrasform="capitalize"
                  fontWeight={isFocused ? 'bold' : 'normal'}
                  color={isFocused ? '#c0dcdc' : '#333'}>
                  {route.name}
                </FontRegular>
              </View>
            )}
          </CustomTabBarButtonStyles>
        );
      })}
    </View>
  );
};

export default DrawerNavigator;
