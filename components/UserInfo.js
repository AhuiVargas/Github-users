import React from 'react';

const UserInfo = ({ userData }) => (
  <section>
    {userData &&
      userData.avatar_url && (
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

    <div>
      {userData.company && (
        <span>
          {userData.company}
        </span>
      )}
    </div>

    <div>
      <div>
        <span>{userData.public_repos}</span>
      </div>
      <div>
        <span>{userData.followers}</span>
      </div>
      <div>
        <span>{userData.following}</span>
      </div>
    </div>

  </section>

);

export default UserInfo