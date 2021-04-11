import React, { useState } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import { theme, mixins } from '../styles';
const { colors, fonts } = theme;

const StyledContainer = styled.div`
  ${mixins.flexCenter};
  background-color: ${colors.black};
  background-image: linear-gradient(${colors.black} 0%, ${colors.darkGrey} 100%);
  color: ${colors.offWhite};
  height: 100vh;

  form {
    background-color: transparent;
    border-radius: 5px;
    padding: 2rem;
    margin-bottom: 20vh;
    max-width: 600px;
    text-align: center;
    label {
      display: block;
      font-size: 2.5rem;
      font-weight: 500;
      margin: 2rem;
    }
    input {
      background-color: #26303c;
      outline: 0;
      border: 0;
      border-radius: 0.25rem;
      width: 100%;
      max-width: 500px;
      margin: 0 auto;
      padding: 1rem;
      color: ${colors.lightblue};
      font-family: ${fonts.mono};
      font-size: 2rem;
      font-weight: 400;
      text-align: center;
    }

    .submit {
      ${mixins.blueButton};
      margin-top: 3rem;
      filter: none;
    }
  }
`;

const Home = () => {
  const [query, setQuery] = useState('');
  const [option, setOption] = useState('/user')
  const handleChange = e => setQuery(e.target.value);
  const handleSelect = e => setOption(e.target.value);

  return (
    <main>

    <StyledContainer>
      <form
        onSubmit={e => {
          e.preventDefault();
          Router.push({
            pathname: option,
            query: { id: query }
          });
        }}
        >
        <label htmlFor="username">Find your Github user</label>
        <input name ="username" type="text" onChange={handleChange} list="routeName"/>
        <select className="submit" id="routeName" onChange={(e) => handleSelect(e)}>
          <option value="/user">Search User</option>
          <option value="/repos">Search Repos</option>
        </select>
      </form>
    </StyledContainer>

    </main>
  )
}

export default Home