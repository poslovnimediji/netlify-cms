import React from 'react';
import { PlateElement } from '@udecode/plate';
import styled from '@emotion/styled';

const bottomMargin = '16px';

const StyledP = styled.p`
  margin-bottom: ${bottomMargin};
`;


function ParagraphElement({ className, children, ...props }) {
  return <PlateElement asChild className={className} {...props}>
    <StyledP {...props.attributes}>{children}</StyledP>
  </PlateElement>;
}

export default ParagraphElement;
