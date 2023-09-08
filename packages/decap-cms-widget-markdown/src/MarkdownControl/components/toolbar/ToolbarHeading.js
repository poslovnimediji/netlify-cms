import {
  ELEMENT_H1,
  ELEMENT_PARAGRAPH,
  collapseSelection,
  findNode,
  focusEditor,
  isBlock,
  isCollapsed,
  toggleNodeType,
  useCodeBlockComboboxState,
  useCodeBlockElementState,
  useMarkToolbarButton,
  useMarkToolbarButtonState,
  usePlateEditorState,
} from '@udecode/plate';
import React from 'react';
import {
  Toggle,
  Dropdown,
  DropdownItem,
  DropdownButton,
  colors,
  transitions,
  lengths,
} from 'decap-cms-ui-default';

import ToolbarButton from './ToolbarButton';

function ToolbarHeading({ disabled, isVisible, headingOptions, t, ...props }) {
  // const state = useMarkToolbarButtonState({ nodeType: type });
  // const { props: buttonProps } = useMarkToolbarButton(state);
  // console.log(props);
  const editor = usePlateEditorState();

  let value = ELEMENT_PARAGRAPH;
  if (isCollapsed(editor?.selection)) {
    const entry = findNode(editor, {
      match: n => isBlock(editor, n),
    });
    if (entry && headingOptions[entry[0].type]) {
      value = entry[0].type;
    }
  }

  console.log(value);

  function handleClick(type) {
    toggleNodeType(editor, { activeType: type });
    // collapseSelection(editor);
    focusEditor(editor);
  }

  return (
    <Dropdown
      dropdownWidth="max-content"
      dropdownTopOverlap="36px"
      renderButton={() => (
        <DropdownButton>
          <ToolbarButton
            type="headings"
            label={t('editor.editorWidgets.markdown.headings')}
            icon="hOptions"
            disabled={disabled}
            isActive={!disabled && value !== ELEMENT_PARAGRAPH}
          />
        </DropdownButton>
      )}
    >
      {!disabled &&
        Object.keys(headingOptions).map(
          (optionKey, idx) =>
            isVisible(optionKey) && (
              <DropdownItem
                key={idx}
                label={headingOptions[optionKey]}
                className={value === optionKey ? 'active' : ''}
                // onClick={() => this.handleBlockClick(null, optionKey)}
                onClick={() => handleClick(optionKey)}
              />
            ),
        )}
    </Dropdown>
  );
}

export default ToolbarHeading;
