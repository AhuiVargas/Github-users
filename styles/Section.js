import styled, { css } from 'styled-components';
import { theme } from '../styles';
const { colors } = theme;

const Section = styled.section`
  padding: 3rem 5rem;

  ${props =>
    props.dark &&
    css`
      background-color: ${colors.black};
      color: ${colors.lightestBlue};
      padding-bottom: 10rem;
    `};
`;

export default Section;
