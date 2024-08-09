import styled from 'styled-components/native';
import {TabItemProps} from './helpers';

const tabDimensions = 65;

export const TabItemContainer = styled.View<TabItemProps>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({isActive}) => (isActive ? 'black' : '#ffffff00')};
  border-radius: 500px;
  height: ${tabDimensions}px;
  width: ${tabDimensions}px;
`;
