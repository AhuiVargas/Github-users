import React, { useState, useEffect } from 'react';
import { client } from '../utils'
import PropTypes from 'prop-types';
import { UserInfo, RepoInfo, Error } from '../components';
import StyledForm from '../components/styles/FormStyles';
// import { mockUserData, mockUserRepoData } from '../utils'

const User = props => {
  const username = props.query.id;
  const [query, setQuery] = useState(username);
  const [userData, setUserData] = useState(null);
  const [repoData, setRepoData] = useState(null);
  const [error, setError] = useState({ active: false, type: 200 });

  const getUserData = () => {
    client(`users/${query}`)
    .then(response => {
      if (response.status === 404) {
        return setError({ active: true, type: 404 });
      }
      if (response.status === 403) {
        return setError({ active: true, type: 403 });
      }
      return response
    })
    .then(json => setUserData(json))
    .catch(error => {
      setError({ active: true, type: 400 });
      console.error('Error:', error);
    });
  };

  const getRepoData = () => {
    client(`users/${query}/repos?per_page=8`)
    .then(response => {
      if (response.status === 404) {
        return setError({ active: true, type: 404 });
      }
      if (response.status === 403) {
        return setError({ active: true, type: 403 });
      }
      return response
    })
    .then(json => setRepoData(json))
    .catch(error => {
      console.error('Error', error);
    })
  }

  useEffect(() => {
    client('rate_limit')
    .then(json => {
      if (json.resources.core.remaining < 1) {
        setError({ active: true, type: 403 })
      }
    });

    getUserData();
    getRepoData();

    // mock data on dev to save limit
    // setUserData(mockUserData);
    // setRepoData(mockUserRepoData);

  }, []);

  const handleChange = e => setQuery(e.target.value);

  return (
    <main>
      {error && error.active ? (
        <Error error={error} />
      ) : (
        <>
          <StyledForm onSubmit={e => {
            e.preventDefault()
            getUserData();
            getRepoData();
          }}>
            <input name="username" type="text" onChange={handleChange} placeholder="Search user" autoComplete="off"/>
          </StyledForm>

          {userData && <UserInfo userData={userData} />}

          {repoData && <RepoInfo repoData={repoData} />}
        </>
      )}
    </main>
  );
};

User.propTypes = {
  query: PropTypes.object
};

export default User