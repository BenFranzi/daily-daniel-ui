import styled from 'styled-components';
import colors from '../config/colors';
import PropTypes from 'prop-types';

const StyledDdButton = styled.button`
  cursor: pointer;
  border-radius: 8px;
  border: none;
  background-color: ${colors.neutral900};
  color: ${colors.neutral000};
  box-sizing: border-box;
  width: 100%;
  height: 48px;
  font-weight: 700;
  font-size: 18px;
  box-shadow: 0 4px 4px ${colors.neutralTransparent900};
  transition: box-shadow 0.2s ease-in-out, transform 0.1s ease-in-out;
  transform: translateY(-0.25px);
  
  &:hover {
    box-shadow: 0 4px 4px ${colors.neutralTransparent900}, inset 0 0 0 2px ${colors.neutral000};
  }
  
  &:active {
    transform: translateY(0.25px);
    box-shadow: 0 0 0 ${colors.neutralTransparent900}, inset 0 0 0 2px ${colors.neutral000};
  }
`;

function DdButton({children}) {
  return (
      <StyledDdButton>{children}</StyledDdButton>
  );
}

DdButton.propTypes = {
  children: PropTypes.string,
};

DdButton.defaultTypes = {
  children: '',
};


export default DdButton;
