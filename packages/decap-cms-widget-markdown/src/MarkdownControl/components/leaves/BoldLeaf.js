import React from 'react';
import { PlateLeaf } from '@udecode/plate-common';

function BoldLeaf({ className, children, ...props }) {
  return (
    <PlateLeaf asChild className={className} {...props}>
      <strong>{children}</strong>
    </PlateLeaf>
  );
}

export default BoldLeaf;
