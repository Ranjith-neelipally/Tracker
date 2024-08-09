import {View, Text} from 'react-native';
import React, {FunctionComponent} from 'react';
import {Path, Svg} from 'react-native-svg';
import {AllIcons, IconProps, Icons} from './helpers';

const IconWrapper: FunctionComponent<IconProps> = ({
  icon,
  strokeColor,
  fillColor,
}) => {
  if (!icon || !(icon in AllIcons)) {
    return null;
  }

  const IconComponent = AllIcons[icon];

  return (
    <View>
      {IconComponent({
        strokeColor,
        fillColor,
      })}
    </View>
  );
};

export default IconWrapper;
