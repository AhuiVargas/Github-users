import styled from "styled-components";
import { theme } from "../../styles";
const { colors, fonts } = theme;

const StyledForm = styled.form`
  background-color: ${colors.black};
  padding: 2rem;
  padding-bottom: 0;
  max-width: 600px;
  text-align: center;
  label {
    display: block;
    font-size: 2.5rem;
    font-weight: 500;
    margin: 0.5rem;
  }
  input {
    background-color: #26303c;
    outline: 0;
    border: 0;
    border-radius: 0.25rem;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    padding: 1rem;
    color: ${colors.lightblue};
    font-family: ${fonts.mono};
    font-size: 2rem;
    font-weight: 400;
    text-align: center;
  }

  select {
    background-color: #26303c;
    color: ${colors.offWhite};
    height: 3rem;
    font-size: 2.5rem;
    font-weight: 500;
    margin-left: 0.5rem;
    -moz-appearance: none;
    appearance: none;
    border: none;
  }
`;

export default StyledForm;
