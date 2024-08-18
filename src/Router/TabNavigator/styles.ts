import styled from 'styled-components/native';

export const TabItemContainer = styled.View`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 12px;
`;

export const TabNavigatorStyles = styled.View`
  flex-direction: row;
  height: 80px;
  background-color: #d5dbdb90;
  display: flex;
  flex: 1;
  padding: 8px;
  align-items: center;
  border-radius: 30px;
`;

export const CustomTabBarButtonStyles = styled.TouchableOpacity`
  display: flex;
  border-radius: 50px;
  background-color: transparent;
`;
