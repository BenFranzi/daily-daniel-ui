import styled from 'styled-components';
import colors from '../config/colors';
import LandingCard from './landing-card';


const StyledHeroCards = styled.div``;

const StyledTitle = styled.h3`
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 0;
`;

const Underline = styled.span`
  border-bottom: 4px solid ${colors.neutral900};
`;

const Wrap = styled.div`
  margin-top: 32px;
  margin-left: 16px;
  margin-right: 16px;
`;

const Card = styled.div`
`;

const lang = {
  title: {
    pre: 'We’ve got something ',
    underline: 'special',
    post: ' for you',
  }
}

function HeroCards() {
  return (
    <StyledHeroCards>
      <StyledTitle>
        {lang.title.pre}
        <Underline>{lang.title.underline}</Underline>
        {lang.title.post}
      </StyledTitle>
      <Wrap>
        <LandingCard/>
      </Wrap>
    </StyledHeroCards>
  );
}
export default HeroCards;
