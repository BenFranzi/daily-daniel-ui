import styled from 'styled-components';
import colors from '../config/colors';
import DdInput from './dd-input';
import DdButton from './dd-button';

const Wrap = styled.div`
  background-color: ${colors.primary500};
  display: flex;
  justify-content: center;
  border-bottom-left-radius: 100% 30%;
  border-bottom-right-radius: 100% 30%;
`;

const StyledFold = styled.div`
  padding-bottom: 80px;
  
`;

const StyledHeading = styled.h1`
  font-size: 32px;
  font-weight: 900;
  margin: 0;
`;
const HeadingBottom = styled.p`
  color: ${colors.neutral000};
  margin: 0;
`;

const Tagline = styled.p`
  font-size: 18px;
  font-style: italic;
  font-weight: 700;
  line-height: 22px;
  margin-top: 4px;
`;

const EmailForm = styled.div`
  display: grid;
  grid-row-gap: 16px;
`;

const LoginText = styled.p`
  margin-top: 8px;
  margin-bottom: 0;
  font-size: 12px;
  text-align: center;
`;

const lang = {
  heading: 'This is',
  headingBottom: 'The Daily Daniel',
  tagline: '“May I offer a friendly face in this trying time”',
  emailPlaceholder: 'your email',
  submitText: 'Get started',
  signInText: 'Already have an account\n',
  signInLink: 'Sign in here',
}

export default function Fold() {
  return (
    <Wrap>
      <StyledFold>
        <StyledHeading>
          {lang.heading}
          <HeadingBottom>{lang.headingBottom}</HeadingBottom>
        </StyledHeading>
        <Tagline>{lang.tagline}</Tagline>
        <EmailForm>
          <DdInput placeholder={lang.emailPlaceholder}/>
          <DdButton>{lang.submitText}</DdButton>
        </EmailForm>
        <LoginText>
          {lang.signInText}
          <div><a href="">{lang.signInLink}</a></div>
        </LoginText>
      </StyledFold>
    </Wrap>
  );
};
