import React from 'react';
import { PlateLeaf } from '@udecode/plate-common';

function ItalicLeaf({ className, children, ...props }) {
  return (
    <PlateLeaf asChild className={className} {...props}>
      <em>{children}</em>
    </PlateLeaf>
  );
}
export default ItalicLeaf;
