import React from 'react';
import { PlateLeaf } from '@udecode/plate-common';

function StrikeThroughLeaf({ className, children, ...props }) {
  return (
    <PlateLeaf asChild className={className} {...props}>
      <s>{children}</s>
    </PlateLeaf>
  );
}
export default StrikeThroughLeaf;
