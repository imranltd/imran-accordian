import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const AccordianWrapper = styled.div`
  border-radius: 5px;
  font-family: Arial, Helvetica, sans-serif;
  margin: 10px 0;
  padding: 10px;
`;

const AccordianQuestion = styled.div`
  align-items: right;
  background-color: #23D2DA;
  border-radius: ${({ isOpen }) => (isOpen ? '5px 5px 0 0;' : '5px;')}
  border: 1px solid black;
  color: #1375E6;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 10px;

  &:after {
    content: ${({ isOpen }) => (isOpen ? '"[-]";' : '"[+]";')}
  }
`;

const AccordianAnswer = styled.div`
  border-color: black;
  border-radius: 0 0 5px 5px;
  border-style: solid;
  border-width: 0 1px 1px 1px;
  display: ${({ isOpen }) => (isOpen ? 'block;' : 'none;')}
  padding: 20px 10px;
`;


const Accordian = ({
  id, heading, details, clickHandle, isOpen, prefix,
}) => (
  <AccordianWrapper isOpen={isOpen}>
    <AccordianQuestion
      id={id}
      isOpen={isOpen}
      onClick={e => clickHandle(e, isOpen)}
      className="headingClass"
    >
      { prefix }
      { heading }
    </AccordianQuestion>
    <AccordianAnswer
      isOpen={isOpen}
      className="detailClass"
    >
      {details}
    </AccordianAnswer>
  </AccordianWrapper>
);

Accordian.propTypes = {
  id: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  clickHandle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  prefix: PropTypes.string,
};

Accordian.defaultProps = {
  isOpen: true,
  prefix: '',
};

export default Accordian;
