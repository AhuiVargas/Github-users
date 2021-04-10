import React, { useState, useEffect } from 'react';
import { withRouter } from 'next/router';
import { client } from '../utils/client-api';
import PropTypes from 'prop-types';

const User = props => {
  const username = props;
  const [error, setError] = useState({ active: false, type: 200 });

  useEffect(() => {
    console.log(props)
    // client(`users/${username}`)
    // .then(response => {
    //   console.log(response)
    // })
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