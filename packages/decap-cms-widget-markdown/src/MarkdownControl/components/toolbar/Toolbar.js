import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { List } from 'immutable';
import {
  Toggle,
  Dropdown,
  DropdownItem,
  DropdownButton,
  colors,
  transitions,
  lengths,
} from 'decap-cms-ui-default';
import ToolbarButtonMark from './ToolbarButtonMark';
import ToolbarHeading from './ToolbarHeading';

const ToolbarContainer = styled.div`
  background-color: ${colors.textFieldBorder};
  border-top-right-radius: ${lengths.borderRadius};
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 11px 14px;
  min-height: 58px;
  transition: background-color ${transitions.main}, color ${transitions.main};
  color: ${colors.text};
`;

const ToolbarDropdownWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const ToolbarToggle = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  font-size: 14px;
  margin: 0 10px;
`;

const StyledToggle = ToolbarToggle.withComponent(Toggle);

const ToolbarToggleLabel = styled.span`
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  line-height: 20px;
  min-width: ${props => (props.offPosition ? '62px' : '70px')};

  ${props =>
    props.isActive &&
    css`
      font-weight: 600;
      color: ${colors.active};
    `};
`;

function Toolbar({ disabled, t, onToggleMode, rawMode, isShowModeToggle, ...props }) {
  const headingOptions = {
    'h1': t('editor.editorWidgets.headingOptions.headingOne'),
    'h2': t('editor.editorWidgets.headingOptions.headingTwo'),
    'h3': t('editor.editorWidgets.headingOptions.headingThree'),
    'h4': t('editor.editorWidgets.headingOptions.headingFour'),
    'h5': t('editor.editorWidgets.headingOptions.headingFive'),
    'h6': t('editor.editorWidgets.headingOptions.headingSix'),
  };

  function isVisible(button) {
    const { buttons } = props;
    return !List.isList(buttons) || buttons.includes(button);
  }

  return (
    <ToolbarContainer>
      <div>
        {isVisible('bold') && (
          <ToolbarButtonMark
            type="bold"
            label={t('editor.editorWidgets.markdown.bold')}
            icon="bold"
            disabled={disabled}
          />
        )}
        {isVisible('italic') && (
          <ToolbarButtonMark
            type="italic"
            label={t('editor.editorWidgets.markdown.italic')}
            icon="italic"
            disabled={disabled}
          />
        )}
        {isVisible('code') && (
          <ToolbarButtonMark
            type="code"
            label={t('editor.editorWidgets.markdown.code')}
            icon="code"
            disabled={disabled}
          />
        )}
        {Object.keys(headingOptions).some(isVisible) && (
          <ToolbarDropdownWrapper>
            <ToolbarHeading
              isVisible={isVisible}
              headingOptions={headingOptions}
              disabled={disabled}
              t={t}
            />
          </ToolbarDropdownWrapper>
        )}
      </div>
      {isShowModeToggle && (
        <ToolbarToggle>
          <ToolbarToggleLabel isActive={!rawMode} offPosition>
            {t('editor.editorWidgets.markdown.richText')}
          </ToolbarToggleLabel>
          <StyledToggle active={rawMode} onChange={onToggleMode} />
          <ToolbarToggleLabel isActive={rawMode}>
            {t('editor.editorWidgets.markdown.markdown')}
          </ToolbarToggleLabel>
        </ToolbarToggle>
      )}
    </ToolbarContainer>
  );
}

Toolbar.propTypes = {
  buttons: ImmutablePropTypes.list,
  editorComponents: ImmutablePropTypes.list,
  onToggleMode: PropTypes.func.isRequired,
  rawMode: PropTypes.bool,
  isShowModeToggle: PropTypes.bool.isRequired,
  plugins: ImmutablePropTypes.map,
  onSubmit: PropTypes.func,
  onAddAsset: PropTypes.func,
  getAsset: PropTypes.func,
  disabled: PropTypes.bool,
  onMarkClick: PropTypes.func,
  onBlockClick: PropTypes.func,
  onLinkClick: PropTypes.func,
  hasMark: PropTypes.func,
  hasInline: PropTypes.func,
  hasBlock: PropTypes.func,
  t: PropTypes.func.isRequired,
};

export default Toolbar;
