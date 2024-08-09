import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {NavItems} from '../Routes';
import TabItem from '../../components/TabItem';
import {
  TabNavigatorStyles,
  TabItemContainer,
  CustomTabBarButtonStyles,
} from './styles';
import IconWrapper from '../../components/Icons';
import {Icons} from '../../components/Icons/helpers';

// Props type for CustomTabBarButton
interface CustomTabBarButtonProps {
  children: React.ReactNode;
  onPress: () => void;
}

const TabNavigator: React.FC<BottomTabBarProps> = props => {
  return (
    <TabItemContainer>
      <TabNavigatorStyles>
        {props.state.routes.map((route, index) => {
          const isFocused = props.state.index === index;

          const onPress = () => {
            const event = props.navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              props.navigation.navigate(route.name);
            }
          };

          const navItem = NavItems.find(item => item.name === route.name);

          return (
            <CustomTabBarButtonStyles key={route.key} onPress={onPress}>
              {navItem && (
                <TabItem
                  Icon={
                    <IconWrapper
                      fillColor={!isFocused ? '#000' : '#fff'}
                      icon={route.name as keyof Icons}
                    />
                  }
                  isActive={
                    route.name === props.state.routes[props.state.index].name
                  }
                />
              )}
            </CustomTabBarButtonStyles>
          );
        })}
      </TabNavigatorStyles>
    </TabItemContainer>
  );
};

export default TabNavigator;
