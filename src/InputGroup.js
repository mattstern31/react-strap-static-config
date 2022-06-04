import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';
import Dropdown from './Dropdown';
import { InputGroupContext } from './InputGroupContext';

const propTypes = {
  tag: tagPropType,
  type: PropTypes.bool,
  size: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'div'
};

const InputGroup = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    type,
    size,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'input-group',
    size ? `input-group-${size}` : null
  ), cssModule);

  if (props.type === 'dropdown') {
    return (
      <Dropdown {...attributes} className={classes} />
    )
  }

  return (
    <InputGroupContext.Provider value={{ insideInputGroup: true }}>
      <Tag {...attributes} className={classes} />
    </InputGroupContext.Provider>
  );
};

InputGroup.propTypes = propTypes;
InputGroup.defaultProps = defaultProps;

export default InputGroup;
