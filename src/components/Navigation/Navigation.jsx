import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

const Navigation = () => {
    return (
        <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">
          Movies</StyledLink>
      </nav>
    );
}

export default Navigation;