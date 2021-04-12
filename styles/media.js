import { css } from 'styled-components';

const sizes = {
  bp900: 900,
  bp600: 600,
  bp400: 400,
};

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export default media;
