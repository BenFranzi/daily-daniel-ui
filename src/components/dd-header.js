import styled from 'styled-components';
import icon from '../assets/icon.svg';
import colors from '../config/colors';
import { SCREEN } from '../utils/constants';
import { screen } from '../utils/config';

const Wrap = styled.div`
  background-color: ${colors.primary500};
  display: flex;
  justify-content: center;
`;

const StyledDdHeader = styled.div`
  align-items: center;
  display: flex;
  height: 124px;
  margin: 0 16px;
  width: ${screen[SCREEN.DESKTOP]}px;
`;

const Logo = styled.img`
    height: 75px;
`;

export default function DdHeader() {
  return (
      <Wrap>
        <StyledDdHeader>
            <Logo src={icon} alt="" />
        </StyledDdHeader>
      </Wrap>
  );
};
