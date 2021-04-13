import React from "react";
import Router from 'next/router';
import PropTypes from "prop-types";
import styled from "styled-components";
import IconGitHub from "./icons/github";
import { theme, mixins } from "../styles";
const { colors } = theme;

const ErrorStyles = styled.div`
  ${mixins.flexCenter};
  flex-direction: column;
  background-color: ${colors.black};
  background-image: linear-gradient(
    ${colors.black} 0%,
    ${colors.darkGrey} 100%
  );
  color: ${colors.offWhite};
  height: 100vh;
  padding-bottom: 20vh;
  font-size: 1.5rem;
  p {
    font-size: 1rem;
  }
  a {
    color: ${colors.lightblue};
    &:hover,
    &:focus {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  svg {
    color: ${colors.blue};
    fill: currentColor;
  }
`;

const Error = ({ error }) => (
  <ErrorStyles>
    <IconGitHub />
    {error && (
      <div>
        {error.type === 403 ? (
          <p>
            Oh no, you hit the{" "}
            <a
              href="https://developer.github.com/v3/rate_limit/"
              target="_blank"
              rel="noopener noreferrer"
            >
              rate limit
            </a>
            ! Try again later.
          </p>
        ) : (
          <p>Oops! didn't find any results.</p>
        )}
      </div>
    )}
    <a onClick={e => {
      e.preventDefault();
      Router.back()
    }}>Try again!</a>
  </ErrorStyles>
);

Error.propTypes = {
  error: PropTypes.object.isRequired,
};

export default Error;
