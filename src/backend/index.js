import axios from 'axios';

export const API_URL = 'http://localhost:3000/';

export const apiSignUp = async (name, email, password) => {
  const obj = {
    user: {
      name,
      email,
      password,
    },
  };
  const { data: response } = await axios.post(`${API_URL}signup`, obj);
  console.log(response);
};

export const apiSignIn = async (email, password) => {
  const obj = {
    user: {
      email,
      password,
    },
  };
  const { data: response } = await axios.post(`${API_URL}signin`, obj);
  console.log(response);
};
