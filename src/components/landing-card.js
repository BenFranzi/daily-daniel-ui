import styled from 'styled-components';
import colors from '../config/colors';
import PropTypes from 'prop-types';
import DdInput from './dd-input';
import pleasantDaniel from '../assets/pleasant-daniel.png';

const StyledLandingCard = styled.div`
  border-radius: 16px;
  overflow: hidden;
`;

const ImageWrap = styled.div`
  height: 192px;
  background-color: ${colors.neutral400};
`;

const Hero = styled.img`
`;

const DescriptionWrap = styled.div`
  height: 192px;
  background-color: ${colors.highlight500};
`;

const PreTitle = styled.p`
  
`;

const StyledTitle = styled.p`
  
`;

const StyledDescription = styled.p`
  
`;


function LandingCard({image, preTitle, title, description}) {
  return (
      <StyledLandingCard>
        <ImageWrap>
          <Hero img={pleasantDaniel}/>
        </ImageWrap>
        <DescriptionWrap>
          <PreTitle>{'preTitle'}</PreTitle>
          <StyledTitle>{'title'}</StyledTitle>
          <StyledDescription>{'description'}</StyledDescription>
        </DescriptionWrap>
      </StyledLandingCard>
  );
}

DdInput.propTypes = {
  image: PropTypes.string,
  preTitle: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

DdInput.defaultProps = {
  image: pleasantDaniel,
  preTitle: 'A magical',
  title: 'photo',
  description: 'Give yourself the joy of seeing your favourite climber/model in his day to day life',
};


export default LandingCard;
