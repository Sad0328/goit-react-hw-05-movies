import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 30px;
  padding-right: 30px;
  background: #B1CEEF;
`;

export const Header = styled.header`
  border-bottom: solid 1px #2014c9;
  margin-bottom: 30px;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 20px;
  margin-left: 10px;
  font-weight: 600;
  font-size: 22px;
  color: #2014c9;

  &:hover {
    color: #15ebeb;
  }
`;
