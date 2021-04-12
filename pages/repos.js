import React, { useState, useEffect } from 'react';
import { client } from '../utils';
import PropTypes from 'prop-types';
import { RepoInfo, Error } from '../components'
import { mockRepoData } from '../utils'

const Repos = props => {
  const repoName = props.query.id;
  const [repoData, setRepoData] = useState(null);
  const [error, setError] = useState({ active: false, type: 200 });

  const getRepoData = () => {
    client(`search/repositories?q=${repoName}`)
    .then(response => {
      if (response.status === 404) {
        return setError({ active: true, type: 404 })
      }
      if (response.status === 403) {
        return setError({ active: true, type: 403 });
      }
      // if (response.status === 422) {
      //   return setError({ active: true, type: 422 });
      // }
      return response
    })
    .then(json => setRepoData(json))
    .catch(error => {
      console.error('Error', error);
      return setError({ active: true, type: 200 });
    })
  }

  useEffect(() => {
    client('rate_limit')
    .then(json => {
      if (json.resources.core.remaining < 1) {
        setError({ active: true, type: 403 })
      }
    });

    // mock data on dev to save limit
    // setRepoData(mockRepoData);
    getRepoData()

  }, [])


  return (
    <main>
      {error && error.active ? (
        <Error error={error} />
      ) : (
        <>
          {repoData && <RepoInfo repoData={repoData}/>}
        </>
      )}
    </main>
  )
}

Repos.propTypes = {
  query: PropTypes.object
};

export default Repos