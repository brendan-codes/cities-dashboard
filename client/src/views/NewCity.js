import React, { useState } from "react";

import { navigate } from "@reach/router";
import axios from "axios";

const NewCity = () => {
  const [formState, setFormState] = useState({
    name: '',
    population: '',
    imgUrl: ''
  });

  function onChangeHandler(event) {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios.post('http://localhost:8000/api/cities', formState)
      .then((res) => {
        console.log(res);
        navigate('/cities');
      })
      .catch(console.log)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:{' '}
        </label>
        <input type="text"
          name="name"
          value={formState.name}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <label>
          Population:{' '}
        </label>
        <input type="number"
          name="population"
          value={formState.population}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <label>
          Image Url:{' '}
        </label>
        <input type="text"
          name="imgUrl"
          value={formState.imgUrl}
          onChange={onChangeHandler}
        />
      </div>
      <button>Submit</button>
    </form>
  );
}

export default NewCity;