import styled from 'styled-components';
import NavigationItem from './NavigationItem';

const NavigationBar = styled.nav`
  background-color: black;
  height: 100px;
  padding: 0px 20%;
  display: flex;
  align-items: center;
`;

NavigationBar.Item = NavigationItem;

export default NavigationBar;
