import React from "react";
import { Section } from "../styles";
import UserInfoStyles from "./styles/UserInfoStyles";

const UserInfo = ({ userData }) => (
  <Section dark>
    {userData && (
      <UserInfoStyles>
        {userData.avatar_url && (
          <div className="avatar">
            <img src={userData.avatar_url} alt="avatar" />
          </div>
        )}

        {userData.name && <h1>{userData.name}</h1>}

        {userData.login && (
          <h2>
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
              @{userData.login}  
            </a>
          </h2>
        )}

        <div className="info">
          {userData.company && (
            <span className="info_item">{userData.company}</span>
          )}

          {userData.location && (
            <span className="info_item">{userData.location}</span>
          )}

          {userData.created_at && (
            <span className="info_item">
              Joined{" "}
              {new Date(userData.created_at).toLocaleString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          )}
        </div>

        <div className="stats">
          <div className="stats_item">
            <span className="num">
              {userData.public_repos}
            </span>
            <span className="num-label">Repositories</span>
          </div>
          <div className="stats_item">
            <span className="num">{userData.followers.toLocaleString()}</span>
            <span className="num-label">Followers</span>
          </div>
          <div className="stats_item">
            <span className="num">{userData.following}</span>
            <span className="num-label">Following</span>
          </div>
        </div>
      </UserInfoStyles>
    )}
  </Section>
);

export default UserInfo;
