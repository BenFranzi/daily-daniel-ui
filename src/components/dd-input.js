import styled from 'styled-components';
import colors from '../config/colors';
import PropTypes from 'prop-types';

const StyledDdInput = styled.input`
  border-radius: 8px;
  border: 2px solid ${colors.neutral900};
  box-sizing: border-box;
  width: 100%;
  height: 48px;
  padding: 0 16px;
  font-size: 18px;
  box-shadow: 0 4px 4px ${colors.neutralTransparent900};
  
  &::placeholder {
    color: ${colors.neutral500};
  }
`;

function DdInput(props) {
  return (
      <StyledDdInput {...props}/>
  );
}

DdInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string
};

DdInput.defaultTypes = {
  value: '',
  placeholder: '',
};


export default DdInput;
