import React, { useState, useEffect } from 'react';
import { client } from '../utils';
import PropTypes from 'prop-types';
import { mockRepoData } from '../utils'

const Repos = props => {
  const repoName = props.query.id;
  const [repo, setRepoData] = useState(null)

  const getRepoData = () => {
    client(`search/repositories?q=${repoName}&sort=stars&order=desc`)
    .then(json => {
      console.log(json)
      setRepo(json)
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

    </main>
  )
}

Repos.propTypes = {
  query: PropTypes.object
};


export default Repos