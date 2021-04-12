import styled from "styled-components";
import { theme, mixins } from "../../styles";
const { colors, fonts } = theme;

const RepoInfoStyles = styled.div`
  .repo-list {
    ul {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-gap: 1rem;

      li {
        .repo {
          padding: 2rem;
          height: 100%;
          color: ${colors.grey2};
          background-color: ${colors.white};

          h3 {
            color: ${colors.darkGrey};
            margin-bottom: 0.75rem;
            font-size: 20px;
            font-family: ${fonts.mono};
            font-weight: 500;
          }

          p {
            font-size: 14px;
          }

          &_name {
            display: flex;
            align-items: center;
          }

          &_stats {
            font-size: 13px;
            color: ${colors.grey};
          }
        }
      }
    }
  }
`;

export default RepoInfoStyles;
