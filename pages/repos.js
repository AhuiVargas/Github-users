import React, { useState, useEffect } from 'react';
import { client } from '../utils';
import PropTypes from 'prop-types';
import { mockRepoData } from '../utils'
import RepoInfo from '../components/RepoInfo'

const Repos = props => {
  const repoName = props.query.id;
  const [repoData, setRepoData] = useState(null);
  const [error, setError] = useState({ active: false, type: 200 });

  const getRepoData = () => {
    client(`search/repositories?q=${repoName}`)
    .then(json => {
      console.log(json)
      setRepoData(json)
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
    setRepoData(mockRepoData);
    // getRepoData()

  }, [])


  return (
    <main>
      {error && error.active ? (
        <Error error ={error} />
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