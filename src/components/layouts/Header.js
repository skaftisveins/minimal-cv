import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  background: #457fca; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #5691c8,
    #457fca
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #5691c8,
    #457fca
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.div`
  color: white;
  font-size: 4rem;
`;

const SubHeading = styled.li`
  color: white;
  list-style: none;
`;

const Header = () => {
  return (
    <StyledHeader>
      <div class="row">
        <div class="row">
          <Heading>Skafti Sveinsson</Heading>
        </div>
        <div class="row">
          <SubHeading>
            Enthusiastic Programmer skaftisveins@gmail.com
          </SubHeading>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
