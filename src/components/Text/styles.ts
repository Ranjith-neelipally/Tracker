import styled from 'styled-components/native';
import {TextProps} from './helpers';

const fontColor: string = '#333';

export const Header = styled.Text<TextProps>`
  font-size: 24px;
  font-weight: 600;
  color: ${props => props.color || fontColor};
  margin-bottom: 10px;
  font-family: 'Urbanist-SemiBold';
`;

export const SubHeader = styled.Text<TextProps>`
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.color || fontColor};
  margin-bottom: 10px;
  font-family: 'Urbanist-Medium';
`;

export const FontRegular = styled.Text<TextProps>`
  font-size: 14px;
  font-weight: ${props => props.fontWeight || 'normal'};
  color: ${props => props.color || fontColor};
  font-family: 'Urbanist-Regular';
  text-transform: ${props => props.TextTrasform || 'none'};
`;
