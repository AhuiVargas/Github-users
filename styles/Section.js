import styled, { css } from "styled-components";
import { theme, media } from "../styles";
const { colors } = theme;

const Section = styled.section`
  padding: 3rem 5rem;



  ${(props) =>
    props.dark &&
    css`
      background-color: ${colors.black};
      color: ${colors.lightestBlue};
    `};

  & > div {
    max-width: 1400px;
  }
`;

export default Section;
