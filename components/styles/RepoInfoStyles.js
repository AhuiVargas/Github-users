import styled from "styled-components";
import { theme, mixins } from "../../styles";
const { colors, fonts } = theme;

const RepoInfoStyles = styled.div`
  .repo-list {
    ul {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-gap: 1rem;
      list-style-type: none;

      li {
        .repo {
          ${mixins.flexBetween};
          flex-direction: column;
          padding: 2rem;
          height: 100%;
          color: ${colors.grey2};
          background-color: ${colors.white};
          border-radius: 0.25rem;

          h3 {
            ${mixins.ellipsis};
            color: ${colors.darkGrey};
            margin-bottom: 0.75rem;
            font-size: 20px;
            font-family: ${fonts.mono};
            font-weight: 700;
            letter-spacing: -0.5px;
          }

          p {
            font-size: 14px;
            margin-bottom: 2rem;
          }

          &_name {
            display: flex;
            align-items: center;
            h3 {
              margin: 0;
            }
          }

          &_stats {
            ${mixins.flexBetween};
            font-size: 13px;
            color: ${colors.grey};

            &-left {
              flex-grow: 1;
              display: flex;

              span {
                display: flex;
                align-items: center;
                margin-right: 0.75rem;
              }
            }
          }
        }
      }
    }
  }
`;

export default RepoInfoStyles;
