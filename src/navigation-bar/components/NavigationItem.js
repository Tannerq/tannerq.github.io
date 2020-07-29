import styled from 'styled-components';

const NavigationItem = styled.a`
  padding: 0px 20px;
  font-size: 32px;
  line-height: 32px;

  color: white;
  transition: color .3s ease;

  &:hover {
    color: ${props => props.theme.yellow};
  }
`;

export default NavigationItem;
