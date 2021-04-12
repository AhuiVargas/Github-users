import styled, { css } from "styled-components";
import { theme } from "../styles";
const { colors } = theme;

const Section = styled.section`
  padding: 3rem 5rem;

    @media (max-width: 900px) {
      padding: 2rem;
    }

    @media (max-width: 400px) {
      padding: 1rem;
    }

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
