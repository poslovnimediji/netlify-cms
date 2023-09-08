import React from 'react';
import { PlateElement } from '@udecode/plate-common';
import styled from '@emotion/styled';

const headerStyles = `
  font-weight: 700;
  line-height: 1;
`;

const StyledH1 = styled.h1`
  ${headerStyles};
  font-size: 32px;
  margin-top: 16px;
`;

const StyledH2 = styled.h2`
  ${headerStyles};
  font-size: 24px;
  margin-top: 12px;
`;

const StyledH3 = styled.h3`
  ${headerStyles};
  font-size: 20px;
`;

const StyledH4 = styled.h4`
  ${headerStyles};
  font-size: 18px;
  margin-top: 8px;
`;

const StyledH5 = styled.h5`
  ${headerStyles};
  font-size: 16px;
  margin-top: 8px;
`;

const StyledH6 = StyledH5.withComponent('h6');

function HeadingElement({ element, children, ...props }) {

  let StyledElement = StyledH1;

  switch (element.type) {
    case 'h1':
      StyledElement = StyledH1;
      break;
    case 'h2':
      StyledElement = StyledH2;
      break;
    case 'h3':
      StyledElement = StyledH3;
      break;
    case 'h4':
      StyledElement = StyledH4;
      break;
    case 'h5':
      StyledElement = StyledH5;
      break;
    case 'h6':
      StyledElement = StyledH6;
      break;
  }

  return (
    <PlateElement asChild {...props}>
      <StyledElement>{children}</StyledElement>
    </PlateElement>
  );
}

export default HeadingElement;
