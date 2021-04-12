import React from "react";
import PropTypes from "prop-types";
import { Section } from "../styles";
import RepoInfoStyles from "./styles/RepoInfoStyles";

const RepoInfo = ({ repoData }) => (
  <Section dark>
    <RepoInfoStyles>
      <h2>Repositories</h2>
      <div className="repo-list">
        {repoData.total_count > 0 ? (
          <ul>
            {repoData.items.map((repo) => (
              <li key={repo.id}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="repo"
                >
                  <div className="repo_top">
                    <div className="repo_name">
                      <h3>{repo.name}</h3>
                    </div>
                    <p>{repo.description}</p>
                  </div>
                  <div className="repo_stats">
                    <span>{repo.language}</span>
                    <span>{repo.stargazers_count.toLocaleString()}</span>
                    <span>{repo.forks.toLocaleString()}</span>
                    <span>{repo.size.toLocaleString()} KB</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
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
