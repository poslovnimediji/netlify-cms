import { useMarkToolbarButton, useMarkToolbarButtonState } from '@udecode/plate';
import React from 'react';

import ToolbarButton from './ToolbarButton';

function ToolbarButtonMark({ type, ...props }) {
  const state = useMarkToolbarButtonState({ nodeType: type });
  const { props: buttonProps } = useMarkToolbarButton(state);

  return <ToolbarButton isActive={state.pressed} {...props} {...buttonProps} />;
}

export default ToolbarButtonMark;
