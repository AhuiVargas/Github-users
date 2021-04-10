import React, { useState, useEffect } from 'react';
import { client } from '../utils/client-api';
import PropTypes from 'prop-types';

const User = props => {
  const username = props.query.id;
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState({ active: false, type: 200 });

  const getUserData = () => {
    client(`users/${username}`)
    .then(response => {
      if (response.status === 404) {
        return setError({ active: true, type: 404 });
      }
      if (response.status === 403) {
        return setError({ active: true, type: 403 });
      }
      console.log(response)
      return response
    })
    .then(json => setUserData(json))
    .catch(error => {
      setError({ active: true, type: 400 });
      console.error('Error:', error);
    });
  };

  useEffect(() => {
    client('rate_limit')
    .then(json => {
      if (json.resources.core.remaining < 1) {
        setError({ active: true, type: 403 })
      }
    });

    // mock data on dev to save limit
    // getUserData();

  }, []);


  return (
    <main>

    </main>
  );
};

User.propTypes = {
  query: PropTypes.object
};

export default User