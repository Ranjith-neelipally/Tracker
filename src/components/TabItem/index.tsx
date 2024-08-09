import {View, Text} from 'react-native';
import React from 'react';
import {TabItemContainer} from './styles';
import {TabItemProps} from './helpers';

const TabItem = ({Icon, Title, isActive}: TabItemProps) => {
  return (
    <TabItemContainer isActive={isActive}>
      <Text>
        {Icon && Icon}
        {Title && Title}
      </Text>
    </TabItemContainer>
  );
};

export default TabItem;
