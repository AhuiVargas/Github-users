import styled, { css } from "styled-components";
import { theme, media, mixins } from "../styles";
const { colors } = theme;

const Section = styled.section`
  padding: 3rem 5rem;

  ${media.bp900`
    padding: 2rem;
  `};
  ${media.bp400`
    padding: 1rem;
  `};

  ${(props) =>
    props.dark &&
    css`
      background-color: ${colors.black};
      color: ${colors.lightestBlue};
      padding-bottom: 10rem;
      ${media.bp900`
        padding-top: 2rem;
        padding-bottom: 10rem;
      `};
    `};

  & > div {
    max-width: 1400px;
  }
`;

export default Section;
