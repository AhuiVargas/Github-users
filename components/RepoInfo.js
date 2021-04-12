import React from "react";
import PropTypes from 'prop-types';
import { Section } from "../styles";
import RepoInfoStyles from "./styles/RepoInfoStyles";

const RepoInfo = ({ repoData }) => (
  <Section dark>
    <RepoInfoStyles>
      <h2>Repositories</h2>
      <div>
        {repoData.total_count > 0 ? (
          <>
            {repoData.items.map((repo) => (
              <li>
                <a href={repo.html_url}>
                  <div>
                    <h3>{repo.name}</h3>
                  </div>
                  <p>{repo.description}</p>
                  <div>
                    <span>{repo.language}</span>
                    <span>{repo.stargazers_count}</span>
                    <span>{repo.forks}</span>
                    <span>{repo.size} KB</span>
                  </div>
                </a>
              </li>
            ))}
          </>
        ) : (
          <p>No available repositories!</p>
        )}
      </div>
    </RepoInfoStyles>
  </Section>
);

RepoInfo.propTypes = {
  repoData: PropTypes.array.isRequired,
};

export default RepoInfo;
